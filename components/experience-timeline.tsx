import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface Props {
  experiencesData: any[];
  theme: string;
}

const ExperienceTimeline: React.FC<Props> = ({ experiencesData, theme }) => {
  return (
    <VerticalTimeline lineColor="">
      {experiencesData.map((item, index) => (
        <React.Fragment key={index}>
          <VerticalTimelineElement
            visible={true}
            contentStyle={{
              maxWidth: "50rem",
              background:
                theme === "light" ? "#F1F5F9" : "rgba(255, 255, 255, 0.05)",
              boxShadow:
                theme === "light"
                  ? "0px 4px 10px #3498db"
                  : "0px 4px 10px rgba(0, 0, 0, 0.5)", // Dark mode drop shadow
              border:
                theme === "light" // Light mode border
                  ? "2px solid #4ade80" //
                  : "2px solid rgba(0, 0, 0, 0.5)", // Dark mode border
              textAlign: "left",
              padding: "1.3rem 2rem",
              fontSize: "1rem",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.6rem solid #3498db" //  arrow for light mode
                  : "0.6rem solid rgba(255, 255, 255, 0.05)", // Arrow color for dark mode
            }}
            date={item.date}
            // inject a custom className for the
            dateClassName="xl:mx-2 mx-0"
            icon={item.icon}
            iconStyle={{
              background: theme === "light" ? "#F1F5F9" : "#1C2432",
              border:
                theme === "light" ? "2px solid #4ade80" : "2px solid #1C2432",
              boxShadow:
                theme === "light"
                  ? "0px 4px 10px #3498db"
                  : "0px 4px 10px rgba(0, 0, 0, 0.5)", // Dark mode drop shadow
              fontSize: "1.5rem",
              color: theme === "light" ? "#15803d" : "#e5e7eb",
            }}
          >
            <h3 className="font-semibold capitalize text-lg text-blue-700 dark:text-blue-400">
              {item.title}
            </h3>
            <p className="font-normal !mt-0 text-green-700 dark:text-green-400">
              {item.location}
            </p>
            <p className="!mt-1 !font-normal text-lg text-gray-900 dark:text-gray-200">
              {item.description}
            </p>
          </VerticalTimelineElement>
        </React.Fragment>
      ))}
    </VerticalTimeline>
  );
};

export default ExperienceTimeline;
