"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section";
import NavbarLink from "./navbar-link";


const Navbar = () => {
    const [mobileNavbar, setMobileNavbar] = useState(false);

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
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
      {/* Button for opening/closing the mobile nav 
      Hidden on md and up 
      clicking invert the state of mobileNavbar and shows the mobile menu */}
      <button
        className="absolute top-2 left-2 md:hidden text-gray-800 hover:text-gray-950 transition z-50 p-2 dark:text-gray-400 dark:hover:text-gray-300 "
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

      {/* Rest of the navbar content */}
      <motion.ul
        className={clsx(
          "flex w-full flex-col items-center md:flex-row h-[3.25rem] md:justify-center gap-y-1 text-[0.9rem] font-medium text-gray-700 mt-12 md:mt-0 md:gap-5 mb-6 md:mb-0 transition-all duration-300",
          {
            "overflow-hidden h-auto": mobileNavbar,
            hidden: !mobileNavbar,
            " md:h-auto md:flex": true,
          }
        )}
      >
        {links.map((link) => (
          <NavbarLink
            key={link.hash}
            name={link.name}
            hash={link.hash}
            activeSection={activeSection}
            onClick={() => {
              setActiveSection(link.name);
              setTimeOfLastClick(Date.now());
              setMobileNavbar(false);
            }}
          />
        ))}
        
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;
