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
              At {siteInfo.siteTitle}, reachable via {siteInfo.domain}, one of our primary priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by {siteInfo.siteTitle} and how we use it.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Information We Collect
            </h2>
            <p className="mb-6">
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide, operate, and maintain our website and services</li>
              <li>Improve, personalize, and expand our laundry services</li>
              <li>Understand and analyze how you use our services</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners</li>
              <li>Process your laundry orders and manage pickup/delivery</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Log Files
            </h2>
            <p className="mb-6">
              {siteInfo.siteTitle} follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Third-Party Privacy Policies
            </h2>
            <p className="mb-6">
              {siteInfo.siteTitle}'s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              GDPR Data Protection Rights
            </h2>
            <p className="mb-6">
              We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the right to access, right to rectification, right to erasure, right to restrict processing, right to object to processing, and the right to data portability.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at info@makkahalbarakalaundry.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
