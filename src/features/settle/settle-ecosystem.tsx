import Link from "next/link";

const ecosystemProducts = [
  {
    name: "FinCore",
    tagline: "Core Banking Engine",
    description: "Modular ledger, multi-currency accounts, lending workflows, and regulatory compliance.",
    href: "/fincore",
    highlight: false,
    badge: "Banking Core",
  },
  {
    name: "Safi",
    tagline: "AI Intelligence & Automation",
    description: "Multilingual voice AI, meeting intelligence, plain-language bookkeeping, and real-time fraud checks.",
    href: "/safi",
    highlight: false,
    badge: "AI Intelligence",
  },
  {
    name: "Settle",
    tagline: "Payments & Cross-Border Rails",
    description: "Frictionless remittances, instant local clearing, mobile money rails, and transparent FX liquidity.",
    href: "/settle",
    highlight: true,
    badge: "You Are Here",
  },
  {
    name: "Skynet",
    tagline: "Cloud Infrastructure",
    description: "Mission-critical hosting, zero-downtime failovers, and low-latency financial interconnects.",
    href: "/status",
    highlight: false,
    badge: "Infrastructure",
  },
];

export function SettleEcosystem() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-6xl rounded-3xl border border-black/10 bg-black px-6 py-12 text-white sm:rounded-[2.5rem] sm:px-12 sm:py-16 dark:border-white/10 dark:bg-[#111111]">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/10 px-4 py-1 text-xs font-semibold tracking-wider text-black dark:text-white uppercase">
            Insolify Unified Ecosystem
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            From rigid legacy silos to a connected, composable stack.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-300 sm:text-lg">
            Insolify is a financial technology company providing modern infrastructure to help banks, fintechs, and enterprises build and scale financial services.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ecosystemProducts.map((prod) => (
            <Link
              key={prod.name}
              href={prod.href}
              className={`group flex flex-col justify-between rounded-2xl border p-5 transition-all duration-200 ${
                prod.highlight
                  ? "border-[#000000] bg-black/10 dark:bg-white/10 shadow-lg ring-1 ring-black/20 dark:ring-white/20"
                  : "border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                      prod.highlight
                        ? "bg-[#000000] text-black"
                        : "bg-white/10 text-neutral-300"
                    }`}
                  >
                    {prod.badge}
                  </span>
                  <span className="text-sm text-neutral-400 group-hover:text-white transition-colors">
                    →
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-white">
                  {prod.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-black dark:text-white">
                  {prod.tagline}
                </p>
                <p className="mt-2.5 text-xs leading-relaxed text-neutral-400">
                  {prod.description}
                </p>
              </div>

              <div className="mt-5 border-t border-white/10 pt-3 text-[11px] font-medium text-neutral-300 group-hover:text-white transition-colors">
                Explore {prod.name} &rarr;
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-white">
              Composable Financial Architecture
            </p>
            <p className="mt-0.5 text-xs text-neutral-400">
              Deploy Settle standalone, or connect directly into FinCore accounts and Safi automated intelligence.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#000000] px-6 py-2.5 text-xs font-semibold text-black transition-opacity hover:opacity-90"
          >
            Talk to our Architects
          </Link>
        </div>
      </div>
    </section>
  );
}
