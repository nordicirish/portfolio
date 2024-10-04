import React from "react";
import Image from "next/image";
import { BadgesProps } from "@/lib/types";

const Badge: React.FC<BadgesProps> = ({ href, src, alt }) => {
  return (
    <div className="p-2 m-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-110 transition cursor-pointer bg-gray-200 hover:bg-gray-300 border dark:border dark:border-white/10 dark:bg-gray-700 dark:hover:bg-gray-600 shadow-light-mode dark:shadow-dark-mode">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Image
          src={src}
          alt={alt}
          aria-label={alt}
          className="w-14 h-14 sm:w-16 sm:h-16"
          width={75}
          height={75}
          quality={100}
          blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk2PHfGAAEYwHsXvURPgAAAABJRU5ErkJggg=="
          placeholder="blur"
        />
      </a>
    </div>
  );
};

export default Badge;
