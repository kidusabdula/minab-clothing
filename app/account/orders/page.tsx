import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Package } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { mockOrders } from "@/dummyData";
import { etb, shortDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "My Orders",
  description: "Sample order history in the Minab storefront demo.",
};

const statusVariant = {
  processing: "default",
  shipped: "secondary",
  delivered: "success",
  cancelled: "destructive",
} as const;

const orders = [...mockOrders].sort((a, b) => b.date.localeCompare(a.date));

export default function OrdersPage() {
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
          <h1 className="text-3xl font-bold text-foreground">My Orders</h1>
        </div>

        <ul className="space-y-4">
          {orders.map((order, i) => {
            const items = order.items.reduce((n, item) => n + item.quantity, 0);
            return (
              <li key={order.id} className="enter-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <Card variant="glass">
                  <CardContent className="flex flex-wrap items-center justify-between gap-4 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Package aria-hidden="true" className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{order.id}</p>
                        <p className="text-sm text-muted-foreground">
                          {shortDate(order.date)} &middot; {items} item{items > 1 ? "s" : ""}
                        </p>
                        {order.status === "shipped" && order.trackingNumber && (
                          <p className="text-xs text-muted-foreground mt-0.5">Tracking: {order.trackingNumber}</p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">{etb(order.total)}</p>
                      <Badge variant={statusVariant[order.status]} className="mt-1 capitalize">
                        {order.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
