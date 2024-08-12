import React from "react";
import Image from "next/image";
import { BadgesProps } from "@/lib/types";

const Badges: React.FC<BadgesProps> = ({ badges }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-6">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="p-2 m-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer bg-gray-200 hover:bg-gray-300 border dark:border dark:border-white/10 dark:bg-gray-700 dark:hover:bg-gray-600 shadow-light-mode dark:shadow-dark-mode"
        >
          <a href={badge.href} target="_blank" rel="noopener noreferrer">
            <Image
              src={badge.src}
              alt={badge.alt}
              aria-label={badge.alt}
              className="w-12 h-12 sm:w-16 sm:h-16"
              width={75}
              height={75}
              quality={100}
              blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk2PHfGAAEYwHsXvURPgAAAABJRU5ErkJggg=="
              placeholder="blur"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Badges;
