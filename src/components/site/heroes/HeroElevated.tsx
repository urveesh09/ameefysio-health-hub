import { Button } from "@/components/ui/button";

export default function HeroElevated() {
  return (
    <section className="relative bg-background">
      <div className="container mx-auto py-16 md:py-24">
        <div className="rounded-2xl border bg-card shadow-sm p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Breathe easier. Move better. Live fully.
          </h1>
          <p className="text-muted-foreground mb-6">
            Evidence-based physiotherapy with a focus on cardiovascular and respiratory health.
          </p>
          <div className="flex gap-3">
            <a href="#contact"><Button>Book Now</Button></a>
            <a href="#testimonials"><Button variant="outline">Patient Stories</Button></a>
          </div>
        </div>
      </div>
    </section>
  );
}
