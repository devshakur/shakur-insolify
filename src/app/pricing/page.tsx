import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { PricingFaq } from "@/features/pricing/pricing-faq";
import { PricingSection } from "@/features/pricing/pricing-section";

export const metadata: Metadata = {
  title: "Pricing – Insolify",
  description:
    "Yearly plans for Fincore, Safi AI, and Settle Africa. Compare Starter, Growth, and Complete.",
};

export default function PricingPage() {
  return (
    <div
      id="top"
      className="flex flex-1 flex-col bg-[#f5f6f8] text-[#2b2b2b] dark:bg-[#0c0c0f] dark:text-[#ededed]"
    >
      <main className="pt-6 lg:pt-4">
        <PricingSection />
        <PricingFaq />
      </main>
      <SiteFooter />
    </div>
  );
}
