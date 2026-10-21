// import Link from "next/link";
// import { DropletIcon } from "@/features/products/icons";
// import { getProduct } from "@/features/products/products";
// import { SafiDemo } from "@/features/products/safi-demo";

// const stats = [
//   { value: "24/7", label: "Availability" },
//   { value: "Multi", label: "Languages" },
//   { value: "Encrypted", label: "Data handling" },
// ] as const;

// export function SafiSection() {
//   const product = getProduct("safi");

//   return (
//     <section id="safi" className="px-4 pb-8 sm:px-6 lg:px-10">
//       <div className="rounded-4xl bg-white px-5 py-12 shadow-[0_24px_80px_rgba(20,16,40,0.04)] sm:rounded-[2.75rem] sm:px-10 sm:py-16 lg:px-14 lg:py-16 dark:bg-[#141418] dark:shadow-none">
//         <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
//           <div>
//             <p className="inline-flex items-center gap-2 text-[15px] font-semibold tracking-tight text-[#111] dark:text-white">
//               <span className="inline-flex size-8 items-center justify-center rounded-full bg-[#111] text-white dark:bg-white dark:text-[#111]">
//                 <DropletIcon />
//               </span>
//               Safi AI
//             </p>
//             <h1 className="mt-6 max-w-lg text-[2.15rem] leading-[1.08] font-semibold tracking-tight text-[#111] sm:text-5xl dark:text-white">
//               Meet your intelligent assistant
//             </h1>
//             <p className="mt-5 max-w-md text-sm leading-7 text-[#6B7280] sm:text-[15px] dark:text-[#9CA3AF]">
//               {product.description}
//             </p>
//             <div className="mt-8 flex flex-wrap items-center gap-2.5">
//               <Link
//                 href="#safi-demo"
//                 className="inline-flex h-11 items-center gap-2 rounded-full bg-[#111] px-5 text-sm font-medium text-white transition-colors hover:bg-black dark:bg-white dark:text-[#111] dark:hover:bg-[#e8e8e8]"
//               >
//                 Start chatting now
//                 <ArrowIcon />
//               </Link>
//               <Link
//                 href="#safi-capabilities"
//                 className="inline-flex h-11 items-center gap-2 rounded-full bg-[#f2f2f4] px-5 text-sm font-medium text-[#111] transition-colors hover:bg-[#e8e8ec] dark:bg-[#2a2a30] dark:text-white dark:hover:bg-[#33333a]"
//               >
//                 Learn more
//                 <ArrowIcon />
//               </Link>
//             </div>
//             <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-[#eeeef2] pt-8 dark:border-white/10">
//               {stats.map((stat) => (
//                 <div key={stat.label}>
//                   <dt className="text-[11px] text-[#8a8a8a] dark:text-[#9CA3AF]">{stat.label}</dt>
//                   <dd className="mt-1 text-xl font-semibold tracking-tight text-[#111] sm:text-2xl dark:text-white">
//                     {stat.value}
//                   </dd>
//                 </div>
//               ))}
//             </dl>
//           </div>

//           <SafiDemo className="min-h-136 lg:min-h-144" />
//         </div>
//       </div>
//     </section>
//   );
// }

// function ArrowIcon() {
//   return (
//     <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
//       <path
//         d="M3 7h8M8 4l3 3-3 3"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// --- Icons ---
const BrainIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const MicIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="22" />
  </svg>
);

const MessageIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const BookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const ChartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="M18 17V9" />
    <path d="M13 17V5" />
    <path d="M8 17v-3" />
  </svg>
);

const SparkleIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.2 1.2L3 12l5.8 1.9a2 2 0 0 1 1.2 1.2L12 21l1.9-5.8a2 2 0 0 1 1.2-1.2L21 12l-5.8-1.9a2 2 0 0 1-1.2-1.2L12 3Z" />
  </svg>
);

// --- Data ---
const coreCapabilities = [
  {
    title: "Financial Intelligence",
    description: "Help teams interpret financial context and operational signals.",
    icon: <BrainIcon />,
  },
  {
    title: "Fraud Detection",
    description: "Surface patterns for review within institution-defined processes.",
    icon: <ShieldIcon />,
  },
  {
    title: "Multilingual AI",
    description: "Support financial experiences across languages and channels.",
    icon: <MessageIcon />,
  },
  {
    title: "Automation",
    description: "Assist repeatable workflows with appropriate human review.",
    icon: <ChartIcon />,
  },
];

const languages = ["English", "Kiswahili", "Hausa", "Arabic", "Yorùbá", "Igbo"];

