"use client";

import { useState } from "react";

interface ModuleDetail {
  id: string;
  code: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
}

const categories = [
  { id: "core", label: "Core Ledger & Banking" },
  { id: "channels", label: "Channels & Terminals" },
  { id: "security", label: "AI Security & Compliance" },
  { id: "settlement", label: "Payments & Settlement" },
] as const;

const fincoreModules: Record<string, ModuleDetail[]> = {
  core: [
    {
      id: "core-banking",
      code: "MOD-01",
      title: "Core Banking Engine",
      tagline: "Double-entry real-time ledger core",
      description:
        "High-throughput ledger system supporting sub-millisecond multi-currency balancing, high-volume account hierarchies, and automated interest calculation schedules.",
      highlights: [
        "Real-time atomic double-entry accounting",
        "Multi-tenant & multi-currency account structures",
        "Automated end-of-day (EOD) GL balancing",
      ],
      specs: [
        { label: "Throughput", value: "10,000+ TPS" },
        { label: "Latency", value: "< 15ms" },
      ],
    },
    {
      id: "inter-banking",
      code: "MOD-02",
      title: "Inter-Banking Gateway",
      tagline: "Central bank clearing & NIBSS rails",
      description:
        "Direct integration with institutional settlement networks, clearing houses, and inter-bank messaging protocols for zero-loss fund transfers.",
      highlights: [
        "Direct RTGS and Instant Payment (NIP) connectivity",
        "Automated dispute handling & chargeback queues",
        "ISO 20022 messaging compliance",
      ],
      specs: [
        { label: "Uptime SLA", value: "99.99%" },
        { label: "Protocol", value: "ISO 20022 / REST" },
      ],
    },
    {
      id: "virtual-banking",
      code: "MOD-03",
      title: "Virtual Account Engine",
      tagline: "Dynamic sub-accounts & collection rails",
      description:
        "Instant generation of dynamic virtual accounts for automated merchant collections, escrow flows, and programmatic wallet structures.",
      highlights: [
        "Programmable webhook-driven credit notifications",
        "Unlimited virtual account generation at zero overhead",
        "Automatic routing to parent corporate ledgers",
      ],
      specs: [
        { label: "Creation Speed", value: "< 200ms" },
        { label: "Format", value: "Dedicated / Dynamic" },
      ],
    },
  ],
  channels: [
    {
      id: "ussd-banking",
      code: "MOD-04",
      title: "USSD Banking Gateway",
      tagline: "Offline telecom financial access",
      description:
        "Low-latency USSD session manager supporting telco shortcodes, feature-phone menus, offline PIN authentication, and low-bandwidth balance checks.",
      highlights: [
        "Multi-telco aggregator routing (MTN, Airtel, Glo, 9mobile)",
        "Fail-over session persistence for flaky network coverage",
        "Customizable multi-step USSD menu builder",
      ],
      specs: [
        { label: "Session Time", value: "< 1.2s" },
        { label: "Network Access", value: "USSD / Shortcode" },
      ],
    },
    {
      id: "pos-module",
      code: "MOD-05",
      title: "POS Terminal Engine",
      tagline: "Agent banking & card terminal gateway",
      description:
        "Enterprise terminal management system for Android & Linux POS devices, supporting ISO 8583 card processing, agency banking cash-in/cash-out, and receipt printing.",
      highlights: [
        "EMV L1/L2 contact and contactless payment processing",
        "Agent commission float management & instant settlement",
        "Remote terminal configuration & OTA firmware updates",
      ],
      specs: [
        { label: "Standards", value: "EMV / PCI-PTS" },
        { label: "Terminal OS", value: "Android / Linux" },
      ],
    },
    {
      id: "internet-banking",
      code: "MOD-06",
      title: "Digital & Mobile Channels",
      tagline: "White-label web & mobile applications",
      description:
        "Ready to deploy web and mobile banking interfaces engineered with high security, biometric login, corporate multi-sign approvals, and transfer limits.",
      highlights: [
        "Multi-tier approval workflows for corporate clients",
        "Biometric authentication & hardware token MFA",
        "Custom white-label branding customization",
      ],
      specs: [
        { label: "Security", value: "FIDO2 / OWASP Tier-1" },
        { label: "SDKs", value: "React Native / Flutter" },
      ],
    },
  ],
  security: [
    {
      id: "safi-fraud",
      code: "MOD-07",
      title: "SAFI AI Fraud Detection",
      tagline: "Autonomous transaction risk engine",
      description:
        "Machine learning models evaluating payment telemetry in real time to detect account takeover, velocity anomalies, and money laundering patterns.",
      highlights: [
        "In-flight transaction scoring before ledger posting",
        "Device fingerprinting & geo-velocity anomaly alerts",
        "Automated account hold on high-risk triggers",
      ],
      specs: [
        { label: "Inference Time", value: "< 12ms" },
        { label: "False Positive", value: "< 0.01%" },
      ],
    },
    {
      id: "regulatory-reporting",
      code: "MOD-08",
      title: "Compliance & Regulatory Reporting",
      tagline: "Central bank regulatory compliance",
      description:
        "Automated reporting engine generating mandated regulatory schedules (CBN, NDIC, FIU) directly from immutable core ledger snapshots.",
      highlights: [
        "One-click CBN eFASS regulatory export generation",
        "Automated CTR (Cash Transaction Report) & STR filing alerts",
        "Real-time NDIC premium and liquidity ratio tracking",
      ],
      specs: [
        { label: "Audit Standard", value: "SOC 2 Type II" },
        { label: "Export", value: "XML / CSV / PDF" },
      ],
    },
  ],
  settlement: [
    {
      id: "settle-africa",
      code: "MOD-09",
      title: "Settle Africa Cross-Border Rail",
      tagline: "Pan-African settlement & remittance",
      description:
        "Integrated liquidity corridor enabling cross-border payments, currency exchange, mobile money payouts, and instant cash pickup across Africa.",
      highlights: [
        "Real-time foreign exchange rate lock & upfront fee display",
        "Direct API hooks for mobile money (M-Pesa, Orange, MTN MoMo)",
        "TVerify receipt tracking with deterministic audit reference",
      ],
      specs: [
        { label: "Settlement", value: "Instant / T+0" },
        { label: "Corridors", value: "24+ African Nations" },
      ],
    },
  ],
};

