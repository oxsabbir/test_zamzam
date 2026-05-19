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
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Our Journey
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Dedicated to providing impeccable garment care for Hajj and Umrah pilgrims through professional excellence.
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
                  alt="Zamzam Laundry Service Professional Team"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  Zamzam Laundry Service stands as a beacon of quality in the heart of Makkah. Our mission is to deliver superior cleaning solutions for both visitors and locals alike. We take pride in ensuring your attire remains spotless and fresh, allowing you to focus entirely on your spiritual obligations.
                </p>
                <p className="mb-6">
                  Utilizing state-of-the-art machinery and eco-friendly, hypoallergenic detergents, we treat every garment with absolute precision. Whether handling your sacred Ihram, elegant abayas, or professional thobes, our specialists ensure every item is returned in flawless condition.
                </p>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Our Commitment
                </h2>
                <p className="mb-6">
                  We strive to remain Makkah's most reliable laundry partner. By simplifying the laundering process with rapid turnaround times, we empower our clients to prioritize their time for worship, reflection, and family.
                </p>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  The Zamzam Distinction
                </h2>
                <p>
                  Our seamless integration of WhatsApp for rapid booking and our highly efficient collection team sets us apart from conventional providers. Operating 24/7 with transparent, competitive pricing, we are the definitive choice for those who demand both quality and convenience.
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
