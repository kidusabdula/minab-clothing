"use client";

import { toast } from "sonner";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.currentTarget.reset();
        toast("Demo form: your email wasn't stored or sent anywhere.");
      }}
      className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <input
        type="email"
        name="email"
        required
        placeholder="your@email.com"
        aria-label="Email address"
        className="flex-1 min-w-0 h-12 px-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground transition-colors duration-200"
      />
      <button
        type="submit"
        className="h-12 px-6 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-200 shadow-lg shadow-primary/25"
      >
        Subscribe
      </button>
    </form>
  );
}
