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
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>My Experience</SectionHeading>
      {/* lineColor="" to avoid browser warning */}
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === "light"
                    ? "rgb(226 232 240)"
                    : "rgba(255, 255, 255, 0.05)",
                boxShadow:
                  theme === "light"
                    ? "0px 4px 10px rgba(255, 215, 0, 0.5)" // Gold drop shadow for light mode
                    : "0px 4px 10px rgba(0, 0, 0, 0.5)", // Dark mode drop shadow
                border:
                  theme === "light" // Light mode border
                    ? "2px solid gold" // Gold border
                    : "2px solid rgba(0, 0, 0, 0.5)", // Dark mode border
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid gold" // Gold arrow for light mode
                    : "0.4rem solid rgba(255, 255, 255, 0.5)", // Arrow color for dark mode
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "gold" : "#1C2432",
                border:
                  theme === "light" ? "2px solid gold" : "2px solid #1C2432",
                boxShadow:
                  theme === "light"
                    ? "0px 4px 10px rgba(255, 215, 0, 0.5)" // Gold drop shadow for light mode
                    : "0px 4px 10px rgba(0, 0, 0, 0.5)", // Dark mode drop shadow
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </SectionWithRef>
  );
}
