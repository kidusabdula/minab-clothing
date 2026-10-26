import Link from "next/link";
import Image from "next/image";
import { Product } from "@/typefile";
import { Badge } from "../ui/badge";
import Rating from "./rating";
import { etb } from "@/lib/utils";
import ProductCardActions from "./product-card-actions";

/** Image sizes for the four-column product grid (two columns on phones). */
const GRID_SIZES = "(min-width: 1280px) 286px, (min-width: 1024px) 23vw, (min-width: 768px) 32vw, 50vw";

interface ProductCardProps {
  product: Product;
  sizes?: string;
  priority?: boolean;
}

export function ProductCard({ product, sizes = GRID_SIZES, priority = false }: ProductCardProps) {
  return (
    // The ring is drawn on the card: the name link stretches over it, and the clamped heading would clip a ring on the link.
    <article className="reveal group relative rounded-2xl has-[a:focus-visible]:outline has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-ring">
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted/50">
        <Image
          src={product.image}
          alt=""
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={sizes}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-3 left-3 flex gap-1.5">
          {product.isNew && <Badge variant="default">New</Badge>}
          {product.isSale && <Badge variant="destructive">Sale</Badge>}
        </div>
        <ProductCardActions name={product.name} />
      </div>

      <div className="mt-4 space-y-1.5">
        <Rating value={product.rating} count={product.reviewCount} />
        <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-1">
          {/* The link's ::after covers the whole card, so the image and text are one target. */}
          <Link
            href={`/shop/${product.slug}`}
            className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none"
          >
            {product.name}
          </Link>
        </h3>
        <p className="text-xs text-muted-foreground">{product.category}</p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-foreground">{etb(product.price)}</span>
          {product.originalPrice > product.price && (
            <span className="text-xs text-muted-foreground line-through">
              <span className="sr-only">was </span>{etb(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
