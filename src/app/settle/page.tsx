import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SettleSection } from "@/features/settle/settle-section";
import { SettleFeatures } from "@/features/settle/settle-features";
import { SettleCorridors } from "@/features/settle/settle-corridors";
import { SettleHowItWorks } from "@/features/settle/settle-how-it-works";
import { SettleMethods } from "@/features/settle/settle-methods";
import { SettleEcosystem } from "@/features/settle/settle-ecosystem";
import { SettleMobileApp } from "@/features/settle/settle-app";
import { SettleFaq } from "@/features/settle/settle-faq";
import { SettleCta } from "@/features/settle/settle-cta";

export const metadata: Metadata = {
  title: "Settle Africa – Payments across Africa | Insolify",
  description:
    "A modern payments engine and application for seamless cross-border settlement, transparent FX, and connected finances across Africa.",
  openGraph: {
    title: "Settle Africa – Payments across Africa | Insolify",
    description:
      "A consumer financial application and institutional payments rail for fast, transparent transfers across Africa and beyond.",
  },
};

export default function SettlePage() {
  return (
    <div
      id="top"
      className="flex flex-1 flex-col bg-[#fcfcfd] text-[#1a1a1a] transition-colors duration-300 dark:bg-[#0c0c0f] dark:text-[#ededed]"
    >
      <main className="flex w-full flex-col pt-4">
        {/* Hero with live preview simulator */}
        <SettleSection />

        {/* 6 Core Capabilities */}
        <SettleFeatures />

        {/* Interactive Cross-Border Corridors with Animated Visualizer */}
        <SettleCorridors />

        {/* How It Works & In-Flight Simulation */}
        <SettleHowItWorks />

        {/* Trust, Security, & Payout Rails */}
        <SettleMethods />

        {/* Insolify 4-Core Product Ecosystem */}
        <SettleEcosystem />

        {/* Mobile App & Operations Hub */}
        <SettleMobileApp />

        {/* FAQ Accordion */}
        <SettleFaq />

        {/* Closing Conversion Banner */}
        <SettleCta />
      </main>
      <SiteFooter />
    </div>
  );
}
