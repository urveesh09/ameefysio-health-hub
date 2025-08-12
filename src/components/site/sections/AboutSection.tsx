import { Button } from "@/components/ui/button";
import { Reveal } from "@/hooks/use-reveal";

export default function AboutSection() {
  return (
    <section id="about" className="section-ambient relative overflow-hidden py-16">
      <div className="grid-lines" aria-hidden />
      <div className="container mx-auto">
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
        <Reveal className="order-1 md:order-2" delay={100}>
          <div className="relative">
            <div
              className="absolute -inset-6 rounded-3xl bg-gradient-to-b from-primary/25 to-transparent opacity-50 blur-2xl"
              aria-hidden
            />
            <div className="relative rounded-3xl p-[2px] bg-gradient-to-b from-primary/40 to-transparent">
              <img
                src="/lovable-uploads/940d7793-57db-41db-ba70-71a86edea0d8.png"
                alt="Dr. Amee Shah, Physiotherapist"
                className="w-full h-auto object-contain bg-transparent rounded-3xl animate-float-slow"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
      </article>
      </div>
    </section>
  );
}
