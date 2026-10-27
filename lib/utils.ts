import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Prices in birr, formatted the same on the server and in every browser locale (no hydration mismatch). */
export function etb(amount: number) {
  return `ETB ${amount.toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
}

/** Sample-data dates such as "2026-04-28", shown as "Apr 28, 2026". */
export function shortDate(isoDate: string) {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
