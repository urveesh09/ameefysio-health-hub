import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Linkedin, Instagram, MapPin, Phone } from "lucide-react";
import React from "react";

export default function ContactSection() {
  const { toast } = useToast();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description:
        "Thanks for reaching out! We’ll finalize delivery once address/phone details are confirmed.",
    });
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="container mx-auto py-16">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <Input placeholder="Your name" required />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <Input type="email" placeholder="you@example.com" required />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <Textarea placeholder="How can we help?" rows={5} required />
          </div>
          <Button type="submit">Send Message</Button>
        </form>

        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-medium">Clinic Address</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Placeholder — please provide your clinic address.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-medium">Phone</span>
            </div>
            <p className="text-sm text-muted-foreground">
              07947422393
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/dr-amee-shah-7bb66940/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/dr.amee_physio.at.home/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
