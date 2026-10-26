import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { buttonClasses } from "@/app/components/ui/button";

export const metadata: Metadata = {
  title: "Demo Checkout Complete",
  description: "End of the demo checkout: no order was placed and nothing was charged.",
};

export default function DemoCheckoutComplete() {
  return (
    <main id="main" className="flex-1 pt-32 pb-16">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="enter-scale w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle aria-hidden="true" className="w-10 h-10 text-success" />
        </div>

        <div className="enter-fade-up [animation-delay:300ms]">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Demo Checkout Complete</h1>
          <p className="text-muted-foreground mt-3 text-lg">
            You reached the end of the demo checkout. No order was placed, nothing was charged and
            nothing will be delivered.
          </p>
        </div>

        <div className="enter-fade-up [animation-delay:500ms] mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/shop" className={buttonClasses({ size: "lg" })}>
            Continue Shopping
            <ArrowRight aria-hidden="true" className="w-5 h-5" />
          </Link>
          <Link href="/" className={buttonClasses({ variant: "outline", size: "lg" })}>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
