import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { siteInfo } from "@/constants";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-foreground">
            Terms and Conditions
          </h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6 italic">
              Welcome to {siteInfo.siteTitle}. These terms and conditions outline the rules and regulations for the use of {siteInfo.siteTitle}'s Website and Services, located at {siteInfo.domain}.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="mb-6">
              By accessing this website and using our laundry services, we assume you accept these terms and conditions in full. Do not continue to use {siteInfo.siteTitle} if you do not agree to all of the terms and conditions stated on this page.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Laundry Services
            </h2>
            <p className="mb-6">
              We provide professional laundry, dry cleaning, and ironing services in Makkah. While we take every precaution to handle your garments with care, we are not responsible for any damage resulting from normal wear and tear, manufacturing defects, or pre-existing conditions (e.g., thinning fabric, loose buttons).
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Pickup and Delivery
            </h2>
            <p className="mb-6">
              Our pickup and delivery service is subject to driver availability and traffic conditions in Makkah. While we aim for rapid response, we cannot guarantee exact arrival times during peak periods. Free pickup and delivery apply to orders meeting our minimum requirements as stated on our pricing page.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Pricing and Payment
            </h2>
            <p className="mb-6">
              All prices are in SAR (Saudi Riyal). We reserve the right to change our prices at any time without prior notice. Payment is usually settled at the time of delivery or collection, unless otherwise agreed upon.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Liability
            </h2>
            <p className="mb-6">
              Our liability for any lost or damaged item is limited to a maximum of ten (10) times the cleaning cost of that specific item. Claims must be made within 24 hours of delivery. Items without care labels are cleaned at the owner's risk.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. Cancellation
            </h2>
            <p className="mb-6">
              Orders may be cancelled prior to pickup. Once items have been collected and processed, the full service fee will apply.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              7. Governing Law
            </h2>
            <p className="mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia, and you irrevocably submit to the exclusive jurisdiction of the courts in that State.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Contact Us
            </h2>
            <p>
              If you have any queries regarding any of our terms, please contact us at {siteInfo.contactEmail}.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;
