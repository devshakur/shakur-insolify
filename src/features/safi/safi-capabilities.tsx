import { GlyphIcon } from "@/features/products/icons";
import { safiViews } from "@/features/products/products";

const groups = [
  {
    eyebrow: "Apps",
    title: "What Safi does",
    items: safiViews.apps,
  },
  {
    eyebrow: "Capabilities",
    title: "Built for institutions",
    items: safiViews.features,
  },
] as const;

export function SafiCapabilities() {
  return (
    <section id="safi-capabilities" className="scroll-mt-28 px-4 pb-4 sm:px-6 lg:px-10">
      <div className="rounded-4xl bg-white px-5 py-12 shadow-[0_24px_80px_rgba(20,16,40,0.04)] sm:rounded-[2.75rem] sm:px-10 sm:py-16 lg:px-14 dark:bg-[#141418] dark:shadow-none">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {groups.map((group) => (
            <div key={group.title}>
              <p className="text-[13px] font-medium text-[#8b8b93] dark:text-[#9A9AA3]">
                {group.eyebrow}
              </p>
              <h2 className="mt-2 text-[1.85rem] leading-[1.15] font-semibold tracking-tight text-[#111] sm:text-4xl dark:text-white">
                {group.title}
              </h2>
              <ul className="mt-8 grid gap-3">
                {group.items.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-center gap-3 rounded-[1.4rem] border border-[#eeeef2] bg-[#f8f8fa] px-4 py-4 dark:border-white/10 dark:bg-[#1c1c22]"
                  >
                    <GlyphIcon name={item.glyph} tone={item.tone} />
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-[#111] dark:text-white">
                        {item.title}
                      </span>
                      <span className="mt-0.5 block text-xs leading-5 text-[#6B7280] dark:text-[#9CA3AF]">
                        {item.detail}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
