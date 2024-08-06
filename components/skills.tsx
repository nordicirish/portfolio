"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import SectionWithRef from "./section-with-ref";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * index, // Adjust delay for staggering effect
      duration: 0.5, // Duration for fade-in effect
    },
  }),
};

const spinAnimationVariants = {
  initial: { rotateY: 0 },
  animate: (index: number) => ({
    rotateY: 360,
    transition: {
      delay: 0.15 * index, // Delay based on the index to stagger the spin
      duration: 1, // Duration of the spin animation in seconds
      ease: "easeInOut", // Easing function
    },
  }),
};

export default function Skills() {
  return (
    // id needs to match SectionName type and value in lib\types.ts
    // threshold ensures menu item only changes when section is 50% visible
    // ih threshold value provided default value of 0.75
    <SectionWithRef
      id="Skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      threshold={0.25}
    >
      <SectionHeading>My Skills</SectionHeading>

      <ul className="flex flex-wrap items-center justify-center gap-2 text-lg dark:text-white/85 text-slate-950">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-amber-300 borderBlack shadow-light-mode dark:shadow-dark-mode rounded-full w-32 h-16 px-2 py-2 dark:bg-indigo-950 flex items-center justify-evenly flex-col sm:w-36 sm:h-18 sm:px-3 sm:py-3 md:w-44 md:h-20 md:px-4 md:py-4"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }} // Lowered amount for earlier triggering
            custom={index}
          >
            {skill.icon && (
              <motion.div
                className="bg-transparent grow"
                variants={spinAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.1 }}
                custom={index} // Pass index as custom prop for staggering
              >
                <skill.icon
                  size={30}
                  aria-label={`Icon depicting ${skill.skill} skill`}
                  role="img"
                />
              </motion.div>
            )}
            <span className="text-xs sm:text-sm md:text-base">
              {skill.skill}
            </span>
            {/* Adjust text size for different screens */}
          </motion.li>
        ))}
      </ul>
    </SectionWithRef>
  );
}
