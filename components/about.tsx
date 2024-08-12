import React from "react";
import SectionHeading from "./section-heading";
import SectionWithRef from "./section-with-ref";
import Badges from "@/components/about-components/badges";
import { badges } from "@/lib/data";
import { BadgeProps } from "@/lib/types";

export default function About() {
  const mutableBadges: BadgeProps[] = [...badges];
  return (
    // scroll-mt-28 ensures a margin at the top of the section when using the bookmark navigation
    <SectionWithRef
      // ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      threshold={0.85}
      id="About"
    >
      <SectionHeading>About Me</SectionHeading>
      <Badges badges={mutableBadges} />
      <div className="text-left text-lg text-gray-700 dark:text-white/75 mb-0">
        <p className="mb-3">
          I’m a passionate and driven software developer with a strong
          foundation in Full-stack web development, honed through my studies at
          Tampere University of Applied Sciences and hands-on experience with
          BearIT and Futurice.
        </p>

        <p className="mb-3">
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            What I Do:
          </span>{" "}
          I specialize in building dynamic and responsive web applications using
          a core stack that includes React, Next.js, Node.js, and PostgreSQL. My
          toolkit also features Tailwind, TypeScript, and Prisma. I thrive on
          problem-solving and find immense satisfaction in cracking complex
          issues and optimizing code.
        </p>

        <p className="mb-3">
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            My Journey:
          </span>{" "}
          Throughout my internships and traineeships, I’ve developed a knack for
          navigating challenges and turning innovative ideas into reality. I’m
          always eager to learn and adapt, exploring new technologies and
          methodologies to enhance my skill set.
        </p>

        <p className="mb-3">
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Beyond Coding:
          </span>{" "}
          Outside of coding, you can find me cycling through scenic routes,
          capturing moments through photography, or finding balance with yoga.
          I’m also in the midst of picking up guitar skills, driven by a love
          for continuous learning and personal growth.
        </p>

        <p className="mb-0">
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Looking Ahead:
          </span>{" "}
          I’m currently seeking a full-time position as a junior software
          developer where I can contribute to exciting projects and grow
          alongside a talented team. If you’re looking for a dedicated and
          enthusiastic developer with a zest for problem-solving, let’s connect!
        </p>
      </div>
     </SectionWithRef>
  );
}
