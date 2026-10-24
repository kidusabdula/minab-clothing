"use client";

import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/app/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductOptionsProps {
  name: string;
  colors: string[];
  sizes: string[];
}

const chip = (selected: boolean) =>
  cn(
    "rounded-lg border text-sm text-foreground transition-all hover:bg-accent",
    selected ? "border-primary bg-primary/10" : "border-border"
  );

export default function ProductOptions({ name, colors, sizes }: ProductOptionsProps) {
  const [color, setColor] = useState(colors[0]);
  const [size, setSize] = useState(sizes.includes("M") ? "M" : sizes[0]);

  return (
    <>
      <div className="mt-8 space-y-4">
        <div role="group" aria-labelledby="color-label">
          <p id="color-label" className="text-sm font-semibold text-foreground mb-2">
            Color
          </p>
          <div className="flex flex-wrap gap-2">
            {colors.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={color === c}
                onClick={() => setColor(c)}
                className={cn("h-8 px-3", chip(color === c))}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div role="group" aria-labelledby="size-label">
          <p id="size-label" className="text-sm font-semibold text-foreground mb-2">
            Size
          </p>
          <div className="flex flex-wrap gap-2">
            {sizes.map((s) => (
              <button
                key={s}
                type="button"
                aria-pressed={size === s}
                onClick={() => setSize(s)}
                className={cn("h-10 min-w-12 px-2 font-medium hover:border-primary", chip(size === s))}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-8">
        <Button
          size="lg"
          className="flex-1"
          onClick={() =>
            toast.success(`${name} added to cart`, {
              description: `Size: ${size}, Color: ${color}. Demo storefront: nothing is charged.`,
            })
          }
        >
          <ShoppingCart aria-hidden="true" className="w-5 h-5" />
          Add to Cart
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="px-4"
          aria-label={`Add ${name} to wishlist`}
          onClick={() => toast(`${name} saved to your wishlist`, { description: "Demo storefront: nothing is stored." })}
        >
          <Heart aria-hidden="true" className="w-5 h-5" />
        </Button>
      </div>
    </>
  );
}
