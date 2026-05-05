"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Package, ChevronRight } from "lucide-react";
import NavBar from "@/app/components/shared/navbar";
import Footer from "@/app/components/shared/footer";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

const orderList = [
  {
    id: "MIN-2026-003",
    date: "May 4, 2026",
    status: "processing" as const,
    total: "ETB 2,899.99",
    items: 1,
  },
  {
    id: "MIN-2026-002",
    date: "May 1, 2026",
    status: "shipped" as const,
    total: "ETB 1,899.99",
    items: 1,
    tracking: "ET-2847-8845",
  },
  {
    id: "MIN-2026-001",
    date: "Apr 28, 2026",
    status: "delivered" as const,
    total: "ETB 5,099.98",
    items: 2,
  },
];

const statusVariant = {
  processing: "default",
  shipped: "secondary",
  delivered: "success",
  cancelled: "destructive",
} as const;

export default function OrdersPage() {
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
            <h1 className="text-3xl font-bold text-foreground">My Orders</h1>
          </motion.div>

          <div className="space-y-4">
            {orderList.map((order, i) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card variant="glass" className="hover:scale-[1.005] transition-transform">
                  <CardContent className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Package className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{order.id}</p>
                        <p className="text-sm text-muted-foreground">
                          {order.date} &middot; {order.items} item{order.items > 1 ? "s" : ""}
                        </p>
                        {order.tracking && (
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Tracking: {order.tracking}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">{order.total}</p>
                        <Badge variant={statusVariant[order.status]} className="mt-1 capitalize">
                          {order.status}
                        </Badge>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
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
