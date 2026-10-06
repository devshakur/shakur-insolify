import Link from "next/link";

export function Hero() {
  return (
    <section id="top" className="flex min-h-[calc(100svh-4rem)] flex-col bg-white text-black dark:bg-black dark:text-white">
      <div className="flex w-full flex-1 flex-col justify-end px-5 pt-16 pb-8 sm:px-8 sm:pb-12">
        <h1 className="hero-focus max-w-[10em] text-[2.35rem] leading-[1.02] font-medium tracking-[-0.04em] sm:max-w-[12em] sm:text-6xl lg:max-w-none lg:text-[4.25rem] lg:tracking-[-0.045em]">
          <span className="lg:block">The financial infrastructure</span>{" "}
          <span className="lg:block">companies integrate</span>
        </h1>

        <div className="mt-8 flex flex-col gap-6 sm:mt-12 sm:flex-row sm:items-end sm:justify-between">
          <p className="hero-focus hero-focus-late text-sm leading-6 text-[#5c5c5c] sm:text-[15px] dark:text-[#8d8d93]">
            <span className="block">Purpose-built for banks and fintechs.</span>
            <span className="block">Designed to plug into your systems.</span>
          </p>
          <Link
            href="/fincore"
            className="inline-flex shrink-0 items-center gap-2 self-end text-sm text-[#444] transition-colors hover:text-black focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:self-auto dark:text-[#d0d0d4] dark:hover:text-white dark:focus-visible:ring-offset-black"
          >
            <span className="rounded-md border border-white/15 px-1.5 py-0.5 text-[11px] leading-none text-[#9a9aa1]">Core</span>
            Fincore
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div aria-hidden className="h-5 rounded-t-2xl bg-white dark:bg-black" />
    </section>
  );
}
