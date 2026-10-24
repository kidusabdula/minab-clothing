"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Form from "next/form";
import { Search, X } from "lucide-react";

/** Search button plus a modal search form. The native <dialog> traps focus and closes on Escape. */
export default function SearchDialog({ buttonClassName }: { buttonClassName: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    dialog.current?.close();
  }, [pathname]);

  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        className={buttonClassName}
        aria-label="Search"
        aria-haspopup="dialog"
      >
        <Search aria-hidden="true" className="w-5 h-5" />
      </button>
      <dialog
        ref={dialog}
        aria-label="Search products"
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current.close();
        }}
        className="enter-drop open:block bg-transparent p-0 m-0 mt-24 mx-auto w-full max-w-2xl px-4 text-foreground"
      >
        <Form
          action="/search"
          role="search"
          onSubmit={() => dialog.current?.close()}
          className="glass-strong rounded-2xl p-2 shadow-2xl"
        >
          <div className="flex items-center gap-3 px-4">
            <Search aria-hidden="true" className="w-5 h-5 shrink-0 text-muted-foreground" />
            <input
              name="query"
              type="search"
              required
              aria-label="Search products"
              placeholder="Search products, collections, categories..."
              className="flex-1 min-w-0 py-3 bg-transparent text-foreground placeholder:text-muted-foreground text-lg"
              autoFocus
            />
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              aria-label="Close search"
              className="text-muted-foreground hover:text-foreground p-2 rounded-lg"
            >
              <X aria-hidden="true" className="w-5 h-5" />
            </button>
          </div>
        </Form>
      </dialog>
    </>
  );
}
