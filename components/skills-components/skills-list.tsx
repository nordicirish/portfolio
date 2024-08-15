"use client";
import React from "react";
import { motion } from "framer-motion";
import { Skill } from "@/lib/types";
import { iconMap } from "@/lib/utils";
import { useIsMobile } from "@/lib/hooks";

// client side component to render skills list
interface SkillsListProps {
  skills: Skill[];
}

const animationVariantsDesktop = {
  initial: {
    opacity: 0,
    y: 20,
    rotateY: 0,
  },
  whileInView: (index: number) => ({
    opacity: 0.25,
    y: 0,
    rotateY: 360,
    transition: {
      delay: index * 0.1, // Adjust delay for each item to stagger the animations
      duration: 0.9, // Total duration for both animations
      ease: "easeInOut",
    },
    transitionEnd: {
      opacity: 1, // Return opacity to 1 after animation is complete
    },
  }),
};
const animationVariantsMobile = {
  initial: {
    opacity: 0,
    y: 0,
    rotateY: 0,
  },
  whileInView: (index: number) => ({
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: {
      delay: index * 0.05,
      duration: 0.5, //
      ease: "easeInOut",
    },
    transitionEnd: {
      opacity: 1, // Return opacity to 1 after animation is complete
    },
  }),
};

const SkillsList: React.FC<SkillsListProps> = ({ skills }) => {
  const isMobile = useIsMobile();
  const animationVariants = isMobile
    ? animationVariantsMobile
    : animationVariantsDesktop;
  return (
    <div className="flex items-center justify-center">
      <ul className="flex col flex-wrap items-center max-w-[48rem] justify-center gap-2 text-lg dark:text-white/85 text-gray-900">
        {skills.map((skill, index) => {
          const IconComponent = iconMap[skill.icon]; // Get the icon component

          if (!IconComponent) return null; // Skip rendering if no icon component

          return (
            <motion.li
              className="bg-gradient-to-r from-cyan-300 to-blue-400 shadow-light-mode dark:shadow-dark-mode rounded-full w-32 h-16 px-2 py-2 dark:bg-gradient-to-r dark:from-cyan-800
            dark:to-blue-950 flex items-center justify-evenly flex-col sm:w-36 sm:h-18 sm:px-3 sm:py-3 md:w-40 md:h-20 md:px-4 md:py-4"
              key={index}
              initial={animationVariants.initial}
              whileInView={animationVariants.whileInView(index)}
              // Ensure visibility on mobile
              // Only apply `whileInView` for non-mobile devices
              custom={index}
              viewport={{ once: true, amount: 0.1 }}
            >
              <IconComponent
                style={{ width: "100%", height: "100%", opacity: 1 }}
                size={38}
                aria-label={`Icon depicting ${skill.skill} skill`}
                role="img"
              />
              <span className="text-sm">{skill.skill}</span>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsList;
