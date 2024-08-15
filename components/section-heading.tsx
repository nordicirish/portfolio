import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    // text-transparent bg-clip-text bg-gradient-to-r from-sky-500 from-10% via-blue-700 via-50% to-sky-500 to to-90%
    //  border-blue-700 dark:border-gray-400
    <h2 className="max-w-[42rem] w-full text-3xl font-medium capitalize mb-12 sm:mb-16 mx-auto text-center text-blue-700 dark:text-gray-200 tracking-wide leading-tight px-4 relative">
      {children}
      <span className="absolute bottom-[-0.2rem] left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 from-10% via-blue-700 via-50% to-cyan-500 to-90% dark:from-gray-700 dark:from-10% dark:via-gray-200 dark:via-50% dark:to-gray-700 dark:to-90%"></span>
    </h2>
  );
}
