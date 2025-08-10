import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-elevated-bg.jpg";

export default function HeroElevated() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative bg-background">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        role="img"
        aria-label="Respiratory health background"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/25 via-background/60 to-background" />
      <div className="container mx-auto py-16 md:py-24 relative">
        <div className="rounded-2xl border border-primary/30 bg-card/80 backdrop-blur-md p-8 md:p-12 shadow-lg ring-1 ring-primary/10 animate-fade-in">
          <span className="inline-block mb-3 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs tracking-wide">
            Cardio-Respiratory Physiotherapy
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Breathe easier. Move better. Live fully.
          </h1>
          <p className="text-muted-foreground mb-6">
            Evidence-based physiotherapy with a focus on cardiovascular and respiratory health.
          </p>
          <div className="flex gap-3">
            <Button onClick={scrollToContact} className="shadow-md hover:shadow-lg transition-shadow">Book Now</Button>
            <a href="#testimonials" className="hover-scale">
              <Button variant="outline" className="border-primary/40 shadow-sm">Patient Stories</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

