import SEO from "@/components/SEO";
import HeroElevated from "@/components/site/heroes/HeroElevated";
import AboutSection from "@/components/site/sections/AboutSection";
import ServicesSection from "@/components/site/sections/ServicesSection";
import TestimonialsSection from "@/components/site/sections/TestimonialsSection";
import ContactSection from "@/components/site/sections/ContactSection";

const HomeElevated = () => (
  <>
    <SEO
      title="Physiotherapy Care | Elevated Design"
      description="Explore an elevated, card-based layout for Dr. Amee Shah’s physiotherapy website."
    />
    <main>
      <HeroElevated />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  </>
);

export default HomeElevated;
