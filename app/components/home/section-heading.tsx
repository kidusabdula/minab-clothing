import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** Eyebrow, heading and a "see more" link, shared by the home page sections. */
export function SectionHeading({
  eyebrow,
  title,
  href,
  linkLabel,
}: {
  eyebrow: string;
  title: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
      <div>
        <p className="text-sm font-semibold text-primary uppercase tracking-wider">{eyebrow}</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">{title}</h2>
      </div>
      <Link
        href={href}
        className="inline-flex items-center gap-2 py-1 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
      >
        {linkLabel}
        <ArrowRight aria-hidden="true" className="w-4 h-4" />
      </Link>
    </div>
  );
}
