import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProductCard } from "@/app/components/product/product-card";
import { products, wishlistIds } from "@/dummyData";

export const metadata: Metadata = {
  title: "My Wishlist",
  description: "A sample wishlist in the Minab storefront demo.",
};

const wishlistProducts = products.filter((p) => wishlistIds.includes(p.id));

export default function WishlistPage() {
  return (
    <main id="main" className="flex-1 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="enter-fade-up mb-10">
          <Link
            href="/account"
            className="inline-flex items-center gap-2 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft aria-hidden="true" className="w-4 h-4" />
            Back to account
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-foreground">My Wishlist</h1>
            <span className="text-muted-foreground">({wishlistProducts.length} items)</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {wishlistProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} priority={i === 0} />
          ))}
        </div>
      </div>
    </main>
  );
}
