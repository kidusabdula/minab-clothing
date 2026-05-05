"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Heart, ShoppingCart } from "lucide-react";
import NavBar from "@/app/components/shared/navbar";
import Footer from "@/app/components/shared/footer";
import { Button } from "@/app/components/ui/button";
import { ProductCard } from "@/app/components/home/product-card";
import { products } from "@/dummyData";

const wishlistIds = ["1", "7", "11"];
const wishlistProducts = products.filter((p) => wishlistIds.includes(p.id));

export default function WishlistPage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <Link
              href="/account"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to account
            </Link>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-foreground">My Wishlist</h1>
              <span className="text-muted-foreground">({wishlistProducts.length} items)</span>
            </div>
          </motion.div>

          {wishlistProducts.length === 0 ? (
            <div className="text-center py-20">
              <Heart className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground">Your wishlist is empty</h2>
              <p className="text-muted-foreground mt-2">Save items you love for later.</p>
              <Link href="/shop" className="mt-6 inline-block">
                <Button size="lg"><ShoppingCart className="w-5 h-5" /> Browse Products</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {wishlistProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
