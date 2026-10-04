import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SettleFaq } from "@/features/settle/settle-faq";
import { SettleMethods } from "@/features/settle/settle-methods";
import { SettleSection } from "@/features/settle/settle-section";

export const metadata: Metadata = {
  title: "Settle Africa – Insolify",
  description:
    "Settle Africa is Insolify’s payments rail for fast, low-fee transfers across Africa and beyond.",
};

export default function SettlePage() {
  return (
    <div
      id="top"
      className="flex flex-1 flex-col bg-[#f5f6f8] text-[#2b2b2b] dark:bg-[#0c0c0f] dark:text-[#ededed]"
    >
      <SiteNav />
      <main className="pt-6 lg:pt-4">
        <SettleSection />
        <SettleMethods />
        <SettleFaq />
      </main>
      <SiteFooter />
    </div>
  );
}
