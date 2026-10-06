"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const systems = [
  {
    id: "fincore",
    name: "Fincore",
    badge: "Core",
    href: "/fincore",
    points: ["Accounts", "Lending", "Digital channels", "Regulatory reporting"],
  },
  {
    id: "safi",
    name: "Safi AI",
    badge: "Intelligence",
    href: "/safi",
    points: ["Support", "Fraud checks", "Research"],
  },
  {
    id: "settle",
    name: "Settle Africa",
    badge: "Payments",
    href: "/settle",
    points: ["Local rails", "Cross-border", "Reconciliation"],
  },
] as const;

export function FeaturedProducts() {
  const desktopCards = useRef<Array<HTMLDivElement | null>>([]);
  const mobileCards = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const place = () => {
      frame = 0;
      const view = window.innerHeight;
      const apply = (node: HTMLElement | null, index: number, axis: "x" | "y") => {
        const anchor = node?.parentElement;
        if (!node || !anchor || anchor.getBoundingClientRect().height === 0) return;
        if (reduce) {
          node.style.transform = "none";
          node.style.filter = "none";
          node.style.opacity = "1";
          return;
        }
        const rect = anchor.getBoundingClientRect();
        const start = view * 0.96;
        const end = view * 0.46;
        const raw = (start - rect.top) / (start - end);
        const t = raw < 0 ? 0 : raw > 1 ? 1 : raw;
        const progress = t * t * (3 - 2 * t);
        const towardCenter = index % 2 === 0 ? 1 : -1;
        const shift = (1 - progress) * 96 * (axis === "x" ? towardCenter : 1);
        node.style.transform = axis === "x" ? `translate3d(${shift}px,0,0)` : `translate3d(0,${shift}px,0)`;
        node.style.filter = `blur(${(1 - progress) * 18}px)`;
        node.style.opacity = String(0.45 + progress * 0.55);
      };

      desktopCards.current.forEach((node, index) => apply(node, index, "x"));
      mobileCards.current.forEach((node, index) => apply(node, index, "y"));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(place);
    };

    place();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="features" className="scroll-mt-28 bg-white px-4 py-16 text-black sm:px-6 sm:py-20 lg:px-8 dark:bg-black dark:text-white">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-[11px] tracking-[0.18em] text-[#6d6d6d] uppercase dark:text-white/50">Platform</p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">Three systems companies integrate</h2>

        <div className="relative mx-auto mt-14 hidden max-w-4xl md:block">
          <div className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-black/15 dark:bg-white/20" />
          <div className="flex flex-col gap-8">
            {systems.map((system, index) => {
              const onLeft = index % 2 === 0;
              return (
                <div key={system.id} className="relative grid grid-cols-2 items-center">
                  <div className={onLeft ? "pr-12" : "col-start-2 pl-12"}>
                    <div
                      ref={(node) => {
                        desktopCards.current[index] = node;
                      }}
                      className="will-change-[transform,filter]"
                    >
                      <SystemCard system={system} />
                    </div>
                  </div>
                  <span className="absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/15 bg-white text-sm dark:border-white/25 dark:bg-black">
                    {index + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <ol className="relative mt-10 ml-3 border-l border-black/15 pl-8 md:hidden dark:border-white/20">
          {systems.map((system, index) => (
            <li key={system.id} className="relative pb-8 last:pb-0">
              <span className="absolute top-5 -left-8 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-black/15 bg-white text-sm dark:border-white/25 dark:bg-black">
                {index + 1}
              </span>
              <div
                ref={(node) => {
                  mobileCards.current[index] = node;
                }}
                className="will-change-[transform,filter]"
              >
                <SystemCard system={system} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function SystemCard({ system }: { system: (typeof systems)[number] }) {
  return (
    <article className="rounded-2xl border border-black/10 bg-white px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:border-white/15 dark:bg-black dark:shadow-none">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-medium">{system.name}</h3>
        <span className="rounded-full bg-black/5 px-2.5 py-1 text-xs text-[#5c5c5c] dark:bg-white/10 dark:text-[#b5b5b5]">
          {system.badge}
        </span>
      </div>
      <ul className="mt-4 space-y-2.5">
        {system.points.map((point) => (
          <li key={point} className="flex items-center gap-2.5 text-sm text-[#5c5c5c] dark:text-[#b5b5b5]">
            <span className="h-3.5 w-3.5 shrink-0 rounded-full border border-black/25 dark:border-white/30" />
            {point}
          </li>
        ))}
      </ul>
      <Link href={system.href} className="mt-5 inline-flex text-sm font-medium underline underline-offset-4">
        Learn more
      </Link>
    </article>
  );
}
