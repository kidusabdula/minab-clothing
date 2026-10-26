"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        toast.success("Demo sign-in", { description: "Nothing was checked or stored. Opening the sample account..." });
        setTimeout(() => router.push("/account"), 1200);
      }}
      className="space-y-4"
    >
      <Input
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="your@email.com"
        defaultValue="demo@example.com"
        required
      />
      <div className="relative">
        <Input
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          placeholder="Enter your password"
          defaultValue="password123"
          required
          className="pr-11"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "Hide password" : "Show password"}
          aria-pressed={showPassword}
          className="absolute right-1.5 bottom-1.5 p-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors"
        >
          {showPassword ? <EyeOff aria-hidden="true" className="w-4 h-4" /> : <Eye aria-hidden="true" className="w-4 h-4" />}
        </button>
      </div>

      <div className="flex items-center justify-between gap-4">
        <label className="flex items-center gap-2 text-sm py-1">
          <input type="checkbox" name="remember" className="h-4 w-4 rounded border-border accent-primary" />
          <span className="text-muted-foreground">Remember me</span>
        </label>
        <button
          type="button"
          onClick={() => toast("Demo storefront: password reset isn't available.")}
          className="py-1 text-sm text-primary hover:underline"
        >
          Forgot password?
        </button>
      </div>

      <Button type="submit" size="lg" className="w-full">
        Sign In
        <ArrowRight aria-hidden="true" className="w-5 h-5" />
      </Button>
    </form>
  );
}
