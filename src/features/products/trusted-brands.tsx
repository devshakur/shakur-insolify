import Image from "next/image";

const brands = [
  { name: "MicroBiz Bank LTD",        src: "/image/brands/microbiz.png" },
  { name: "Peace Microfinance Bank",  src: "/image/brands/peace.jpg" },
  { name: "FidFund MicroFinance Bank",src: "/image/brands/fidfund.png" },
  { name: "Wapia",                    src: "/image/brands/wapfi.png" },
  { name: "Abucoop",                  src: "/image/brands/Abucoop.png" },
  { name: "Pillar",                   src: "/image/brands/pillar.png" },
] as const;

const loop = [...brands, ...brands];

export function TrustedBrands() {
  return (
    <section
      aria-label="Banks that trust us"
      className="bg-white py-4 text-black sm:py-6 dark:bg-black dark:text-white"
    >
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h2 className="text-[1.85rem] leading-[1.15] font-bold tracking-[-0.03em] text-[#111] sm:text-4xl lg:text-[2.65rem] dark:text-white">
          Scalable payment infrastructure for banks and microfinance banks.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#5c5c5c] sm:text-base dark:text-[#8d8d93]">
          Trusted by institutions across Africa, Insolify gives you one platform
          for accounts, collections, transfers, and settlement.
        </p>
      </div>

      {/* Sliding logo strip */}
      <div className="relative mt-12 w-full overflow-hidden border-y border-black/10 [--logo-gap:2rem] [--logo-slot:9rem] sm:mt-14 sm:[--logo-gap:3rem] sm:[--logo-slot:13rem] dark:border-white/10">
        <div className="brand-marquee-sharp py-6 sm:py-8">
          <div className="brand-marquee flex w-max">
            <LogoRow />
            <LogoRow hidden />
          </div>
        </div>
        <div
          aria-hidden
          className="brand-marquee-blur pointer-events-none absolute inset-0 overflow-hidden py-6 sm:py-8"
        >
          <div className="brand-marquee flex w-max">
            <LogoRow hidden />
            <LogoRow hidden />
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center"
      style={{ gap: "var(--logo-gap)" }}
      aria-hidden={hidden || undefined}
    >
      {loop.map((brand, index) => (
        <li
          key={`${brand.name}-${index}`}
          className="flex shrink-0 items-center justify-center"
          style={{ width: "var(--logo-slot)", height: "3.5rem" }}
        >
          <Image
            src={brand.src}
            alt={hidden || index >= brands.length ? "" : brand.name}
            width={160}
            height={48}
            className="h-10 w-auto max-w-[9rem] object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:max-w-[12rem]"
          />
        </li>
      ))}
    </ul>
  );
}
