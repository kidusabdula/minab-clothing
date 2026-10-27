import type { Metadata } from "next";
import CartView from "./cart-view";

export const metadata: Metadata = {
  title: "Cart",
  description: "A sample shopping cart in the Minab storefront demo.",
};

export default function CartPage() {
  return (
    <main id="main" className="flex-1 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CartView />
      </div>
    </main>
  );
}
