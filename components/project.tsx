"use client";

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
  gitghubUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      className="group mb-8 md:mb-12 last:mb-0 w-full max-w-[52rem]"
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <a
        href={gitghubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${title} project on Github`}
        className="cursor-pointer"
      >
        <section className="flex flex-col md:flex-row bg-gray-50 border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-100 transition text-blue-700 dark:text-blue-400 dark:bg-white/10 dark:hover:bg-white/20 shadow-light-mode dark:shadow-dark-mode group-even:md:flex-row-reverse gap-4 pt-7 pb-6">
          <div className="flex-1 pb-4 px-4 md:pb-0 md:pt-0 flex flex-col h-full md:max-w-[35%]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 mb-2 leading-relaxed text-gray-900 dark:text-gray-200">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2">
              {tags.map((tag, index) => (
                <li
                  className="bg-teal-800 dark:bg-teal-900 text-gray-100 dark:text-gray-50 px-3 py-1 text-[0.8rem] uppercase tracking-wider rounded-full"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 md:flex md:items-center pl-6 pr-6 md:justify-center group-even:md:pr-6 group-even:md:pl-0 group-odd:md:pl-6 group-odd:md:pr-0">
            <div className="w-full h-[18rem] md:h-[20rem] relative group-even:md:translate-x-6 group-odd:md:-translate-x-6 ">
              <Image
                className="object-cover  object-left-top rounded-lg shadow-2xl 
                  transition 
                  md:group-hover:scale-[1.04] 
                  group-hover:-translate-y-[2%] 
                  group-hover:rotate-1
                  group-even:group-hover:translate-x-[2%]
                  group-even:group-hover:rotate-1
                  group-odd:group-hover:-translate-x-[2%]
                  group-odd:group-hover:-rotate-1"
                src={imageUrl}
                alt={`Screenshot of ${title}. A project that I coded`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={95}
                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk2PHfGAAEYwHsXvURPgAAAABJRU5ErkJggg=="
                placeholder="blur"
              />
            </div>
          </div>
        </section>
      </a>
    </motion.div>
  );
}
