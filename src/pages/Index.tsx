import Navigation from "@/components/Navigation";
import HeroNew from "@/components/HeroNew";
import AreaCoverage from "@/components/AreaCoverage";
import Comparison from "@/components/Comparison";
import PricingGrid from "@/components/PricingGrid";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import PickupManager from "@/components/PickupManager";
import UrgentService from "@/components/UrgentService";
import PricingSection from "@/components/PricingSection";
import FinalCTA from "@/components/FinalCTA";
import PilgrimGuide from "@/components/PilgrimGuide";
import Faq from "@/components/Faq";
import EmergencyService from "@/components/EmergencyService";
import OurServices from "@/components/OurServices";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <Navigation />
      <HeroNew />
      <div id="services">
        <UrgentService />
      </div>
      <AreaCoverage />

      <Comparison />
      <OurServices />
      <div id="pricing">
        <PricingGrid />
      </div>
      <HowItWorks />
      <PricingSection />
      <PilgrimGuide />
      <div id="testimonials">
        <Testimonials />
      </div>
      <Faq />
      <EmergencyService />
      <FinalCTA />
      <div id="contact">
        <PickupManager />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
