"use server";
import { getErrorMessage, validateString } from "@/lib/utils";
//needs to be used in separate component as it is server side only and won't run on the client
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "invalid message",
    };
  }
  try {
    await resend.emails.send({
      from: "Portfolio Site Contact Form<onboarding@resend.dev>",
      to: "nordicirish1@gmail.com",
      subject: "Message from portfolio site",
      // can assert as string as already been validated
      reply_to: senderEmail as string,
      text: message as string,
      // html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });
  } catch (error: unknown) {
    return {
        error: getErrorMessage(error),
    }
  }        
 };
