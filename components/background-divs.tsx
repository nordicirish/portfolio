import React from "react";

const BackgroundDivs: React.FC = () => {
  return (
    <>
      <div className="bg-cyan-500/10 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-purple-800"></div>
      <div className="bg-blue-500/10 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-teal-800"></div>
    </>
  );
};

export default BackgroundDivs;
