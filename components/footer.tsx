import React from "react";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center mb-10 px-4 text-center text-gray-500 dark:text-gray-300">
      <small className="mb-2 test-xs block">
        Copyright &copy; 2024 Roger. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">This website </span> is built with React
        & Next.js (App Router & Server Actions), Typescript, Tailwind CSS,
        Framer Motion, React Email & Resend.
      </p>
      <p className="text-xs">Hosted on Vercel.</p>
    </footer>
  );
}
