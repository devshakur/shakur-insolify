import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SafiCapabilities } from "@/features/safi/safi-capabilities";
import { SafiFaq } from "@/features/safi/safi-faq";
import { SafiSection } from "@/features/safi/safi-section";

export const metadata: Metadata = {
  title: "Safi AI – Insolify",
  description:
    "Safi is Insolify’s intelligent assistant for support, meetings, research, and fraud checks.",
};

export default function SafiPage() {
  return (
    <div
      id="top"
      className="flex flex-1 flex-col bg-[#f5f6f8] text-[#2b2b2b] dark:bg-[#0c0c0f] dark:text-[#ededed]"
    >
      <SiteNav />
      <main className="pt-6 lg:pt-4">
        <SafiSection />
        <SafiCapabilities />
        <SafiFaq />
      </main>
      <SiteFooter />
    </div>
  );
}
