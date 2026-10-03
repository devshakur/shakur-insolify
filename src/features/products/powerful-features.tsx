"use client";

import { MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";
import { ExpandProductCard } from "@/features/products/expand-product-card";
import { featureCards } from "@/features/products/features";

const rows = [featureCards.slice(0, 3), featureCards.slice(3, 6)];

export function PowerfulFeatures() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % featureCards.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [active]);

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative bg-white py-5 dark:bg-[#0B0C10]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">Our products</p>
              <h2 className="mt-2 text-4xl leading-[1.05] font-semibold tracking-tight text-[#1a1a1a] uppercase sm:text-5xl dark:text-white">
                Powerful
                <br />
                <span className="text-[#6B7C2A] dark:text-[#C5D46A]">features</span>
              </h2>
            </div>
           
          </div>

          <div className="flex flex-col gap-4">
            {rows.map((row, rowIndex) => (
              <div key={row[0].id} className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
                {row.map((feature, cardIndex) => {
                  const index = rowIndex * 3 + cardIndex;
                  return (
                    <ExpandProductCard
                      key={feature.id}
                      feature={feature}
                      expanded={index === active}
                      onOpen={() => setActive(index)}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M2 10 10 2M4 2h6v6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
