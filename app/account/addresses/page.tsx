import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin, Plus, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import DemoAction from "@/app/components/shared/demo-action";
import { mockAddresses } from "@/dummyData";

export const metadata: Metadata = {
  title: "Saved Addresses",
  description: "Sample saved addresses in the Minab storefront demo.",
};

const NOT_SAVED = "Demo storefront: addresses can't be changed.";

export default function AddressesPage() {
  return (
    <main id="main" className="flex-1 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="enter-fade-up mb-10">
          <Link
            href="/account"
            className="inline-flex items-center gap-2 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft aria-hidden="true" className="w-4 h-4" />
            Back to account
          </Link>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-3xl font-bold text-foreground">Saved Addresses</h1>
            <DemoAction variant="outline" size="sm" message={NOT_SAVED}>
              <Plus aria-hidden="true" className="w-4 h-4" /> Add Address
            </DemoAction>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {mockAddresses.map((addr, i) => (
            <Card key={addr.id} variant="glass" className="enter-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="flex items-center gap-2 font-semibold text-foreground">
                    <MapPin aria-hidden="true" className="w-4 h-4 text-primary" />
                    {addr.label}
                  </h2>
                  {addr.isDefault && <Badge variant="default">Default</Badge>}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{addr.fullName}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {addr.street}
                    <br />
                    {addr.city}, {addr.state} {addr.zip}
                    <br />
                    {addr.country}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{addr.phone}</p>
                </div>
                <div className="flex gap-2 pt-2 border-t border-border">
                  <DemoAction variant="ghost" size="sm" message={NOT_SAVED} aria-label={`Edit ${addr.label} address`}>
                    <Pencil aria-hidden="true" className="w-3 h-3" /> Edit
                  </DemoAction>
                  {!addr.isDefault && (
                    <DemoAction
                      variant="ghost"
                      size="sm"
                      message={NOT_SAVED}
                      aria-label={`Remove ${addr.label} address`}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 aria-hidden="true" className="w-3 h-3" /> Remove
                    </DemoAction>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
