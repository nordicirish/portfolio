"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section";
import SectionWithRef from "./section-with-ref";

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  // id needs to match SectionName type and value in lib\types.ts
  // threshold ensures menu item only changes when section is 50% visible
  // ih threshold value provided default value of 0.75
  return (
    <SectionWithRef
      id="Home"
      threshold={0.5}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/profile.png"
              alt="Roger Graham portrait photo"
              width={192}
              height={192}
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-full border-[0.25rem] border-gradient-to-r from-blue-500 to-blue-700 object-cover shadow-lg dark:border-gradient-to-r dark:from-gray-700 dark:to-gray-500"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mt-6 text-3xl font-bold !leading-[1.3] sm:text-4xl dark:text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Hello, I'm Roger Graham
      </motion.h1>
      <motion.p
        className="mt-4 mb-10 px-4 text-lg font-medium !leading-relaxed text-gray-700 dark:text-gray-300 sm:text-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        I'm a{" "}
        <span className="font-bold text-blue-600 dark:text-blue-400">
          full-stack developer
        </span>{" "}
        specializing in{" "}
        <span className="font-bold text-blue-600 dark:text-blue-400">
          React, Next.js, TypeScript, Tailwind, Prisma, PostgreSQL, AWS, Azure,
          Vercel, Scrum
        </span>{" "}
        and more...
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#Contact"
          aria-label="Contact me"
          className="group flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-blue-900 active:scale-105 transition bg-blue-800 
    dark:bg-fuchsia-900 dark:hover:bg-fuchsia-950 text-white h-[3.2rem] max-h-[3.2rem] min-h-[3.2rem] px-4 w-1/2 sm:w-auto shadow-light-mode dark:shadow-dark-mode" // Full width on small screens, auto on larger screens
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          <span className="flex gap-2 items-center">
            Contact me here
            <BsArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition mt-[0.125rem]" />
          </span>
        </Link>

        <a
          className="group flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer text-blue-800 hover:text-blue-900 borderBlue dark:border dark:border-white/10 dark:bg-white/10 h-[3.2rem] dark:text-white/60 max-h-[3.2rem] min-h-[3.2rem] px-4 w-1/2 sm:w-auto shadow-light-mode dark:shadow-dark-mode" // Full width on small screens, auto on larger screens
          href="/CV.pdf"
          download
          aria-label="Download my CV as PDF"
        >
          <span className="flex gap-2 items-center">
            Download CV
            <HiDownload className="w-4 h-4 dark:opacity-40 group-hover:translate-y-1 transition" />
          </span>
        </a>
        {/* Container for LinkedIn and GitHub */}
        <div className="flex flex-row gap-2">
          <a
            className="flex items-center justify-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] text-blue-800 hover:text-blue-900 active:scale-105 transition cursor-pointer borderBlue dark:border dark:border-white/10 dark:bg-white/10 dark:text-white/60 w-[3.2rem] h-[3.2rem] max-w-[3.2rem] min-w-[3.2rem] max-h-[3.2rem] min-h-[3.2rem] px-4 shadow-light-mode dark:shadow-dark-mode"
            href="https://www.linkedin.com/in/nordic-irish/"
            target="_blank"
            aria-label="Link to my LinkedIn profile"
          >
            <span className="flex items-center gap-2">
              <BsLinkedin className="w-4 h-4" />
            </span>
          </a>

          <a
            className="flex items-center justify-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] text-blue-800 hover:text-blue-800 active:scale-105 transition cursor-pointer borderBlue dark:border dark:border-white/10 dark:bg-white/10 dark:text-white/60 w-[3.2rem] h-[3.2rem] max-w-[3.2rem] min-w-[3.2rem] max-h-[3.2rem] min-h-[3.2rem] px-4 shadow-light-mode dark:shadow-dark-mode"
            href="https://github.com/nordicirish"
            aria-label="Link to my GitHub profile"
            target="_blank"
          >
            <span className="flex gap-2 items-center">
              <FaGithubSquare className="w-[1.14rem] h-[1.14rem]" />
            </span>
          </a>
        </div>
      </motion.div>
    </SectionWithRef>
  );
}
