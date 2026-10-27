import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { collections } from "@/dummyData";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Collections",
  description: "Sample collections in the Minab storefront demo.",
};

export default function CollectionsPage() {
  return (
    <main id="main" className="flex-1 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="enter-fade-up mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Collections</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Curated collections that tell stories through Ethiopian craftsmanship.
          </p>
        </div>

        <div className="space-y-12">
          {collections.map((collection, i) => (
            <Link key={collection.id} href={`/collections/${collection.slug}`} className="reveal group block rounded-3xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={cn("relative aspect-[4/3] rounded-3xl overflow-hidden", i % 2 === 1 && "lg:col-start-2")}>
                  <Image
                    src={collection.image}
                    alt=""
                    fill
                    priority={i === 0}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1280px) 584px, (min-width: 1024px) 45vw, 92vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
                </div>
                <div className={cn(i % 2 === 1 && "lg:col-start-1 lg:row-start-1")}>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                    Collection {collection.id}
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 group-hover:text-primary transition-colors">
                    {collection.name}
                  </h2>
                  <p className="text-muted-foreground mt-4 leading-relaxed text-lg max-w-md">
                    {collection.description}
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">{collection.productCount} products</p>
                  <span className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                    Explore Collection
                    <ArrowRight aria-hidden="true" className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
