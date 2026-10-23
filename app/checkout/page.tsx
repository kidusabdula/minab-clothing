"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CreditCard, Check, Shield, MapPin } from "lucide-react";
import NavBar from "@/app/components/shared/navbar";
import Footer from "@/app/components/shared/footer";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { products } from "@/dummyData";
import { mockAddresses } from "@/dummyData";
import { toast } from "sonner";

const steps = ["Shipping", "Payment", "Review"];
const cartMock = [
  { product: products[0], quantity: 1, size: "M", color: "Cream" },
  { product: products[3], quantity: 1, size: "One Size", color: "Gold" },
];
const subtotal = cartMock.reduce((s, i) => s + i.product.price * i.quantity, 0);
const total = subtotal > 3000 ? subtotal : subtotal + 299;

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string>("card");

  const handlePlaceOrder = () => {
    toast.success("Demo order placed", {
      description: "Nothing was charged. Redirecting to the demo confirmation...",
    });
    setTimeout(() => {
      window.location.href = "/checkout/success";
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Checkout</h1>
          </motion.div>

          <div className="flex items-center gap-2 sm:gap-4 mb-12">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    i <= currentStep
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {i < currentStep ? <Check className="w-4 h-4" /> : i + 1}
                </div>
                <span
                  className={`text-sm font-medium ${
                    i <= currentStep ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {step}
                </span>
                {i < steps.length - 1 && (
                  <div className="hidden sm:block w-12 h-px bg-border mx-2" />
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              {currentStep === 0 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-bold text-foreground">Shipping Address</h2>
                  {mockAddresses.map((addr) => (
                    <button
                      key={addr.id}
                      onClick={() => setSelectedAddress(addr.id)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                        selectedAddress === addr.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-muted-foreground/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-foreground">{addr.fullName}</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {addr.street}, {addr.city}, {addr.state} {addr.zip}
                          </p>
                          <p className="text-sm text-muted-foreground">{addr.phone}</p>
                        </div>
                        {addr.isDefault && (
                          <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
                            Default
                          </span>
                        )}
                      </div>
                    </button>
                  ))}

                  <Card variant="glass" className="p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input label="Full Name" placeholder="Your name" />
                      <Input label="Phone" placeholder="+251..." />
                      <Input label="Street Address" placeholder="Street" className="sm:col-span-2" />
                      <Input label="City" placeholder="City" />
                      <Input label="State" placeholder="State" />
                      <Input label="ZIP Code" placeholder="ZIP" />
                      <Input label="Country" value="Ethiopia" disabled />
                    </div>
                  </Card>
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-bold text-foreground">Payment Method</h2>
                  {[
                    { id: "card", label: "Credit / Debit Card", icon: CreditCard },
                    { id: "telebirr", label: "Telebirr", icon: Shield },
                  ].map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                        paymentMethod === method.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-muted-foreground/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <method.icon className="w-5 h-5 text-foreground" />
                        <span className="font-medium text-foreground">{method.label}</span>
                      </div>
                    </button>
                  ))}

                  <p className="rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm text-muted-foreground">
                    Demo checkout: no payment is taken and no card details are requested. Pick a
                    method to see the next step.
                  </p>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-bold text-foreground">Review Order</h2>
                  <Card variant="glass">
                    <CardContent className="space-y-4">
                      {cartMock.map((item, i) => (
                        <div key={i} className="flex justify-between text-sm">
                          <div>
                            <p className="font-medium text-foreground">{item.product.name}</p>
                            <p className="text-muted-foreground">
                              {item.color} / {item.size} x {item.quantity}
                            </p>
                          </div>
                          <p className="font-medium text-foreground">
                            ETB {(item.product.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      ))}
                      <hr className="border-border" />
                      <div className="flex justify-between font-bold">
                        <span className="text-foreground">Total</span>
                        <span className="text-foreground">ETB {total.toLocaleString()}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        Shipping to: {mockAddresses[0].street}, {mockAddresses[0].city}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CreditCard className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        Payment: {paymentMethod === "card" ? "Credit Card" : "Telebirr"}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="flex gap-3 mt-8">
                {currentStep > 0 && (
                  <Button variant="outline" onClick={() => setCurrentStep(currentStep - 1)}>
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </Button>
                )}
                {currentStep < 2 ? (
                  <Button
                    className="flex-1"
                    onClick={() => setCurrentStep(currentStep + 1)}
                    disabled={currentStep === 0 && !selectedAddress}
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button className="flex-1" size="lg" onClick={handlePlaceOrder}>
                    <Check className="w-5 h-5" />
                    Place Order
                  </Button>
                )}
              </div>
            </div>

            {/* Order summary sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="hidden lg:block lg:sticky lg:top-28 self-start"
            >
              <Card variant="glass">
                <CardContent>
                  <h3 className="text-lg font-bold text-foreground mb-4">Your Order</h3>
                  <div className="space-y-3 mb-6">
                    {cartMock.map((item, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {item.product.name} x {item.quantity}
                        </span>
                        <span className="text-foreground font-medium">
                          ETB {(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                  <hr className="border-border mb-4" />
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-foreground">Total</span>
                    <span className="text-foreground">ETB {total.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
