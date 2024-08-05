"use client";
// framer motion needs to run on the client
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import { clsx } from "clsx";
import { useActiveSectionContext } from "@/context/active-section";

export default function Header() {
  //   use context to get the active section
  // allows state to be shared between components
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  //   use  negative translate to center the header on the screen - pulled left by half it's width
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-75 backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[37rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 shadow-light-mode dark:shadow-dark-mode"
        initial={{
          y: -100,
          //  add -50% transform as framer overrides css translate
          x: "-50%",
          opacity: 0,
        }}
        animate={{
          y: 0,
          x: "-50%",
          opacity: 1,
        }}
      ></motion.div>
      <nav
        className="flex fixed top-0 left-1/2 -translate-x-1/2 h-12 py-2
       sm:top-[1.7rem] sm:h-[initial] sm:py-0"
      >
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 text-gray-800  hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-300 ",
                  {
                    "!text-gray-200 hover:!text-gray-300 dark:text-gray-300":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name), setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {/* if link is active apply the following styling */}
                {/* inset sets all positions at 0 to stretch all the way*/}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute rounded-full inset-0 bottom-0 -z-10 bg-Primary  bg-blue-800 dark:bg-fuchsia-900 shadow-light-mode dark:shadow-dark-mode"
                    // layoutId is needed by framer motion to animate the correct span
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
