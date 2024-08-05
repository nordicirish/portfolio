import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="max-w-[42rem] w-full text-3xl font-medium capitalize mb-8 mx-auto text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 dark:from-gray-100 dark:to-gray-400 tracking-wide leading-tight px-4 border-b-2 border-blue-700 dark:border-gray-400">
      {children}
    </h2>
  );
}
