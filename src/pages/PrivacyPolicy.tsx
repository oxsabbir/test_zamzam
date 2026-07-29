import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { siteInfo, managerInfo } from "@/constants";

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
              At {siteInfo.siteTitle}, reachable via {siteInfo.domain}, one of our primary priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by {siteInfo.siteTitle} and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Information We Collect
            </h2>
            <p className="mb-6">
              When you book our laundry services via WhatsApp, phone call, or our website contact form, we collect the information you provide to facilitate pickup and delivery. This includes your name, phone number, WhatsApp number, delivery address/location in Makkah, and any special instructions for your laundry. We also collect payment details when applicable.
            </p>
            <p className="mb-6">
              When you visit our website, we automatically collect certain information via Google Tag Manager and similar analytics tools, including your IP address, browser type, device type, pages visited, and the time and date of your visit.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Process and fulfill your laundry pickup and delivery orders</li>
              <li>Communicate with you via WhatsApp or phone regarding your order status</li>
              <li>Improve, personalize, and expand our laundry services</li>
              <li>Understand and analyze how you use our services</li>
              <li>Send service-related updates and promotional offers (only with your consent)</li>
              <li>Find and prevent fraud or misuse of our services</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Log Files and Analytics
            </h2>
            <p className="mb-6">
              {siteInfo.siteTitle} follows a standard procedure of using log files and Google Tag Manager. These tools log visitors when they visit websites. The information collected includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. This data is used for analyzing trends, administering the site, tracking user movement, and gathering demographic information.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Data Sharing and Third Parties
            </h2>
            <p className="mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your delivery address and phone number with our delivery drivers solely for the purpose of completing your laundry pickup and drop-off. {siteInfo.siteTitle}'s Privacy Policy does not apply to other websites or third-party services (such as WhatsApp or Google Maps) that you may interact with through our site.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Data Retention and Security
            </h2>
            <p className="mb-6">
              We retain your personal information only as long as necessary to provide you with our laundry services and for legitimate business purposes. We implement reasonable security measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Your Rights
            </h2>
            <p className="mb-6">
              Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict the processing of your personal data. To exercise any of these rights, please contact us using the information below.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Contact Us
            </h2>
            <p className="mb-6">
              If you have any questions or suggestions about our Privacy Policy, or wish to exercise your data rights, please contact us:
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

export default PrivacyPolicy;
