"use client";
import React from "react";
import { motion } from "framer-motion";
import { Skill } from "@/lib/types";
import { iconMap } from "@/lib/utils";

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
  return (
    <ul className="flex flex-wrap items-center justify-center gap-2 text-lg dark:text-white/85 text-slate-950">
      {skills.map((skill, index) => {
        const IconComponent = iconMap[skill.icon]; // Get the icon component

        if (!IconComponent) return null; // Skip rendering if no icon component

        return (
          <motion.li
            className="bg-amber-300 borderBlack shadow-light-mode dark:shadow-dark-mode rounded-full w-32 h-16 px-2 py-2 dark:bg-indigo-950 flex items-center justify-evenly flex-col sm:w-36 sm:h-18 sm:px-3 sm:py-3 md:w-44 md:h-20 md:px-4 md:py-4"
            key={index}
            variants={fadeInSpinAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{ once: true, amount: 0.1 }}
          >
            <IconComponent
              size={30}
              aria-label={`Icon depicting ${skill.skill} skill`}
              role="img"
            />
            <span className="text-xs sm:text-sm md:text-base">
              {skill.skill}
            </span>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default SkillsList;
