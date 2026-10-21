
import { Hero } from "@/components/hero";
import { ProblemSolutions } from "@/features/products/problem-solutions";
import { FeaturedProducts } from "@/features/products/featured-products";
import { PowerfulFeatures } from "@/features/products/powerful-features";
import { SiteFooter } from "@/components/site-footer";
import { TrustedBrands } from "@/features/products/trusted-brands";
import { InsolifyProductShowcase } from "@/features/products/insolify-product-showcase";
import { Audience } from "@/features/fincore/Audience";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-[#2b2b2b] dark:bg-[#0c0c0f] dark:text-[#ededed]">
      <main>
        <Hero />
        <InsolifyProductShowcase />
        <Audience />
        <TrustedBrands />
        <ProblemSolutions />
        <FeaturedProducts />
        {/* <FincoreCapabilities /> */}
        <PowerfulFeatures />
        {/* <ImpactStories /> */}
      </main>
      <SiteFooter />
    </div>
  );
}
