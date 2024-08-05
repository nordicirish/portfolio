"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function IntroLinks() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 text-lg font-medium"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Link
        href="#Contact"
        aria-label="Contact me"
        className="group flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-blue-900 active:scale-105 transition bg-blue-800 dark:bg-fuchsia-900 dark:hover:bg-fuchsia-950 text-white h-[3.2rem] max-h-[3.2rem] min-h-[3.2rem] px-4 w-3/4 sm:w-auto shadow-light-mode dark:shadow-dark-mode" // Full width on small screens, auto on larger screens
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
        className="group flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer text-blue-800 hover:text-blue-900 borderBlue dark:border dark:border-white/10 dark:bg-white/10 h-[3.2rem] dark:text-white/60 max-h-[3.2rem] min-h-[3.2rem] px-4 w-3/4 sm:w-auto shadow-light-mode dark:shadow-dark-mode" // Full width on small screens, auto on larger screens
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
  );
}
