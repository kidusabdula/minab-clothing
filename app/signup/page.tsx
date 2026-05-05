"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import NavBar from "@/app/components/shared/navbar";
import Footer from "@/app/components/shared/footer";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Card, CardContent } from "@/app/components/ui/card";
import { toast } from "sonner";

export default function SignupPage() {
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Account created!", { description: "Welcome to Minab. Start exploring." });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 flex items-center justify-center pt-20 pb-16">
        <div className="w-full max-w-md px-4">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card variant="glass-strong" className="shadow-2xl">
              <CardContent>
                <div className="text-center mb-8 mt-2">
                  <h1 className="text-2xl font-bold text-foreground">Create Account</h1>
                  <p className="text-sm text-muted-foreground mt-2">
                    Join the Minab community
                  </p>
                </div>

                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="First Name" placeholder="First name" required />
                    <Input label="Last Name" placeholder="Last name" required />
                  </div>
                  <Input label="Email" type="email" placeholder="your@email.com" required />
                  <Input label="Password" type="password" placeholder="Min 8 characters" required />
                  <Input label="Confirm Password" type="password" placeholder="Re-enter password" required />

                  <label className="flex items-start gap-2 text-sm">
                    <input type="checkbox" className="rounded border-border accent-primary mt-0.5" required />
                    <span className="text-muted-foreground">
                      I agree to the{" "}
                      <a href="#" className="text-primary hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-primary hover:underline">
                        Privacy Policy
                      </a>
                    </span>
                  </label>

                  <Button type="submit" size="lg" className="w-full">
                    Create Account
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </form>

                <p className="text-center text-sm text-muted-foreground mt-6">
                  Already have an account?{" "}
                  <Link href="/login" className="text-primary font-medium hover:underline">
                    Sign in
                  </Link>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
