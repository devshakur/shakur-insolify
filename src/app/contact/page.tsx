import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { ContactFaq } from "@/features/contact/contact-faq";
import { ContactSection } from "@/features/contact/contact-section";

export const metadata: Metadata = {
  title: "Contact – Insolify",
  description:
    "Get in touch with Insolify. Email sales, book a meeting, or send a message from our Abuja headquarters.",
};

export default function ContactPage() {
  return (
    <div
      id="top"
      className="flex flex-1 flex-col bg-[#f5f6f8] text-[#2b2b2b] dark:bg-[#0c0c0f] dark:text-[#ededed]"
    >
      <main className="pt-6 lg:pt-4">
        <ContactSection />
        <ContactFaq />
      </main>
      <SiteFooter />
    </div>
  );
}
