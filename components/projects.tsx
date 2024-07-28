"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="relative">
      <SectionHeading>Projects</SectionHeading>
      <div className="scroll-mt-28 mb-28 ">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
//typeof obtains the types of individual elements projectsData objects array
type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <section className="group bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 mb-3 sm:mb-8 last:mb-0">
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
  );
}
