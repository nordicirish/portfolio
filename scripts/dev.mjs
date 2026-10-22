import http from "node:http";
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Load .env if present
const envPath = path.resolve(process.cwd(), ".env");
if (fs.existsSync(envPath) && typeof process.loadEnvFile === "function") {
  try {
    process.loadEnvFile(envPath);
    console.log("[dev] Loaded .env environment variables");
  } catch (err) {
    console.warn("[dev] Warning loading .env:", err.message);
  }
}

// Dynamically import api/sendEmail.ts
let sendEmailHandler = null;
try {
  const mod = await import("../api/sendEmail.ts");
  sendEmailHandler = mod.default;
  console.log("[dev] Loaded api/sendEmail.ts handler");
} catch (err) {
  console.error("[dev] Failed to load api/sendEmail.ts:", err);
}

const HUGO_PORT = 1314;
const PROXY_PORT = 1313;

// Spawn Hugo server on internal port
console.log(`[dev] Starting Hugo on internal port ${HUGO_PORT}...`);
const hugoProcess = spawn("npx", ["hugo", "server", "--port", String(HUGO_PORT), "--disableFastRender"], {
  stdio: "inherit",
  shell: true,
});

hugoProcess.on("error", (err) => {
  console.error("[dev] Hugo process error:", err);
});

hugoProcess.on("exit", (code) => {
  console.log(`[dev] Hugo exited with code ${code}`);
  process.exit(code || 0);
});

// Create Proxy Server
const server = http.createServer(async (req, res) => {
  // Handle /api/sendEmail
  if (req.url?.startsWith("/api/sendEmail")) {
    if (req.method !== "POST") {
      res.writeHead(405, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Method Not Allowed" }));
      return;
    }

    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", async () => {
      let parsedBody = {};
      try {
        parsedBody = body ? JSON.parse(body) : {};
      } catch {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON" }));
        return;
      }

      // Vercel-like adapter
      const vercelReq = Object.assign(req, {
        body: parsedBody,
      });

      const vercelRes = Object.assign(res, {
        status(code) {
          res.statusCode = code;
          return vercelRes;
        },
        json(data) {
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(data));
          return vercelRes;
        },
      });

      try {
        if (!sendEmailHandler) {
          throw new Error("sendEmail handler not loaded");
        }
        await sendEmailHandler(vercelReq, vercelRes);
      } catch (err) {
        console.error("[dev] Error in api/sendEmail:", err);
        if (!res.writableEnded) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Internal server error" }));
        }
      }
    });

    return;
  }

  // Forward all other requests to Hugo
  const proxyReq = http.request(
    {
      hostname: "127.0.0.1",
      port: HUGO_PORT,
      path: req.url,
      method: req.method,
      headers: req.headers,
    },
    (proxyRes) => {
      res.writeHead(proxyRes.statusCode || 200, proxyRes.headers);
      proxyRes.pipe(res, { end: true });
    }
  );

  proxyReq.on("error", (err) => {
    // If Hugo is still booting up, return a temporary retry page
    res.writeHead(502, { "Content-Type": "text/html" });
    res.end("<p>Waiting for Hugo server to start... please refresh in a moment.</p>");
  });

  req.pipe(proxyReq, { end: true });
});

// Proxy WebSockets (for Hugo live reload)
server.on("upgrade", (req, socket, head) => {
  const proxyReq = http.request({
    hostname: "127.0.0.1",
    port: HUGO_PORT,
    path: req.url,
    method: req.method,
    headers: req.headers,
  });

  proxyReq.on("upgrade", (proxyRes, proxySocket, proxyHead) => {
    socket.write(
      `HTTP/${proxyRes.httpVersion} ${proxyRes.statusCode} ${proxyRes.statusMessage}\r\n` +
        Object.entries(proxyRes.headers)
          .map(([k, v]) => `${k}: ${v}`)
          .join("\r\n") +
        "\r\n\r\n"
    );

    if (proxyHead && proxyHead.length) {
      socket.unshift(proxyHead);
    }

    proxySocket.pipe(socket);
    socket.pipe(proxySocket);
  });

  proxyReq.on("error", () => {
    socket.destroy();
  });

  proxyReq.end();
});

server.listen(PROXY_PORT, () => {
  console.log(`\n======================================================`);
  console.log(`  🚀 Development server ready at: http://localhost:${PROXY_PORT}/`);
  console.log(`  📧 /api/sendEmail active with live Resend email integration`);
  console.log(`======================================================\n`);
});

// Graceful cleanup
function cleanup() {
  server.close();
  hugoProcess.kill();
  process.exit(0);
}

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);
