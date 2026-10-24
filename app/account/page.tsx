import type { Metadata } from "next";
import Link from "next/link";
import { User, Package, Heart, MapPin, LogOut, ChevronRight, ShoppingBag } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { mockAddresses, mockOrders, wishlistIds } from "@/dummyData";
import { etb, shortDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "My Account",
  description: "A sample customer account in the Minab storefront demo.",
};

const navItems = [
  { label: "Dashboard", href: "/account", icon: User },
  { label: "Orders", href: "/account/orders", icon: Package },
  { label: "Wishlist", href: "/account/wishlist", icon: Heart },
  { label: "Addresses", href: "/account/addresses", icon: MapPin },
];

const stats = [
  { label: "Orders", value: mockOrders.length, icon: ShoppingBag, href: "/account/orders" },
  { label: "Wishlist", value: wishlistIds.length, icon: Heart, href: "/account/wishlist" },
  { label: "Addresses", value: mockAddresses.length, icon: MapPin, href: "/account/addresses" },
];

const recentOrders = [...mockOrders].sort((a, b) => b.date.localeCompare(a.date));

export default function AccountPage() {
  return (
    <main id="main" className="flex-1 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="enter-fade-up mb-10 text-4xl font-bold text-foreground">My Account</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <nav aria-label="Account" className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-current={item.href === "/account" ? "page" : undefined}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  item.href === "/account"
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                <item.icon aria-hidden="true" className="w-4 h-4" />
                {item.label}
                <ChevronRight aria-hidden="true" className="w-4 h-4 ml-auto" />
              </Link>
            ))}
            <Link
              href="/login"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/5 transition-colors w-full"
            >
              <LogOut aria-hidden="true" className="w-4 h-4" />
              Sign Out
            </Link>
          </nav>

          <div className="lg:col-span-3 space-y-8">
            <Card variant="glass" className="enter-fade-up [animation-delay:100ms]">
              <CardContent className="flex items-center gap-6">
                <div className="w-16 h-16 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                  <User aria-hidden="true" className="w-8 h-8 text-primary" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-xl font-bold text-foreground">Demo Customer</h2>
                  <p className="text-muted-foreground">demo@example.com</p>
                  <p className="text-sm text-muted-foreground mt-1">Member since January 2025</p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat) => (
                <Link key={stat.label} href={stat.href} className="block rounded-2xl">
                  <Card variant="glass" className="hover:scale-[1.02] transition-transform">
                    <CardContent className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <stat.icon aria-hidden="true" className="w-6 h-6 text-primary" />
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

            <section aria-labelledby="recent-orders">
              <h2 id="recent-orders" className="text-lg font-bold text-foreground mb-4">
                Recent Orders
              </h2>
              <ul className="space-y-3">
                {recentOrders.map((order) => (
                  <li key={order.id}>
                    <Card variant="glass">
                      <CardContent className="flex items-center justify-between gap-4 py-4">
                        <div>
                          <p className="font-semibold text-foreground">{order.id}</p>
                          <p className="text-sm text-muted-foreground">{shortDate(order.date)}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-foreground">{etb(order.total)}</p>
                          <p className="text-xs text-muted-foreground capitalize">{order.status}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-right">
                <Link href="/account/orders" className="inline-block py-1 text-sm font-medium text-primary hover:underline">
                  View all orders
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
