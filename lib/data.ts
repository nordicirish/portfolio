import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { RiNextjsFill, RiNextjsLine } from "react-icons/ri";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer Internship @ BearIT",
    location: "Tampere, Finland",
    description:
      "I levelled up my skills from React to Next.js. and I collaboratively codded a sports training app built with Next.js, PostgreSQL, Tailwind & Typescript and I handled the deployment of a gardening app to AWS.",
    icon: React.createElement(RiNextjsFill),
    date: "09/2023 - 12/2023",
  },
  {
    title: "Software Developer Trainee @ Futurice",
    location: "Tampere, Finland",
    description:
      "I was a Full-stack software development in cloud native environment trainee. I undertook 300 hours of agile project coding work and completed 354 hours of studies. I also gained 4 cloud cerifications.",
    icon: React.createElement(FaVuejs),
    date: "10/2022 - 02/2023",
  },
  {
    title: "Diploma Full-Stack Web Development @ Tampere University",
    location: "Tampere, Finland",
    description:
      "I studied Full-stack Web Development and gained valuable skills in Front-end (React, Html, Javascript, CSS, SASS, Bootstrap) and Back-end (Node.js, Express, MariaDB) development.",
    icon: React.createElement(LuGraduationCap),
    date: "09/2021 - 10/2022",
  },
] as const;
//as const is used to make the data specific to the values as well as types and readonly. Improves intellisense to show the data values.
export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "SQL",
  "Express",
  "Figma",
  "PostgreSQL",
  "Framer Motion",
  "AWS",
  "Azure",
  "Scrum",
  "Vue",
  "Vercel",
] as const;
