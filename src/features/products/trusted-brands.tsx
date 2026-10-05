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
    <section aria-label="Brands that trust us" className="overflow-hidden bg-black pb-16 text-white">
      <p className="px-4 text-center text-[11px] tracking-[0.18em] text-white/45 uppercase">Brands that trust us</p>
      <div className="brand-marquee-mask mt-6">
        <div className="brand-marquee flex w-max">
          <BrandRow />
          <BrandRow hidden />
        </div>
      </div>
    </section>
  );
}

function BrandRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {loop.map((brand, index) => (
        <li key={`${brand.name}-${index}`} className="px-4">
          <div className="flex h-16 w-44 items-center justify-center rounded-xl bg-white px-4">
            <Image
              src={brand.src}
              alt={hidden ? "" : brand.name}
              width={140}
              height={48}
              className="h-9 w-auto max-w-full object-contain"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
