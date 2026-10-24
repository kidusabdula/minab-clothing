"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import NavLinks from "./nav-links";

const accountLinks = [
  { href: "/account/wishlist", label: "Wishlist" },
  { href: "/account", label: "Account" },
];

const itemClass =
  "px-4 py-3 text-lg font-medium text-foreground hover:bg-accent rounded-xl transition-colors duration-200 aria-[current=page]:text-primary";

/** Slide-out navigation for small screens, built on a modal <dialog>. */
export default function MobileMenu({
  links,
  buttonClassName,
}: {
  links: { href: string; label: string }[];
  buttonClassName: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();
  const close = () => dialog.current?.close();

  useEffect(() => {
    dialog.current?.close();
  }, [pathname]);

  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        className={buttonClassName}
        aria-label="Menu"
        aria-haspopup="dialog"
      >
        <Menu aria-hidden="true" className="w-5 h-5" />
      </button>
      <dialog
        ref={dialog}
        aria-label="Site menu"
        onClick={(e) => {
          if (e.target === dialog.current) close();
        }}
        className="enter-drawer m-0 ml-auto h-dvh max-h-none w-72 max-w-[85vw] bg-card text-foreground border-l border-border p-6 pt-6 shadow-2xl"
      >
        <div className="flex justify-end mb-6">
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/50"
          >
            <X aria-hidden="true" className="w-5 h-5" />
          </button>
        </div>
        <nav aria-label="Mobile" className="flex flex-col gap-2">
          <NavLinks links={links} className={itemClass} onNavigate={close} />
          <div className="sm:hidden flex flex-col gap-2">
            <NavLinks links={accountLinks} className={itemClass} onNavigate={close} />
          </div>
        </nav>
      </dialog>
    </>
  );
}
