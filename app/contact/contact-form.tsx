"use client";

import { Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.currentTarget.reset();
        toast("Demo form: your message wasn't sent anywhere.");
      }}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input label="First Name" name="firstName" autoComplete="given-name" placeholder="Your first name" required />
        <Input label="Last Name" name="lastName" autoComplete="family-name" placeholder="Your last name" required />
      </div>
      <Input label="Email" name="email" type="email" autoComplete="email" placeholder="your@email.com" required />
      <Input label="Subject" name="subject" placeholder="How can we help?" required />
      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="text-sm font-medium text-foreground block">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground resize-none transition-colors duration-200"
          placeholder="Tell us more..."
          required
        />
      </div>
      <Button type="submit" size="lg" className="w-full">
        <Send aria-hidden="true" className="w-4 h-4" />
        Send Message
      </Button>
    </form>
  );
}
