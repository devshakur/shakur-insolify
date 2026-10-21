import Link from "next/link";
import { getProductModules } from "@/features/pricing/modules";

const trustFeatures = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Licensed & regulated",
    body: "Compliant with central banking standards and AML/CFT frameworks in multiple countries.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 004.07 9m5.93 11a10.045 10.045 0 002.5-.312" />
      </svg>
    ),
    title: "Biometric authentication",
    body: "Every high-value transfer is authorized with hardware biometrics or device-level PIN protection.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Zero hidden FX spreads",
    body: "Transparent pricing with real mid-market exchange rates quoted before confirmation.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
      </svg>
    ),
    title: "24/7 dedicated support",
    body: "Live assistance from human support and Safi intelligence whenever you need it.",
  },
] as const;

export function SettleMethods() {
  const methods = getProductModules("settle").filter((module) => module.id !== "transfer-platform");

  return (
    <section id="trust" className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/10 px-4 py-1 text-xs font-semibold tracking-wider text-black uppercase dark:text-white">
            Built For Trust
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
            Safe by default. Engineered for speed.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
            Every transaction is safeguarded by institutional-grade compliance checks, real-time screening by Safi AI, and multi-signature authorization.
          </p>
        </div>

        {/* 4 Trust Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustFeatures.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#111111]"
            >
              <div>
                <div className="flex size-11 items-center justify-center rounded-2xl bg-black/10 dark:bg-white/10 text-black dark:text-white">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-base font-semibold text-black dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Payout Rails Catalog */}
        <div className="mt-16 rounded-3xl border border-black/10 bg-neutral-50/60 p-8 sm:p-12 dark:border-white/10 dark:bg-[#111111]">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-wider text-black dark:text-white uppercase">
                Payout Capabilities
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-black sm:text-3xl dark:text-white">
                Ways to disburse &amp; collect
              </h3>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-black hover:text-black dark:text-white transition-colors dark:text-white dark:hover:text-black dark:text-white"
            >
              View detailed pricing &amp; volume tiers &rarr;
            </Link>
          </div>

          <div className="mt-8 divide-y divide-black/5 border-y border-black/5 dark:divide-white/10 dark:border-white/10">
            {methods.map((method) => (
              <div
                key={method.id}
                className="flex flex-col justify-between gap-3 py-5 sm:flex-row sm:items-center"
              >
                <div>
                  <h4 className="text-base font-semibold text-black dark:text-white">
                    {method.name}
                  </h4>
                  <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                    {method.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {method.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-neutral-700 shadow-2xs dark:bg-neutral-800 dark:text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}