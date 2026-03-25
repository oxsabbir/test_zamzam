import { siteInfo } from "@/constants";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about.webp";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section with Gradient matching Contact page */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                About {siteInfo.siteTitle}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Dedicated to providing Makkah's most reliable and professional laundry care for pilgrims and residents.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="aspect-video mb-12 rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={aboutImage}
                  alt="About Makkah Al Baraka Laundry"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  {siteInfo.siteTitle} is a premier laundry service provider in Makkah, dedicated to offering top-tier garment care for both pilgrims and local residents. We understand the importance of fresh, clean clothing, especially during your spiritual journey, and we strive to make laundry the least of your concerns.
                </p>
                <p className="mb-6">
                  Our team utilizes advanced cleaning technologies and eco-friendly detergents to ensure your clothes are treated with the utmost care. From delicate abayas and Ihram garments to everyday wear, we handle every item with professional precision.
                </p>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="mb-6">
                  To provide the most reliable, efficient, and high-quality laundry service in the holy city of Makkah. We aim to support our customers by taking the burden of laundry off their shoulders, allowing them to focus on what truly matters.
                </p>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Why We Are Different
                </h2>
                <p>
                  Unlike traditional laundry services, we offer a seamless digital experience with easy WhatsApp booking and lightning-fast pickup and delivery. Our commitment to quality, transparency in pricing, and 24/7 availability sets us apart as the most trusted laundry partner in Makkah.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
