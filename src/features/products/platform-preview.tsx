import Image from "next/image";
import Link from "next/link";

export function PlatformPreview() {
  return (
    <section aria-label="Platform" className="bg-white px-4 pb-16 text-black sm:px-6 sm:pb-24 lg:px-8 dark:bg-black dark:text-white">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-12">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-[1.7rem]">One workspace</h2>
          <p className="mt-4 max-w-md text-[15px] leading-7 text-[#5c5c5c] dark:text-[#b5b5b5]">
            Fincore, Safi AI, and Settle Africa in the same place. Core banking, intelligence, and payments for the
            companies that integrate them.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-11 items-center rounded-md bg-black px-5 text-sm font-semibold text-white transition-colors hover:bg-[#2a2a2a] dark:bg-white dark:text-black dark:hover:bg-[#e8e8e8]"
          >
            Talk to us
          </Link>
        </div>
        <Image
          src="/image/insolify-platform.jpg"
          alt="Insolify workspace with Fincore, Safi AI, and Settle Africa"
          width={1024}
          height={428}
          className="h-auto w-full rounded-xl"
        />
      </div>
    </section>
  );
}
