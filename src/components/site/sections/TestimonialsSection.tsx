import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Dr. Amee’s breathing program helped me recover faster and breathe easier after surgery.",
    name: "Patient A",
  },
  {
    quote: "Thoughtful, evidence-based care. I felt supported every step of the way.",
    name: "Patient B",
  },
  {
    quote: "My stamina improved significantly within weeks. Highly recommended!",
    name: "Patient C",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="container mx-auto py-16">
      <h2 className="text-3xl font-semibold mb-6">Patient Testimonials</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Placeholder testimonials for layout — please provide real patient feedback you’d like to feature.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <Card key={idx}>
            <CardHeader className="text-lg font-medium">“{t.quote}”</CardHeader>
            <CardContent className="text-sm text-muted-foreground">— {t.name}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
