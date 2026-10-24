import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

/** Five-star rating from the sample data, with a text equivalent for screen readers. */
export default function Rating({ value, count, size = "sm" }: { value: number; count: number; size?: "sm" | "md" }) {
  const icon = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";
  return (
    <div className="flex items-center gap-1">
      <span className="sr-only">
        Rated {value} out of 5 from {count} sample reviews
      </span>
      <span aria-hidden="true" className={cn("flex", size === "sm" ? "gap-1" : "gap-0.5")}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(icon, i < Math.round(value) ? "fill-primary text-primary" : "fill-muted text-muted")}
          />
        ))}
      </span>
      <span aria-hidden="true" className={cn("text-muted-foreground", size === "sm" ? "text-xs ml-1" : "text-sm ml-2")}>
        {size === "sm" ? `(${count})` : `${value} (${count} reviews)`}
      </span>
    </div>
  );
}
