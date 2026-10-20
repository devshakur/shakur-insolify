

"use client";

import Link from "next/link";

// Data extracted from the pricing page
const products = [
  {
    name: "FinCore",
    category: "Financial infrastructure",
    description: "Scope can include core banking, financial operations, digital channels and integrations. Your quote is based on selected capabilities and deployment requirements.",
    href: "/fincore",
    features: [
      { name: "Core banking and ledger", scope: "Accounts, lending and financial operations", pricing: "Custom quote" },
      { name: "Digital channels", scope: "Internet, mobile, USSD and SMS banking", pricing: "Custom quote" },
      { name: "Payments and connectivity", scope: "Cards, terminals and network integrations", pricing: "Custom quote" },
    ],
  },
  {
    name: "Skynet",
    category: "Cloud infrastructure",
    description: "Skynet pricing is confirmed for the requested configuration and deployment. Discuss your workload with our infrastructure team for a tailored quote.",
    href: "/skynet",
    features: [
      { name: "Cloud compute", scope: "Cloud servers and storage for applications", pricing: "Configuration-based quote" },
      { name: "GPU compute", scope: "Accelerated infrastructure for AI workloads", pricing: "Configuration-based quote" },
      { name: "Networking and developer services", scope: "Networking, domains and platform services", pricing: "Configuration-based quote" },
    ],
  },
  {
    name: "Settle Africa",
    category: "Payments across Africa",
    description: "Fees and availability depend on supported markets, providers and the service being used. Contact us for current information in your market.",
    href: "/settle",
    features: [
      { name: "Payments and transfers", scope: "Fees confirmed for the selected payment service", pricing: "Market dependent" },
      { name: "Connected finances", scope: "Terms confirmed for supported account providers", pricing: "Provider dependent" },
    ],
  },
  {
    name: "Safi",
    category: "Financial intelligence",
    description: "Safi pricing is tailored to the selected model and deployment. Get in touch to discuss your financial intelligence and workflow requirements.",
    href: "/safi",
    features: [
      { name: "Safi models", scope: "Financial intelligence and multilingual interaction", pricing: "Custom quote" },
      { name: "Deployment and workflows", scope: "Fraud detection and intelligent workflow support", pricing: "Custom quote" },
    ],
  },
];

export function PricingSection() {
  return (
    <section className="bg-white py-20 sm:py-28 dark:bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-6xl dark:text-white">
            Pricing that fits <br className="hidden sm:block" />
            your requirements.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            Explore pricing information for our financial and infrastructure platforms. Pricing is tailored to product scope, deployment and availability; contact us for a quote.
          </p>
        </div>

        {/* Product Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {products.map((product) => (
            <div
              key={product.name}
              className="flex flex-col rounded-3xl border border-black/10 bg-white p-8 shadow-sm transition-all hover:border-black/20 hover:shadow-md dark:border-white/10 dark:bg-[#111111] dark:hover:border-white/20"
            >
              {/* Product Header */}
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#EFB338]">
                  {product.category}
                </span>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-black dark:text-white">
                  {product.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {product.description}
                </p>
              </div>

              {/* Feature List */}
              <div className="flex-1 space-y-4">
                {product.features.map((feature) => (
                  <div
                    key={feature.name}
                    className="flex flex-col gap-1 border-b border-black/5 pb-4 last:border-0 last:pb-0 dark:border-white/5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-black dark:text-white">
                        {feature.name}
                      </span>
                      <span className="rounded-full bg-neutral-100 px-3 py-0.5 text-xs font-medium text-black dark:bg-neutral-800 dark:text-white">
                        {feature.pricing}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {feature.scope}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <Link
                  href={product.href}
                  className="inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                >
                  Contact Sales for {product.name}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl bg-neutral-50 p-10 text-center sm:p-16 dark:bg-[#111111]">
          <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl dark:text-white">
            Not sure which plan fits?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-neutral-500 dark:text-neutral-400">
            Our team is ready to help you scope the right infrastructure for your financial operations.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="w-full rounded-full bg-[#EFB338] px-8 py-3.5 text-sm font-medium text-black transition-opacity hover:opacity-90 sm:w-auto"
            >
              Talk to our team
            </Link>
            <Link
              href="/docs"
              className="w-full rounded-full border border-black/15 px-8 py-3.5 text-sm font-medium text-black transition-colors hover:border-black/30 sm:w-auto dark:border-white/20 dark:text-white dark:hover:border-white/40"
            >
              Read our documentation
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}