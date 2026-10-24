import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Package } from "lucide-react";
import { buttonClasses } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";

export const metadata: Metadata = {
  title: "Demo Order Confirmed",
  description: "Demo confirmation page: no order was placed and nothing was charged.",
};

const summary = [
  ["Order Number", "MIN-2026-004"],
  ["Estimated Delivery", "May 10, 2026"],
  ["Total", "ETB 5,099.98"],
];

export default function OrderSuccess() {
  return (
    <main id="main" className="flex-1 pt-32 pb-16">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="enter-scale w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle aria-hidden="true" className="w-10 h-10 text-success" />
        </div>

        <div className="enter-fade-up [animation-delay:300ms]">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Demo Order Confirmed</h1>
          <p className="text-muted-foreground mt-3 text-lg">
            This is a demo: no order was placed and nothing was charged.
          </p>
        </div>

        <Card variant="glass" className="enter-fade-up [animation-delay:500ms] mt-10">
          <CardContent>
            <dl className="text-left space-y-4">
              {summary.map(([term, value]) => (
                <div key={term} className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">{term}</dt>
                  <dd className="text-foreground font-semibold">{value}</dd>
                </div>
              ))}
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Status</dt>
                <dd className="text-success font-semibold flex items-center gap-1">
                  <Package aria-hidden="true" className="w-4 h-4" /> Processing
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <div className="enter-fade-up [animation-delay:700ms] mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/account/orders" className={buttonClasses({ size: "lg" })}>
            <Package aria-hidden="true" className="w-5 h-5" />
            Track Your Order
          </Link>
          <Link href="/shop" className={buttonClasses({ variant: "outline", size: "lg" })}>
            Continue Shopping
            <ArrowRight aria-hidden="true" className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
