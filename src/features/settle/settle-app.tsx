import Link from "next/link";

const appFeatures = [
  {
    title: "Track settlements live",
    desc: "Monitor inbound and outbound payments in real time across all bank and mobile money rails.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
      </svg>
    ),
  },
  {
    title: "Resolve exceptions instantly",
    desc: "Get notified immediately if a recipient account is restricted or mismatched, and re-route with one tap.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: "Multi-channel alerts",
    desc: "Receive instant push, email, or webhook notifications whenever funds land or need authorization.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
];

export function SettleMobileApp() {
  return (
    <section id="app" className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-6xl rounded-3xl border border-black/10 bg-[#fafafa] p-8 sm:rounded-[2.5rem] sm:p-14 dark:border-white/10 dark:bg-[#111111]">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/10 px-4 py-1 text-xs font-semibold tracking-wider text-black uppercase dark:text-white">
            Settle Mobile App &amp; Ops Hub
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
            Settlement visibility, <span className="italic font-normal text-black dark:text-white">always with you.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
            Payments move around the clock, so oversight should too. The Settle app lets finance teams track settlements, resolve exceptions, and confirm high-value transfers from anywhere.
          </p>
        </div>

        {/* 3 Value Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {appFeatures.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:border-black/20 dark:border-white/20 dark:border-white/10 dark:bg-[#161616]"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-black/10 dark:bg-white/10 text-black dark:text-white">
                {item.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-black dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Store Links & Web Console Button */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://play.google.com/store/apps/details?id=com.settle.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3.5 text-xs font-medium text-white transition-opacity hover:opacity-85 dark:bg-white dark:text-black"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.6 1.8l12.4 12.4-4.8 4.8L2.4 2.8c-.5.4-.5 1.1 1.2-1zM18.8 11.4L16.4 10l-2.6 2.6 2.6 2.6 2.4-1.4c.8-.5.8-1.9 0-2.4zM3.6 22.2c-.7.6-1.2.3-1.2-1l8.8-16.2 4.8 4.8L3.6 22.2z" />
            </svg>
            Get it on Google Play
          </a>
          <a
            href="https://apps.apple.com/search?term=Settle%20Insolify"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-black/15 bg-white px-6 py-3.5 text-xs font-medium text-black transition-colors hover:border-black/30 dark:border-white/20 dark:bg-black dark:text-white dark:hover:border-white/40"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-2 .6-2.64 1.35-.57.65-1.06 1.72-.93 2.74 1.01.08 2.02-.49 2.64-1.24z" />
            </svg>
            Download on App Store
          </a>
          <Link
            href="https://dash.insolify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-white px-6 py-3.5 text-xs font-semibold text-black transition-colors hover:border-[#000000] dark:border-white/10 dark:bg-neutral-800 dark:text-white dark:hover:border-[#000000]"
          >
            Open Web Dashboard &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
