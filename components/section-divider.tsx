"use client";
import React from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/lib/hooks";

export default function SectionDivider() {
  const isMobile = useIsMobile();
  if (!isMobile) {
    return (
      <motion.div
        className="bg-gradient-to-b from-cyan-500 from-10% via-blue-700 via-50% to-cyan-500 to-90% dark:from-cyan-400 dark:from-10% dark:via-blue-400 dark:via-50% dark:to-cyan-400 dark:to-90% my-24 h-16 w-1 rounded-full hidden sm:block"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
      ></motion.div>
    );
  }

  // If isMobile is true, the function will return undefined
}
