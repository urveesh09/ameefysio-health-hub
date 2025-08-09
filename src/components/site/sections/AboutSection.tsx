export default function AboutSection() {
  return (
    <section id="about" className="container mx-auto py-16">
      <article className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">About Dr. Amee Shah</h2>
          <p className="text-muted-foreground mb-4">
            Physiotherapist — Masters in Physiotherapy (Cardiovascular and Respiratory Sciences).
          </p>
          <p className="leading-7">
            This space will feature Amee’s detailed biography, clinical approach, and patient care philosophy.
            Please provide the final bio content you'd like displayed.
          </p>
        </div>
        <div className="rounded-lg bg-secondary aspect-video md:aspect-[4/3] overflow-hidden flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Placeholder for professional photo — we can replace with your actual image.</span>
        </div>
      </article>
    </section>
  );
}
