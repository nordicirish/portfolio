"use client";
import React from "react";
import SectionWithRef from "../section-with-ref";
import ProfileImage from "./profile-image";
import IntroText from "./intro-text";
import IntroLinks from "./intro-links";
import { motion } from "framer-motion";
// import dynamic from "next/dynamic";

export default function Intro() {
  // const ProfileImage = dynamic(() => import("@/components/intro-components/profile-image"));
  // id needs to match SectionName type and value in lib\types.ts
  // threshold ensures menu item only changes when section is 50% visible
  // ih threshold value provided default value of 0.75
  return (
    <SectionWithRef
      id="Home"
      threshold={0.5}
      className="mb-28 w-full max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <motion.div
        className="flex items-center justify-center relative"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "tween", duration: 0.2 }}
      >
        <ProfileImage />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <IntroText />
      </motion.div>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <IntroLinks />
      </motion.div>
    </SectionWithRef>
  );
}
