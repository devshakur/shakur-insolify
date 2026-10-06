import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { getStatusPayload } from "@/features/status/status-data";
import { StatusSection } from "@/features/status/status-section";

export const metadata: Metadata = {
  title: "Status – Insolify",
  description: "System status and health checks for Fincore, Safi AI, CRM, and Settle Africa.",
};

export const dynamic = "force-dynamic";

export default async function StatusPage() {
  const payload = await getStatusPayload();

  return (
    <div
      id="top"
      className="flex flex-1 flex-col bg-[#f5f6f8] text-[#2b2b2b] dark:bg-[#0c0c0f] dark:text-[#ededed]"
    >
      <main className="pt-6 lg:pt-4">
        <StatusSection payload={payload} />
      </main>
      <SiteFooter />
    </div>
  );
}