export function FincoreCapabilities() {
  const [activeTab, setActiveTab] = useState<(typeof categories)[number]["id"]>("core");
  const [selectedModule, setSelectedModule] = useState<ModuleDetail>(
    fincoreModules.core[0]
  );

  const handleTabChange = (tabId: (typeof categories)[number]["id"]) => {
    setActiveTab(tabId);
    setSelectedModule(fincoreModules[tabId][0]);
  };

  return (
    <section
      id="capabilities"
      className="bg-white px-4 py-5 text-black sm:px-6 sm:py-24 lg:px-8 dark:bg-black dark:text-white"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-black/10 pb-8 lg:flex-row lg:items-end lg:justify-between dark:border-white/15">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-black dark:bg-white" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6d6d6d] dark:text-white/60">
                Modular Architecture
              </p>
            </div>
            <h2 className="mt-2 text-xl font-extrabold tracking-tight sm:text-3xl">
              Fincore System Capabilities
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#5c5c5c] dark:text-[#b5b5b5]">
            Architected for institutional banks, MFBs, and high-scale FinTechs. Deploy the full unified system or enable specific core modules via high-performance APIs.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleTabChange(cat.id)}
                className={`rounded-xl px-5 py-2.5 text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "border border-black/10 bg-black/2 text-[#5c5c5c] hover:border-black/30 hover:text-black dark:border-white/15 dark:bg-white/3 dark:text-white/70 dark:hover:border-white/40 dark:hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Capabilities Grid */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Module Selector List (Left Col - 5 Cols) */}
          <div className="space-y-3 lg:col-span-5">
            {fincoreModules[activeTab].map((mod) => {
              const isSelected = selectedModule.id === mod.id;
              return (
                <div
                  key={mod.id}
                  onClick={() => setSelectedModule(mod)}
                  className={`group relative cursor-pointer rounded-2xl border p-5 transition-all duration-200 ${
                    isSelected
                      ? "border-black bg-black/3 shadow-sm dark:border-white dark:bg-white/5"
                      : "border-black/10 bg-white hover:border-black/30 dark:border-white/10 dark:bg-black dark:hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6d6d6d] dark:text-white/50">
                      {mod.code}
                    </span>
                    <span
                      className={`text-xs font-medium ${
                        isSelected
                          ? "text-black dark:text-white"
                          : "text-[#8c8c8c] group-hover:text-black dark:text-white/40 dark:group-hover:text-white"
                      }`}
                    >
                      {isSelected ? "Active View →" : "View Specs"}
                    </span>
                  </div>
                  <h3 className="mt-1.5 text-base font-bold tracking-tight">
                    {mod.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#5c5c5c] dark:text-white/70">
                    {mod.tagline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Module Inspector Canvas (Right Col - 7 Cols) */}
          <div className="rounded-3xl border border-black/10 bg-black/2 p-6 sm:p-8 lg:col-span-7 dark:border-white/15 dark:bg-white/2">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 pb-5 dark:border-white/10">
              <div>
                <span className="rounded-md border border-black/20 bg-white px-2.5 py-1 text-[11px] font-mono font-bold text-black dark:border-white/30 dark:bg-black dark:text-white">
                  {selectedModule.code}
                </span>
                <h3 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">
                  {selectedModule.title}
                </h3>
              </div>

              {/* Live Metric Badges */}
              <div className="flex gap-4">
                {selectedModule.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-xl border border-black/10 bg-white p-2.5 text-right dark:border-white/10 dark:bg-black"
                  >
                    <div className="text-[10px] uppercase tracking-wider text-[#6d6d6d] dark:text-white/50">
                      {spec.label}
                    </div>
                    <div className="text-xs font-mono font-bold text-black dark:text-white">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-5 text-xs sm:text-sm leading-6 text-[#404040] dark:text-white/80">
              {selectedModule.description}
            </p>

            {/* Feature Highlights Checklist */}
            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">
                Technical Highlights
              </h4>
              <ul className="mt-3 space-y-2.5">
                {selectedModule.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-xs text-[#404040] dark:text-[#d4d4d4]"
                  >
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white dark:bg-white dark:text-black">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Architecture Console Preview */}
            <div className="mt-8 rounded-2xl border border-black/15 bg-white p-4 font-mono text-[11px] dark:border-white/20 dark:bg-black">
              <div className="flex items-center justify-between border-b border-black/10 pb-2 text-[#6d6d6d] dark:border-white/10 dark:text-white/50">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>SYSTEM_STATUS: OPERATIONAL</span>
                </div>
                <span>REST / gRPC ENDPOINT</span>
              </div>
              <div className="mt-3 space-y-1 text-[#333333] dark:text-[#e5e5e5]">
                <p>
                  <span className="text-[#6d6d6d] dark:text-white/40">GET</span>{" "}
                  /api/v2/fincore/{selectedModule.id}/telemetry
                </p>
                <p className="text-[#059669] dark:text-[#34d399]">
                  → 200 OK (Latency: 8ms | Encryption: AES-256-GCM)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}