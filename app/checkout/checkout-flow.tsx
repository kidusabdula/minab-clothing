"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, CreditCard, MapPin, Shield } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { cn, etb } from "@/lib/utils";
import { cartTotals, FREE_SHIPPING_ABOVE } from "@/lib/cart";
import { mockAddresses, sampleCart } from "@/dummyData";

const steps = ["Shipping", "Payment", "Review"];
const paymentMethods = [
  { id: "card", label: "Credit / Debit Card", icon: CreditCard },
  { id: "telebirr", label: "Telebirr", icon: Shield },
];
const NEW_ADDRESS = "new";
const { total } = cartTotals(sampleCart);

/** A selectable card backed by a real radio input, so arrow keys and screen readers work. */
function RadioCard({
  name,
  value,
  checked,
  onChange,
  children,
}: {
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  children: React.ReactNode;
}) {
  return (
    <label
      className={cn(
        "block w-full cursor-pointer p-4 rounded-xl border-2 transition-all has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ring",
        checked ? "border-primary bg-primary/5" : "border-border hover:border-muted-foreground/50"
      )}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="sr-only"
      />
      {children}
    </label>
  );
}

export default function CheckoutFlow() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  // What the visitor typed for a new address, kept so the fields refill after "Back".
  const [newAddress, setNewAddress] = useState<Record<string, string>>({});
  const [paymentMethod, setPaymentMethod] = useState("card");

  const saved = mockAddresses.find((a) => a.id === selectedAddress);
  const shipTo = saved
    ? `${saved.street}, ${saved.city}`
    : [newAddress.street, newAddress.city].filter(Boolean).join(", ");

  const finishDemo = () => {
    toast("Demo checkout complete", { description: "No order was placed and nothing was charged." });
    router.push("/checkout/success");
  };

  return (
    <>
      <ol className="flex flex-wrap items-center gap-2 sm:gap-4 mb-12" aria-label="Checkout steps">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center gap-2" aria-current={i === currentStep ? "step" : undefined}>
            <span
              aria-hidden="true"
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors",
                i <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              )}
            >
              {i < currentStep ? <Check className="w-4 h-4" /> : i + 1}
            </span>
            <span
              className={cn(
                "text-xs sm:text-sm font-medium",
                i <= currentStep ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {step}
              {i < currentStep && <span className="sr-only"> (done)</span>}
            </span>
            {i < steps.length - 1 && <span aria-hidden="true" className="hidden sm:block w-12 h-px bg-border mx-2" />}
          </li>
        ))}
      </ol>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          {currentStep === 0 && (
            <form
              id="shipping-step"
              className="enter-fade space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                if (selectedAddress === NEW_ADDRESS) {
                  const fields = Object.fromEntries(new FormData(e.currentTarget));
                  setNewAddress(Object.fromEntries(Object.entries(fields).map(([k, v]) => [k, String(v)])));
                }
                setCurrentStep(1);
              }}
            >
              <h2 className="text-xl font-bold text-foreground">Shipping Address</h2>
              <fieldset className="space-y-4">
                <legend className="sr-only">Ship to</legend>
                {mockAddresses.map((addr) => (
                  <RadioCard
                    key={addr.id}
                    name="address"
                    value={addr.id}
                    checked={selectedAddress === addr.id}
                    onChange={setSelectedAddress}
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span>
                        <span className="block font-semibold text-foreground">{addr.fullName}</span>
                        <span className="block text-sm text-muted-foreground mt-1">
                          {addr.street}, {addr.city}, {addr.state} {addr.zip}
                        </span>
                        <span className="block text-sm text-muted-foreground">{addr.phone}</span>
                      </span>
                      {addr.isDefault && (
                        <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
                          Default
                        </span>
                      )}
                    </span>
                  </RadioCard>
                ))}
                <RadioCard
                  name="address"
                  value={NEW_ADDRESS}
                  checked={selectedAddress === NEW_ADDRESS}
                  onChange={setSelectedAddress}
                >
                  <span className="block font-semibold text-foreground">A new address</span>
                  <span className="block text-sm text-muted-foreground mt-1">
                    Used for this demo checkout only; nothing is saved.
                  </span>
                </RadioCard>
              </fieldset>

              {selectedAddress === NEW_ADDRESS && (
                <Card variant="glass" className="enter-fade p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="Full Name" name="name" autoComplete="name" defaultValue={newAddress.name} required />
                    <Input label="Phone" name="phone" type="tel" autoComplete="tel" placeholder="+251..." defaultValue={newAddress.phone} required />
                    <div className="sm:col-span-2">
                      <Input label="Street Address" name="street" autoComplete="street-address" defaultValue={newAddress.street} required />
                    </div>
                    <Input label="City" name="city" autoComplete="address-level2" defaultValue={newAddress.city} required />
                    <Input label="Country" value="Ethiopia" disabled readOnly />
                  </div>
                </Card>
              )}
            </form>
          )}

          {currentStep === 1 && (
            <div className="enter-fade space-y-6">
              <h2 className="text-xl font-bold text-foreground">Payment Method</h2>
              <fieldset className="space-y-4">
                <legend className="sr-only">Payment method</legend>
                {paymentMethods.map((method) => (
                  <RadioCard
                    key={method.id}
                    name="payment"
                    value={method.id}
                    checked={paymentMethod === method.id}
                    onChange={setPaymentMethod}
                  >
                    <span className="flex items-center gap-3">
                      <method.icon aria-hidden="true" className="w-5 h-5 text-foreground" />
                      <span className="font-medium text-foreground">{method.label}</span>
                    </span>
                  </RadioCard>
                ))}
              </fieldset>

              <p className="rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm text-muted-foreground">
                Demo checkout: no payment is taken and no card details are requested. Pick a
                method to see the next step.
              </p>
            </div>
          )}

          {currentStep === 2 && (
            <div className="enter-fade space-y-6">
              <h2 className="text-xl font-bold text-foreground">Review Order</h2>
              <Card variant="glass">
                <CardContent className="space-y-4">
                  {sampleCart.map((item) => (
                    <div key={item.product.id} className="flex justify-between gap-4 text-sm">
                      <div>
                        <p className="font-medium text-foreground">{item.product.name}</p>
                        <p className="text-muted-foreground">
                          {item.color} / {item.size} x {item.quantity}
                        </p>
                      </div>
                      <p className="font-medium text-foreground whitespace-nowrap">
                        {etb(item.product.price * item.quantity)}
                      </p>
                    </div>
                  ))}
                  <hr className="border-border" />
                  <div className="flex justify-between font-bold">
                    <span className="text-foreground">Total</span>
                    <span className="text-foreground">{etb(total)}</span>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin aria-hidden="true" className="w-4 h-4 shrink-0 text-muted-foreground" />
                  <span className="text-muted-foreground">Shipping to: {shipTo}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CreditCard aria-hidden="true" className="w-4 h-4 shrink-0 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    Payment: {paymentMethods.find((m) => m.id === paymentMethod)?.label}
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-3 mt-8">
            {currentStep > 0 && (
              <Button variant="outline" onClick={() => setCurrentStep(currentStep - 1)}>
                <ArrowLeft aria-hidden="true" className="w-4 h-4" />
                Back
              </Button>
            )}
            {currentStep === 0 && (
              <Button type="submit" form="shipping-step" className="flex-1" disabled={!selectedAddress}>
                Continue
                <ArrowRight aria-hidden="true" className="w-4 h-4" />
              </Button>
            )}
            {currentStep === 1 && (
              <Button className="flex-1" onClick={() => setCurrentStep(2)}>
                Continue
                <ArrowRight aria-hidden="true" className="w-4 h-4" />
              </Button>
            )}
            {currentStep === 2 && (
              <Button className="flex-1" size="lg" onClick={finishDemo}>
                <Check aria-hidden="true" className="w-5 h-5" />
                Finish Demo Checkout
              </Button>
            )}
          </div>
          {currentStep === 0 && !selectedAddress && (
            <p className="mt-3 text-sm text-muted-foreground">Choose an address to continue.</p>
          )}
        </div>

        <aside aria-label="Order summary" className="enter-fade-up hidden lg:block lg:sticky lg:top-28 self-start">
          <Card variant="glass">
            <CardContent>
              <h2 className="text-lg font-bold text-foreground mb-4">Your Order</h2>
              <div className="space-y-3 mb-6">
                {sampleCart.map((item) => (
                  <div key={item.product.id} className="flex justify-between gap-3 text-sm">
                    <span className="text-muted-foreground">
                      {item.product.name} x {item.quantity}
                    </span>
                    <span className="text-foreground font-medium whitespace-nowrap">
                      {etb(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
              <hr className="border-border mb-4" />
              <div className="flex justify-between text-lg font-bold">
                <span className="text-foreground">Total</span>
                <span className="text-foreground">{etb(total)}</span>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                The sample cart, with free shipping above {etb(FREE_SHIPPING_ABOVE)}.
              </p>
            </CardContent>
          </Card>
        </aside>
      </div>
    </>
  );
}
