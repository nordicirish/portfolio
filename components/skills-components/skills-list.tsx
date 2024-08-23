"use client";
import React from "react";
import { Skill } from "@/lib/types";
import { iconMap } from "@/lib/utils";
import { useIsMobile } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import dynamic from "next/dynamic";
const MotionLi = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.li),
  { ssr: false }
);

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
  const { theme } = useTheme();
  console.log(theme);
  const isMobile = useIsMobile();
  const animationVariants = isMobile
    ? animationVariantsMobile
    : animationVariantsDesktop;
  return (
    <div className="flex w-full items-center justify-center">
      <ul className="flex col flex-wrap items-center  justify-center gap-2 ">
        {skills.map((skill, index) => {
          const IconComponent = iconMap[skill.icon]; // Get the icon component

          if (!IconComponent) return null; // Skip rendering if no icon component

          return (
            <MotionLi
              className="relative hexagon bg-gradient-to-r from-blue-300 to-teal-300 text-slate-950 shadow-light-mode dark:shadow-dark-mode dark:bg-gradient-to-r dark:from-teal-800 dark:to-blue-900 dark:text-teal-200 flex items-center justify-evenly flex-col  max-w-28 max-h-28 sm:max-w-32 sm:max-h-32 px-6 py-6 sm:px-6 sm:py-6"
              key={index}
              initial={animationVariants.initial}
              whileInView={animationVariants.whileInView(index)}
              custom={index}
              viewport={{ once: true, amount: 0.1 }}
            >
              <IconComponent
                style={{
                  maxWidth: "59%",
                  maxHeight: "59%",
                  color: theme === "light" ? "#234E52" : "#B2FFFC",
                  opacity: 1,
                }}
                size={100}
                aria-label={`Icon depicting ${skill.skill} skill`}
                role="img"
              />
              <span className="text-sm leading-1 -mt-2 sm:-mt-3">{skill.skill}</span>
            </MotionLi>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsList;
