import React from "react";
import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="flex flex-col  justify-center items-center relative">
      <div className="absolute rounded-full w-44 h-44 bg-gradient-to-r from-cyan-500 from-10% via-blue-700 via-50% to-cyan-500 to-90% dark:from-cyan-400 dark:from-10% dark:via-blue-400 dark:via-50% dark:to-cyan-400 dark:to-90% p-1 z-1 blur-sm shadow-lg">
        {/* background element with blur effect */}
      </div>
      <Image
        src="/profile.png"
        alt="Roger Graham portrait photo"
        width={176}
        height={176}
        quality="95"
        priority={true}
        className="h-44 w-44 rounded-full z-2 relative"
      />
    </div>
  );
}
