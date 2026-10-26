import type { Metadata } from "next";
import Link from "next/link";
import { Search, ArrowLeft } from "lucide-react";
import { ProductCard } from "@/app/components/product/product-card";
import { products } from "@/dummyData";

export const metadata: Metadata = {
  title: "Search",
  description: "Search the sample catalogue of the Minab storefront demo.",
};

type Props = { searchParams: Promise<{ query?: string | string[] }> };

export default async function SearchPage({ searchParams }: Props) {
  const raw = (await searchParams).query;
  const query = (Array.isArray(raw) ? raw[0] : raw)?.trim() ?? "";
  const q = query.toLowerCase();

  const results = q
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.collection.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      )
    : [];

  return (
    <main id="main" className="flex-1 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="enter-fade-up mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft aria-hidden="true" className="w-4 h-4" />
            Back
          </Link>
          <h1 className="text-3xl font-bold text-foreground">
            {query ? <>Results for &ldquo;{query}&rdquo;</> : "Search"}
          </h1>
          <p className="text-muted-foreground mt-2">
            {results.length} product{results.length !== 1 ? "s" : ""} found
          </p>
        </div>

        {results.length === 0 ? (
          <div className="text-center py-20">
            <Search aria-hidden="true" className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground">No products found</h2>
            <p className="text-muted-foreground mt-2">Try a different search term or browse our collections.</p>
            <Link href="/shop" className="inline-block mt-6 py-1 text-primary font-medium hover:underline">
              Browse all products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {results.map((product, i) => (
              <ProductCard key={product.id} product={product} priority={i === 0} headingLevel={2} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
