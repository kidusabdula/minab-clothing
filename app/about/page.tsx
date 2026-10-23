"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Users, Award, Heart } from "lucide-react";
import NavBar from "@/app/components/shared/navbar";
import Footer from "@/app/components/shared/footer";
import { Button } from "@/app/components/ui/button";

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    text: "Every piece is crafted with environmentally responsible materials. We source organic cotton, natural dyes, and partner with eco-conscious suppliers across Ethiopia.",
  },
  {
    icon: Users,
    title: "Artisan-First",
    text: "We work directly with local artisan families, paying fair wages and keeping traditional techniques alive.",
  },
  {
    icon: Award,
    title: "Craftsmanship",
    text: "Each garment undergoes rigorous quality control. Our master tailors bring decades of experience, and every stitch tells a story of dedication.",
  },
  {
    icon: Heart,
    title: "Community",
    text: "We support education and vocational training in the communities where our artisans live and work.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <section className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Our Story
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-3">
                  Weaving Ethiopia&rsquo;s Future, One Thread at a Time
                </h1>
                <p className="text-muted-foreground mt-6 leading-relaxed text-lg">
                  Minab was born in the heart of Addis Ababa with a simple mission: to bring
                  Ethiopian craftsmanship to the global stage. What started as a small workshop has grown into a movement — connecting traditional artisans with contemporary
                  design, creating pieces that honor heritage while embracing the future.
                </p>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Every garment we create represents the
                  coming together of master weavers, dyers, tailors, and designers, each
                  contributing their expertise to a shared vision of excellence.
                </p>
                <p className="mt-6 rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm text-muted-foreground">
                  Sample copy written for this demo storefront. It isn&rsquo;t the label&rsquo;s own
                  story, and it makes no claims about the real brand.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative aspect-[4/5] rounded-3xl overflow-hidden"
              >
                <Image
                  src="/IMG_6017.PNG"
                  alt="Minab Atelier"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Values</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{v.title}</h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{v.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Ready to Explore?
              </h2>
              <p className="text-muted-foreground mt-3 text-lg max-w-md mx-auto">
                Discover our latest collection, crafted with passion and heritage.
              </p>
              <Link href="/shop" className="mt-8 inline-block">
                <Button size="lg">
                  Shop Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
