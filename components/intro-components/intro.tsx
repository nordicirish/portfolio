"use client";
import React from "react";
import SectionWithRef from "../section-with-ref";
import ProfileImage from "./profile-image";
import IntroText from "./intro-text";
import IntroLinks from "./intro-links";
import { motion } from "framer-motion";

export default function Intro() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <SectionWithRef
      id="Home"
      desktopThreshold={0.5}
      className="mb-28 text-center scroll-mt-[100rem] w-full"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center gap-6"
      >
        <motion.div variants={childVariants}>
          <ProfileImage />
        </motion.div>
        <motion.div variants={childVariants}>
          <IntroText />
        </motion.div>
        <motion.div
          variants={childVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-sm sm:text-lg font-medium"
        >
          <IntroLinks />
        </motion.div>
      </motion.div>
    </SectionWithRef>
  );
}