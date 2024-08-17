import React from "react";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function IntroLinks() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <>
      <Link
        href="#Contact"
        aria-label="Contact me"
        className="group flex items-center justify-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 hover:bg-blue-900 active:scale-110 transition-transform duration-300 ease-out bg-blue-800 dark:bg-fuchsia-900 dark:hover:bg-fuchsia-950 text-white h-[3.2rem] max-h-[3.2rem] min-h-[3.2rem] px-4 w-3/4 sm:w-auto shadow-lg dark:shadow-md" // Full width on small screens, auto on larger screens
        onClick={() => {
          setActiveSection("Contact");
          setTimeOfLastClick(Date.now());
        }}
      >
        <span className="flex gap-2 items-center">
          Contact me here
          <BsArrowRight className="w-4 h-4 sm:w-6 sm:h-6 opacity-70 group-hover:translate-x-1 transition mt-[0.125rem]" />
        </span>
      </Link>
      {/* needs to be an a tag for download - Link is meant for client side routing between pages  */}
      <a
        className="group flex items-center justify-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-110 transition-transform duration-300 ease-out cursor-pointer text-blue-800 hover:text-blue-900 borderBlue dark:border dark:border-white/10 dark:bg-white/10 h-[3.2rem] dark:text-white/60 max-h-[3.2rem] min-h-[3.2rem] px-4 w-3/4 sm:w-auto shadow-lg dark:shadow-md" // Full width on small screens, auto on larger screens
        href="/CV.pdf"
        download
        aria-label="Download my CV as PDF"
      >
        <span className="flex gap-2 items-center">
          Download my CV
          <HiDownload className="w-4 h-4 sm:w-6 sm:h-6 opacity-95 dark:opacity-85 group-hover:translate-y-1 transition" />
        </span>
      </a>

      <a
        className="group flex items-center justify-center gap-2 rounded-lg focus:scale-110 hover:scale-110 text-blue-800 hover:text-blue-900 active:scale-110 transition-transform duration-300 ease-out cursor-pointer borderBlue dark:border dark:border-white/10 dark:bg-white/10 dark:text-white/60 w-3/4 sm:w-[3.2rem] h-[3.2rem] sm:max-w-[3.2rem] min-w-[3.2rem] max-h-[3.2rem] min-h-[3.2rem] px-4 shadow-lg dark:shadow-md"
        href="https://www.linkedin.com/in/nordic-irish/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to my LinkedIn profile"
      >
        <span className="block sm:hidden">Connect on LinkedIn</span>
        <span className="flex items-center ">
          <BsLinkedin className="w-4 h-4 sm:w-6 sm:h-6 opacity-95 dark:opacity-85" />
        </span>
      </a>

      <a
        className="group flex items-center justify-center gap-2 rounded-lg focus:scale-110 hover:scale-110 text-blue-800 hover:text-blue-800 active:scale-110 transition-transform duration-300 ease-out cursor-pointer borderBlue dark:border dark:border-white/10 dark:bg-white/10 dark:text-white/60 w-3/4 sm:w-[3.2rem] h-[3.2rem] sm:max-w-[3.2rem] min-w-[3.2rem] max-h-[3.2rem] min-h-[3.2rem] px-4 shadow-lg dark:shadow-md"
        href="https://github.com/nordicirish"
        aria-label="Link to my GitHub profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="block sm:hidden">Check out my GitHub</span>
        <span className="flex items-center">
          <FaGithubSquare className="w-[1.14rem] h-[1.14rem] sm:w-[1.71rem] sm:h-[1.71rem] opacity-95 dark:opacity-85" />
        </span>
      </a>
    </>
  );
}
