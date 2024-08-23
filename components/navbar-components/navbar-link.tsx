import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { clsx } from "clsx";

interface NavbarLinkProps {
  name: string;
  hash: string;
  activeSection: string;
  onClick: () => void;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({
  name,
  hash,
  activeSection,
  onClick,
}) => {
  return (
    <motion.li
      className="h-12 md:h-10 w-full md:w-auto flex items-center justify-center relative"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Link
        className={clsx(
          "flex w-full items-center justify-center px-3 py-3 text-gray-800 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-300",
          {
            "!text-gray-200 hover:!text-gray-300 dark:text-gray-300":
              // set active class if name is equal to activeSection from useActiveSectionContext
              activeSection === name,
          }
        )}
        href={hash}
        onClick={onClick}
      >
        {name}
        {/* applies background styles to active section */}
        {name === activeSection && (
          <motion.span
            className="absolute inset-0 bottom-0 -z-10 gradientActiveMenuItem shadow-light-mode dark:shadow-dark-mode md:rounded-full"
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
  );
};

export default NavbarLink;
