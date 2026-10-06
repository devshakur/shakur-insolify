"use client";

import Link from "next/link";
import { useState } from "react";
import { featureCards } from "@/features/products/features";

const features = [
  { ...featureCards[0], kicker: "Speed", href: "/safi" },
  { ...featureCards[1], kicker: "Intelligence", href: "/safi" },
  { ...featureCards[2], kicker: "Security", href: "/fincore" },
  { ...featureCards[4], kicker: "Integration", href: "/settle" },
];

export function PowerfulFeatures() {
  const [active, setActive] = useState(features[0].id);

  return (
    <section aria-label="Features" className="bg-white px-4 py-16 text-black sm:px-6 sm:py-20 lg:px-8 dark:bg-black dark:text-white">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-[11px] tracking-[0.18em] text-[#6d6d6d] uppercase dark:text-white/50">Features</p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">What the platform does</h2>
        <p className="mt-4 max-w-lg text-[15px] leading-7 text-[#5c5c5c] dark:text-[#b5b5b5]">
          Speed, intelligence, security, and integration for the companies that run on Insolify.
        </p>
      </div>
      <div className="mx-auto mt-10 grid w-full max-w-6xl md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => {
          const open = feature.id === active;
          return (
            <article
              key={feature.id}
              className="flex min-h-120 flex-col border-black/10 px-4 py-6 border-t first:border-t-0 md:[&:nth-child(2n)]:border-l md:[&:nth-child(n+3)]:border-t xl:[&:nth-child(n+2)]:border-l xl:[&:nth-child(n+3)]:border-t-0 dark:border-white/10"
              onMouseEnter={() => setActive(feature.id)}
              onFocus={() => setActive(feature.id)}
            >
              <div
                className={`flex flex-col overflow-hidden rounded-2xl bg-black p-5 text-white transition-[flex-grow,min-height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] dark:bg-white dark:text-black ${
                  open ? "min-h-80 flex-1" : "min-h-44"
                }`}
              >
                <p className="text-[11px] tracking-[0.18em] uppercase opacity-55">{feature.kicker}</p>
                <h3 className="mt-4 text-[1.35rem] leading-snug font-medium">{feature.title}</h3>
                <div
                  className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    open ? "mt-auto grid-rows-[1fr] pt-6 opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-6 opacity-75">{feature.excerpt}</p>
                    <Link
                      href={feature.href}
                      className="mt-6 flex items-center justify-between text-sm font-medium"
                    >
                      <span className="underline decoration-current/40 underline-offset-4">Learn more</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? "max-h-0 pt-0 opacity-0" : "max-h-28 pt-5 opacity-100"
                }`}
              >
                <p className="text-[11px] tracking-[0.18em] text-[#6d6d6d] uppercase dark:text-white/50">{feature.kicker}</p>
                <p className="mt-2 text-lg leading-snug font-medium">{feature.title}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
