import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { FincoreFaq } from "@/features/fincore/fincore-faq";
import { FincoreModules } from "@/features/fincore/fincore-modules";
import { FincoreSection } from "@/features/fincore/fincore-section";

export const metadata: Metadata = {
  title: "Fincore – Insolify",
  description:
    "Fincore is Insolify’s modular core banking platform for microfinance banks, fintechs, and finance houses.",
};

export default function FincorePage() {
  return (
    <div
      id="top"
      className="flex flex-1 flex-col bg-[#f5f6f8] text-[#2b2b2b] dark:bg-[#0c0c0f] dark:text-[#ededed]"
    >
      <SiteNav />
      <main className="pt-6 lg:pt-4">
        <FincoreSection />
        <FincoreModules />
        <FincoreFaq />
      </main>
      <SiteFooter />
    </div>
  );
}
