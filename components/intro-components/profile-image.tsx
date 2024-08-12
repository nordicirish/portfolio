"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileImage() {
  return (
    <motion.div
      className="flex items-center justify-center relative"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "tween", duration: 0.2 }}
    >
      <Image
        src="/profile.png"
        alt="Roger Graham portrait photo"
        width={192}
        height={192}
        quality="95"
        priority={true}
        blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk2PHfGAAEYwHsXvURPgAAAABJRU5ErkJggg=="
        placeholder="blur"
        className="h-32 w-32 rounded-full border-[0.25rem] border-gradient-to-r from-blue-500 to-blue-700 object-cover shadow-lg dark:border-gradient-to-r dark:from-gray-700 dark:to-gray-500"
      />
    </motion.div>
  );
}
