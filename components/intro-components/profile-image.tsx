import React from "react";
import Image from "next/image";

export default function ProfileImage() {
  return (
    <Image
      src="/profile.png"
      alt="Roger Graham portrait photo"
      width={176}
      height={176}
      quality="95"
      priority={true}
      blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk2PHfGAAEYwHsXvURPgAAAABJRU5ErkJggg=="
      placeholder="blur"
      className="h-44 w-44 rounded-full object-cover border-[0.35rem] border-white/40 shadow-xl "
    />
  );
}
