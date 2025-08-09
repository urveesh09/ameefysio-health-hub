import heroImage from "@/assets/hero-clinic.jpg";
import { Button } from "@/components/ui/button";

export default function HeroSerene() {
  return (
    <section className="relative">
      <img
        src={heroImage}
        alt="Calming physiotherapy clinic interior with teal accents"
        className="w-full h-[60vh] md:h-[70vh] object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent" />
      <div className="absolute inset-0">
        <div className="container mx-auto h-full flex items-end pb-10">
          <div className="max-w-2xl bg-background/80 backdrop-blur rounded-lg p-6 shadow">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Compassionate and Expert Physiotherapy Care
            </h1>
            <p className="text-muted-foreground mb-6">
              Masters in Physiotherapy (Cardiovascular and Respiratory Sciences)
            </p>
            <div className="flex gap-3">
              <a href="#contact">
                <Button>Book Consultation</Button>
              </a>
              <a href="#about">
                <Button variant="outline">Learn More</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
