"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, MapPin, Plus, Pencil, Trash2 } from "lucide-react";
import NavBar from "@/app/components/shared/navbar";
import Footer from "@/app/components/shared/footer";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { mockAddresses } from "@/dummyData";

export default function AddressesPage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <Link
              href="/account"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to account
            </Link>
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-foreground">Saved Addresses</h1>
              <Button variant="outline" size="sm">
                <Plus className="w-4 h-4" /> Add Address
              </Button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mockAddresses.map((addr, i) => (
              <motion.div
                key={addr.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card variant="glass" className="relative">
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-foreground">{addr.label}</span>
                      </div>
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
                      <Button variant="ghost" size="sm">
                        <Pencil className="w-3 h-3" /> Edit
                      </Button>
                      {!addr.isDefault && (
                        <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                          <Trash2 className="w-3 h-3" /> Remove
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
