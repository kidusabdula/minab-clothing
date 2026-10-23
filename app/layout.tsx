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
    default: "Minab Clothing Demo Storefront",
    template: "%s | Minab Clothing Demo",
  },
  description: "A storefront demo for an Addis Ababa clothing label: sample products, cart and checkout. Not the label's official shop.",
  keywords: ["Ethiopian clothing", "fashion", "Minab", "storefront demo", "Next.js"],
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
