import "./globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Minab Clothing — Premium Ethiopian Fashion",
    template: "%s | Minab Clothing",
  },
  description: "Discover premium Ethiopian fashion and clothing. Handcrafted designs, modern styles, and timeless elegance.",
  keywords: ["Ethiopian clothing", "fashion", "Minab", "premium clothing", "traditional wear", "modern fashion"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "oklch(var(--popover))",
                color: "oklch(var(--popover-foreground))",
                border: "1px solid oklch(var(--border))",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
