"use client";

import { useEffect, useState } from "react";

/** Fixed header that turns to frosted glass once the page scrolls. */
export default function HeaderShell({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled}
      className={
        "group fixed top-0 left-0 right-0 z-50 transition-all duration-500 " +
        (scrolled ? "glass-strong shadow-lg" : "bg-transparent")
      }
    >
      {children}
    </header>
  );
}
