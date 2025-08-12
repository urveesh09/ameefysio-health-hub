import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MessageSquareQuote } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";

const testimonials = [
  {
    quote:
      "Three months of pulmonary rehab eased breathlessness, improved my breathing pattern, and boosted energy — helped me manage pulmonary fibrosis.",
    name: "Paresh Karania",
  },
  {
    quote:
      "After lung surgery, I was breathless after 10 steps. With Dr. Amee’s physiotherapy, I improved by 80–90% in 4–5 months — she is kind and explains everything clearly.",
    name: "Bipin Nagda",
  },
  {
    quote:
      "Accurate, effective care for my lower back spasm — compassionate, precise with alignments, and truly understands your anatomy.",
    name: "Prajakta Vaidya",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(70%_70%_at_50%_0%,black,transparent)] bg-[radial-gradient(75%_75%_at_50%_-10%,hsl(var(--primary)/0.14),transparent_60%),radial-gradient(65%_65%_at_50%_120%,hsl(var(--primary)/0.10),transparent_60%)]"></div>
      <div className="container mx-auto">
        <Reveal>
        <h2 className="text-3xl font-semibold mb-2">Patient Testimonials</h2>
      </Reveal>
      <Reveal>
        <p className="text-sm text-muted-foreground mb-6">
          Real stories from patients who experienced improved breathing, stamina, and recovery.
        </p>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <Reveal key={idx} className="h-full" delay={idx * 80}>
            <Card className="h-full border-primary/20 ring-1 ring-primary/10 bg-card/80 backdrop-blur hover:shadow-lg transition-shadow">
              <CardHeader className="text-lg font-medium">
                <div className="flex items-start gap-3">
                  <span className="inline-flex p-2 rounded-md bg-secondary text-secondary-foreground">
                    <MessageSquareQuote className="w-4 h-4" />
                  </span>
                  <span>“{t.quote}”</span>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">— {t.name}</CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
      </div>
    </section>
  );
}
