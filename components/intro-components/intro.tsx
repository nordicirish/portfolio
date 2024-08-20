"use client";
import React from "react";
import SectionWithRef from "../section-with-ref";
import ProfileImage from "./profile-image";
import IntroText from "./intro-text";
import IntroLinks from "./intro-links";
import { motion } from "framer-motion";

export default function Intro() {
  // id needs to match SectionName type and value in lib\types.ts
  // threshold ensures menu item only changes when section is 50% visible
  // desktopThreshold value provided default value of 0.75
  // mobileTheshold value provided default value of 0.4

  return (
    <SectionWithRef
      id="Home"
      desktopThreshold={0.5}
      className="mb-28 text-center scroll-mt-[100rem] w-full" 
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "easeIn", duration: 0.3 }}
        className="flex align-middle justify-center"
      >
        <ProfileImage />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col align-middle justify-center"
      >
        <IntroText />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-sm sm:text-lg font-medium"
      >
        <IntroLinks />
      </motion.div>
    </SectionWithRef>
  );
}