export function SafiSection() {
  return (
    <div className="bg-white text-black dark:bg-[#0a0a0a] dark:text-white">
      
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#EFB338]/10 blur-[120px] dark:bg-[#EFB338]/5" />
        
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#EFB338]/30 bg-[#EFB338]/10 px-4 py-1.5 text-sm font-medium text-black dark:text-[#EFB338]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#EFB338]" />
              Safi AI
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
          >
            The intelligence <br className="hidden sm:block" />
            powering finance.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-xl"
          >
            Safi is our AI platform for financial intelligence, fraud detection, multilingual interaction, and intelligent workflows throughout the Insolify ecosystem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="w-full rounded-full bg-black px-8 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-80 sm:w-auto dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              Talk to our team
            </Link>
            <Link
              href="#capabilities"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/15 px-8 py-3.5 text-sm font-medium text-black transition-colors hover:border-black/30 sm:w-auto dark:border-white/20 dark:text-white dark:hover:border-white/40"
            >
              Explore capabilities
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= CORE CAPABILITIES ================= */}
      <section id="capabilities" className="border-t border-black/5 bg-neutral-50/50 py-20 sm:py-24 dark:border-white/5 dark:bg-[#0f0f0f]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              One intelligence layer across your institution.
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">
              Safi connects every part of your financial stack with a unified AI engine.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreCapabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:border-[#EFB338]/50 hover:shadow-md dark:border-white/5 dark:bg-[#111111] dark:hover:border-[#EFB338]/50"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFB338]/10 text-[#EFB338]">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= REAL-TIME VOICE ================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-[#EFB338]">
                Real-time Voice
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Safi listens in your customers&apos; language.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                Real-time speech understanding in six languages, so customers can speak naturally to bank, pay, and ask questions. Language quality and dialect coverage depend on deployment.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span key={lang} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-[#111111]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFB338]/10 text-[#EFB338]">
                <MicIcon />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">Live listening & understanding.</h3>
              <ul className="mt-4 space-y-3 text-sm text-neutral-500 dark:text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#EFB338] shrink-0" />
                  Transcribes and understands speech as it happens, with no recording upload step.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#EFB338] shrink-0" />
                  Handles customers who mix languages, such as English with Yorùbá or Hausa.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#EFB338] shrink-0" />
                  Answers in the customer&apos;s language across app, USSD-assisted, and call channels.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CONVERSATIONAL TRANSACTIONS (CHAT UI) ================= */}
      <section className="border-y border-black/5 bg-neutral-50/50 py-20 sm:py-24 dark:border-white/5 dark:bg-[#0f0f0f]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            
            {/* Chat Mockup UI */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 flex flex-col overflow-hidden rounded-3xl border border-black/10 bg-white shadow-xl dark:border-white/10 dark:bg-[#111111]"
            >
              {/* Chat Header */}
              <div className="flex items-center gap-3 border-b border-black/5 bg-white/80 px-5 py-4 backdrop-blur-md dark:border-white/5 dark:bg-[#151515]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EFB338]/10 text-[#EFB338]">
                  <SparkleIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-black dark:text-white">Safi AI</p>
                  <p className="text-xs text-green-500 font-medium flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" /> Online
                  </p>
                </div>
              </div>

              {/* Chat Messages Area */}
              <div className="flex flex-1 flex-col gap-5 bg-neutral-50/50 p-5 sm:p-6 dark:bg-[#0a0a0a]">
                
                {/* User Message 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="self-end rounded-2xl rounded-tr-sm bg-black px-4 py-3 text-sm text-white shadow-sm dark:bg-[#EFB338] dark:text-black max-w-[85%]"
                >
                  &ldquo;Tura naira dubu hamsini wa Amina GT.&rdquo;
                </motion.div>

                {/* Safi Response */}
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.4 }}
                  className="self-start flex gap-3 max-w-[90%]"
                >
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EFB338] text-white">
                    <SparkleIcon className="h-4 w-4" />
                  </div>
                  <div className="rounded-2xl rounded-tl-sm bg-white border border-black/5 px-4 py-3 text-sm text-neutral-800 shadow-sm dark:border-white/10 dark:bg-[#1a1a1a] dark:text-neutral-200">
                    <p>Send ₦50,000 to Amina Bello (GTB ••4821)?</p>
                    <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">Confirm with your PIN or voice signature.</p>
                    
                    {/* Action Buttons inside chat */}
                    <div className="mt-3 flex gap-2">
                      <button className="rounded-md bg-[#EFB338] px-3 py-1.5 text-xs font-semibold text-black">Confirm</button>
                      <button className="rounded-md bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">Cancel</button>
                    </div>
                  </div>
                </motion.div>

                {/* User Message 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2.2, duration: 0.4 }}
                  className="self-end rounded-2xl rounded-tr-sm bg-black px-4 py-3 text-sm text-white shadow-sm dark:bg-[#EFB338] dark:text-black"
                >
                  &ldquo;Ee, tura.&rdquo;
                </motion.div>

                {/* Typing Indicator */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 3, duration: 0.4 }}
                  className="self-start flex gap-3"
                >
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EFB338] text-white">
                    <SparkleIcon className="h-4 w-4" />
                  </div>
                  <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-white border border-black/5 px-4 py-4 shadow-sm dark:border-white/10 dark:bg-[#1a1a1a]">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400" style={{ animationDelay: '0ms' }} />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400" style={{ animationDelay: '150ms' }} />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400" style={{ animationDelay: '300ms' }} />
                  </div>
                </motion.div>
              </div>

              {/* Chat Input (Mockup) */}
              <div className="border-t border-black/5 bg-white p-3 dark:border-white/5 dark:bg-[#151515]">
                <div className="flex items-center gap-2 rounded-full border border-black/10 bg-neutral-50 px-4 py-2 dark:border-white/10 dark:bg-[#0a0a0a]">
                  <span className="text-sm text-neutral-400 flex-1">Type a message...</span>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EFB338] text-black">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-[#EFB338]">
                Conversational Transactions
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Banking through natural conversation.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                Safi turns everyday language into secure financial actions. Just ask, and Safi understands the intent, verifies the details, and asks for confirmation before executing.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Send money, pay bills, buy airtime, and data.",
                  "Every transaction is read back and authenticated first.",
                  "Balances, statements, and loan status in plain language.",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EFB338]/20 text-[#EFB338]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= ACCOUNTING & FORECASTING ================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-[#EFB338]">
                Vibe Financing
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Accounting without needing to be an accountant.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                Describe what happened in plain words. Safi drafts the entries, explains them simply, and flags anything for review, so small teams and junior accountants can work with confidence.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Turn everyday descriptions into proper journal entries.",
                  "Teaches as it works, in simple terms, not jargon.",
                  "Suggestions are reviewed and approved before posting.",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EFB338]/20 text-[#EFB338]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-[#111111]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFB338]/10 text-[#EFB338]">
                <BookIcon />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">Plain-language bookkeeping.</h3>
              <div className="mt-4 rounded-xl bg-neutral-50 p-4 text-sm dark:bg-neutral-800">
                <p className="font-medium text-neutral-600 dark:text-neutral-400">You say:</p>
                <p className="mt-1 text-black dark:text-white">&ldquo;We paid ₦120,000 for generator diesel and got a receipt.&rdquo;</p>
                <p className="mt-4 font-medium text-neutral-600 dark:text-neutral-400">Safi drafts:</p>
                <div className="mt-2 rounded-lg border border-black/5 bg-white p-3 dark:border-white/5 dark:bg-[#1a1a1a]">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-black/5 dark:border-white/5">
                        <th className="pb-1 font-medium">Account</th>
                        <th className="pb-1 font-medium text-right">Debit</th>
                        <th className="pb-1 font-medium text-right">Credit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="pt-1">Fuel and power expense</td>
                        <td className="pt-1 text-right">120,000</td>
                        <td className="pt-1 text-right"></td>
                      </tr>
                      <tr>
                        <td className="pt-1">Cash at bank</td>
                        <td className="pt-1 text-right"></td>
                        <td className="pt-1 text-right">120,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">Why: an expense increases (debit) and cash decreases (credit).</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FORECASTING & ADVISORY ================= */}
      <section className="border-y border-black/5 bg-neutral-50/50 py-20 sm:py-24 dark:border-white/5 dark:bg-[#0f0f0f]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 rounded-3xl border border-black/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-[#111111]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFB338]/10 text-[#EFB338]">
                <ChartIcon />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">See what&apos;s coming. Know what to do.</h3>
              <p className="mt-3 text-neutral-500 dark:text-neutral-400">
                Safi projects cash flow, deposits, loan performance, and revenue, then recommends next steps in plain language.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Cash flow forecasts", "Liquidity trends", "Deposit trends", "Repayment trends", "Budgeting advice", "Risk suggestions"].map((tag) => (
                  <span key={tag} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-[#EFB338]">
                Forecasting & Advisory
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Decision support, not just data.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                Turn complex financial data into clear, actionable insights.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Cash flow, liquidity, deposits, and repayment trends with confidence ranges.",
                  "Suggestions on budgeting, savings, lending limits, and risk, tailored to the account.",
                  "Get an answer with the figures behind it when you ask your numbers.",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EFB338]/20 text-[#EFB338]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FRAUD DETECTION ================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-[#EFB338]">
                Fraud Detection
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Catch the unusual before money moves.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                Safi scores every transaction against behaviour, device, location, and network signals, including edge cases that fixed rules miss.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-xs font-medium">Low risk: Approve</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#EFB338]" />
                  <span className="text-xs font-medium">Medium risk: Verify</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  <span className="text-xs font-medium">High risk: Block</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-[#111111]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFB338]/10 text-[#EFB338]">
                <ShieldIcon />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">Advanced threat detection.</h3>
              <ul className="mt-4 space-y-4 text-sm text-neutral-500 dark:text-neutral-400">
                <li>
                  <span className="font-medium text-black dark:text-white">SIM swap and takeover:</span> Spots sudden device and number changes followed by high-value activity.
                </li>
                <li>
                  <span className="font-medium text-black dark:text-white">Mule and ring detection:</span> Finds linked accounts moving money in suspicious patterns.
                </li>
                <li>
                  <span className="font-medium text-black dark:text-white">Structuring and velocity:</span> Flags split transactions and rapid-fire attempts.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 pb-20 sm:pb-28">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-black px-6 py-20 text-center sm:px-16 dark:bg-[#151515]">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Bring intelligence to every financial interaction.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-400">
            Talk with our team about Safi and how it can power your institution.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#EFB338] px-8 py-3.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}