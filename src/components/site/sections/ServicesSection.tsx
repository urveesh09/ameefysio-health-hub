
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, HeartPulse, Activity, Stethoscope, Wind, Dumbbell } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";

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
    <section id="services" className="services-bg relative py-20 scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto">
        <Reveal>
        <header className="mb-10 text-center">
          <span className="inline-block mb-4 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary text-sm font-semibold tracking-wide border border-primary/20">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
            Specialized Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Evidence-based care across heart and lung rehabilitation — designed to help you breathe easier and move better.
          </p>
        </header>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(({ title, desc, icon: Icon }, i) => (
          <Reveal key={title} delay={i * 80}>
            <Card className="premium-card h-full group cursor-pointer">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 group-hover:from-primary/30 group-hover:to-accent/20 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors">
                    {title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                {desc}
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
      </div>
    </section>
  );
}
