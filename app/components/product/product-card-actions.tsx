"use client";

import { Heart } from "lucide-react";
import { toast } from "sonner";
import { DEMO_CART, DEMO_WISHLIST } from "./demo-notices";

/** Wishlist and quick-add buttons that sit above the card's stretched link. */
export default function ProductCardActions({ name }: { name: string }) {
  return (
    <>
      <button
        type="button"
        onClick={() => toast(`${name} wasn't saved to your wishlist`, { description: DEMO_WISHLIST })}
        aria-label={`Add ${name} to wishlist`}
        className="absolute z-10 top-3 right-3 p-2 rounded-full glass opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:opacity-100 [@media(hover:none)]:opacity-100 transition-all duration-300 hover:scale-110"
      >
        <Heart aria-hidden="true" className="w-4 h-4 text-foreground" />
      </button>
      <div className="absolute z-10 bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-300">
        <button
          type="button"
          onClick={() => toast(`${name} wasn't added to the cart`, { description: DEMO_CART })}
          aria-label={`Quick add ${name} to cart`}
          className="w-full py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-xl shadow-lg"
        >
          Quick Add
        </button>
      </div>
    </>
  );
}
