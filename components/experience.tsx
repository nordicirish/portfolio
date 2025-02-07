"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useTheme } from "@/context/theme-context";
import SectionWithRef from "./section-with-ref";
import { useIsMobile } from "@/lib/hooks";
import dynamic from "next/dynamic";

const ExperienceTimeline = dynamic(
  () => import("@/components/experience-timeline"),
  {
    ssr: false,
  }
);

const fadeUpAnimationDesktop = {
  initial: {
    opacity: 0,
    y: 100,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const fadeUpAnimationMobile = {
  initial: { opacity: 0, y: 0 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function Experience() {
  const isMobile = useIsMobile();
  const { theme } = useTheme();
  const experiencesCopy = [...experiencesData];
  const fadeUpAnimation = isMobile
    ? fadeUpAnimationMobile
    : fadeUpAnimationDesktop;
  return (
    // id needs to match SectionName type and value in lib\types.ts
    // threshold ensures menu item only changes when section is 50% visible
    // if threshold value provided default value of 0.75
    <SectionWithRef
      id="Experience"
      desktopThreshold={0.5}
      className="scroll-mt-28 mb-28 sm:mb-32 w-full"
      initial={fadeUpAnimation.initial}
      viewport={{ once: true }}
      whileInView={fadeUpAnimation.whileInView}
    >
      <SectionHeading>My Experience</SectionHeading>
      <ExperienceTimeline experiencesData={experiencesCopy} theme={theme} />
    </SectionWithRef>
  );
}
