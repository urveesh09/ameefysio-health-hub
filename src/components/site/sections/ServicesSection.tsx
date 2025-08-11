import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, HeartPulse, Activity, Stethoscope, Wind, Dumbbell } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import heroBg from "@/assets/hero-elevated-bg.jpg";

const services = [
  { title: "Cardiopulmonary Rehabilitation", desc: "Individualized exercise and breathing programs to improve endurance and heart–lung function.", icon: HeartPulse },
  { title: "Respiratory Physiotherapy", desc: "Airway clearance, chest physiotherapy, and breathing retraining for respiratory conditions.", icon: Wind },
  { title: "Post-operative Care", desc: "Early mobilization, lung expansion techniques, and recovery planning after surgery.", icon: Stethoscope },
  { title: "Chronic Condition Management", desc: "Long-term support for COPD, asthma, and cardiovascular conditions.", icon: Activity },
  { title: "Exercise Prescription", desc: "Evidence-based, goal-oriented exercise plans tailored to your needs.", icon: Dumbbell },
  { title: "Home and Tele-based Physiotherapy", desc: "Convenient care plans and supervised sessions at home or via tele-rehab.", icon: Home },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative container mx-auto py-16">
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
      <Reveal>
        <header className="mb-6">
          <span className="inline-block mb-3 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs tracking-wide">What I Offer</span>
          <h2 className="text-3xl font-semibold">Services</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Evidence-based care across heart and lung rehabilitation — designed to help you breathe easier and move better.
          </p>
        </header>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ title, desc, icon: Icon }, i) => (
          <Reveal key={title} delay={i * 60}>
            <Card className="h-full border-primary/20 ring-1 ring-primary/10 bg-card/80 backdrop-blur hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="inline-flex p-2 rounded-md bg-secondary">
                    <Icon className="w-5 h-5 text-primary" />
                  </span>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground">{desc}</CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
