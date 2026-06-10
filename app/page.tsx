import Hero from "@/components/Hero";
import AtAGlance from "@/components/home/AtAGlance";
import OurMission from "@/components/home/OurMission";
import ServicesSection from "@/components/home/ServicesSection";
import NationwideSection from "@/components/home/NationwideSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AtAGlance />
      <OurMission />
      <ServicesSection />
      <NationwideSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
