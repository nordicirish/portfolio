"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section";

export default function About() {
  // useInView hook to make the active menu item change when scrolling
  const { ref, inView } = useInView(
    // threshold ensures menu item only changes when section is 75% visible
    { threshold: 0.75 }
  );
  // console.log("inView", inView);
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);

  return (
    // scroll-mt-28 ensures a margin at the top of the section when using the bookmark navigation
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-0 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After studying{" "}
        <span className="font-medium">Full-Stack Web Development</span> at
        Tampere University of Applied Sciences, I have honed my skills as a{" "}
        <span className="font-medium">Web Developer Intern</span> at{" "}
        <span className="font-medium">BearIT</span> and as a{" "}
        <span className="font-medium">Software Developer Trainee</span> in the{" "}
        <span className="font-medium">Futurice Academy</span>.{" "}
      </p>

      <p className="mb-3">
        <span className="italic">My favorite part of coding</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and PostgreSQL
        </span>
        . I am also familiar with Tailwind, TypeScript and Prisma. I am always
        looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a junior
        software developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy cycling,
        photography, and yoga. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
