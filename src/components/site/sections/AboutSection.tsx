import { Button } from "@/components/ui/button";
// Using uploaded image path directly

export default function AboutSection() {
  return (
    <section id="about" className="container mx-auto py-16">
      <article className="grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1 animate-fade-in">
          <h2 className="text-3xl font-semibold mb-4">About Dr. Amee Shah</h2>
          <p className="text-muted-foreground mb-4">
            BPTH, MPTh in CardioVascular and Pulmonary Sciences
          </p>
          <p className="leading-7 mb-4">
            Dr. AMEE SHAH (BPTH, MPTh in CardioVascular and Pulmonary Sciences) is a consulting Physiotherapist with over 10 years of experience in Cardio-Pulmonary Rehabilitation. She has helped hundreds of people with conditions such as Asthma, COPD, Bronchiectasis, Lung Fibrosis, post-COVID sequelae, and post-cardiac procedures including Bypass grafting, valve replacement, Angioplasty with stenting, Pacemaker implantation, Heart Failure, and Pulmonary Hypertension.
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
              <Button>Download Brochure</Button>
            </a>
            <a
              href="https://www.linkedin.com/in/dr-amee-shah-7bb66940/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-scale"
            >
              <Button variant="outline">LinkedIn</Button>
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 rounded-lg overflow-hidden animate-fade-in">
          <img
            src="/lovable-uploads/7db9ab56-b8c3-4b47-8187-028f0a8bf5fb.png"
            alt="Dr. Amee Shah, Physiotherapist"
            className="w-full h-auto object-cover bg-muted"
            loading="lazy"
          />
        </div>
      </article>
    </section>
  );
}
