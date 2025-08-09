import { Button } from "@/components/ui/button";

export default function HeroSerene() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative">
      <div
        role="img"
        aria-label="Placeholder for professional photo of Dr. Amee Shah"
        className="w-full h-[60vh] md:h-[70vh] bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, hsl(var(--secondary)) 0%, hsl(var(--muted)) 100%)",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent" />
      <div className="absolute inset-0">
        <div className="container mx-auto h-full flex items-end pb-10">
          <div className="max-w-2xl bg-background/80 backdrop-blur rounded-lg p-6 shadow animate-fade-in">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-14 h-14 rounded-full bg-muted border-2 border-dashed border-border"
                aria-label="Headshot placeholder"
              />
              <span className="text-sm text-muted-foreground">Add your photo here</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Compassionate and Expert Physiotherapy Care
            </h1>
            <p className="text-muted-foreground mb-6">
              Masters in Physiotherapy (Cardiovascular and Respiratory Sciences)
            </p>
            <div className="flex gap-3">
              <Button onClick={scrollToContact}>Book Consultation</Button>
              <a href="#about" className="hover-scale">
                <Button variant="outline">Learn More</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
