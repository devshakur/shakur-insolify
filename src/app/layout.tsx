import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { SiteNav } from "@/components/site-nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Insolify",
  description:
    "A unique and powerful software suite to transform the way you work. Designed for businesses of all sizes, built by a company that values your privacy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-[#2b2b2b] dark:bg-[#0c0c0f] dark:text-[#ededed]">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(!localStorage.getItem("theme-default")){localStorage.setItem("theme","light");localStorage.setItem("theme-default","light")}document.documentElement.classList.toggle("dark",localStorage.getItem("theme")==="dark")}catch(e){}`,
          }}
        />
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
