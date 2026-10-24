import Link from "next/link";
import { MapPin } from "lucide-react";

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
              A storefront demo for an Addis Ababa clothing label. Products, prices, orders and
              policies shown here are sample data, and nothing is sold through this site.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <nav key={title} aria-label={`Footer ${title}`}>
              <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                {title}
              </h2>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block py-0.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
              <MapPin aria-hidden="true" className="w-4 h-4" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
            <p className="text-sm text-muted-foreground text-center sm:text-right">
              Demo storefront. Not the label&rsquo;s official shop.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
