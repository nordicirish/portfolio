import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

// lib/icons.ts
import { TiHtml5 } from "react-icons/ti";
import { DiCss3 } from "react-icons/di";
import { TbBrandJavascript, TbBrandTypescript } from "react-icons/tb";
import { FaReact, FaNodeJs, FaGitAlt, FaVuejs } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssLine } from "react-icons/ri";
import {
  SiPrisma,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
  SiExpress,
  SiFramer,
  SiAmazonaws,
  SiMicrosoftazure,
   SiOpenai,
  SiScrumalliance,
  SiVercel,
} from "react-icons/si";

// Create a central import and mapping of icon names to components
export const iconMap = {
  TiHtml5,
  DiCss3,
  TbBrandJavascript,
  TbBrandTypescript,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaVuejs,
  RiNextjsLine,
  RiTailwindCssLine,
  SiPrisma,
  SiMongodb,
  SiPostgresql,
  SiOpenai,
  SiExpress,
  SiFramer,
  SiAmazonaws,
  SiMicrosoftazure,
  SiScrumalliance,
  SiVercel,
} as const;
// Extract the keys for typing purposes
export type IconName = keyof typeof iconMap;
