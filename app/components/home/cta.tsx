import { Truck, Shield, RefreshCw, Gift } from "lucide-react";
import NewsletterForm from "./newsletter-form";
import { FREE_SHIPPING_ABOVE } from "@/lib/cart";
import { etb } from "@/lib/utils";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: `On orders above ${etb(FREE_SHIPPING_ABOVE)}. Delivered to your doorstep within 3-5 business days.`,
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Your transactions are encrypted and protected. We accept all major payment methods.",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "Not satisfied? Return within 30 days for a full refund. No questions asked.",
  },
  {
    icon: Gift,
    title: "Gift Wrapping",
    description: "Complimentary gift wrapping on all orders. The perfect present, ready to give.",
  },
];

export function CTA() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden relative">
          <div aria-hidden="true" className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div aria-hidden="true" className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <h2 className="sr-only">Sample Store Policies</h2>
            <p className="text-center text-xs text-muted-foreground mb-8">
              Sample policies for this demo storefront, not the label&rsquo;s real terms.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {features.map((f) => (
                <div key={f.title} className="reveal text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <f.icon aria-hidden="true" className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{f.description}</p>
                </div>
              ))}
            </div>

            <div className="reveal text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Join the Minab Community
              </h2>
              <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
                Subscribe to receive exclusive offers, early access to new collections,
                and stories from our artisans.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
