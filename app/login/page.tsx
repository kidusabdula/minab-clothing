import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/app/components/ui/card";
import LoginForm from "./login-form";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Demo sign-in page for the Minab storefront demo.",
};

export default function LoginPage() {
  return (
    <main id="main" className="flex-1 flex items-center justify-center pt-20 pb-16">
      <div className="w-full max-w-md px-4">
        <Card variant="glass-strong" className="enter-fade-up shadow-2xl">
          <CardContent>
            <div className="text-center mb-8 mt-2">
              <h1 className="text-2xl font-bold text-foreground">Welcome Back</h1>
              <p className="text-sm text-muted-foreground mt-2">Sign in to access your account</p>
            </div>
            <LoginForm />
            <p className="text-center text-sm text-muted-foreground mt-6">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-primary font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
