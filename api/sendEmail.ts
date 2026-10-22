import type { VercelRequest, VercelResponse } from "@vercel/node";

export function validateString(value: unknown, maxLength: number): value is string {
  if (!value || typeof value !== "string" || value.trim().length === 0 || value.length > maxLength) {
    return false;
  }
  return true;
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function parseBody(req: VercelRequest): Promise<Record<string, any>> {
  if (req.body) {
    if (typeof req.body === "string") {
      try {
        return JSON.parse(req.body);
      } catch {
        return {};
      }
    }
    if (typeof req.body === "object") {
      return req.body;
    }
  }

  // Fallback for raw streams
  return new Promise((resolve) => {
    let raw = "";
    req.on("data", (chunk: any) => {
      raw += chunk;
    });
    req.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        resolve({});
      }
    });
    req.on("error", () => {
      resolve({});
    });
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only accept POST requests
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const body = await parseBody(req);
    const { senderEmail, message, website } = body || {};

    // Honeypot check - silently return success to prevent bot retry spam
    if (website) {
      return res.status(200).json({ success: true, message: "Email sent successfully" });
    }

    // Validate sender email
    if (!validateString(senderEmail, 500) || !validateEmail(senderEmail)) {
      return res.status(400).json({ error: "Invalid sender email" });
    }

    // Validate message
    if (!validateString(message, 5000)) {
      return res.status(400).json({ error: "Invalid message" });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL;
    const toEmail = process.env.CONTACT_FORM_TO_EMAIL;

    const missingEnv: string[] = [];
    if (!apiKey) missingEnv.push("RESEND_API_KEY");
    if (!fromEmail) missingEnv.push("CONTACT_FORM_FROM_EMAIL");
    if (!toEmail) missingEnv.push("CONTACT_FORM_TO_EMAIL");

    if (missingEnv.length > 0) {
      const errorMsg = `Server configuration missing: ${missingEnv.join(", ")}. Please configure in Vercel Project Settings > Environment Variables for both Production and Preview environments.`;
      console.error(errorMsg);
      return res.status(500).json({ error: errorMsg });
    }

    // Dynamically import Resend inside try/catch to catch runtime import issues cleanly
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const safeSender = senderEmail.replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c] || c));
    const safeMessage = message.replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c] || c)).replace(/\n/g, "<br/>");

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New message from portfolio site</title>
        </head>
        <body style="background-color: #f3f4f6; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <div style="max-width: 560px; margin: 0 auto; background-color: #ffffff; border: 1px solid rgba(0,0,0,0.1); border-radius: 8px; padding: 24px; color: #111827;">
            <h2 style="margin-top: 0; font-size: 20px; line-height: 1.3; color: #1e40af;">You have a new message from your portfolio site</h2>
            <div style="margin: 20px 0; font-size: 16px; line-height: 1.6; color: #374151;">
              ${safeMessage}
            </div>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p style="margin-bottom: 0; font-size: 14px; color: #6b7280;">
              Sent by: <a href="mailto:${safeSender}" style="color: #2563eb; text-decoration: underline;">${safeSender}</a>
            </p>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: fromEmail!,
      to: toEmail!,
      reply_to: senderEmail,
      subject: "Message from portfolio site",
      html: emailHtml,
    });

    if (error) {
      console.error("Resend API error:", error);
      const errMsg = typeof error === "object" && error !== null && "message" in error ? String(error.message) : "Failed to send email. Please try again later.";
      return res.status(500).json({ error: errMsg });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Unexpected email delivery error:", err);
    const errMsg = err instanceof Error ? err.message : "Something went wrong. Please try again later.";
    return res.status(500).json({ error: errMsg });
  }
}
