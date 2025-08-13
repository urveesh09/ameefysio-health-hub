
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MessageSquareQuote, Star } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";

const testimonials = [
  {
    quote:
      "Three months of pulmonary rehab eased breathlessness, improved my breathing pattern, and boosted energy — helped me manage pulmonary fibrosis.",
    name: "Paresh Karania",
    rating: 5,
  },
  {
    quote:
      "After lung surgery, I was breathless after 10 steps. With Dr. Amee's physiotherapy, I improved by 80–90% in 4–5 months — she is kind and explains everything clearly.",
    name: "Bipin Nagda",
    rating: 5,
  },
  {
    quote:
      "Accurate, effective care for my lower back spasm — compassionate, precise with alignments, and truly understands your anatomy.",
    name: "Prajakta Vaidya",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials-bg relative py-20 scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto">
        <Reveal>
        <header className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Patient Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from patients who experienced improved breathing, stamina, and recovery.
          </p>
        </header>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <Reveal key={idx} className="h-full" delay={idx * 100}>
            <Card className="premium-card h-full group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/5 rounded-bl-3xl" />
              <CardHeader className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10">
                    <MessageSquareQuote className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-lg font-medium text-gray-700 italic leading-relaxed">
                  "{t.quote}"
                </blockquote>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">— {t.name}</p>
                    <p className="text-sm text-muted-foreground">Verified Patient</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
      </div>
    </section>
  );
}
