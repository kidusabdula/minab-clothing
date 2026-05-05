"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  User, Package, Heart, MapPin, CreditCard,
  Settings, LogOut, ChevronRight, ShoppingBag,
} from "lucide-react";
import NavBar from "@/app/components/shared/navbar";
import Footer from "@/app/components/shared/footer";
import { Card, CardContent } from "@/app/components/ui/card";

const navItems = [
  { label: "Dashboard", href: "/account", icon: User },
  { label: "Orders", href: "/account/orders", icon: Package },
  { label: "Wishlist", href: "/account/wishlist", icon: Heart },
  { label: "Addresses", href: "/account/addresses", icon: MapPin },
  { label: "Payment Methods", href: "/account", icon: CreditCard },
  { label: "Settings", href: "/account", icon: Settings },
];

export default function AccountPage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <h1 className="text-4xl font-bold text-foreground">My Account</h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    item.href === "/account"
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                  <ChevronRight className="w-4 h-4 ml-auto" />
                </Link>
              ))}
              <button className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/5 transition-colors w-full">
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </aside>

            <div className="lg:col-span-3 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card variant="glass">
                  <CardContent className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-foreground">Selam Tesfaye</h2>
                      <p className="text-muted-foreground">selam@example.com</p>
                      <p className="text-sm text-muted-foreground mt-1">Member since January 2025</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Orders", value: "3", icon: ShoppingBag, href: "/account/orders" },
                  { label: "Wishlist", value: "3", icon: Heart, href: "/account/wishlist" },
                  { label: "Addresses", value: "2", icon: MapPin, href: "/account/addresses" },
                ].map((stat) => (
                  <Link key={stat.label} href={stat.href}>
                    <Card variant="glass" className="hover:scale-[1.02] transition-transform">
                      <CardContent className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <stat.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">Recent Orders</h3>
                <div className="space-y-3">
                  {[
                    { id: "MIN-2026-003", date: "May 4, 2026", status: "processing", total: "ETB 2,899.99" },
                    { id: "MIN-2026-002", date: "May 1, 2026", status: "shipped", total: "ETB 1,899.99" },
                    { id: "MIN-2026-001", date: "Apr 28, 2026", status: "delivered", total: "ETB 5,099.98" },
                  ].map((order) => (
                    <Card key={order.id} variant="glass" className="hover:scale-[1.005] transition-transform">
                      <CardContent className="flex items-center justify-between py-4">
                        <div>
                          <p className="font-semibold text-foreground">{order.id}</p>
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-foreground">{order.total}</p>
                          <p className="text-xs text-muted-foreground capitalize">{order.status}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-4 text-right">
                  <Link href="/account/orders" className="text-sm font-medium text-primary hover:underline">
                    View all orders
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
