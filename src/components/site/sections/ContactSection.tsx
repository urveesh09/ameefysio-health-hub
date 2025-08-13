import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Linkedin, Instagram, MapPin, Phone } from "lucide-react";
import React from "react";
import { Reveal } from "@/hooks/use-reveal";

export default function ContactSection() {
  const { toast } = useToast();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = `New enquiry from ${name || "Website"}`;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
    window.open(
      `mailto:Ameeshah88@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`,
      "_blank"
    );
    toast({
      title: "Message ready to send",
      description: "Your email client has opened with the message details.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="section-ambient relative overflow-hidden py-16 scroll-mt-24 md:scroll-mt-28">
      <div className="grid-lines" aria-hidden />
      <div className="container mx-auto">
        <Reveal>
          <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8">
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="space-y-4 rounded-2xl border border-primary/20 bg-card/80 backdrop-blur p-6 md:p-8 shadow-lg ring-1 ring-primary/10"
            >
              <div>
                <label className="block text-sm mb-1">Name</label>
                <Input name="name" placeholder="Your name" required />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <Input name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div>
                <label className="block text-sm mb-1">Message</label>
                <Textarea name="message" placeholder="How can we help?" rows={5} required />
              </div>
              <Button type="submit" className="shadow-md hover:shadow-lg ring-1 ring-primary/20">
                Send Message
              </Button>
            </form>
          </Reveal>

          <div className="space-y-4">
            <Reveal delay={60}>
            <div className="rounded-lg border border-primary/20 ring-1 ring-primary/10 bg-card/80 backdrop-blur p-4 transform-gpu hover:-translate-y-0.5">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-medium">Clinic Address</span>
                </div>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Medansh Multispeciality Hospital (Ground Floor, Walji Ladha Road)</li>
                  <li>Hira Mongi Navneet Hospital (Walji Ladha Road)</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
            <div className="rounded-lg border border-primary/20 ring-1 ring-primary/10 bg-card/80 backdrop-blur p-4 transform-gpu hover:-translate-y-0.5">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="font-medium">Phone</span>
                </div>
                <p className="text-sm text-muted-foreground">07947422393</p>
              </div>
            </Reveal>
            <Reveal delay={140}>
            <div className="rounded-lg border border-primary/20 ring-1 ring-primary/10 bg-card/80 backdrop-blur p-4 transform-gpu hover:-translate-y-0.5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium">Email</span>
                </div>
                <a href="mailto:Ameeshah88@gmail.com" className="text-primary hover:underline text-sm">
                  Ameeshah88@gmail.com
                </a>
              </div>
            </Reveal>
            <Reveal delay={180}>
            <div className="rounded-lg border border-primary/20 ring-1 ring-primary/10 bg-card/80 backdrop-blur p-4 transform-gpu hover:-translate-y-0.5">
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
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
