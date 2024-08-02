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
      className="mb-28 max-w-[50rem]
    text-center sm:mb-8 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            {/* add external paths to next.config */}
            <Image
              src="/profile.png"
              alt="Roger Graham portrait photo"
              width={192}
              height={192}
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] object-cover border-white shadow-xl"
            ></Image>
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
          {/* <h1 className='text-6xl font-bold text-center text-green-800'></h1> */}
        </div>
      </div>
      {/* leading specifies the line height */}
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Roger Graham.</span> I'm a{" "}
        <span className="font-bold">full-stack developer </span> with experience
        in{" "}
        <span className="font-bold">
          React, Next.js, TypeScript, Tailwind, Prisma, PostgreSQL, AWS, Azure,
          Vercel, Scrum{" "}
        </span>
        and more.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#Contact"
          aria-label="Contact me"
          className="group flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition bg-gray-900 text-white h-[3.2rem] max-h-[3.2rem] min-h-[3.2rem] px-4"
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
          className="group flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 h-[3.2rem] max-h-[3.2rem] min-h-[3.2rem] px-4"
          href="/CV.pdf"
          download
          aria-label="Download my CV as PDF"
        >
          <span className="flex gap-2 items-center">
            Download CV
            <HiDownload className="w-4 h-4 opacity-60 group-hover:translate-y-1 transition" />
          </span>
        </a>
        <a
          className="flex items-center justify-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 h-[3.2rem] max-h-[3.2rem] min-h-[3.2rem] px-4"
          href="https://www.linkedin.com/in/nordic-irish/"
          target="_blank"
          aria-label="Link to myLinkedin profile"
        >
          <span className="flex items-center gap-2">
            <BsLinkedin className="w-4 h-4" />
          </span>
        </a>
        <a
          className="flex items-center justify-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 h-[3.2rem] max-h-[3.2rem] min-h-[3.2rem] px-4"
          href="https://github.com/nordicirish"
          aria-label="Link to myGithub profile"
          target="_blank"
        >
          <span className="flex gap-2 items-center">
            <FaGithubSquare className="w-[1.14rem] h-[1.14rem]" />
          </span>
        </a>
      </motion.div>
    </SectionWithRef>
  );
}
