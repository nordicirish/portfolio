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
  gitghubUrl,
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
      className="group mb-8 md:mb-12 last:mb-0 flex w-full max-w-[52rem]"
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <a
        href={gitghubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View ${title} project on Github"
        className="cursor-pointer"
      >
        <section className="flex flex-col-reverse md:flex-row bg-gray-50 border border-black/5 rounded-lg overflow-hidden md:pr-8 relative md:h-[20rem] hover:bg-gray-100 transition md:group-even:pl-20 text-blue-700 dark:text-blue-400 dark:bg-white/10 dark:hover:bg-white/20 shadow-light-mode dark:shadow-dark-mode">
          <div className="pt-8 pb-7 px-5 pl-14 md:pr-2 md:pt-10 flex flex-col h-full md:max-w-[50%] md:group-even:ml-[20rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            {/* leading-relaxed allows for line breaks */}
            <p className="mt-2 mb-2 leading-relaxed text-gray-900 dark:text-gray-200">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 md:mt-auto items-center justify-center">
              {tags.map((tag, index) => (
                <li
                  className=" bg-teal-800 dark:bg-teal-900 text-gray-100 dark:text-gray-50 px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <Image
            className="w-auto h-[22rem] p-8 md:p-0 object-cover object-top md:h-auto md:w-[34.25rem] md:absolute top-8 -right-44 rounded-t-lg shadow-2xl
          md:group-even:right-[initial] md:group-even:-left-44
          md:group-hover:-translate-x-3
          md:group-hover:translate-y-3
          md:group-hover:rotate-2
          group-hover:scale-105
          md:group-hover:scale-105
          md:group-even:group-hover:translate x-3
          md:group-even:group-hover:translate y-3
          md:group-even:group-hover:rotate-2
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
      </a>
    </motion.div>
  );
}
