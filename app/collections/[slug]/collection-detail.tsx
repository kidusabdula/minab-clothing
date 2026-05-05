"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import NavBar from "@/app/components/shared/navbar";
import Footer from "@/app/components/shared/footer";
import { Collection } from "@/typefile";

interface Props {
  collection: Collection | null;
}

export default function CollectionDetail({ collection }: Props) {
  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">Collection Not Found</h1>
          <Link href="/collections" className="mt-4 inline-block text-primary hover:underline">
            Back to collections
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All Collections
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">{collection.name}</h1>
            <p className="text-muted-foreground mt-2 text-lg">{collection.description}</p>
          </motion.div>

          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground">Products loading...</p>
            <Link href="/shop" className="inline-flex items-center gap-2 mt-4 text-primary font-medium hover:underline">
              Browse all products
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
