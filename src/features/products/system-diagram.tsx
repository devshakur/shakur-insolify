"use client";

import { useEffect, useState } from "react";

const stages = [
  {
    id: "in",
    title: "In",
    items: ["Institution requests", "Payment events", "Exceptions"],
  },
  {
    id: "context",
    title: "Context",
    items: ["Accounts", "Ledgers", "Customers", "Products", "Decisions", "Reports", "Audit"],
  },
  {
    id: "rules",
    title: "Rules",
    items: ["Policies", "Controls", "Permissions"],
  },
  {
    id: "safi",
    title: "Safi",
    items: ["Reads the case", "Applies the rules", "Returns a decision"],
  },
  {
    id: "channels",
    title: "Channels",
    items: ["Mobile", "API", "Branch"],
  },
] as const;

export function SystemDiagram() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let current = 0;
    let dir = 1;
    const id = window.setInterval(() => {
      const next = current + dir;
      if (next < 0 || next >= stages.length) dir *= -1;
      current = Math.min(stages.length - 1, Math.max(0, current + dir));
      setIndex(current);
    }, 900);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section aria-label="How Insolify is organized" className="bg-white px-4 py-16 text-black sm:px-6 sm:py-20 lg:px-8 dark:bg-black dark:text-white">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-[11px] tracking-[0.18em] text-[#6d6d6d] uppercase dark:text-white/50">Platform</p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">From request to channel</h2>
        <p className="mt-4 max-w-lg text-[15px] leading-7 text-[#5c5c5c] dark:text-[#b5b5b5]">
          Institutions send work in. Context, rules, and Safi carry it through to the channels they run.
        </p>

        <div className="relative mt-12 hidden md:block">
          <div className="absolute inset-x-0 top-0 h-px bg-black/15 dark:bg-white/20" />
          <div
            className="absolute top-0 h-0.5 w-1/5 bg-black transition-transform duration-700 ease-in-out dark:bg-white"
            style={{ transform: `translateX(${index * 100}%)` }}
          />
          <div className="grid grid-cols-5">
            {stages.map((stage, stageIndex) => (
              <article key={stage.id} className="px-4 pt-6 first:pl-0 last:pr-0">
                <h3 className={`text-sm font-medium ${stageIndex === index ? "opacity-100" : "opacity-45"}`}>{stage.title}</h3>
                <ul className="mt-4 space-y-1.5 text-sm leading-6 text-[#5c5c5c] dark:text-[#b5b5b5]">
                  {stage.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <ol className="mt-10 border-t border-black/10 md:hidden dark:border-white/15">
          {stages.map((stage, stageIndex) => (
            <li
              key={stage.id}
              className={`border-b border-black/10 py-5 dark:border-white/15 ${stageIndex === index ? "opacity-100" : "opacity-50"}`}
            >
              <p className="text-sm font-medium">{stage.title}</p>
              <p className="mt-2 text-sm leading-6 text-[#5c5c5c] dark:text-[#b5b5b5]">{stage.items.join(" · ")}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
