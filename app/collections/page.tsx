"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import NavBar from "@/app/components/shared/navbar";
import Footer from "@/app/components/shared/footer";
import { collections } from "@/dummyData";

export default function CollectionsPage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Collections</h1>
            <p className="text-muted-foreground mt-2 text-lg">
              Curated collections that tell stories through Ethiopian craftsmanship.
            </p>
          </motion.div>

          <div className="space-y-12">
            {collections.map((collection, i) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                <Link href={`/collections/${collection.slug}`} className="group block">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                    <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <Image
                        src={collection.image}
                        alt={collection.name}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-105"
                        sizes="50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
                    </div>
                    <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                      <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                        COLLECTION {collection.id}
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 group-hover:text-primary transition-colors">
                        {collection.name}
                      </h2>
                      <p className="text-muted-foreground mt-4 leading-relaxed text-lg max-w-md">
                        {collection.description}
                      </p>
                      <p className="text-sm text-muted-foreground mt-3">
                        {collection.productCount} products
                      </p>
                      <span className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                        Explore Collection
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
