"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useSyncExternalStore } from "react";
import type { FeatureCard } from "@/features/products/features";

type ExpandProductCardProps = {
  feature: FeatureCard;
  expanded: boolean;
  onOpen: () => void;
};

const desktopQuery = "(min-width: 1024px)";

function subscribeDesktop(onStoreChange: () => void) {
  const media = window.matchMedia(desktopQuery);
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

export function ExpandProductCard({ feature, expanded, onOpen }: ExpandProductCardProps) {
  const isDesktop = useSyncExternalStore(
    subscribeDesktop,
    () => window.matchMedia(desktopQuery).matches,
    () => false,
  );

  return (
    <motion.article
      animate={isDesktop ? { flexGrow: expanded ? 1.85 : 0.72 } : { flexGrow: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative h-72 w-full min-h-72 shrink-0 overflow-hidden rounded-4xl bg-[#E4EDC4] dark:bg-[#2C3120] lg:min-w-0 lg:w-auto lg:basis-0 lg:shrink"
    >
      <button
        type="button"
        onClick={onOpen}
        aria-expanded={expanded}
        className={`grid h-full w-full min-w-0 items-stretch text-left transition-[grid-template-columns] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          expanded ? "grid-cols-[minmax(0,1fr)_minmax(10rem,0.95fr)]" : "grid-cols-[minmax(0,1fr)_0fr]"
        }`}
      >
        <div className="flex min-w-0 flex-col p-6 sm:p-7">
          <h3 className="max-w-[11ch] text-[1.65rem] leading-[1.15] font-semibold tracking-tight text-[#1a1a1a] dark:text-[#f4f4f0]">
            {feature.title}
          </h3>
          <p
            className={`mt-3 max-w-xs text-sm leading-6 text-[#4B5563] transition-opacity duration-300 dark:text-[#c5c8b8] ${
              expanded ? "opacity-100" : "opacity-0"
            }`}
          >
            {feature.excerpt}
          </p>
          <span className="mt-auto inline-flex items-center gap-2 text-sm text-[#1a1a1a] dark:text-[#f4f4f0]">
            Read More
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6B7C2A] text-white">
              <ArrowIcon />
            </span>
          </span>
        </div>
        <div className="relative min-h-0 min-w-0 overflow-hidden">
          <Image
            src={feature.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 30vw, 50vw"
            className="object-cover"
            priority={expanded}
          />
        </div>
      </button>
    </motion.article>
  );
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M2 6h8M7 3l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
