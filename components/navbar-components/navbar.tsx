"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const handleLinkClick = (
    name: "Home" | "About" | "Projects" | "Skills" | "Experience" | "Contact"
  ) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-1/2 w-full h-[4rem] rounded-none border border-white border-opacity-40 bg-white/90 md:bg-white/60 backdrop-blur-[0.5rem] md:top-6 md:w-[48rem] md:rounded-full dark:bg-gray-950/90 dark:border-black/40 dark:bg-opacity-60 shadow-light-mode dark:shadow-dark-mode flex items-center justify-between px-4 md:px-0 md:justify-center"
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
    >
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-gray-800 hover:text-gray-950 dark:text-gray-200 dark:hover:text-white focus:outline-none mr-6"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
                <span className="sr-only">
                  {isOpen ? "Close menu" : "Open menu"}
                </span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-white/70 dark:bg-gray-950/70 pt-24"
            >
              <nav className="flex flex-col space-y-4">
                {links.map((link) => (
                  <NavLink
                    key={link.hash}
                    {...link}
                    onClick={() => handleLinkClick(link.name)}
                    isActive={activeSection === link.name}
                    isMobile
                  />
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 from-10% via-green-700 via-50% to-cyan-700 to-90% dark:from-cyan-500 dark:from-10% dark:via-green-500 dark:via-50% dark:to-cyan-500 dark:to-90% md:ml-6 md:mr-2">
            RogerGraham.Fi
          </h1>
        </div>
      </div>

      <ul className="hidden md:flex w-full flex-row items-center justify-center gap-2 text-sm leading-4 font-medium text-gray-500">
        {links.map((link) => (
          <motion.li
            key={link.hash}
            className="h-3/4 flex items-center justify-center relative"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <NavLink
              {...link}
              onClick={() => handleLinkClick(link.name)}
              isActive={activeSection === link.name}
            />
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

const NavLink: React.FC<{
  name: string;
  hash: string;
  onClick: () => void;
  isActive: boolean;
  isMobile?: boolean;
}> = ({ name, hash, onClick, isActive, isMobile = false }) => (
  <Link
    href={hash}
    className={clsx(
      "flex w-full items-center justify-center px-3 py-3 transition relative",
      isActive
        ? "text-gray-200 hover:text-gray-300 dark:text-gray-300"
        : "text-gray-800 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-300"
    )}
    onClick={onClick}
  >
    {name}
    {isActive && (
      <motion.span
        className={clsx(
          "absolute inset-0 -z-10 gradientActiveMenuItem shadow-light-mode dark:shadow-dark-mode",
          isMobile ? "rounded-none" : "rounded-full"
        )}
        layoutId={isMobile ? "mobileActiveSection" : "activeSection"}
        transition={{
          type: "spring",
          stiffness: 380,
          damping: 30,
        }}
      ></motion.span>
    )}
  </Link>
);

export default Navbar;
