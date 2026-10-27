import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { products } from "@/dummyData";
import { Badge } from "@/app/components/ui/badge";
import { ProductCard } from "@/app/components/product/product-card";
import ProductGallery from "./product-gallery";
import { etb } from "@/lib/utils";
import ProductOptions from "./product-options";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ id: p.slug }));
}

type Params = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.slug === id);
  if (!product) return {};
  return {
    title: product.name,
    description: `${product.name}: a sample ${product.category.toLowerCase()} listing in the Minab storefront demo.`,
  };
}

export default async function ProductPage({ params }: Params) {
  const { id } = await params;
  const product = products.find((p) => p.slug === id);
  if (!product) notFound();

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <main id="main" className="flex-1 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft aria-hidden="true" className="w-4 h-4" />
          Back to shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductGallery
            name={product.name}
            images={product.images.slice(0, 3)}
            badges={
              <>
                {product.isNew && <Badge variant="default">New</Badge>}
                {product.isSale && <Badge variant="destructive">Sale</Badge>}
              </>
            }
          />

          <div className="enter-fade-up [animation-delay:100ms] lg:sticky lg:top-24 self-start">
            <p className="text-sm text-primary font-medium">{product.category}</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">{product.name}</h1>

            <div className="flex flex-wrap items-baseline gap-3 mt-6">
              <span className="text-3xl font-bold text-foreground">{etb(product.price)}</span>
              {product.originalPrice > product.price && (
                <span className="text-lg text-muted-foreground line-through">
                  <span className="sr-only">was </span>{etb(product.originalPrice)}
                </span>
              )}
              {product.isSale && (
                <span className="text-sm text-destructive font-medium">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>

            <ProductOptions name={product.name} colors={product.colors} sizes={product.sizes} />

            <div className="mt-10 space-y-6">
              <div>
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Details</h2>
                <p className="text-muted-foreground leading-relaxed text-sm">{product.details}</p>
              </div>
              <dl className="grid grid-cols-2 gap-4">
                {[
                  ["Material", product.material],
                  ["Collection", product.collection],
                  ["Care", product.care],
                  ["Tags", product.tags.join(", "), "capitalize"],
                ].map(([term, value, extra]) => (
                  <div key={term}>
                    <dt className="text-xs text-muted-foreground uppercase tracking-wider">{term}</dt>
                    <dd className={`text-sm text-foreground font-medium mt-1 ${extra ?? ""}`}>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="mt-24">
            <h2 className="text-2xl font-bold text-foreground mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
