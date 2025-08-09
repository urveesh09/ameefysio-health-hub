import SEO from "@/components/SEO";
import HeroMinimal from "@/components/site/heroes/HeroMinimal";
import AboutSection from "@/components/site/sections/AboutSection";
import ServicesSection from "@/components/site/sections/ServicesSection";
import TestimonialsSection from "@/components/site/sections/TestimonialsSection";
import ContactSection from "@/components/site/sections/ContactSection";

const HomeMinimal = () => (
  <>
    <SEO
      title="Physiotherapy Care | Minimal Design"
      description="Explore a minimal, clean layout for Dr. Amee Shah’s physiotherapy website."
    />
    <main>
      <HeroMinimal />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  </>
);

export default HomeMinimal;
