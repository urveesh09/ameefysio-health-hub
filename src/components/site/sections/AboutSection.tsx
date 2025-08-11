import { Button } from "@/components/ui/button";
import { Reveal } from "@/hooks/use-reveal";
import heroBg from "@/assets/hero-elevated-bg.jpg";
// Using uploaded image path directly

export default function AboutSection() {
  return (
    <section id="about" className="relative container mx-auto py-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-primary/15 via-background/70 to-background [mask-image:radial-gradient(70%_70%_at_50%_0%,black,transparent)]"
          aria-hidden
        />
      </div>
      <article className="grid md:grid-cols-2 gap-10 items-center rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-md p-6 md:p-8 shadow-lg ring-1 ring-primary/10">
        <Reveal className="order-2 md:order-1">
          <span className="inline-block mb-3 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs tracking-wide">
            About the Specialist
          </span>
          <h2 className="text-3xl font-semibold mb-4">About Dr. Amee Shah</h2>
          <p className="text-muted-foreground mb-4">
            BPTH, MPTh in CardioVascular and Pulmonary Sciences
          </p>
          <p className="leading-7 mb-4">
            Dr. AMEE SHAH (BPTH, MPTh in CardioVascular and Pulmonary Sciences), a consulting Physiotherapist, She has an experience of more than 10 years in the field of Cardio-Pulmonary Rehabilitation and has treated hundreds of people suffering from Asthma, COPD, Bronchiectasis, Lung Fibrosis, post COVID sequelae, those who have undergone post Heart surgeries like Bypass grafting and valve replacement, Angioplasty with stenting, post Pacemaker Implantation, Heart Failure and Pulmonary Hypertension.
          </p>
          <div className="space-y-2 mb-6">
            <h3 className="font-medium">Clinic Locations</h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground">
              <li>Medansh Multispeciality Hospital (Ground Floor, Walji Ladha Road)</li>
              <li>Hira Mongi Navneet Hospital (Walji Ladha Road)</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/amee.pdf" download className="hover-scale">
              <Button className="shadow-md hover:shadow-lg ring-1 ring-primary/20">Download Brochure</Button>
            </a>
            <a
              href="https://www.linkedin.com/in/dr-amee-shah-7bb66940/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-scale"
            >
              <Button variant="outline" className="ring-1 ring-primary/20 shadow-sm">LinkedIn</Button>
            </a>
          </div>
        </Reveal>
        <Reveal className="order-1 md:order-2 rounded-lg overflow-hidden" delay={100}>
          <img
            src="/lovable-uploads/7db9ab56-b8c3-4b47-8187-028f0a8bf5fb.png"
            alt="Dr. Amee Shah, Physiotherapist"
            className="w-full h-auto object-cover bg-muted"
            loading="lazy"
          />
        </Reveal>
      </article>
    </section>
  );
}
