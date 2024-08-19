import React from "react";
import { motion } from "framer-motion";
import NavbarLink from "./navbar-link";

interface MobileNavbarProps {
  links: { name: string; hash: string }[];
  activeSection: string;
  setActiveSection: (section: string) => void;
  setTimeOfLastClick: (time: number) => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  links,
  activeSection,
  setActiveSection,
  setTimeOfLastClick,
}) => {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full h-auto bg-white bg-opacity-75 backdrop-blur-[0.5rem] shadow-light-mode dark:shadow-dark-mode"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <ul>
        {links.map((link) => (
          <NavbarLink
            key={link.hash}
            name={link.name}
            hash={link.hash}
            activeSection={activeSection}
            onClick={() => {
              setActiveSection(link.name);
              setTimeOfLastClick(Date.now());
            }}
          />
        ))}
      </ul>
    </motion.nav>
  );
};

export default MobileNavbar;
