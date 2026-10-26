import type { Metadata } from "next";
import { Suspense } from "react";
import ShopBrowserWithUrl, { ShopBrowser } from "./shop-browser";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse the sample catalogue of the Minab storefront demo by category, collection and price.",
};

export default function ShopPage() {
  return (
    <main id="main" className="flex-1 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="enter-fade-up mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Shop</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Discover our complete collection of premium Ethiopian fashion.
          </p>
        </div>
        <Suspense fallback={<ShopBrowser />}>
          <ShopBrowserWithUrl />
        </Suspense>
      </div>
    </main>
  );
}
