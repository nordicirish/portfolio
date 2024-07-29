"use client";
import React from "react";
import SectionHeading from "./section-heading";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";

import SubmitButton from "./submit-button";
import toast from "react-hot-toast";
export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    // w-[min(100%,38rem)] ensures width is the minimum of 100% on smaller screens and 38rem on wider screens

    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Feel free to reach out to me at{" "}
        <a className="underline" href="mailto:rogergraham147@gmail.com">
          rogergraham147@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col" 
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white "
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white "
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
