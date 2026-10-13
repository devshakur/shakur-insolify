import Image from "next/image";

const brands = [
  { name: "MicroBiz Bank LTD", src: "/image/brands/microbiz.png" },
  { name: "Peace Microfinance Bank", src: "/image/brands/peace.png" },
  { name: "FidFund MicroFinance Bank", src: "/image/brands/fidfund.png" },
  { name: "Wapia", src: "/image/brands/wapfi.png" },
  { name: "AC-Nardos Finance Limited", src: "/image/brands/ac-nardos.svg" },
] as const;

const loop = [...brands, ...brands, ...brands];

export function TrustedBrands() {
  return (
    <section aria-label="Banks that trust us" className="bg-white py-4 text-black sm:py-6 dark:bg-black dark:text-white">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h2 className="text-[1.85rem] leading-[1.15] font-bold tracking-[-0.03em] text-[#111] sm:text-4xl lg:text-[2.65rem] dark:text-white">
          Scalable payment infrastructure for banks and microfinance banks.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#5c5c5c] sm:text-base dark:text-[#8d8d93]">
          Trusted by institutions across Africa, Insolify gives you one platform for accounts, collections, transfers, and settlement.
        </p>
      </div>

      <div className="brand-marquee-window relative mx-auto mt-14 overflow-hidden sm:mt-16">
        <div className="brand-marquee-sharp">
          <div className="brand-marquee flex w-max">
            <BrandRow />
            <BrandRow hidden />
          </div>
        </div>
        <div aria-hidden className="brand-marquee-blur pointer-events-none absolute inset-0 overflow-hidden">
          <div className="brand-marquee flex w-max">
            <BrandRow hidden />
            <BrandRow hidden />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-linear-to-r from-white to-transparent sm:w-8 dark:from-black" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-linear-to-l from-white to-transparent sm:w-8 dark:from-black" />
      </div>
    </section>
  );
}

function BrandRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="brand-logo-row flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {loop.map((brand, index) => (
        <li key={`${brand.name}-${index}`} className="brand-logo-slot flex h-14 shrink-0 items-center justify-center">
          <Image
            src={brand.src}
            alt={hidden || index >= brands.length ? "" : brand.name}
            width={160}
            height={48}
            className="h-10 w-auto max-w-38 object-contain"
          />
        </li>
      ))}
    </ul>
  );
}
