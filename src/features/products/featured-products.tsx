"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useState } from "react";
import { FeatureList } from "@/features/products/feature-list";
import { DropletIcon, ProductMark } from "@/features/products/icons";
import { Insolify3dScene } from "@/features/products/insolify-3d-scene";
import { PreviewCard } from "@/features/products/preview-card";
import { ProductCard } from "@/features/products/product-card";
import { getProduct, products } from "@/features/products/products";
import { NetworkVisual } from "@/features/products/visuals";
import { productIds, type ProductId, type SafiView } from "@/features/products/types";

export function FeaturedProducts() {
  const [active, setActive] = useState<ProductId>("safi");
  const [safiView, setSafiView] = useState<SafiView>("apps");
  const featured = getProduct(active);
  const others = products.filter((product) => product.id !== active);

  function selectProduct(id: ProductId, shouldFocus = false) {
    setActive(id);
    if (shouldFocus) {
      document.getElementById(`product-tab-${id}`)?.focus();
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <section id="features" className="relative scroll-mt-28 overflow-hidden bg-[#F6F4EE] py-16 text-[#16181D] sm:py-20 dark:bg-[#0B0C10] dark:text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute top-24 left-1/4 h-72 w-72 rounded-full bg-[#D4AF37]/15 blur-3xl"
        />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-64 opacity-50">
          <NetworkVisual />
        </div>

        <div className="relative mx-auto w-full  px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Featured products</h2>
          <div
            role="tablist"
            aria-label="Featured products"
            className="mb-8 inline-flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-[#E6E2D6] bg-white p-1 dark:border-[#2A2D35] dark:bg-[#12141a]"
            onKeyDown={(event) => {
              const index = productIds.indexOf(active);
              const next =
                event.key === "ArrowRight"
                  ? productIds[(index + 1) % productIds.length]
                  : event.key === "ArrowLeft"
                    ? productIds[(index - 1 + productIds.length) % productIds.length]
                    : event.key === "Home"
                      ? productIds[0]
                      : event.key === "End"
                        ? productIds[productIds.length - 1]
                        : null;
              if (!next) return;
              event.preventDefault();
              selectProduct(next, true);
            }}
          >
            {products.map((product) => {
              const selected = product.id === active;
              return (
                <button
                  key={product.id}
                  type="button"
                  role="tab"
                  id={`product-tab-${product.id}`}
                  aria-selected={selected}
                  aria-controls="featured-product-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => selectProduct(product.id)}
                  className={`relative inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
                    selected
                      ? "text-[#16181D] dark:text-white"
                      : "text-[#6B7280] hover:text-[#16181D] dark:text-[#9CA3AF] dark:hover:text-white"
                  }`}
                >
                  <ProductMark id={product.id} />
                  {product.name}
                  {selected ? (
                    <span className="absolute right-3 bottom-1 left-3 h-px bg-[#D4AF37]" />
                  ) : null}
                </button>
              );
            })}
          </div>

          <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)_minmax(0,1.15fr)]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                role="tabpanel"
                id="featured-product-panel"
                aria-labelledby={`product-tab-${active}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="grid items-start gap-4 lg:col-span-2 lg:grid-cols-2"
              >
                <div className="rounded-[28px] border border-transparent px-2 py-4 sm:px-4">
                  <ProductCard
                    product={featured}
                    featured
                    onSecondary={featured.id === "safi" ? () => setSafiView("demo") : undefined}
                  />
                </div>
                {featured.id === "safi" ? (
                  <FeatureList view={safiView} onViewChange={setSafiView} />
                ) : (
                  <PreviewCard preview={featured.preview} />
                )}
                <div className="lg:col-span-2">
                  <Insolify3dScene />
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="grid gap-4">
              {others.map((product) => (
                <div key={product.id} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div className="rounded-[28px] border border-[#E6E2D6] bg-white p-5 dark:border-[#2A2D35] dark:bg-[#16181D]/70">
                    <ProductCard product={product} onSelect={() => selectProduct(product.id)} />
                  </div>
                  <PreviewCard preview={product.preview} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => selectProduct("safi", true)}
              aria-label="Show Safi AI"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_0_30px_rgba(212,175,55,0.35)]"
            >
              <DropletIcon />
            </button>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
