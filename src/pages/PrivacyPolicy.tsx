import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { siteInfo } from "@/constants";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-foreground">
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6">
              At {siteInfo.siteTitle}, accessible via {siteInfo.domain}, we are committed to protecting your privacy. This policy outlines the types of data we collect and how we utilize it to enhance your experience.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Data Collection
            </h2>
            <p className="mb-6">
              To facilitate our services, we may require your name, contact number, and precise location for garment collection. When communicating via WhatsApp, your contact details and message history are processed to ensure efficient service delivery.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Utilization of Data
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Facilitating scheduled laundry collection and delivery</li>
              <li>Enhancing our operational logistics and cleaning standards</li>
              <li>Analyzing website traffic to improve user interface and experience</li>
              <li>Maintaining direct communication regarding your specific orders</li>
              <li>Ensuring the security and integrity of our service against fraudulent activities</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Analytical Log Files
            </h2>
            <p className="mb-6">
              {siteInfo.siteTitle} employs standard analytical log files. These logs record visitor interactions, including IP addresses, browser specifications, and timestamps. This data is strictly used for internal traffic analysis and performance monitoring.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              External Linkages
            </h2>
            <p className="mb-6">
              Our privacy commitment extends only to our direct operations. If you navigate to external websites via links on our platform, we advise reviewing the respective privacy policies of those third-party entities.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              User Rights
            </h2>
            <p className="mb-6">
              We respect your data rights. You are entitled to request access to the information we hold about you, as well as its rectification or deletion at your discretion.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Inquiries
            </h2>
            <p>
              For any privacy-related inquiries or concerns, please contact us at info@zamzamlaundryservice.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
