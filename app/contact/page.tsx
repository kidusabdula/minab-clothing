import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Demo contact form and placeholder details for the Minab storefront demo.",
};

const details = [
  { icon: MapPin, title: "Location", value: "Addis Ababa, Ethiopia" },
  { icon: Phone, title: "Phone (placeholder)", value: "+251 9XX XXX XXX" },
  { icon: Mail, title: "Email (placeholder)", value: "hello@example.com" },
];

export default function ContactPage() {
  return (
    <main id="main" className="flex-1 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="enter-fade-up mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Contact Us</h1>
          <p className="text-muted-foreground mt-2 text-lg max-w-lg">
            This is a demo contact form. Messages aren&rsquo;t sent anywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card variant="glass" className="self-start">
            <CardContent className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-foreground">Demo Contact Details</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Placeholders for this demo. They aren&rsquo;t Minab&rsquo;s real contact details.
                </p>
              </div>
              {details.map((d) => (
                <div key={d.title} className="flex items-start gap-4">
                  <d.icon aria-hidden="true" className="w-5 h-5 shrink-0 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">{d.title}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{d.value}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card variant="glass">
            <CardContent>
              <h2 className="text-xl font-bold text-foreground mb-6">Send a Message</h2>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
