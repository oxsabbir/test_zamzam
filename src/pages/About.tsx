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
                Built to make laundry pickup in Makkah more practical,
                dependable, and easy to arrange for both visitors and locals.
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
                  alt={`About ${siteInfo.siteTitle}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  {siteInfo.siteTitle} was created to offer a smoother laundry
                  experience in Makkah for pilgrims, families, hotel guests, and
                  local residents. We focus on simple booking, dependable
                  pickup, and consistent garment care so customers can spend
                  less time managing laundry logistics.
                </p>
                <p className="mb-6">
                  Our service is designed around the clothing people wear most
                  here, from Ihram, abayas, and thobes to daily garments and
                  larger household items. Each order is handled with attention
                  to fabric type, finish, and the turnaround the customer
                  selects.
                </p>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="mb-6">
                  To deliver a laundry service people can book with confidence:
                  clear communication, fair pricing, reliable pickup, and clean
                  results returned on time.
                </p>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Why We Are Different
                </h2>
                <p>
                  We combine WhatsApp-first booking with practical service
                  options for standard, express, and urgent laundry needs. That
                  balance of convenience, garment care, and citywide pickup
                  makes our service a useful everyday choice in Makkah.
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
