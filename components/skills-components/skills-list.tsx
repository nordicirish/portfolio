"use client";
import React from "react";
import { motion } from "framer-motion";
import { Skill } from "@/lib/types";
import { iconMap } from "@/lib/utils";

import { useState, useEffect } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Run on initial render
    handleResize();

    // Listen for resize changes
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

// client side component to render skills list
interface SkillsListProps {
  skills: Skill[];
}

const fadeInSpinAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20,
    rotateY: 0,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    rotateY: 360,
    transition: {
      delay: index * 0.5, // Adjust delay for each item to stagger the animations
      duration: 1.5, // Total duration for both animations
      ease: "easeInOut",
    },
  }),
};

const SkillsList: React.FC<SkillsListProps> = ({ skills }) => {
  const isMobile = useIsMobile();
  return (
    <ul className="flex flex-wrap items-center max-w-[48rem] justify-center gap-2 text-lg dark:text-white/85 text-gray-900">
      {skills.map((skill, index) => {
        const IconComponent = iconMap[skill.icon]; // Get the icon component

        if (!IconComponent) return null; // Skip rendering if no icon component

        return (
          <motion.li
            className="bg-gradient-to-r from-cyan-500 to-blue-500  shadow-light-mode dark:shadow-dark-mode rounded-full w-32 h-16 px-2 py-2 dark:bg-gradient-to-r dark:from-indigo-950 
            dark:to-purple-950 flex items-center justify-evenly flex-col sm:w-36 sm:h-18 sm:px-3 sm:py-3 md:w-40 md:h-20 md:px-4 md:py-4"
            key={index}
            // isMobile variant is set undefined to prevent any animation-related properties from being applied.
            variants={isMobile ? undefined : fadeInSpinAnimationVariants}
            // if isMobile is true, the initial prop is explicitly set to { opacity: 1, y: 0, rotateY: 0 }. The items are fully visible and not animated.
            initial={isMobile ? { opacity: 1, y: 0, rotateY: 0 } : "initial"}
            whileInView={isMobile ? undefined : "animate"}
            custom={index}
            viewport={{ once: true, amount: 0.1 }}
          >
            <IconComponent
              style={{ width: "100%", height: "100%" }}
              size={38}
              aria-label={`Icon depicting ${skill.skill} skill`}
              role="img"
            />
            <span className="text-sm">{skill.skill}</span>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default SkillsList;
