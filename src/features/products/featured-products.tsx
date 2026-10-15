"use client";

import Link from "next/link";
import { Clock, DollarSign, Zap, BoxIcon } from "lucide-react";

const benefits = [
  {
    id: "go-live",
    icon: Clock,
    title: "Launch in weeks, not months",
    description:
      "Bring your financial products to market faster with Insolify’s ready to deploy cloud banking platform. Skip lengthy development cycles and focus on serving customers, growing your business, and capturing new opportunities.",
    href: "/benefits/go-live",
  },
  {
    id: "reduce-costs",
    icon: DollarSign,
    title: "Reduce costs without slowing down",
    description:
      "Avoid the high costs and complexity of building banking infrastructure from scratch. Insolify helps reduce development overhead, simplify maintenance, and make better use of your resources while accelerating your time to market.",
    href: "/benefits/reduce-costs",
  },
  {
    id: "innovate",
    icon: Zap,
    title: "Build, adapt, and innovate faster",
    description:
      "Respond to changing customer needs with a flexible, modular banking platform. Add capabilities as your business evolves, bring new financial products to market, and improve your services without rebuilding your entire technology stack.",
    href: "/benefits/innovate",
  },
  {
    id: "choose",
    icon: BoxIcon,
    title: "Get the tools your business actually needs",
    description:
      "Every financial institution has different goals. Choose the capabilities that fit your business, from essential banking operations to specialized financial services. Insolify gives banks, microfinance institutions, neobanks, and fintechs the flexibility to build around their unique needs.",
    href: "/benefits/choose",
  },
] as const;

export function FeaturedProducts() {
  return (
    <section className="scroll-mt-20 bg-white px-4 py-16 text-black sm:px-6 sm:py-20 lg:px-8 dark:bg-black dark:text-white">
      <div className="mx-auto w-full">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
            Here&apos;s why Insolify should be your
            <br />
            banking technology partner
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/20 bg-white text-black hover:border-black/40 transition-colors dark:border-white/30 dark:bg-black dark:text-white dark:hover:border-white/50"
          >
            Get in touch
            <span className="text-lg">→</span>
          </Link>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.id}
                className="flex flex-col items-start p-6 rounded-2xl border border-black/10 bg-white hover:border-black/20 transition-colors dark:border-white/15 dark:bg-black/50 dark:hover:border-white/30"
              >
                {/* Icon Circle */}
                <div className="h-16 w-16 rounded-full bg-black flex items-center justify-center mb-5 shrink-0">
                  <Icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold tracking-tight mb-3 text-left">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-6 text-[#5c5c5c] dark:text-white/70 text-left mb-4 grow">
                  {benefit.description}
                </p>

                {/* Link */}
                <Link
                  href={benefit.href}
                  className="text-xs font-semibold text-black underline decoration-black/20 underline-offset-3 hover:decoration-black transition-colors dark:text-white dark:decoration-white/30 dark:hover:decoration-white"
                >
                  Learn more →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}