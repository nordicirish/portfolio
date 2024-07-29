"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight,  BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section";

import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
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
              src="https://avatars.githubusercontent.com/u/22174316?v=4"
              alt="Roger Graham portrait"
              width={192}
              height={192}
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] object-cover border-white shadow-xl"
            ></Image>
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0  text-4xl"
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
        className="flex flex-col sm:flex-row gap-2 items-center justify-center px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {/* group adds the hover effect to all elments in the group */}
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110
          hover:scale-110 hover:bg-gray-950
          active:scale-105
          transition"
        >
          Contact me here {/* add group-hover to include the hover effect */}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        {/* use a tags rather than buttons as these are navigation links */}
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110
          hover:scale-110
          active:scale-105
          transition
          cursor-pointer
          border-black/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15]
          hover:scale-[1.15]
          hover:text-gray-950
          active:scale-105
          transition
          cursor-pointer
          border-black/10"
          href="https://www.linkedin.com/in/nordic-irish/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15]
          hover:scale-[1.15]
          hover:text-gray-950
          active:scale-105
          transition
          cursor-pointer
          border-black/10
          text-[1.35rem]"
          href="https://github.com/nordicirish"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
