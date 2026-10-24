import Link from "next/link";
import Image from "next/image";
import { collections } from "@/dummyData";
import { SectionHeading } from "./section-heading";

export function CollectionsShowcase() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Curated Collections"
          title="Stories Woven in Fabric"
          href="/collections"
          linkLabel="View all collections"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={`/collections/${collection.slug}`}
              className="reveal group relative block aspect-[3/4] rounded-2xl overflow-hidden"
            >
              <Image
                src={collection.image}
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(min-width: 1280px) 286px, (min-width: 1024px) 23vw, (min-width: 640px) 46vw, 92vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-bold text-foreground">{collection.name}</h3>
                <p className="text-sm text-foreground/80 mt-1">{collection.description}</p>
                <p className="text-xs text-foreground/80 mt-2">
                  {collection.productCount} products
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
