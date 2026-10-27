import { Hero } from "./components/home/hero";
import { SectionHeading } from "./components/home/section-heading";
import { CollectionsShowcase } from "./components/home/collections-showcase";
import { CTA } from "./components/home/cta";
import { ProductCard } from "./components/product/product-card";
import { featuredProducts, newArrivals } from "@/dummyData";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <Hero />

      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Featured" title="This Week’s Picks" href="/shop" linkLabel="Shop all" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <CollectionsShowcase />

      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="New Arrivals"
            title="Fresh From Our Atelier"
            href="/shop?filter=new"
            linkLabel="View all new"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
