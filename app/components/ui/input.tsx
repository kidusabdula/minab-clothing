import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

/** Labelled text field. The label is required so every field has an accessible name. */
export function Input({ className, label, id, ...props }: InputProps) {
  const autoId = React.useId();
  const inputId = id ?? autoId;
  return (
    <div className="space-y-1.5">
      <label htmlFor={inputId} className="text-sm font-medium text-foreground block">
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          "flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200",
          className
        )}
        {...props}
      />
    </div>
  );
}
