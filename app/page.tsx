"use client";

import NavBar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
import { Hero } from "./components/home/hero";
import { ProductCard } from "./components/home/product-card";
import { CollectionsShowcase } from "./components/home/collections-showcase";
import { CTA } from "./components/home/cta";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProducts, newArrivals } from "@/dummyData";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />

      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          >
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Featured
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
                This Weeks Picks
              </h2>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
            >
              Shop all
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CollectionsShowcase />

      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          >
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                New Arrivals
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
                Fresh From Our Atelier
              </h2>
            </div>
            <Link
              href="/shop?filter=new"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
            >
              View all new
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {newArrivals.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
