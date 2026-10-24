"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  name: string;
  images: string[];
  badges: React.ReactNode;
}

/** Main product photo plus thumbnails that swap it. Only the first photo is the page's LCP image. */
export default function ProductGallery({ name, images, badges }: ProductGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted/50">
        <Image
          src={images[active]}
          alt={`${name}, photo ${active + 1} of ${images.length}`}
          fill
          priority={active === 0}
          className="object-cover"
          sizes="(min-width: 1280px) 584px, (min-width: 1024px) 45vw, 92vw"
        />
        <div className="absolute top-4 left-4 flex gap-2">{badges}</div>
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-4">
          {images.map((img, i) => (
            <button
              key={img + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show photo ${i + 1} of ${images.length}`}
              aria-pressed={active === i}
              className={cn(
                "relative aspect-square rounded-xl overflow-hidden bg-muted/50 transition-all hover:ring-2 hover:ring-primary",
                active === i && "ring-2 ring-primary"
              )}
            >
              <Image src={img} alt="" fill className="object-cover" sizes="(min-width: 1280px) 184px, (min-width: 1024px) 14vw, 30vw" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
