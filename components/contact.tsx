"use client";
import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./submit-button";
import toast from "react-hot-toast";
import SectionWithRef from "./section-with-ref";
export default function Contact() {
  // creates a reference to the form element
  const formRef = useRef<HTMLFormElement>(null);
  return (
    // w-[min(100%,38rem)] ensures width is the minimum of 100% on smaller screens and 38rem on wider screens

    <SectionWithRef
      id="Contact"
      className="flex flex-col items-center scroll-mt-28 mb-20 sm:mb-28 sm:min-w-[53rem] max-w-[53rem] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please email me directly at rogergraham147 (at) gmail.com, or use this
        form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black w-[min(100%,38rem)]"
        ref={formRef}
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          console.log(data);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
          // Clear form fields after successful send
          if (formRef.current) {
            formRef.current.reset();
          }
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all  shadow-light-mode dark:shadow-dark-mode"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all  shadow-light-mode dark:shadow-dark-mode"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <div className="flex justify-center sm:justify-end sm:pr-12 w-full">
          <SubmitButton />
        </div>
      </form>
    </SectionWithRef>
  );
}
