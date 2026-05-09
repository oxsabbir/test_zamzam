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
            Terms & Conditions
          </h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6 italic">
              Welcome to {siteInfo.siteTitle}. These are the rules for using our website and laundry services at {siteInfo.domain}.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Agreeing to Rules
            </h2>
            <p className="mb-6">
              When you use our website or our washing service, you agree to these rules. If you do not agree, please do not use our service.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Washing Services
            </h2>
            <p className="mb-6">
              We provide laundry, dry cleaning, and ironing in Makkah. We take great care of your clothes. However, we are not responsible for normal wear and tear, or if a button is already loose or the fabric is already old.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Pickup and Delivery
            </h2>
            <p className="mb-6">
              Our team tries to be very fast, but traffic in Makkah can sometimes cause delays. Free pickup and delivery are for orders that meet our simple requirements.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Prices and Payment
            </h2>
            <p className="mb-6">
              All prices are in SAR (Saudi Riyal). We can change prices at any time. You usually pay when we deliver your clean laundry back to you.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Loss or Damage
            </h2>
            <p className="mb-6">
              If an item is lost or damaged by us, we will pay up to ten (10) times the cleaning price for that item. You must tell us about any problems within 24 hours of delivery.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. Cancelling Orders
            </h2>
            <p className="mb-6">
              You can cancel your order before we pick it up. Once we have your clothes and start washing them, you must pay the full price.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              7. Local Laws
            </h2>
            <p className="mb-6">
              These rules follow the laws of the Kingdom of Saudi Arabia.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions, please email us at info@makkahroyalpremiumlaundry.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;
