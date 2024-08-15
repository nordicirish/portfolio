"use client";

//typeof obtains the types of individual elements projectsData objects array
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    // target is where the animation should start
    target: ref,
    // offset is how far from the target the animation should start and end. Ends when bottom of the viewport has gone 33% beyond the end of the target
    offset: ["0 1", "1.33 1"],
  });
  // scale starts at 0.8 and ends at 1 so animation is not as exaggerated
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  // opacity starts at 0.6 and ends at 1 so animation is not as exaggerated
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    //need to use enclosing div so animation is smooth
    <motion.div
      className="group mb-3 sm:mb-8 last:mb-0 flex w-full max-w[42rem]"
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <section
        className="flex flex-col-reverse sm:flex-row bg-gray-50 border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-100 transition sm:group-even:pl-8 text-gray-900
       dark:text-white dark:bg-white/10 dark:hover:bg-white/20 shadow-light-mode dark:shadow-dark-mode"
      >
        <div className="pt-4 pb-7 px-5 pl-10 sm:pr-2 sm:pt-10 flex flex-col h-full sm:max-w-[50%] sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          {/* leading-relaxed allows for line breaks */}
          <p className="mt-2 mb-2 leading-relaxed text-gray-900 dark:text-gray-200">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-slate-950 text-gray-100 px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full dark:bg-slate-100 dark:text-gray-950"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          className="w-auto h-auto sm:w-[28.25rem] sm:absolute top-8 -right-40 rounded-t-lg shadow-2xl
          sm:group-even:right-[initial] sm:group-even:-left-40
          sm:group-hover:-translate-x-3
          sm:group-hover:translate-y-3
          sm:group-hover:rotate-2
          group-hover:scale-105
          sm:group-even:group-hover:translate x-3
          sm:group-even:group-hover:translate y-3
          sm:group-even:group-hover:rotate-2
          transition"
          src={imageUrl}
          alt={`Screenshot of ${title}. A project that I coded`}
          width={452}
          height={300}
          quality={95}
          blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk2PHfGAAEYwHsXvURPgAAAABJRU5ErkJggg=="
          placeholder="blur"
        />
      </section>
    </motion.div>
  );
}
