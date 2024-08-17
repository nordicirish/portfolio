import Header from "@/components/header";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import ActiveSectionContextProvider from "@/context/active-section";
// import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "@/context/theme-context";


// import { Analytics } from "@vercel/analytics/react";

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
const ThemeSwitch = dynamic(() => import("@/components/theme-switch"), {
  ssr: false,
});
const Toaster = dynamic(
  () => import("react-hot-toast").then((mod) => mod.Toaster),
  {
    ssr: false,
  }
);

// .then((mod) => mod.Analytics) part is a callback function that is called when the Promise is resolved. The mod parameter is the resolved module, and mod.Analytics is accessing the Analytics component from the module

const Analytics = dynamic(() => import("@vercel/analytics/react").then((mod) => mod.Analytics), { ssr: false });


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
        <div className="bg-cyan-500/10 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-purple-800"></div>
        <div className="bg-blue-500/10 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-teal-800"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Analytics  />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
