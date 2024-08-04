import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center text-blue-900 dark:text-gray-50 dark:text-opacity-90">
      {children}
    </h2>
  );
}
