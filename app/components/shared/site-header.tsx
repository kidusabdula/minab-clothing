import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart, User } from "lucide-react";
import HeaderShell from "./header-shell";
import NavLinks from "./nav-links";
import SearchDialog from "./search-dialog";
import ThemeToggle from "./theme-toggle";
import MobileMenu from "./mobile-menu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const iconButton =
  "inline-flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors duration-200";

export default function SiteHeader() {
  return (
    <HeaderShell>
      <p className="bg-foreground text-background text-xs leading-4 font-medium py-1 px-4 text-center">
        <span className="md:hidden">Demo storefront &middot; sample data</span>
        <span className="hidden md:inline">
          Demo storefront: not Minab&rsquo;s official shop. Products, prices and policies are sample data.
        </span>
      </p>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 group-data-[scrolled=true]:py-1 transition-[padding] duration-500">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 rounded-xl group/logo">
            <span className="relative w-10 h-10 overflow-hidden rounded-xl">
              <Image
                src="/brand/minab-mark.webp"
                alt=""
                width={40}
                height={40}
                className="w-10 h-10 object-cover dark:invert transition-transform duration-500 group-hover/logo:scale-110"
              />
            </span>
            <span className="text-xl font-bold text-foreground tracking-tight">MINAB</span>
          </Link>

          <nav aria-label="Main" className="hidden lg:flex items-center gap-1">
            <NavLinks
              links={navLinks}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-accent/50 aria-[current=page]:text-foreground"
            />
          </nav>

          <div className="flex items-center gap-1.5">
            <SearchDialog buttonClassName={iconButton} />
            <ThemeToggle className={iconButton} />
            <Link href="/account/wishlist" className={`hidden sm:inline-flex ${iconButton}`} aria-label="Wishlist">
              <Heart aria-hidden="true" className="w-5 h-5" />
            </Link>
            <Link href="/account" className={`hidden sm:inline-flex ${iconButton}`} aria-label="Account">
              <User aria-hidden="true" className="w-5 h-5" />
            </Link>
            <Link href="/cart" className={`relative ${iconButton}`} aria-label="Cart, 3 items">
              <ShoppingCart aria-hidden="true" className="w-5 h-5" />
              <span
                aria-hidden="true"
                className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center"
              >
                3
              </span>
            </Link>
            <MobileMenu links={navLinks} buttonClassName={`lg:hidden ${iconButton}`} />
          </div>
        </div>
      </div>
    </HeaderShell>
  );
}
