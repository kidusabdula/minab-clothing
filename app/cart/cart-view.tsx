"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag, ArrowRight, Truck } from "lucide-react";
import { Button, buttonClasses } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { products } from "@/dummyData";
import { etb } from "@/lib/utils";
import { CartItem } from "@/typefile";

const initialCart: CartItem[] = [
  { product: products[0], quantity: 1, size: "M", color: "Cream" },
  { product: products[3], quantity: 1, size: "One Size", color: "Gold" },
  { product: products[5], quantity: 2, size: "L", color: "Forest" },
];

const qtyButton =
  "w-8 h-8 rounded-lg border border-border flex items-center justify-center text-foreground hover:bg-accent transition-colors";

export default function CartView() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);
  const [promoInput, setPromoInput] = useState("");
  const [promoCode, setPromoCode] = useState("");

  const updateQuantity = (index: number, delta: number) =>
    setCartItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item))
    );
  const removeItem = (index: number) => setCartItems((prev) => prev.filter((_, i) => i !== index));

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 3000 ? 0 : 299;
  const discount = promoCode === "MINAB20" ? subtotal * 0.2 : 0;
  const total = subtotal + shipping - discount;

  return (
    <>
      <div className="enter-fade-up mb-10">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft aria-hidden="true" className="w-4 h-4" />
          Continue Shopping
        </Link>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Shopping Cart</h1>
        <p className="text-muted-foreground mt-2 text-lg" aria-live="polite">
          {cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in your cart
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <ShoppingBag aria-hidden="true" className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground">Your cart is empty</h2>
          <p className="text-muted-foreground mt-2">Looks like you haven&apos;t added anything yet.</p>
          <Link href="/shop" className={buttonClasses({ size: "lg", className: "mt-6" })}>
            <ArrowRight aria-hidden="true" className="w-5 h-5" />
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <ul className="lg:col-span-2 space-y-4" aria-label="Cart items">
            {cartItems.map((item, i) => (
              <li key={item.product.id} className="enter-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <Card className="p-4">
                  <div className="flex gap-4">
                    <Link
                      href={`/shop/${item.product.slug}`}
                      className="relative w-24 h-32 rounded-xl overflow-hidden bg-muted/50 flex-shrink-0"
                    >
                      <Image src={item.product.image} alt={item.product.name} fill className="object-cover" sizes="96px" />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-2">
                        <div className="min-w-0">
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
                        <p className="text-sm font-bold text-foreground whitespace-nowrap">
                          {etb(item.product.price)}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => updateQuantity(i, -1)}
                            aria-label={`Decrease quantity of ${item.product.name}`}
                            className={qtyButton}
                          >
                            <Minus aria-hidden="true" className="w-3 h-3" />
                          </button>
                          <span className="w-10 text-center text-sm font-medium text-foreground">
                            <span className="sr-only">Quantity </span>
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(i, 1)}
                            aria-label={`Increase quantity of ${item.product.name}`}
                            className={qtyButton}
                          >
                            <Plus aria-hidden="true" className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(i)}
                          aria-label={`Remove ${item.product.name} from cart`}
                          className="p-2 rounded-lg text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 aria-hidden="true" className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs font-semibold text-foreground mt-2">
                        Line total: {etb(item.product.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </Card>
              </li>
            ))}
          </ul>

          <div className="enter-fade-up [animation-delay:300ms] lg:sticky lg:top-28 self-start">
            <Card variant="glass">
              <CardContent>
                <h2 className="text-lg font-bold text-foreground mb-6">Order Summary</h2>
                <dl className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <dt className="text-muted-foreground">Subtotal</dt>
                    <dd className="text-foreground font-medium">{etb(subtotal)}</dd>
                  </div>
                  <div className="flex justify-between text-sm">
                    <dt className="text-muted-foreground">Shipping</dt>
                    <dd className="text-foreground font-medium">
                      {shipping === 0 ? <span className="text-success font-medium">Free</span> : `ETB ${shipping}`}
                    </dd>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm">
                      <dt className="text-success">Discount (20%)</dt>
                      <dd className="text-success font-medium">-{etb(discount)}</dd>
                    </div>
                  )}
                  <div className="flex justify-between text-lg font-bold border-t border-border pt-3">
                    <dt className="text-foreground">Total</dt>
                    <dd className="text-foreground">{etb(total)}</dd>
                  </div>
                </dl>

                {shipping === 0 && (
                  <p className="mt-4 flex items-center gap-2 text-xs text-success font-medium bg-success/5 rounded-lg px-3 py-2">
                    <Truck aria-hidden="true" className="w-4 h-4" />
                    You qualify for free shipping!
                  </p>
                )}

                <form
                  className="mt-6 flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setPromoCode(promoInput.trim().toUpperCase());
                  }}
                >
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="Promo code"
                    aria-label="Promo code"
                    className="flex-1 min-w-0 h-10 px-3 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground"
                  />
                  <Button type="submit" variant="outline" size="sm" className="h-10">
                    Apply
                  </Button>
                </form>
                <p className="text-xs mt-2 min-h-4" role="status">
                  {promoCode === "MINAB20" && <span className="text-success">20% discount applied!</span>}
                  {promoCode && promoCode !== "MINAB20" && (
                    <span className="text-muted-foreground">That code isn&rsquo;t valid in this demo.</span>
                  )}
                </p>

                <Link href="/checkout" className={buttonClasses({ size: "lg", className: "mt-6 w-full" })}>
                  Proceed to Checkout
                  <ArrowRight aria-hidden="true" className="w-5 h-5" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
