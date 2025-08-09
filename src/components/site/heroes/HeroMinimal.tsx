import { Button } from "@/components/ui/button";

export default function HeroMinimal() {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-sm text-primary font-medium mb-3">Physiotherapist</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Modern, empathetic care for your heart and lungs
          </h1>
          <p className="text-muted-foreground mt-4 mb-6">
            Specialized in Cardiovascular and Respiratory Sciences.
          </p>
          <div className="flex gap-3">
            <a href="#contact"><Button>Get Started</Button></a>
            <a href="#services"><Button variant="outline">View Services</Button></a>
          </div>
        </div>
      </div>
    </section>
  );
}
