"use client";
import React from "react";
import { motion } from "framer-motion";

export default function IntroText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {" "}
      <h1 className="mt-6 text-3xl font-bold !leading-[1.3] sm:text-4xl dark:text-white">
        Hello, I'm Roger Graham
      </h1>
      <p className="mt-4 mb-10 px-4 text-lg font-medium !leading-relaxed text-gray-700 dark:text-gray-300 sm:text-xl">
        I'm a{" "}
        <span className="font-bold text-blue-600 dark:text-blue-400">
          full-stack developer
        </span>{" "}
        specializing in{" "}
        <span className="font-bold text-blue-600 dark:text-blue-400">
          React, Next.js, TypeScript, Tailwind, Prisma, PostgreSQL, AWS, Azure,
          Vercel, Scrum
        </span>{" "}
        and more...
      </p>
    </motion.div>
  );
}
