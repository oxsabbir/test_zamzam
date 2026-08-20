import Navigation from "@/components/Navigation";
import HeroNew from "@/components/HeroNew";
import AreaCoverage from "@/components/AreaCoverage";
import Comparison from "@/components/Comparison";
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
import { siteInfo } from "@/constants";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = `${siteInfo.siteTitle} | Trusted Pickup Laundry in Makkah`;
  }, []);

  return (
    <main className="min-h-screen relative">
      <Navigation />
      <HeroNew />
      <div id="services">
        <UrgentService />
      </div>
      <AreaCoverage />

      <Comparison />
      {/* <OurServices /> */}

      <div id="pricing">
        <PricingSection />
      </div>
      <HowItWorks />
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
