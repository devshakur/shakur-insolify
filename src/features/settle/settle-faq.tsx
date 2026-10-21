"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    id: "need",
    question: "What information do I need to send money with Settle?",
    answer:
      "You only need your verified account details, the recipient's phone number or bank account, and the transfer amount. There are no paper documents or complex wire forms required.",
  },
  {
    id: "corridors",
    question: "Which African countries and corridors are supported?",
    answer:
      "Settle currently supports high-volume corridors across Kenya, Nigeria, Ghana, Rwanda, South Africa, Uganda, Tanzania, and Egypt. New corridors are continuously enabled via our local liquidity partners.",
  },
  {
    id: "speed",
    question: "How fast do transfers arrive?",
    answer:
      "Mobile money payouts (M-Pesa, MTN MoMo, Airtel) and instant bank rails typically settle within 30 to 60 seconds. Cash pickups are ready same-day upon confirmation.",
  },
  {
    id: "ecosystem",
    question: "How does Settle connect with other Insolify products?",
    answer:
      "Settle seamlessly integrates with FinCore for automated multi-currency ledgering and with Safi AI for automated fraud screening, meeting note intelligence, and plain-language bookkeeping.",
  },
  {
    id: "fees",
    question: "Are there any hidden foreign exchange fees?",
    answer:
      "None. Settle uses transparent, live mid-market exchange rates and displays the exact fee upfront before you authenticate. The amount you see is the exact amount your recipient receives.",
  },
  {
    id: "track",
    question: "How can I track the status of my transfer?",
    answer:
      "Every payout includes an instant tracking reference that can be verified live on TVerify. Both the sender and recipient receive automated SMS and in-app notifications at each stage.",
  },
] as const;

export function SettleFaq() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  return (
    <MotionConfig reducedMotion="user">
      <section id="settle-faq" className="relative scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <div className="mx-auto w-full max-w-3xl">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/10 px-4 py-1 text-xs font-semibold tracking-wider text-black uppercase dark:text-white">
              Clear Answers
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-sm text-neutral-600 sm:text-base dark:text-neutral-400">
              Everything you need to know about Settle payments, exchange rates, and supported corridors.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-3">
            {faqs.map((faq) => {
              const open = faq.id === openId;

              return (
                <article
                  key={faq.id}
                  className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                    open
                      ? "border-black/15 bg-white shadow-sm dark:border-white/15 dark:bg-[#111111]"
                      : "border-black/5 bg-neutral-50/70 hover:border-black/10 dark:border-white/5 dark:bg-[#161616]/60 dark:hover:border-white/10"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`settle-faq-${faq.id}`}
                    onClick={() => setOpenId(open ? null : faq.id)}
                    className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left"
                  >
                    <span className="text-sm font-semibold text-black sm:text-base dark:text-white">
                      {faq.question}
                    </span>
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                        open
                          ? "bg-black text-white dark:bg-[#000000] dark:text-black"
                          : "bg-neutral-200/70 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                      }`}
                    >
                      {open ? <CloseIcon /> : <PlusIcon />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        id={`settle-faq-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
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

          <div className="mt-8 text-center text-xs text-neutral-500 dark:text-neutral-400">
            Have a custom enterprise corridor or volume enquiry?{" "}
            <Link href="/contact" className="font-semibold text-black underline hover:text-black dark:text-white dark:text-white">
              Speak with our payment team &rarr;
            </Link>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

function PlusIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M7 2.6v8.8M2.6 7h8.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M3.6 3.6l6.8 6.8M10.4 3.6l-6.8 6.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
