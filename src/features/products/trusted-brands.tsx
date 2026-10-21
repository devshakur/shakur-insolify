

const brands = [
  { name: "MicroBiz Bank LTD", src: "/image/brands/microbiz.png" },
  { name: "Peace Microfinance Bank", src: "/image/brands/peace.jpg" },
  { name: "FidFund MicroFinance Bank", src: "/image/brands/fidfundslogo.png" },
  { name: "Wapia", src: "/image/brands/wapfi.png" },
  { name: "Abucoop", src: "/image/brands/Abucoop.png" },
  { name: "Pillar", src: "/image/brands/pillar.png" },
] as const;



export function TrustedBrands() {
  return (
    <section
      aria-label="Banks that trust us"
      className="bg-white py-12 text-black sm:py-16 dark:bg-black dark:text-white overflow-hidden"
    >
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8 mb-10">
        <h2 className="text-[1.85rem] leading-[1.15] font-bold tracking-[-0.03em] text-[#111] sm:text-4xl lg:text-[2.65rem] dark:text-white">
          Scalable payment infrastructure for banks and microfinance banks.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#5c5c5c] sm:text-base dark:text-[#8d8d93]">
          Trusted by institutions across Africa, Insolify gives you one platform
          for accounts, collections, transfers, and settlement.
        </p>
      </div>


    </section>
  );
}
