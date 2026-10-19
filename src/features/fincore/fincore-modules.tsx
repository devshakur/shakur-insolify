"use client";
import Link from "next/link";
import { getProductModules } from "@/features/pricing/modules";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CreditCard,
  DatabaseZap,
  Earth,
  Landmark,
  Layers,
  MonitorSmartphone,
  PanelTop,
  RadioTower,
  Smartphone,
  Store,
  UsersRound,
  WalletCards,
  type LucideIcon,
} from "lucide-react";
import { useRef, useState, type UIEvent } from "react";

 
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

const moduleVisuals: Record<string, LucideIcon> = {
  "core-banking": Landmark,
  "cards-module": CreditCard,
  interbanking: Building2,
  "virtual-banking": WalletCards,
  "pos-module": Store,
  "ussd-banking": RadioTower,
  "internet-banking": MonitorSmartphone,
  "website-module": PanelTop,
  "international-banking": Earth,
  "mobile-banking": Smartphone,
  "agency-banking": UsersRound,
  "data-migration": DatabaseZap,
};

export function FincoreModules() {
  const modules = getProductModules("fincore");
  const [activeModuleId, setActiveModuleId] = useState(modules[0]?.id || '1');
  const carouselRef = useRef<HTMLDivElement>(null);

  function scrollCarousel(direction: -1 | 1) {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.scrollBy({
      left: direction * carousel.clientWidth * 0.82,
      behavior: "smooth",
    });
  }

  function updateActiveCard(event: UIEvent<HTMLDivElement>) {
    const carousel = event.currentTarget;
    const carouselCenter = carousel.getBoundingClientRect().left + carousel.clientWidth / 2;
    const cards = Array.from(carousel.querySelectorAll<HTMLElement>("[data-module-id]"));
    const nearest = cards.reduce<{ id: string; distance: number } | null>((closest, card) => {
      const rect = card.getBoundingClientRect();
      const distance = Math.abs(rect.left + rect.width / 2 - carouselCenter);
      const id = card.dataset.moduleId;
      if (!id || (closest && closest.distance <= distance)) return closest;
      return { id, distance };
    }, null);
    if (nearest && nearest.id !== activeModuleId) setActiveModuleId(nearest.id);
  }

  return (
    <section id="fincore-modules" className="scroll-mt-28 px-4 pb-16 sm:px-6 lg:px-10 antialiased">
    <div className="relative overflow-hidden rounded-4xl bg-[#FAFAFC] px-6 py-16 shadow-xl sm:rounded-[2.75rem] sm:px-12 sm:py-20 lg:px-16 dark:bg-[#0E0F12] dark:border dark:border-white/10">
      
      {/* Subtle Background Grid Lines Pattern */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Header Layout */}
      <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div className="max-w-xl">
          {/* Mission / Module Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#111] dark:bg-white/10 dark:text-white">
            <Layers className="h-3.5 w-3.5" />
            MODULES
          </div>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-[#111] sm:text-5xl dark:text-white">
            Twelve modules, <br />
            <span className="text-black/55 dark:text-white/55">one core architecture.</span>
          </h2>
        </div>

        <div className="flex max-w-md flex-col items-start gap-5 lg:items-end lg:text-right">
          <p className="text-sm leading-relaxed text-[#6B7280] sm:text-[15px] dark:text-[#9CA3AF]">
            Each module deploys on its own, uniting every banking primitive into one adaptive system that scales seamlessly across your institution.
          </p>
          <Link
            href="/pricing"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-black px-6 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all hover:bg-black/80 dark:bg-white dark:text-[#111] dark:hover:bg-white/90"
          >
            Explore Pricing
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Modules horizontal carousel — four cards visible on desktop */}
      <div className="relative z-10 mt-14">
        <div className="mb-5 flex items-center justify-between gap-4">
          <p className="text-xs font-medium text-black/55 dark:text-white/55">
            Scroll horizontally to explore all {modules.length} modules
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Show previous modules"
              onClick={() => scrollCarousel(-1)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-black/15 bg-white text-black transition-colors hover:bg-black hover:text-white dark:border-white/20 dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Show next modules"
              onClick={() => scrollCarousel(1)}
              className="inline-flex size-10 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          onScroll={updateActiveCard}
          className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pt-4 pb-8"
        >
          {modules.map((module, index) => {
            const formattedIndex = String(index + 1).padStart(2, "0");
            const isActive = activeModuleId === module.id;
            const VisualIcon = moduleVisuals[module.id] ?? Layers;

            return (
              <article
                key={module.id}
                data-module-id={module.id}
                onClick={() => setActiveModuleId(module.id)}
                className={`group relative flex min-h-112 flex-none basis-[84%] snap-center cursor-pointer flex-col overflow-hidden rounded-3xl border p-6 transition-all duration-500 [contain-intrinsic-size:28rem] [content-visibility:auto] sm:basis-[46%] lg:basis-[calc((100%-3rem)/4)] ${
                  isActive
                    ? "-translate-y-3 border-black bg-white shadow-[0_24px_60px_rgba(0,0,0,0.14)] dark:border-white dark:bg-black dark:shadow-[0_24px_60px_rgba(255,255,255,0.08)]"
                    : "border-black/10 bg-white/60 hover:-translate-y-1 hover:border-black/30 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-3xl font-light tracking-tighter ${
                      isActive
                        ? "font-semibold text-black dark:text-white"
                        : "text-black/30 dark:text-white/30"
                    }`}
                  >
                    {formattedIndex}.
                  </span>
                  {module.included ? (
                    <span className="rounded-full bg-black px-2.5 py-1 text-[10px] font-bold text-white dark:bg-white dark:text-black">
                      CORE
                    </span>
                  ) : null}
                </div>

                <ModuleVisual
                  icon={VisualIcon}
                  label={module.name}
                  index={index}
                  active={isActive}
                />

                <div className="mt-auto pt-6">
                  <h3 className="text-lg font-bold text-black dark:text-white">
                    {module.name}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-black/60 dark:text-white/60">
                    {module.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {module.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-black/5 px-2 py-0.5 text-[10px] font-medium text-black/65 dark:bg-white/10 dark:text-white/65"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Bottom Pillars Horizontal List */}
      <div className="relative z-10 mt-16 border-t border-black/10 pt-10 dark:border-white/10">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="flex flex-col gap-2">
              <h4 className="text-sm font-bold text-[#111] dark:text-white">
                {pillar.title}
              </h4>
              <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                {pillar.items.join(' • ')}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
  );
}

function ModuleVisual({
  icon: Icon,
  label,
  index,
  active,
}: {
  icon: LucideIcon;
  label: string;
  index: number;
  active: boolean;
}) {
  const variant = index % 3;

  return (
    <div className="relative mt-6 h-44 overflow-hidden rounded-2xl border border-black/10 bg-black/2.5 dark:border-white/10 dark:bg-white/5">
      <div
        aria-hidden
        className={`absolute rounded-full border border-black/10 dark:border-white/10 ${
          variant === 0
            ? "-top-14 -right-10 size-40"
            : variant === 1
              ? "-bottom-16 -left-12 size-48"
              : "top-7 -right-16 size-36"
        }`}
      />
      <div
        aria-hidden
        className={`absolute border-black/10 dark:border-white/10 ${
          variant === 0
            ? "inset-x-0 top-1/2 border-t"
            : variant === 1
              ? "inset-y-0 left-1/2 border-l"
              : "top-1/2 left-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rotate-45 border"
        }`}
      />

      <div
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${
          active ? "scale-110" : "group-hover:scale-105"
        }`}
      >
        <div className="flex size-20 items-center justify-center rounded-2xl bg-black text-white shadow-xl dark:bg-white dark:text-black">
          <Icon className="size-9" strokeWidth={1.5} />
        </div>
      </div>

      <span className="absolute right-3 bottom-3 max-w-[75%] truncate rounded-full border border-black/10 bg-white/80 px-3 py-1 text-[10px] font-semibold text-black backdrop-blur dark:border-white/10 dark:bg-black/80 dark:text-white">
        {label}
      </span>
    </div>
  );
}