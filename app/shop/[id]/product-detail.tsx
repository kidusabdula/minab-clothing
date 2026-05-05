"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star, Heart, ShoppingCart } from "lucide-react";
import NavBar from "@/app/components/shared/navbar";
import Footer from "@/app/components/shared/footer";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { ProductCard } from "@/app/components/home/product-card";
import { Product } from "@/typefile";
import { toast } from "sonner";

interface Props {
  product: Product | null;
  relatedProducts: Product[];
}

export default function ProductDetail({ product, relatedProducts }: Props) {
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">Product Not Found</h1>
          <Link href="/shop" className="mt-4 inline-block text-primary hover:underline">
            Back to shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast.success(`${product.name} added to cart`, {
      description: "Size: M, Color: " + product.colors[0],
    });
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted/50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="50vw"
                  priority
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.isNew && <Badge variant="default">New</Badge>}
                  {product.isSale && <Badge variant="destructive">Sale</Badge>}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(0, 3).map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-square rounded-xl overflow-hidden bg-muted/50 cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                  >
                    <Image
                      src={img}
                      alt={`${product.name} - ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:sticky lg:top-24 self-start"
            >
              <p className="text-sm text-primary font-medium">{product.category}</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 mt-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.round(product.rating)
                          ? "fill-primary text-primary"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <div className="flex items-baseline gap-3 mt-6">
                <span className="text-3xl font-bold text-foreground">
                  ETB {product.price.toLocaleString()}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-lg text-muted-foreground line-through">
                    ETB {product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.isSale && (
                  <span className="text-sm text-destructive font-medium">
                    {Math.round(
                      ((product.originalPrice - product.price) / product.originalPrice) * 100
                    )}
                    % OFF
                  </span>
                )}
              </div>

              <div className="mt-8 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Color</p>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        className="h-8 px-3 rounded-lg border border-border text-sm text-foreground hover:bg-accent transition-colors"
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Size</p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className="h-10 w-12 rounded-lg border border-border text-sm text-foreground font-medium hover:bg-accent hover:border-primary transition-all"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>

              <div className="mt-10 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                    Details
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {product.details}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Material</p>
                    <p className="text-sm text-foreground font-medium mt-1">{product.material}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Collection</p>
                    <p className="text-sm text-foreground font-medium mt-1">{product.collection}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Care</p>
                    <p className="text-sm text-foreground font-medium mt-1">{product.care}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Tags</p>
                    <p className="text-sm text-foreground font-medium mt-1 capitalize">
                      {product.tags.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {relatedProducts.length > 0 && (
            <section className="mt-24">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                You May Also Like
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {relatedProducts.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
