"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

// The inline head script sets the theme class before paint; this reads it and follows any change.
const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
};
const isDark = () => document.documentElement.classList.contains("dark");

/** Dark theme switch: flips the class on <html>, remembers the choice and reports its state. */
export default function ThemeToggle({ className }: { className: string }) {
  // The server can't know the visitor's theme, so the state is announced only once hydrated.
  const dark = useSyncExternalStore(subscribe, isDark, () => undefined);

  const toggle = () => {
    const next = !isDark();
    const root = document.documentElement;
    root.classList.toggle("dark", next);
    root.style.colorScheme = next ? "dark" : "light";
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Storage can be blocked; the toggle still works for this page view.
    }
  };

  return (
    <button type="button" onClick={toggle} className={className} aria-label="Dark theme" aria-pressed={dark}>
      <Moon aria-hidden="true" className="w-5 h-5 dark:hidden" />
      <Sun aria-hidden="true" className="w-5 h-5 hidden dark:block" />
    </button>
  );
}
