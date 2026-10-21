import Link from "next/link";

export function SettleCta() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-black px-6 py-14 text-white sm:rounded-[2.75rem] sm:px-14 sm:py-20 dark:bg-[#111111] dark:border dark:border-white/10">
        {/* Subtle brand glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-black/10 dark:bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 size-96 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/10 px-4 py-1 text-xs font-semibold tracking-wider text-black dark:text-white uppercase">
            Start Moving Money Smarter
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            One platform for your connected finances across Africa.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-300 sm:text-lg">
            Talk with our payment engineers about integrating Settle into your business or enabling corridors in your country.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#000000] px-8 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              Get in Touch with Sales
            </Link>
            <Link
              href="https://dash.insolify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 text-sm font-medium text-white transition-colors hover:bg-white/20"
            >
              Sign In to Console
            </Link>
          </div>

          <p className="mt-6 text-xs text-neutral-400">
            Authorised &amp; compliant · Zero hidden foreign exchange markups · 24/7 Support
          </p>
        </div>
      </div>
    </section>
  );
}
