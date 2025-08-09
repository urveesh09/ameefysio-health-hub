import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import HeroSerene from "@/components/site/heroes/HeroSerene";
import AboutSection from "@/components/site/sections/AboutSection";
import ServicesSection from "@/components/site/sections/ServicesSection";
import TestimonialsSection from "@/components/site/sections/TestimonialsSection";
import ContactSection from "@/components/site/sections/ContactSection";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr. Amee Shah",
    "jobTitle": "Physiotherapist",
    "description": "Compassionate and expert physiotherapy care. Masters in Physiotherapy (Cardiovascular and Respiratory Sciences).",
    "sameAs": [
      "https://www.linkedin.com/in/dr-amee-shah-7bb66940/",
      "https://www.instagram.com/dr.amee_physio.at.home/"
    ]
  };
  return (
    <>
      <SEO
        title="Dr. Amee Shah | Compassionate Physiotherapy Care"
        description="Modern, empathetic physiotherapy specializing in cardiovascular and respiratory sciences. Book a consultation with Dr. Amee Shah."
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <main>
        <HeroSerene />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
