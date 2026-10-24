import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/app/components/ui/card";
import SignupForm from "./signup-form";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Demo sign-up page for the Minab storefront demo. No account is created.",
};

export default function SignupPage() {
  return (
    <main id="main" className="flex-1 flex items-center justify-center pt-20 pb-16">
      <div className="w-full max-w-md px-4">
        <Card variant="glass-strong" className="enter-fade-up shadow-2xl">
          <CardContent>
            <div className="text-center mb-8 mt-2">
              <h1 className="text-2xl font-bold text-foreground">Create Account</h1>
              <p className="text-sm text-muted-foreground mt-2">Join the Minab community</p>
            </div>
            <SignupForm />
            <p className="text-center text-sm text-muted-foreground mt-6">
              Already have an account?{" "}
              <Link href="/login" className="text-primary font-medium hover:underline">
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
