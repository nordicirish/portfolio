import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

export function validateString(value: unknown, maxLength: number): value is string {
  if (!value || typeof value !== "string" || value.trim().length === 0 || value.length > maxLength) {
    return false;
  }
  return true;
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only accept POST requests
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { senderEmail, message, website } = req.body || {};

  // Honeypot check - if filled, silently return success to avoid bot retries
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

  if (!apiKey || !fromEmail || !toEmail) {
    console.error("Missing server configuration: RESEND_API_KEY, CONTACT_FORM_FROM_EMAIL, or CONTACT_FORM_TO_EMAIL.");
    return res.status(500).json({ error: "Server email configuration is missing" });
  }

  try {
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
      from: fromEmail,
      to: toEmail,
      reply_to: senderEmail,
      subject: "Message from portfolio site",
      html: emailHtml,
    });

    if (error) {
      console.error("Resend API error:", error);
      return res.status(500).json({ error: "Failed to send email. Please try again later." });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Unexpected email delivery error:", err);
    return res.status(500).json({ error: "Something went wrong. Please try again later." });
  }
}
