import { GlyphIcon } from "@/features/products/icons";
import { safiViews } from "@/features/products/products";

const capabilities = [...safiViews.apps, ...safiViews.features];

export function SafiCapabilities() {
  return (
    <section id="safi-capabilities" className="scroll-mt-28 px-4 pb-4 sm:px-6 lg:px-10">
      <div className="rounded-4xl bg-white px-5 py-12 shadow-[0_24px_80px_rgba(20,16,40,0.04)] sm:rounded-[2.75rem] sm:px-10 sm:py-16 lg:px-14 dark:bg-[#141418] dark:shadow-none">
        <div className="max-w-2xl">
          <p className="text-[13px] font-medium text-[#8b8b93] dark:text-[#9A9AA3]">Capabilities</p>
          <h2 className="mt-2 text-[1.85rem] leading-[1.15] font-semibold tracking-tight text-[#111] sm:text-4xl dark:text-white">
            What Safi handles
          </h2>
        </div>

        <ul className="mt-10 flex flex-col">
          {capabilities.map((item, i) => (
            <li
              key={item.title}
              className={`flex flex-col gap-4 border-t border-[#eeeef2] py-6 sm:flex-row sm:items-center sm:gap-8 dark:border-white/10 ${
                i === capabilities.length - 1 ? "border-b" : ""
              }`}
            >
              <GlyphIcon name={item.glyph} tone={item.tone} />
              <span className="shrink-0 text-base font-semibold text-[#111] sm:w-56 dark:text-white">
                {item.title}
              </span>
              <span className="text-sm leading-6 text-[#6B7280] dark:text-[#9CA3AF]">
                {item.detail}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}