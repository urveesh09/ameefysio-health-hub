
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Linkedin, Instagram, MapPin, Phone, Mail, Calendar } from "lucide-react";
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
    <section id="contact" className="contact-bg relative py-20 scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto">
        <Reveal>
          <header className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your healing journey? Let's connect and discuss how we can help you breathe easier and move better.
            </p>
          </header>
        </Reveal>
        <div className="grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="premium-card rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send a Message</h3>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Name</label>
                    <Input name="name" placeholder="Your full name" required className="premium-card border-primary/20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                    <Input name="email" type="email" placeholder="you@example.com" required className="premium-card border-primary/20" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Message</label>
                  <Textarea 
                    name="message" 
                    placeholder="Tell us about your condition and how we can help..." 
                    rows={6} 
                    required 
                    className="premium-card border-primary/20 resize-none" 
                  />
                </div>
                <Button type="submit" variant="outline" className="w-full premium-card border-primary/30 text-primary hover:bg-primary/5">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={60}>
            <div className="premium-card rounded-2xl p-6 group hover:shadow-xl transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">Clinic Locations</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>Medansh Multispeciality Hospital (Ground Floor, Walji Ladha Road)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>Hira Mongi Navneet Hospital (Walji Ladha Road)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={100}>
            <div className="premium-card rounded-2xl p-6 group hover:shadow-xl transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">Phone</h4>
                    <a href="tel:07947422393" className="text-primary hover:underline font-medium">
                      07947422393
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={140}>
            <div className="premium-card rounded-2xl p-6 group hover:shadow-xl transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">Email</h4>
                    <a href="mailto:Ameeshah88@gmail.com" className="text-primary hover:underline font-medium">
                      Ameeshah88@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={180}>
            <div className="premium-card rounded-2xl p-6 group hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg text-gray-800">Connect With Us</h4>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/dr-amee-shah-7bb66940/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 hover:from-blue-100 hover:to-blue-200 transition-all font-medium"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/dr.amee_physio.at.home/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-50 to-purple-100 text-purple-700 hover:from-pink-100 hover:to-purple-200 transition-all font-medium"
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
