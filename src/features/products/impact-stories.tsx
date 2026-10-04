"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useState } from "react";

const stories = [
  {
    id: "national-bank-of-dubai",
    company: "National Bank of Dubai",
    product: "Fincore",
    body: "Transformed their core banking infrastructure with Fincore, processing over 5 million transactions daily with 99.99% uptime.",
  },
  {
    id: "techflow-solutions",
    company: "TechFlow Solutions",
    product: "Safi AI",
    body: "Reduced customer support costs by 60% using Safi AI to automate ticket routing and provide instant responses.",
  },
  {
    id: "emirates-insurance",
    company: "Emirates Insurance",
    product: "Safi AI",
    body: "Streamlined claims processing with Safi AI, cutting average resolution time from 5 days to just 4 hours.",
  },
  {
    id: "first-capital-bank",
    company: "First Capital Bank",
    product: "Fincore",
    body: "Modernized their entire digital banking experience with Fincore, launching mobile and web apps in record time.",
  },
  {
    id: "global-logistics-corp",
    company: "Global Logistics Corp",
    product: "Safi AI",
    body: "Deployed Safi AI across 12 countries to handle multilingual customer queries, achieving 95% satisfaction rates.",
  },
] as const;

export function ImpactStories() {
  const [openId, setOpenId] = useState<(typeof stories)[number]["id"] | null>(
    stories[0].id,
  );

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="impact"
        className="relative bg-[#F7F7F8] px-4 py-24 sm:px-6 sm:py-28 lg:px-8 dark:bg-[#101114]"
      >
        <div className="mx-auto w-full max-w-2xl">
          <p className="text-center text-xs font-medium tracking-[0.32em] text-[#8F8F96] uppercase">
            Trusted by
          </p>
          <h2 className="mt-5 text-center text-[2.75rem] leading-[1.05] font-medium tracking-tight text-[#111] sm:text-6xl dark:text-white">
            Smarter business.
            <br />
            Real impact.
          </h2>

          <div className="mt-14 flex flex-col gap-3">
            {stories.map((story) => {
              const open = story.id === openId;

              return (
                <article
                  key={story.id}
                  className={`overflow-hidden transition-colors duration-300 ${
                    open
                      ? "rounded-[28px] border border-black/5 bg-white shadow-[0_8px_30px_rgba(17,17,17,0.04)] dark:border-white/10 dark:bg-[#1A1C21]"
                      : "rounded-full bg-[#ECEEF3] dark:bg-[#1E2026]"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`impact-panel-${story.id}`}
                    onClick={() => setOpenId(open ? null : story.id)}
                    className={`flex w-full items-center justify-between gap-4 text-left ${
                      open ? "px-6 pt-5 pb-2 sm:px-8 sm:pt-6" : "px-6 py-3.5 sm:px-7"
                    }`}
                  >
                    <span className="text-[15px] font-medium tracking-tight text-[#111] sm:text-base dark:text-white">
                      {story.company}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                        open
                          ? "bg-[#ECEEF3] text-[#111] dark:bg-[#2A2D35] dark:text-white"
                          : "bg-white text-[#111] dark:bg-[#2A2D35] dark:text-white"
                      }`}
                    >
                      {open ? <CloseIcon /> : <PlusIcon />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        id={`impact-panel-${story.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 sm:px-8 sm:pb-7">
                          <p className="text-[11px] font-medium tracking-[0.18em] text-[#9A9AA3] uppercase">
                            {story.product}
                          </p>
                          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6B6B73] dark:text-[#B5B5BD]">
                            {story.body}
                          </p>
                          <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-1 text-sm text-[#111] transition hover:opacity-70 dark:text-white"
                          >
                            Read {story.company}&apos;s story
                            <span aria-hidden>→</span>
                          </a>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M7 2.6v8.8M2.6 7h8.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M3.6 3.6l6.8 6.8M10.4 3.6l-6.8 6.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
