import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { siteInfo, managerInfo } from "@/constants";

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
              Welcome to {siteInfo.siteTitle}. These terms and conditions outline the rules and regulations for the use of {siteInfo.siteTitle}'s Website and Services, located at {siteInfo.domain} and operated from {managerInfo.address}.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="mb-6">
              By accessing this website and using our laundry services, you agree to be bound by these terms and conditions in full. If you do not agree with any part of these terms, you must not use our website or services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Laundry Services
            </h2>
            <p className="mb-6">
              {siteInfo.siteTitle} provides professional laundry, dry cleaning, ironing, and special garment care services (including Ihram care) in Makkah, Saudi Arabia. While we take every precaution to handle your garments with care, we are not responsible for damage resulting from normal wear and tear, manufacturing defects, improper care instructions on garment labels, or pre-existing conditions (e.g., thinning fabric, loose buttons, delicate embellishments). Items without care labels are cleaned at the owner's risk.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Pickup and Delivery
            </h2>
            <p className="mb-6">
              Free pickup and delivery service is available within our designated service areas in Makkah. Pickup and delivery times are estimates and may vary due to traffic conditions, weather, or driver availability. While we aim for rapid response (typically within 20 minutes), we cannot guarantee exact arrival times during peak periods such as Ramadan and Hajj. Customers are responsible for being present at the designated pickup/delivery location at the agreed time.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Pricing and Payment
            </h2>
            <p className="mb-6">
              All prices are in SAR (Saudi Riyal). Pricing is offered per kilogram and per-item as displayed on our website and as communicated via WhatsApp. We reserve the right to modify our prices at any time without prior notice. Payment is collected at the time of delivery unless otherwise agreed. Accepted payment methods include cash and bank transfer.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Limitation of Liability
            </h2>
            <p className="mb-6">
              Our liability for any lost or damaged item is limited to a maximum of ten (10) times the cleaning cost of that specific item. Claims for loss or damage must be made within 24 hours of delivery. {siteInfo.siteTitle} shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. We recommend that customers remove any valuables from pockets and inform us of any special care requirements.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. Cancellation and Refunds
            </h2>
            <p className="mb-6">
              Orders may be cancelled at no charge prior to items being collected. Once items have been collected and processing has begun, the full service fee will apply. Refunds for lost or damaged items are handled per our liability policy (Section 5).
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              7. WhatsApp Communications
            </h2>
            <p className="mb-6">
              By placing an order, you consent to receive communications from us via WhatsApp at the number you provide. These communications include order confirmations, pickup/delivery updates, and customer support messages. Standard WhatsApp data and messaging rates apply as per your mobile carrier.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              8. Governing Law
            </h2>
            <p className="mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Makkah, Saudi Arabia.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Contact Us
            </h2>
            <p className="mb-6">
              If you have any queries regarding these terms, please contact us:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Email: {managerInfo.email}</li>
              <li>Phone/WhatsApp: {managerInfo.phoneNumber}</li>
              <li>Address: {managerInfo.address}</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;
