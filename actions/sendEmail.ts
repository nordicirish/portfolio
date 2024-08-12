"use server";
import React from "react";
import { getErrorMessage, validateString } from "@/lib/utils";
//needs to be used in separate component as it is server side only and won't run on the client
// import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  if (
    !process.env.CONTACT_FORM_FROM_EMAIL ||
    !process.env.CONTACT_FORM_TO_EMAIL
  ) {
    throw new Error("Missing environment variables for contact form email.");
  }
  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    // Dynamically import the Resend library only when this function is called
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FORM_FROM_EMAIL,
      to: process.env.CONTACT_FORM_TO_EMAIL,
      subject: "Message from contact form",
      reply_to: senderEmail,

      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });

    if (error) {
      console.error(getErrorMessage(error));
      return {
        error: "Something went wrong. Please try again later.",
      };
    }

    return {
      data,
    };
  } catch (error) {
    console.error(getErrorMessage(error));
    return {
      error: "Something went wrong. Please try again later.",
    };
  }
};
