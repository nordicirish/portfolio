"use client";
import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useTheme } from "@/context/theme-context";
import SectionWithRef from "./section-with-ref";

export default function Experience() {
  const { theme } = useTheme();
  return (
    // id needs to match SectionName type and value in lib\types.ts
    // threshold ensures menu item only changes when section is 50% visible
    // if threshold value provided default value of 0.75
    <SectionWithRef
      id="Experience"
      threshold={0.5}
      className="scroll-mt-28 mb-28 sm:mb-32 max-w-[53rem]"
      initial={{ opacity: 0, x: 100 }}
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.35,
          duration: 1,
          ease: "easeInOut",
        },
      }}
    >
      <SectionHeading>My Experience</SectionHeading>
      {/* lineColor="" to avoid browser warning */}

      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                maxWidth: "53rem",
                background:
                  theme === "light" ? "#F1F5F9" : "rgba(255, 255, 255, 0.05)",
                boxShadow:
                  theme === "light"
                    ? "0px 4px 10px #2D9EE5" // Gold drop shadow for light mode
                    : "0px 4px 10px rgba(0, 0, 0, 0.5)", // Dark mode drop shadow
                border:
                  theme === "light" // Light mode border
                    ? "2px solid #2D9EE5" //
                    : "2px solid rgba(0, 0, 0, 0.5)", // Dark mode border
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #2D9EE5" // Gold arrow for light mode
                    : "0.4rem solid rgba(255, 255, 255, 0.05)", // Arrow color for dark mode
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "#2D9EE5" : "#1C2432",
                border:
                  theme === "light" ? "2px solid #2D9EE5" : "2px solid #1C2432",
                boxShadow:
                  theme === "light"
                    ? "0px 4px 10px #2D9EE5"
                    : "0px 4px 10px rgba(0, 0, 0, 0.5)", // Dark mode drop shadow
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-900 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </SectionWithRef>
  );
}
