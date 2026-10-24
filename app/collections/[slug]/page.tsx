import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { collections, products } from "@/dummyData";
import { ProductCard } from "@/app/components/product/product-card";

export const dynamicParams = false;

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  return collection ? { title: collection.name, description: collection.description } : {};
}

export default async function CollectionPage({ params }: Params) {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) notFound();
  const items = products.filter((p) => p.collection === collection.name);

  return (
    <main id="main" className="flex-1 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/collections"
          className="inline-flex items-center gap-2 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft aria-hidden="true" className="w-4 h-4" /> All Collections
        </Link>

        <div className="enter-fade-up mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">{collection.name}</h1>
          <p className="text-muted-foreground mt-2 text-lg">{collection.description}</p>
        </div>

        {items.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {items.map((product, i) => (
              <ProductCard key={product.id} product={product} priority={i === 0} />
            ))}
          </div>
        ) : (
          <p className="text-center py-20 text-lg text-muted-foreground">No products in this collection yet.</p>
        )}

        <div className="mt-12 text-center">
          <Link href="/shop" className="inline-flex items-center gap-2 py-1 text-primary font-medium hover:underline">
            Browse all products
            <ArrowRight aria-hidden="true" className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
