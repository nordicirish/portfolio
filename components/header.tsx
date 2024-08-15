"use client";
// framer motion needs to run on the client
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import { clsx } from "clsx";
import { useActiveSectionContext } from "@/context/active-section";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  //   use context to get the active section
  // allows state to be shared between components
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [mobileNavbar, setMobileNavbar] = useState(false);

  //   use  negative translate to center the header on the screen - pulled left by half it's width
  return (
    <header className="z-[999] relative">
      <motion.nav
        className={clsx(
          "fixed top-0 left-1/2 w-full h-[3.25rem] rounded-none border border-white border-opacity-40 bg-white bg-opacity-75 backdrop-blur-[0.5rem] md:top-6 md:w-[37rem] md:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 shadow-light-mode dark:shadow-dark-mode flex items-center justify-center transition",
          {
            "h-[3.25rem]": !mobileNavbar,
            "h-auto": mobileNavbar,
          }
        )}
        initial={{
          y: -100,
          x: "-50%",
          opacity: 0,
        }}
        animate={{
          y: 0,
          x: "-50%",
          opacity: 1,
        }}
      >
        {/* Button for opening/closing the mobile nav */}
        <button
          className="absolute top-2 left-2 md:hidden text-gray-600 hover:text-gray-900 transition z-50 p-2 dark:text-gray-400 dark:hover:text-gray-300 "
          onClick={() => setMobileNavbar(!mobileNavbar)}
          aria-label={mobileNavbar ? "Close menu" : "Open menu"}
          aria-expanded={mobileNavbar}
        >
          {mobileNavbar ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>

        <ul
          className={clsx(
            "flex w-full flex-col items-center md:flex-row h-[3.25rem] md:justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 mt-12 md:mt-0 md:gap-5 mb-6 md:mb-0 transition-all duration-300",
            {
              "overflow-hidden h-auto": mobileNavbar,
              hidden: !mobileNavbar,
              " md:h-auto md:flex": true,
            }
          )}
        >
          {links.map((link) => (
            <motion.li
              className="h-12 md:h-10 w-full md:w-auto flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 text-gray-800 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-300 ",
                  {
                    "!text-gray-200 hover:!text-gray-300 dark:text-gray-300":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                  setMobileNavbar(false);
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute 
                           md:rounded-full inset-0 bottom-0 -z-10 bg-Primary bg-blue-800 dark:bg-fuchsia-900 shadow-light-mode dark:shadow-dark-mode"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}
