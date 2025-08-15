
import { Button } from "@/components/ui/button";
import { Reveal } from "@/hooks/use-reveal";

export default function AboutSection() {
  return (
    <section id="about" className="about-bg relative py-16 scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto">
        <article className="grid md:grid-cols-2 gap-10 items-center premium-card rounded-3xl p-8 md:p-12">
        <Reveal className="order-2 md:order-1">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            About Dr. Amee Shah
          </h2>
          <p className="text-muted-foreground mb-4 text-lg font-medium">
            BPTH, MPTh in CardioVascular and Pulmonary Sciences
          </p>
          <p className="leading-relaxed mb-6 text-gray-700">
            Dr. AMEE SHAH (BPTH, MPTh in CardioVascular and Pulmonary Sciences), a consulting Physiotherapist, She has an experience of more than 10 years in the field of Cardio-Pulmonary Rehabilitation and has treated hundreds of people suffering from Asthma, COPD, Bronchiectasis, Lung Fibrosis, post COVID sequelae, those who have undergone post Heart surgeries like Bypass grafting and valve replacement, Angioplasty with stenting, post Pacemaker Implantation, Heart Failure and Pulmonary Hypertension.
          </p>
          <div className="space-y-3 mb-8 p-4 rounded-xl bg-gradient-to-r from-secondary/50 to-secondary/30">
            <h3 className="font-semibold text-lg text-primary">Clinic Locations</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Medansh Multispeciality Hospital (Ground Floor, Walji Ladha Road)</li>
              <li>Hira Mongi Navneet Hospital (Walji Ladha Road)</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="/amee.pdf" download className="group">
              <Button variant="outline" className="premium-card border-primary/30 text-primary hover:bg-primary hover:text-white">
                Download Brochure
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/dr-amee-shah-7bb66940/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button variant="outline" className="premium-card border-primary/30 text-primary hover:bg-primary hover:text-white">
                LinkedIn Profile
              </Button>
            </a>
          </div>
        </Reveal>
        <Reveal className="order-1 md:order-2" delay={100}>
          <div className="relative">
            <div className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 opacity-60 blur-2xl animate-pulse" />
            <div className="relative rounded-3xl overflow-hidden premium-card p-2">
              <img
                src="/lovable-uploads/940d7793-57db-41db-ba70-71a86edea0d8.png"
                alt="Dr. Amee Shah, Physiotherapist"
                className="w-full h-auto object-contain bg-transparent rounded-2xl animate-float-slow"
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
