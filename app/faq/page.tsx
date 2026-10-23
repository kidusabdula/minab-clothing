"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import NavBar from "@/app/components/shared/navbar";
import Footer from "@/app/components/shared/footer";

const faqs = [
  {
    q: "How long does shipping take?",
    a: "Orders within Addis Ababa are delivered within 1-2 business days. Nationwide shipping takes 3-5 business days. International shipping takes 7-14 business days depending on destination.",
  },
  {
    q: "What is your return policy?",
    a: "We offer a 30-day return window. Items must be unworn, unwashed, and with original tags attached. Return shipping is free within Ethiopia.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes. International shipping costs are calculated at checkout.",
  },
  {
    q: "How do I find the right size?",
    a: "Each product page includes a detailed size guide. Our sizing follows international standards. If you're between sizes, we recommend sizing up for a relaxed fit or down for a tailored look.",
  },
  {
    q: "Are your products ethically made?",
    a: "Absolutely. Every piece is handcrafted by Ethiopian artisans who receive fair wages, benefits, and safe working conditions. We are committed to transparency across our entire supply chain.",
  },
  {
    q: "Can I customize or order made-to-measure?",
    a: "Yes, select items (like the Habesha Kemis) are made-to-measure. Use the contact page for bespoke orders and customization requests.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards, Telebirr, CBE Birr, and PayPal for international customers.",
  },
  {
    q: "How do I care for my garments?",
    a: "Each product includes specific care instructions. Generally, we recommend gentle machine washing in cold water or dry cleaning for delicate pieces. Natural drying extends garment life.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">FAQ</h1>
            <p className="text-muted-foreground mt-2 text-lg">
              Everything you need to know about Minab.
            </p>
            <p className="mt-4 rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm text-muted-foreground">
              Demo copy: the shipping, returns and payment policies below are sample text for this
              storefront demo, not the label&rsquo;s real policies.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group glass rounded-2xl p-1 cursor-pointer"
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 text-foreground font-medium list-none rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  {faq.q}
                  <ChevronDown aria-hidden="true" className="w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-4 pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </motion.details>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">Still have questions?</p>
            <a href="/contact" className="text-primary font-medium hover:underline">
              Contact our support team
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
