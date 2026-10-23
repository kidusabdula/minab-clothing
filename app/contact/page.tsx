"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import NavBar from "@/app/components/shared/navbar";
import Footer from "@/app/components/shared/footer";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Card, CardContent } from "@/app/components/ui/card";
import { toast } from "sonner";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Demo form: your message wasn't sent anywhere.");
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Contact Us</h1>
            <p className="text-muted-foreground mt-2 text-lg max-w-lg">
              This is a demo contact form. Messages aren&rsquo;t sent anywhere.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="space-y-6">
              <Card variant="glass">
                <CardContent className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-foreground">Demo Contact Details</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Placeholders for this demo. They aren&rsquo;t Minab&rsquo;s real contact details.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin aria-hidden="true" className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground mt-0.5">Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone aria-hidden="true" className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Phone (placeholder)</p>
                      <p className="text-sm text-muted-foreground mt-0.5">+251 9XX XXX XXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail aria-hidden="true" className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Email (placeholder)</p>
                      <p className="text-sm text-muted-foreground mt-0.5">hello@example.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <Card variant="glass">
                <CardContent>
                  <h2 className="text-xl font-bold text-foreground mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input label="First Name" placeholder="Your first name" required />
                      <Input label="Last Name" placeholder="Your last name" required />
                    </div>
                    <Input label="Email" type="email" placeholder="your@email.com" required />
                    <Input label="Subject" placeholder="How can we help?" required />
                    <div className="space-y-1.5">
                      <label htmlFor="contact-message" className="text-sm font-medium text-foreground block">Message</label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none transition-all duration-200"
                        placeholder="Tell us more..."
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      <Send aria-hidden="true" className="w-4 h-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
