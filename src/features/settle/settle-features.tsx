const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22L11 13L2 9L22 2Z" />
      </svg>
    ),
    title: "Send money instantly",
    badge: "Consumer & Enterprise",
    description:
      "A guided, transparent flow to send payments across African markets with real-time foreign exchange and upfront fees.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M7 15h10M7 9h10" />
      </svg>
    ),
    title: "Receive payments anywhere",
    badge: "Multi-Rail Payout",
    description:
      "Direct payouts into bank accounts, mobile wallets (M-Pesa, MTN MoMo, Airtel), or instant cash collection hubs.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
        <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
      </svg>
    ),
    title: "Connected finances",
    badge: "Open Banking",
    description:
      "Connect eligible bank accounts to see a holistic, synchronized balance sheet and transaction stream in one unified view.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    title: "Cross-border corridors",
    badge: "Zero Friction",
    description:
      "Optimized routing across high-volume trade routes: Kenya, Nigeria, Ghana, Rwanda, South Africa, Uganda, and Egypt.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Safi AI fraud protection",
    badge: "Intelligent Security",
    description:
      "Every transfer is continuously monitored by Safi intelligence for AML screening, sanction lists, and behavioral anomalies.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" />
      </svg>
    ),
    title: "Dedicated 24/7 support",
    badge: "Always On",
    description:
      "Round-the-clock priority assistance for individuals, finance teams, and institutional settlement engineers.",
  },
];

export function SettleFeatures() {
  return (
    <section id="features" className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[]/30 bg-[]/10 px-4 py-1 text-xs font-semibold tracking-wider text-black uppercase dark:text-[]">
            A More Connected Experience
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
            Money movement, made clearer.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
            Whether you&apos;re sending funds to family across the continent or automating treasury payouts for your enterprise, Settle provides clarity at every step.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="group relative flex flex-col justify-between rounded-3xl border border-black/10 bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[]/50 hover:shadow-lg dark:border-white/10 dark:bg-[#111111] dark:hover:border-[]/50 dark:hover:shadow-none"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[]/10 text-black dark:text-[]">
                    {item.icon}
                  </div>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                    {item.badge}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-black dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-black opacity-0 transition-opacity group-hover:opacity-100 dark:text-[]">
                <span>Learn more</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
