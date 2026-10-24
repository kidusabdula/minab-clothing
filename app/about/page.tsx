import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Users, Award, Heart } from "lucide-react";
import { buttonClasses } from "@/app/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: "Sample brand story and values written for the Minab storefront demo.",
};

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
    <main id="main" className="flex-1">
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="enter-fade-up">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">Our Story</p>
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
            </div>

            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/IMG_6017.PNG"
                alt="Navy cargo trousers from the sample catalogue"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1280px) 584px, (min-width: 1024px) 45vw, 92vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="reveal text-center mb-12 text-3xl sm:text-4xl font-bold text-foreground">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="reveal glass rounded-2xl p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon aria-hidden="true" className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Ready to Explore?</h2>
          <p className="text-muted-foreground mt-3 text-lg max-w-md mx-auto">
            Discover our latest collection, crafted with passion and heritage.
          </p>
          <Link href="/shop" className={buttonClasses({ size: "lg", className: "mt-8" })}>
            Shop Now
            <ArrowRight aria-hidden="true" className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
