"use client";

import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

export default function SignupForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.currentTarget.reset();
        toast.success("Demo sign-up", { description: "No account was created and nothing was stored." });
      }}
      className="space-y-4"
    >
      <div className="grid grid-cols-2 gap-4">
        <Input label="First Name" name="firstName" autoComplete="given-name" placeholder="First name" required />
        <Input label="Last Name" name="lastName" autoComplete="family-name" placeholder="Last name" required />
      </div>
      <Input label="Email" name="email" type="email" autoComplete="email" placeholder="your@email.com" required />
      <Input
        label="Password"
        name="password"
        type="password"
        autoComplete="new-password"
        placeholder="Min 8 characters"
        minLength={8}
        required
      />
      <Input
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        autoComplete="new-password"
        placeholder="Re-enter password"
        minLength={8}
        required
      />

      <label className="flex items-start gap-2 text-sm">
        <input type="checkbox" name="understood" className="h-4 w-4 rounded border-border accent-primary mt-0.5" required />
        <span className="text-muted-foreground">
          I understand this is a demo storefront and no account is created.
        </span>
      </label>

      <Button type="submit" size="lg" className="w-full">
        Create Account
        <ArrowRight aria-hidden="true" className="w-5 h-5" />
      </Button>
    </form>
  );
}
