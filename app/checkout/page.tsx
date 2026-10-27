import type { Metadata } from "next";
import CheckoutFlow from "./checkout-flow";

export const metadata: Metadata = {
  title: "Checkout",
  description: "A demo checkout: no payment is taken and no card details are requested.",
};

export default function CheckoutPage() {
  return (
    <main id="main" className="flex-1 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="enter-fade-up mb-10 text-4xl sm:text-5xl font-bold text-foreground">Checkout</h1>
        <CheckoutFlow />
      </div>
    </main>
  );
}
