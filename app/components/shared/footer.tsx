"use client";

import Link from "next/link";
import { Camera, Globe, MonitorPlay, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  shop: [
    { label: "All Products", href: "/shop" },
    { label: "New Arrivals", href: "/shop?filter=new" },
    { label: "Sale", href: "/shop?filter=sale" },
    { label: "Collections", href: "/collections" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  help: [
    { label: "FAQ", href: "/faq" },
    { label: "Shipping", href: "/faq" },
    { label: "Returns", href: "/faq" },
    { label: "Size Guide", href: "/faq" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-foreground">
              MINAB
            </Link>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-sm">
              Premium Ethiopian fashion house crafting contemporary designs rooted in heritage. Each piece tells a story of artistry, sustainability, and timeless elegance.
            </p>
            <div className="flex gap-2 mt-6">
              {[
                { icon: Camera, href: "#" },
                { icon: Globe, href: "#" },
                { icon: MonitorPlay, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Addis Ababa, Ethiopia</span>
              <span className="mx-2">•</span>
              <Mail className="w-4 h-4" />
              <a href="mailto:hello@minab.co" className="hover:text-foreground transition-colors">hello@minab.co</a>
              <span className="mx-2">•</span>
              <Phone className="w-4 h-4" />
              <span>+251 91 123 4567</span>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Minab Clothing. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
