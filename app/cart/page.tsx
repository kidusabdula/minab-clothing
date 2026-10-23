"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag, ArrowRight, Truck } from "lucide-react";
import NavBar from "@/app/components/shared/navbar";
import Footer from "@/app/components/shared/footer";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { products } from "@/dummyData";
import { CartItem } from "@/typefile";

const initialCart: CartItem[] = [
  { product: products[0], quantity: 1, size: "M", color: "Cream" },
  { product: products[3], quantity: 1, size: "One Size", color: "Gold" },
  { product: products[5], quantity: 2, size: "L", color: "Forest" },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);
  const [promoCode, setPromoCode] = useState("");

  const updateQuantity = (index: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      })
    );
  };

  const removeItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = subtotal > 3000 ? 0 : 299;
  const discount = promoCode === "MINAB20" ? subtotal * 0.2 : 0;
  const total = subtotal + shipping - discount;

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Continue Shopping
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Shopping Cart
            </h1>
            <p className="text-muted-foreground mt-2 text-lg">
              {cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in your cart
            </p>
          </motion.div>

          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground">Your cart is empty</h2>
              <p className="text-muted-foreground mt-2">
                Looks like you haven&apos;t added anything yet.
              </p>
              <Link href="/shop" className="mt-6 inline-block">
                <Button size="lg">
                  <ArrowRight className="w-5 h-5" />
                  Start Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Card className="p-4">
                      <div className="flex gap-4">
                        <Link
                          href={`/shop/${item.product.slug}`}
                          className="relative w-24 h-32 rounded-xl overflow-hidden bg-muted/50 flex-shrink-0"
                        >
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                            sizes="96px"
                          />
                        </Link>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between">
                            <div>
                              <Link
                                href={`/shop/${item.product.slug}`}
                                className="text-sm font-semibold text-foreground hover:text-primary transition-colors line-clamp-1"
                              >
                                {item.product.name}
                              </Link>
                              <p className="text-xs text-muted-foreground mt-1">
                                {item.color} / {item.size}
                              </p>
                            </div>
                            <p className="text-sm font-bold text-foreground">
                              ETB {item.product.price.toLocaleString()}
                            </p>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => updateQuantity(i, -1)}
                                aria-label={`Decrease quantity of ${item.product.name}`}
                                className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-foreground hover:bg-accent transition-colors"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-10 text-center text-sm font-medium text-foreground">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(i, 1)}
                                aria-label={`Increase quantity of ${item.product.name}`}
                                className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-foreground hover:bg-accent transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <button
                              onClick={() => removeItem(i)}
                              aria-label={`Remove ${item.product.name} from cart`}
                              className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-xs font-semibold text-foreground mt-2">
                            Line total: ETB {(item.product.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="lg:sticky lg:top-28 self-start"
              >
                <Card variant="glass">
                  <CardContent>
                    <h3 className="text-lg font-bold text-foreground mb-6">Order Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="text-foreground font-medium">
                          ETB {subtotal.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Shipping</span>
                        <span className="text-foreground font-medium">
                          {shipping === 0 ? (
                            <span className="text-success font-medium">Free</span>
                          ) : (
                            `ETB ${shipping}`
                          )}
                        </span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-success">Discount (20%)</span>
                          <span className="text-success font-medium">
                            -ETB {discount.toLocaleString()}
                          </span>
                        </div>
                      )}
                      <hr className="border-border" />
                      <div className="flex justify-between text-lg font-bold">
                        <span className="text-foreground">Total</span>
                        <span className="text-foreground">
                          ETB {total.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {shipping === 0 && (
                      <div className="mt-4 flex items-center gap-2 text-xs text-success font-medium bg-success/5 rounded-lg px-3 py-2">
                        <Truck className="w-4 h-4" />
                        You qualify for free shipping!
                      </div>
                    )}

                    <div className="mt-6 flex gap-2">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Promo code"
                        aria-label="Promo code"
                        className="flex-1 h-10 px-3 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring"
                      />
                      <Button variant="outline" size="sm">
                        Apply
                      </Button>
                    </div>
                    {promoCode === "MINAB20" && (
                      <p className="text-xs text-success mt-2">20% discount applied!</p>
                    )}

                    <Link href="/checkout" className="mt-6 block">
                      <Button size="lg" className="w-full">
                        Proceed to Checkout
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
