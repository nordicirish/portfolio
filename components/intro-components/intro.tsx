"use client";
import React from "react";
import SectionWithRef from "../section-with-ref";
import ProfileImage from "./profile-image";
import IntroText from "./intro-text";
import IntroLinks from "./intro-links";
// import { motion } from "framer-motion";
import dynamic from "next/dynamic";
// Dynamically import only framer div component
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);
export default function Intro() {
  // id needs to match SectionName type and value in lib\types.ts
  // threshold ensures menu item only changes when section is 50% visible
  // desktopThreshold value provided default value of 0.75
  // mobileTheshold value provided default value of 0.4

  return (
    <SectionWithRef
      id="Home"
      desktopThreshold={0.5}
      className="mb-28 w-full max-w-[50rem] text-center md:mb-0 scroll-mt-[100rem]"
    >
      <MotionDiv
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "tween", duration: 0.2 }}
      >
        <ProfileImage />
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <IntroText />
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <IntroLinks />
      </MotionDiv>
    </SectionWithRef>
  );
}
