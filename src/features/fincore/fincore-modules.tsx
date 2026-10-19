"use client";

import Link from "next/link";
import { getProductModules } from "@/features/pricing/modules";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  ChevronDown,
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
  const [activeModuleId, setActiveModuleId] = useState(modules[0]?.id ?? "");
  const carouselRef = useRef<HTMLDivElement>(null);

  function scrollCarousel(direction: -1 | 1) {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.82, behavior: "smooth" });
  }

  function updateActiveFromScroll(event: UIEvent<HTMLDivElement>) {
    const el = event.currentTarget;
    const center = el.getBoundingClientRect().left + el.clientWidth / 2;
    const nearest = Array.from(
      el.querySelectorAll<HTMLElement>("[data-module-id]"),
    ).reduce<{ id: string; d: number } | null>((acc, card) => {
      const r = card.getBoundingClientRect();
      const d = Math.abs(r.left + r.width / 2 - center);
      const id = card.dataset.moduleId;
      return id && (!acc || d < acc.d) ? { id, d } : acc;
    }, null);
    if (nearest && nearest.id !== activeModuleId) setActiveModuleId(nearest.id);
  }

  function toggleAccordion(id: string) {
    setActiveModuleId((prev) => (prev === id ? "" : id));
  }

  return (
    <section
      id="fincore-modules"
      className="scroll-mt-28 px-4 pb-14 antialiased sm:px-6 lg:px-10"
    >
      <div className="relative overflow-hidden rounded-4xl border border-black/8 bg-[#FAFAFC] px-5 py-12 shadow-xl sm:rounded-[2.75rem] sm:px-12 sm:py-16 lg:px-16 dark:border-white/10 dark:bg-[#0E0F12]">
        {/* Grid background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* ── Header ─────────────────────────────────────── */}
        <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-black dark:bg-white/10 dark:text-white">
              <Layers className="size-3.5" />
              MODULES
            </div>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-black sm:text-4xl dark:text-white">
              Twelve modules,{" "}
              <span className="text-black/50 dark:text-white/50">
                one core architecture.
              </span>
            </h2>
          </div>

          <Link
            href="/pricing"
            className="inline-flex h-10 shrink-0 items-center gap-2 self-start rounded-full bg-black px-5 text-sm font-semibold text-white transition-colors hover:bg-black/80 sm:self-auto dark:bg-white dark:text-black dark:hover:bg-white/85"
          >
            Explore Pricing
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* ── Mobile accordion (< md) ─────────────────────── */}
        <div className="relative z-10 mt-10 flex flex-col gap-2 md:hidden">
          {modules.map((module, index) => {
            const Icon = moduleVisuals[module.id] ?? Layers;
            const isOpen = activeModuleId === module.id;
            return (
              <button
                key={module.id}
                type="button"
                onClick={() => toggleAccordion(module.id)}
                aria-expanded={isOpen}
                className={`group w-full rounded-2xl border text-left transition-all duration-300 ${
                  isOpen
                    ? "border-black bg-white shadow-md dark:border-white dark:bg-black"
                    : "border-black/8 bg-white/50 dark:border-white/10 dark:bg-white/5"
                }`}
              >
                {/* Row — always visible */}
                <div className="flex items-center gap-4 px-5 py-4">
                  <div
                    className={`flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isOpen
                        ? "bg-black text-white dark:bg-white dark:text-black"
                        : "bg-black/6 text-black dark:bg-white/10 dark:text-white"
                    }`}
                  >
                    <Icon className="size-5" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-black dark:text-white">
                      {module.name}
                    </p>
                    <p className="truncate text-[11px] text-black/50 dark:text-white/50">
                      {module.tags[0]}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {module.included && (
                      <span className="rounded-full bg-black px-2 py-0.5 text-[9px] font-bold text-white dark:bg-white dark:text-black">
                        CORE
                      </span>
                    )}
                    <ChevronDown
                      className={`size-4 text-black/40 transition-transform duration-300 dark:text-white/40 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Expanded content */}
                {isOpen && (
                  <div className="border-t border-black/8 px-5 pb-5 pt-4 dark:border-white/10">
                    <p className="text-xs leading-relaxed text-black/65 dark:text-white/65">
                      {module.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {module.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-black/5 px-2 py-0.5 text-[10px] font-medium text-black/65 dark:bg-white/10 dark:text-white/65"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-xs font-medium text-black/40 dark:text-white/40">
                      {String(index + 1).padStart(2, "0")} / {modules.length}
                    </p>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* ── Desktop carousel (≥ md) ─────────────────────── */}
        <div className="relative z-10 mt-12 hidden md:block">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-xs font-medium text-black/50 dark:text-white/50">
              Showing 4 of {modules.length} modules — scroll to explore
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous modules"
                onClick={() => scrollCarousel(-1)}
                className="inline-flex size-9 items-center justify-center rounded-full border border-black/15 bg-white text-black transition-colors hover:bg-black hover:text-white dark:border-white/20 dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Next modules"
                onClick={() => scrollCarousel(1)}
                className="inline-flex size-9 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            onScroll={updateActiveFromScroll}
            className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pt-4 pb-6"
          >
            {modules.map((module, index) => {
              const isActive = activeModuleId === module.id;
              const Icon = moduleVisuals[module.id] ?? Layers;

              return (
                <article
                  key={module.id}
                  data-module-id={module.id}
                  onClick={() => setActiveModuleId(module.id)}
                  className={`group relative flex min-h-96 flex-none basis-[46%] snap-center cursor-pointer flex-col overflow-hidden rounded-3xl border p-6 transition-all duration-500 lg:basis-[calc((100%-3rem)/4)] ${
                    isActive
                      ? "-translate-y-3 border-black bg-white shadow-[0_24px_60px_rgba(0,0,0,0.14)] dark:border-white dark:bg-black dark:shadow-[0_24px_60px_rgba(255,255,255,0.08)]"
                      : "border-black/10 bg-white/60 hover:-translate-y-1 hover:border-black/30 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/30"
                  }`}
                >
                  {/* Card top row */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-2xl font-light tracking-tighter ${isActive ? "font-semibold text-black dark:text-white" : "text-black/25 dark:text-white/25"}`}
                    >
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    {module.included && (
                      <span className="rounded-full bg-black px-2.5 py-1 text-[10px] font-bold text-white dark:bg-white dark:text-black">
                        CORE
                      </span>
                    )}
                  </div>

                  <ModuleVisual icon={Icon} index={index} active={isActive} />

                  <div className="mt-auto pt-5">
                    <h3 className="text-base font-bold text-black dark:text-white">
                      {module.name}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-black/58 dark:text-white/58">
                      {module.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
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

        {/* ── Pillars strip ───────────────────────────────── */}
        <div className="relative z-10 mt-10 grid grid-cols-3 gap-4 border-t border-black/10 pt-8 dark:border-white/10">
          {[
            { label: "Digital-first", sub: "Cloud-native · API-first" },
            { label: "Risk-ready", sub: "AML · Fraud · Compliance" },
            { label: "Composable", sub: "12 modules · Phased deploy" },
          ].map((p) => (
            <div key={p.label}>
              <p className="text-xs font-bold text-black dark:text-white sm:text-sm">
                {p.label}
              </p>
              <p className="mt-0.5 text-[10px] text-black/50 dark:text-white/50 sm:text-xs">
                {p.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleVisual({
  icon: Icon,
  index,
  active,
}: {
  icon: LucideIcon;
  index: number;
  active: boolean;
}) {
  const variant = index % 3;

  return (
    <div className="relative mt-5 h-36 overflow-hidden rounded-2xl border border-black/10 bg-black/2.5 dark:border-white/10 dark:bg-white/5">
      <div
        aria-hidden
        className={`absolute rounded-full border border-black/10 dark:border-white/10 ${
          variant === 0
            ? "-top-12 -right-8 size-36"
            : variant === 1
              ? "-bottom-14 -left-10 size-44"
              : "top-6 -right-14 size-32"
        }`}
      />
      <div
        aria-hidden
        className={`absolute border-black/10 dark:border-white/10 ${
          variant === 0
            ? "inset-x-0 top-1/2 border-t"
            : variant === 1
              ? "inset-y-0 left-1/2 border-l"
              : "top-1/2 left-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rotate-45 border"
        }`}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${active ? "scale-110" : "group-hover:scale-105"}`}
      >
        <div className="flex size-16 items-center justify-center rounded-2xl bg-black text-white shadow-lg dark:bg-white dark:text-black">
          <Icon className="size-7" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}
