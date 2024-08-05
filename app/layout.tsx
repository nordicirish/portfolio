import Header from "@/components/header";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import ActiveSectionContextProvider from "@/context/active-section";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "@/context/theme-context";
import { GoogleAnalytics } from "@next/third-parties/google";

const font = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roger Graham's Portfolio",
  description:
    "Roger Graham is a full-stack developer based in Tampere, Finland, with experience in React, Next.js, Vue, TypeScript, Tailwind, Prisma, PostgreSQL, AWS, Azure, Vercel, Scrum and more...",
};
const ThemeSwitch = dynamic(() => import("@/components/theme-switch"), {
  ssr: false,
});

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
        {/* top gradient background tailwind custom attributes */}
        <div className="bg-amber-200 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-sky-200 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <GoogleAnalytics gaId="G-D7FMKJP2TK" />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
