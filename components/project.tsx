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
      className="group mb-3 sm:mb-8 last:mb-0 "
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <section className=" bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          {/* leading-relaxed allows for line breaks */}
          <p
            className="mt-2 leading-relaxed text-gray-700
        "
          >
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <Image
            className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
          group-even:right-[initial] group-even:-left-40
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:rotate-2
          group-hover:scale-105
          group-even:group-hover:translate x-3
          group-even:group-hover:translate y-3
          group-even:group-hover:rotate-2
          transition"
            src={imageUrl}
            alt="Project I coded"
            quality={95}
          />
        </div>
      </section>
    </motion.div>
  );
}
