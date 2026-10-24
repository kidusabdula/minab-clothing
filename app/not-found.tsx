import Link from "next/link";
import { buttonClasses } from "./components/ui/button";

export default function NotFound() {
  return (
    <main id="main" className="flex-1 flex items-center justify-center pt-32 pb-16">
      <div className="text-center px-4">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider">404</p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">Page Not Found</h1>
        <p className="mt-3 text-muted-foreground">That page isn&rsquo;t part of this demo storefront.</p>
        <Link href="/shop" className={buttonClasses({ size: "lg", className: "mt-8" })}>
          Back to shop
        </Link>
      </div>
    </main>
  );
}
