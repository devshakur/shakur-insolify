import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { TverifyFaq } from "@/features/tverify/tverify-faq";
import { TverifySection } from "@/features/tverify/tverify-section";

export const metadata: Metadata = {
  title: "TVerify – Insolify",
  description:
    "Track any transfer. Look up settlement status with a transaction reference or upload a receipt.",
};

export default function TverifyPage() {
  return (
    <div
      id="top"
      className="flex flex-1 flex-col bg-[#f5f6f8] text-[#2b2b2b] dark:bg-[#0c0c0f] dark:text-[#ededed]"
    >
      <main className="pt-6 lg:pt-4">
        <TverifySection />
        <TverifyFaq />
      </main>
      <SiteFooter />
    </div>
  );
}
