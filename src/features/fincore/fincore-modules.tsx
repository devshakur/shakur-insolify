import Link from "next/link";
import { getProductModules } from "@/features/pricing/modules";

const pillars = [
  {
    title: "Digital transformation",
    items: ["Modern UI", "Cloud-native", "API-first", "Microservices"],
  },
  {
    title: "Customer experience",
    items: ["24/7 availability", "Faster onboarding", "Mobile-first", "Personalized services"],
  },
  {
    title: "Risk & compliance",
    items: ["Real-time monitoring", "Regulatory reporting", "Fraud detection", "Audit trails"],
  },
] as const;

export function FincoreModules() {
  const modules = getProductModules("fincore");

  return (
    <section id="fincore-modules" className="scroll-mt-28 px-4 pb-4 sm:px-6 lg:px-10">
      <div className="rounded-4xl bg-white px-5 py-12 shadow-[0_24px_80px_rgba(20,16,40,0.04)] sm:rounded-[2.75rem] sm:px-10 sm:py-16 lg:px-14 dark:bg-[#141418] dark:shadow-none">
        <div className="max-w-2xl">
          <p className="text-[13px] font-medium text-[#8b8b93] dark:text-[#9A9AA3]">Modules</p>
          <h2 className="mt-2 text-[1.85rem] leading-[1.15] font-semibold tracking-tight text-[#111] sm:text-4xl dark:text-white">
            Twelve modules, one core
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#6B7280] dark:text-[#9CA3AF]">
            Each module deploys on its own, so institutions can start with core
            banking and add cards, channels, and agency as they grow.
          </p>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <li
              key={module.id}
              className="rounded-3xl border border-[#eeeef2] bg-[#f8f8fa] p-5 dark:border-white/10 dark:bg-[#1c1c22]"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold text-[#111] dark:text-white">{module.name}</h3>
                {module.included ? (
                  <span className="rounded-full bg-[#111] px-2 py-0.5 text-[10px] font-medium text-white dark:bg-white dark:text-[#111]">
                    Base
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-xs leading-5 text-[#6B7280] dark:text-[#9CA3AF]">
                {module.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {module.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white px-2.5 py-1 text-[11px] text-[#6d6d6d] dark:bg-white/10 dark:text-[#c8c8c8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-3 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-3xl border border-[#eeeef2] px-5 py-5 dark:border-white/10"
            >
              <h3 className="text-sm font-semibold text-[#111] dark:text-white">{pillar.title}</h3>
              <ul className="mt-4 space-y-2">
                {pillar.items.map((item) => (
                  <li key={item} className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-2.5">
          <Link
            href="/pricing"
            className="inline-flex h-11 items-center rounded-full bg-[#111] px-5 text-sm font-medium text-white transition-colors hover:bg-black dark:bg-white dark:text-[#111] dark:hover:bg-[#e8e8e8]"
          >
            See Fincore pricing
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center rounded-full bg-[#f2f2f4] px-5 text-sm font-medium text-[#111] transition-colors hover:bg-[#e8e8ec] dark:bg-[#2a2a30] dark:text-white dark:hover:bg-[#33333a]"
          >
            Talk to sales
          </Link>
        </div>
      </div>
    </section>
  );
}
