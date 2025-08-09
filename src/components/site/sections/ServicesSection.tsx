import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, HeartPulse, Activity, Stethoscope, Wind, Dumbbell } from "lucide-react";

const services = [
  { title: "Cardiopulmonary Rehabilitation", desc: "Individualized exercise and breathing programs to improve endurance and heart–lung function.", icon: HeartPulse },
  { title: "Respiratory Physiotherapy", desc: "Airway clearance, chest physiotherapy, and breathing retraining for respiratory conditions.", icon: Wind },
  { title: "Post-operative Care", desc: "Early mobilization, lung expansion techniques, and recovery planning after surgery.", icon: Stethoscope },
  { title: "Chronic Condition Management", desc: "Long-term support for COPD, asthma, and cardiovascular conditions.", icon: Activity },
  { title: "Exercise Prescription", desc: "Evidence-based, goal-oriented exercise plans tailored to your needs.", icon: Dumbbell },
  { title: "Home-based Physiotherapy", desc: "Convenient care plans and supervised sessions at home or via tele-rehab.", icon: Home },
];

export default function ServicesSection() {
  return (
    <section id="services" className="container mx-auto py-16">
      <header className="mb-6">
        <h2 className="text-3xl font-semibold">Services</h2>
        <p className="text-sm text-muted-foreground mt-2">
          Please review and confirm this sample list — we’ll update it to match your exact offerings.
        </p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ title, desc, icon: Icon }) => (
          <Card key={title} className="h-full">
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
        ))}
      </div>
    </section>
  );
}
