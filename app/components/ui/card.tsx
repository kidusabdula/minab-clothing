import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "glass-strong";
}

const variants = {
  default: "bg-card text-card-foreground border border-border",
  glass: "bg-card/70 backdrop-blur-md border border-border/50",
  "glass-strong": "bg-card/85 backdrop-blur-xl border border-border/30",
};

export function Card({ className, variant = "default", ...props }: CardProps) {
  return <div className={cn("rounded-2xl shadow-sm", variants[variant], className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props} />;
}
