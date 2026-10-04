"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    id: "add-remove",
    question: "Can I add or remove modules later?",
    answer:
      "Yes. You can upgrade your plan with additional modules at any time. Downgrades take effect at the start of the next billing cycle.",
  },
  {
    id: "discounts",
    question: "Do you offer volume or annual discounts?",
    answer:
      "These published prices are yearly. For large deployments, contact our sales team for custom volume pricing.",
  },
  {
    id: "setup-fee",
    question: "What is included in the setup fee?",
    answer:
      "The setup fee covers implementation, configuration, data migration assistance, training, and go-live support.",
  },
  {
    id: "get-started",
    question: "How do I get started?",
    answer:
      "You can sign up directly at dash.insolify.com and choose the modules you need. For Fincore and Settle, we also offer guided demos and sandbox environments.",
  },
  {
    id: "payment",
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, all major credit cards, and purchase orders for enterprise customers.",
  },
] as const;

export function PricingFaq() {
  const [openId, setOpenId] = useState<(typeof faqs)[number]["id"] | null>(faqs[0].id);

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="faq"
        className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto w-full max-w-2xl">
          <p className="text-center text-xs font-medium tracking-[0.32em] text-[#8F8F96] uppercase">
            Support
          </p>
          <h2 className="mt-5 text-center text-[2.15rem] leading-[1.1] font-semibold tracking-tight text-[#111] sm:text-5xl dark:text-white">
            Frequently asked
            <br />
            questions
          </h2>

          <div className="mt-14 flex flex-col gap-3">
            {faqs.map((faq) => {
              const open = faq.id === openId;

              return (
                <article
                  key={faq.id}
                  className={`overflow-hidden transition-colors duration-300 ${
                    open
                      ? "rounded-[28px] border border-black/5 bg-white shadow-[0_8px_30px_rgba(17,17,17,0.04)] dark:border-white/10 dark:bg-[#1A1C21]"
                      : "rounded-full bg-[#ECEEF3] dark:bg-[#1E2026]"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${faq.id}`}
                    onClick={() => setOpenId(open ? null : faq.id)}
                    className={`flex w-full items-center justify-between gap-4 text-left ${
                      open ? "px-6 pt-5 pb-2 sm:px-8 sm:pt-6" : "px-6 py-3.5 sm:px-7"
                    }`}
                  >
                    <span className="text-[15px] font-medium tracking-tight text-[#111] sm:text-base dark:text-white">
                      {faq.question}
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
                        id={`faq-panel-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 sm:px-8 sm:pb-7">
                          <p className="max-w-2xl text-sm leading-6 text-[#6B6B73] dark:text-[#B5B5BD]">
                            {faq.answer}
                          </p>
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
