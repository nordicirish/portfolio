import Header from "@/components/header";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "@/context/theme-context";
import { Analytics } from "@vercel/analytics/react";
import { lazy, Suspense } from "react";
import ThemeSwitch from "@/components/theme-switch";
import BackgroundDivs from "@/components/background-divs";

// Lazy load the BackgroundDivs component

const font = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Roger Graham | Full-Stack Developer in Tampere, Finland | Available for Hire",
  description:
    "Roger Graham is a skilled full-stack developer based in Tampere, Finland, with expertise in React, Next.js, Vue, TypeScript, Tailwind, Prisma, and more. Available for hire, Roger offers a strong background in cloud technologies like AWS and Azure, with experience in agile methodologies like Scrum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${font.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <BackgroundDivs />
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Analytics />
            <Suspense fallback={<div>Loading Message...</div>}>
              <Toaster position="top-right" />
            </Suspense>
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
