"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
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
      <form className="mt-10 flex flex-col" action={async formData => await sendEmail(formData)}>
        <input
          className="h-14 px-4 rounded-lg  borderBlack"
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Email"
        />
        <textarea
          className="h-52 my-3 rounded borderBlack p-4"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button
          type="submit"
          className="group flex items-center justify-center h-[3rem] w-[8rem] bg-gray-900 outline-none text-white rounded-full transition-all focus:scale-110
          hover:scale-110 hover:bg-gray-950
          active:scale-105
          "
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover: translate-x-1 group-hover:-translate-y-1" />{" "}
        </button>
      </form>
    </motion.section>
  );
}
