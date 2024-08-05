import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
import { FaGitAlt, FaNodeJs, FaReact, FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { TiHtml5 } from "react-icons/ti";
import { DiCss3 } from "react-icons/di";
import { RiNextjsLine, RiTailwindCssLine } from "react-icons/ri";
import { TbBrandJavascript, TbBrandTypescript } from "react-icons/tb";
import {
  SiAmazonaws,
  SiExpress,
  SiFramer,
  SiMicrosoftazure,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiScrumalliance,
  SiSqlite,
  SiVercel,
} from "react-icons/si";

import learnLangImg from "@/public/learnLangImg.png";
import invoiceDashboardImg from "@/public/invoiceDashboardImg.png";
import { RiNextjsFill } from "react-icons/ri";

export const links = [
  {
    name: "Home",
    hash: "#Home",
  },
  {
    name: "About",
    hash: "#About",
  },
  {
    name: "Projects",
    hash: "#Projects",
  },
  {
    name: "Skills",
    hash: "#Skills",
  },
  {
    name: "Experience",
    hash: "#Experience",
  },
  {
    name: "Contact",
    hash: "#Contact",
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
      "I was a Full-stack software development in cloud native environment trainee. I undertook 300 hours of agile project coding work and completed 354 hours of studies. I also gained 4 cloud certifications.",
    icon: React.createElement(FaVuejs),
    date: "10/2022 - 02/2023",
  },
  {
    title: "Diploma in Full-stack Development @ Tampere University",
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
    title: "Invoice Dashboard",
    description:
      "This app is based on the Next.js App Router Course. I've added Blob storage and message handling using the useContext hook.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind",
      "Vercel",
    ],
    imageUrl: invoiceDashboardImg,
  },
  {
    title: "Learn Languages App",
    description:
      "A vocabulary learning app. This was my first ever Full-stack project. I developed it as my Tampere University course project in 2022.",
    tags: ["React", "Node.js", "Express", "MariaDB", "Bootstrap"],
    imageUrl: learnLangImg,
  },
] as const;

export const skillsData = [
  { skill: "HTML", icon: TiHtml5 },
  { skill: "CSS", icon: DiCss3 },
  { skill: "JavaScript", icon: TbBrandJavascript },
  { skill: "React", icon: FaReact },
  { skill: "Next.js", icon: RiNextjsLine },
  { skill: "TypeScript", icon: TbBrandTypescript },
  { skill: "Node.js", icon: FaNodeJs },
  { skill: "Git", icon: FaGitAlt },
  { skill: "Tailwind", icon: RiTailwindCssLine },
  { skill: "Vue", icon: FaVuejs },
  { skill: "Prisma", icon: SiPrisma },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "PostgreSQL", icon: SiPostgresql },
  { skill: "SQLite", icon: SiSqlite },
  { skill: "Express", icon: SiExpress },
  { skill: "Framer Motion", icon: SiFramer },
  { skill: "AWS", icon: SiAmazonaws },
  { skill: "Azure", icon: SiMicrosoftazure },
  { skill: "Scrum", icon: SiScrumalliance },
  { skill: "Vercel", icon: SiVercel },
] as const;
