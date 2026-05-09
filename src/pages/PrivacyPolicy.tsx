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
              At {siteInfo.siteTitle}, reachable via {siteInfo.domain}, we care about your privacy. This page explains what information we collect and how we use it.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Information We Collect
            </h2>
            <p className="mb-6">
              When you use our service, we may ask for your name, phone number, and location. This is so we can pick up your laundry. If you message us on WhatsApp, we will see your number and the message you send.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>To provide our laundry service to you</li>
              <li>To improve our washing and pickup services</li>
              <li>To understand how people use our website</li>
              <li>To talk to you about your order</li>
              <li>To deliver your clean clothes back to you</li>
              <li>To keep our service safe and prevent fraud</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Log Files
            </h2>
            <p className="mb-6">
              {siteInfo.siteTitle} uses standard log files. These files just log visitors to the site. This includes IP addresses, browser type, and the date and time of your visit. This helps us see how many people visit our website.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Third-Party Rules
            </h2>
            <p className="mb-6">
              Our policy does not apply to other websites or apps. If you click on a link to another site, please check their own privacy rules.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Your Rights
            </h2>
            <p className="mb-6">
              We want you to know your rights. You can ask us what information we have about you, and you can ask us to change or delete it.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about your privacy, please email us at info@makkahroyalpremiumlaundry.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
