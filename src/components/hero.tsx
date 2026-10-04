import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white dark:bg-[#0c0c0f]">
      <Image
        src="/image/insolify.webp"
        alt=""
        fill
        priority
        className="object-cover object-[70%_center]"
        sizes="100vw"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_62%,rgba(255,255,255,0.94)_74%,rgba(255,255,255,0.2)_100%)] lg:bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_34%,rgba(255,255,255,0.92)_46%,rgba(255,255,255,0.35)_62%,rgba(255,255,255,0.05)_100%)] dark:bg-[linear-gradient(180deg,#0c0c0f_0%,#0c0c0f_62%,rgba(12,12,15,0.94)_74%,rgba(12,12,15,0.2)_100%)] dark:lg:bg-[linear-gradient(90deg,#0c0c0f_0%,#0c0c0f_34%,rgba(12,12,15,0.92)_46%,rgba(12,12,15,0.35)_62%,rgba(12,12,15,0.05)_100%)]"
      />

      <div className="relative z-10 flex min-h-160 flex-col lg:min-h-190">
        <SiteNav />
        <div className="mx-auto flex w-full max-w-8xl flex-1 items-start px-4 pt-6 pb-8 sm:px-6 lg:items-center lg:px-8 lg:pt-6 lg:pb-20">
          <div className="hero-copy max-w-2xl">
            <p className="text-sm font-medium tracking-wide text-[#7b61ff] sm:text-base">
              Core banking, AI &amp; payments infrastructure
            </p>
            <h1 className="glass-headline mt-4 text-[2.65rem] leading-[1.05] font-medium tracking-[-0.035em] sm:text-5xl lg:text-[3.5rem]">
              Your life&apos;s work,
              <br />
              powered by our life&apos;s work
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#8a8a8a] sm:text-[17px] dark:text-[#b5b5b5]">
              A unique and powerful software suite to transform the way you
              work. Designed for businesses of all sizes, built by a company
              that values your privacy.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#how-it-works"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#111] px-6 text-sm font-medium text-white transition-colors hover:bg-black dark:bg-white dark:text-[#111] dark:hover:bg-[#e8e8e8]"
              >
                Get Started
              </Link>
              <Link
                href="#features"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#d7d7d7] bg-white px-6 text-sm font-medium text-[#2b2b2b] transition-colors hover:bg-[#f6f6f6] dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:bg-white/10"
              >
                Explore Our Products
              </Link>
            </div>
          </div>
        </div>
        <div className="h-72 sm:h-80 lg:hidden" aria-hidden />
      </div>
    </section>
  );
}
