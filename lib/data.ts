import React from "react";

// import { CgWorkAlt } from "react-icons/cg";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import imageGenieImg from "@/public/imageGenieImg.jpeg";
import learnLangImg from "@/public/learnLangImg.png";
import invoiceDashboardImg from "@/public/invoiceDashboardImg.png";
import stockDashboardImg from "@/public/stockDashboardImg.png";
import { RiNextjsFill } from "react-icons/ri";
import { IconName } from "./utils";


export const badges = [
  {
    href: "https://www.credly.com/badges/ef19b1de-a263-4a93-b28b-094f51590b1b/public_url",
    src: "/badges/AWS-Certified-Cloud-Practitioner.png",
    alt: "Roger Graham's AWS Certified Cloud Practitioner",
  },
  {
    href: "https://www.credly.com/badges/5c2ac053-a755-494c-969e-8cdb161e4f56/public_url",
    src: "/badges/microsoft-certified-azure-fundamentals.png",
    alt: "Roger Graham's Microsoft Certified: Azure Fundamentals badge",
  },
  {
    href: "https://www.credly.com/badges/3a42f6f6-a1ea-43cb-b7fe-8058ce30bd61/public_url",
    src: "/badges/microsoft-certified-azure-ai-fundamentals.png",
    alt: "Roger Graham's Microsoft Certified: Azure AI Fundamentals badge",
  },
  {
    href: "https://www.credly.com/badges/4e135a05-14da-4210-932c-e71a155d65f2/public_url",
    src: "/badges/microsoft-certified-azure-data-fundamentals.png",
    alt: "Roger Graham's Microsoft Certified: Azure Data Fundamentals",
  },

  {
    href: "https://www.credly.com/badges/1460494b-09b8-4635-945f-4384a500389e/public_url",
    src: "/badges/professional-scrum-master.png",
    alt: "Roger Graham's Professional Scrum Master™ I (PSM I)",
  },
] as const;

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
      "I levelled up my skills from React to Next.js. and I collaboratively coded a sports training app built with Next.js, PostgreSQL, Tailwind & Typescript and I handled the deployment of a gardening app to AWS.",
    icon: React.createElement(RiNextjsFill),
    date: "09/2023 - 12/2023",
  },
  {
    title: "Software Developer Trainee @ Futurice",
    location: "Tampere, Finland",
    description:
      "I was a Full-stack Software Development in Cloud Native Environment trainee. I undertook 300 hours of agile project coding work and completed 354 hours of studies. I also gained 4 cloud certifications.",
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
    title: "ImageGenie",
    description:
      "Image Genie is a full-stack app for AI text-to-image generation using React, Next.js, TypeScript, and OpenAI's DALL-E API. Users can download generated images.",
    tags: ["OpenAI", "React", "Next.js", "TypeScript", "Tailwind"],
    imageUrl: imageGenieImg,
    gitghubUrl: "https://github.com/nordicirish/dall-e-image-generator-app",
  },
  {
    title: "Stock Dashboard",
    description:
      "Stock Dashboard is a full-stack app that allows users to search, store and view stock data using React, Next.js, TypeScript, PostgreSQL, Zod, and OpenAI's API.",
    tags: ["OpenAI", "React", "Next.js", "TypeScript",  "PostgreSQL", "Zod"],
    imageUrl: stockDashboardImg,
    gitghubUrl: "https://github.com/nordicirish/stock-dashboard",
  },
  {
    title: "Invoice Dashboard",
    description:
      "This app is based on the Next.js App Router Course. I've added Blob storage and message handling using the useContext hook.",
    tags: ["React", "Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    imageUrl: invoiceDashboardImg,
    gitghubUrl: "https://github.com/nordicirish/nextjs-dashboard",
  },
  {
    title: "Learn Languages App",
    description:
      "A vocabulary learning app. This was my first ever full-stack project. I developed it as my Tampere University course project in 2022.",
    tags: ["React", "Node.js", "Express", "MariaDB", "Bootstrap"],
    imageUrl: learnLangImg,
    gitghubUrl: "https://github.com/nordicirish/learn-languages-app",
  },
] as const;

export interface Skill {
  skill: string;
  icon: IconName; // Use SkillIdentifier type
}
// import and add icons to iconMap array in utils.ts for central control of icon names

export const skillsData: Skill[] = [
  { skill: "HTML", icon: "TiHtml5" },
  { skill: "CSS", icon: "DiCss3" },
  { skill: "JavaScript", icon: "TbBrandJavascript" },
  { skill: "React", icon: "FaReact" },
  { skill: "Next.js", icon: "RiNextjsLine" },
  { skill: "TypeScript", icon: "TbBrandTypescript" },
  { skill: "Node.js", icon: "FaNodeJs" },
  { skill: "Git", icon: "FaGitAlt" },
  { skill: "Tailwind", icon: "RiTailwindCssLine" },
  { skill: "Vue", icon: "FaVuejs" },
  { skill: "Prisma", icon: "SiPrisma" },
  { skill: "MongoDB", icon: "SiMongodb" },
  { skill: "PostgreSQL", icon: "SiPostgresql" },
  { skill: "OpenAI", icon: "SiOpenai" },
  { skill: "Express", icon: "SiExpress" },
  { skill: "Framer", icon: "SiFramer" },
  { skill: "AWS", icon: "SiAmazonaws" },
  { skill: "Azure", icon: "SiMicrosoftazure" },
  { skill: "Scrum", icon: "SiScrumalliance" },
  { skill: "Vercel", icon: "SiVercel" },
] as const;
