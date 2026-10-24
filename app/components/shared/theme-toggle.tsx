"use client";

import { Moon, Sun } from "lucide-react";

/** Flips the theme class the inline head script set before paint, and remembers the choice. */
export default function ThemeToggle({ className }: { className: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const dark = !root.classList.contains("dark");
    root.classList.toggle("dark", dark);
    root.style.colorScheme = dark ? "dark" : "light";
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      // Storage can be blocked; the toggle still works for this page view.
    }
  };

  return (
    <button type="button" onClick={toggle} className={className} aria-label="Toggle dark theme">
      <Moon aria-hidden="true" className="w-5 h-5 dark:hidden" />
      <Sun aria-hidden="true" className="w-5 h-5 hidden dark:block" />
    </button>
  );
}
