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
              Welcome to {siteInfo.siteTitle}. The following terms govern your use of our website and professional laundry services located at {siteInfo.domain}.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="mb-6">
              By accessing our platform or engaging our services, you acknowledge and agree to comply with these terms. If you do not accept these conditions, please refrain from using our services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Service Provisions
            </h2>
            <p className="mb-6">
              Zamzam Laundry Service provides comprehensive laundering, dry cleaning, and pressing solutions within Makkah. While we handle all garments with professional care, we cannot be held liable for standard wear and tear, pre-existing structural weaknesses, or delicate attachments like buttons and sequins that may be compromised due to age.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Logistics & Delivery
            </h2>
            <p className="mb-6">
              We strive for rapid turnaround; however, logistical operations in Makkah are subject to traffic conditions and peak pilgrim seasons. Complimentary collection and delivery are provided based on our standard service parameters.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Pricing & Transactions
            </h2>
            <p className="mb-6">
              All listed rates are in Saudi Riyals (SAR). We reserve the right to adjust pricing based on market conditions. Payment is typically settled upon the delivery of processed garments.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Liability for Loss or Damage
            </h2>
            <p className="mb-6">
              In the rare event of loss or damage directly caused by our processing, our liability is limited to a maximum of ten (10) times the cleaning cost of the specific item. Any claims must be formally reported within 24 hours of delivery.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. Order Cancellations
            </h2>
            <p className="mb-6">
              Cancellations are permitted prior to garment collection. Once items have been collected and processing has commenced, the full service fee remains applicable.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              7. Governing Law
            </h2>
            <p className="mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Inquiries
            </h2>
            <p>
              For further clarification regarding these terms, please contact us at info@zamzamlaundryservice.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;
