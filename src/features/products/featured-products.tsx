"use client";

import Link from "next/link";
import { Clock, DollarSign, Zap, BoxIcon } from "lucide-react";

const benefits = [
  {
    id: "go-live",
    icon: Clock,
    title: "Launch in weeks, not months",
    description:
      "Bring your financial products to market faster with Insolify’s.",
    href: "/benefits/go-live",
  },
  {
    id: "reduce-costs",
    icon: DollarSign,
    title: "Reduce costs without slowing down",
    description:
      "Avoid the high costs and complexity of building banking infrastructure from scratch.",
    href: "/benefits/reduce-costs",
  },
  {
    id: "innovate",
    icon: Zap,
    title: "Build, adapt, and innovate faster",
    description:
      "Respond to changing customer needs with a flexible, modular banking platform.",
    href: "/benefits/innovate",
  },
  {
    id: "choose",
    icon: BoxIcon,
    title: "Get the tools your business actually needs",
    description:
      "Every financial institution has different goals.",
    href: "/benefits/choose",
  },
] as const;

export function FeaturedProducts() {
  return (
    <section className="scroll-mt-20 bg-white px-4 py-16 text-black sm:px-6 sm:py-20 lg:px-8 dark:bg-black dark:text-white">
      <div className="mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <h2 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl">
            Here&apos;s why Insolify should be your
            <br />
            banking technology partner
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white px-6 py-3 text-black transition-colors hover:border-black/40 dark:border-white/30 dark:bg-black dark:text-white dark:hover:border-white/50"
          >
            Get in touch
            <span className="text-lg">→</span>
          </Link>
        </div>

        {/* Horizontal slider on mobile, grid from tablet upward */}
        <div className="scrollbar-hide -mx-4 mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.id}
                className="flex min-h-96 flex-none basis-[86%] snap-center flex-col items-start rounded-2xl border border-black/10 bg-white p-6 transition-colors hover:border-black/20 sm:basis-[62%] md:min-h-0 md:basis-auto dark:border-white/15 dark:bg-black/50 dark:hover:border-white/30"
              >
                {/* Icon Circle */}
                <div className="mb-5 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-black">
                  <Icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-left text-lg font-bold tracking-tight">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="mb-4 grow text-left text-sm leading-6 text-[#5c5c5c] dark:text-white/70">
                  {benefit.description}
                </p>

                {/* Link */}
                <Link
                  href={benefit.href}
                  className="text-xs font-semibold text-black underline decoration-black/20 underline-offset-3 transition-colors hover:decoration-black dark:text-white dark:decoration-white/30 dark:hover:decoration-white"
                >
                  Learn more →
                </Link>
              </div>
            );
          })}
        </div>
        <p className="mt-1 text-center text-[10px] font-medium tracking-wide text-black/40 md:hidden dark:text-white/40">
          Swipe to explore all benefits
        </p>
      </div>
    </section>
  );
}