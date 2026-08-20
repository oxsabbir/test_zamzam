import { siteInfo } from "@/constants";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about-laundry-premium.webp";
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
                Professional laundry service in Makkah with fast pickup, expert
                cleaning, and reliable delivery.
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
                  {siteInfo.siteTitle} is a professional laundry service in
                  Makkah offering pickup, cleaning, and delivery for pilgrims,
                  hotel guests, families, and local residents. We handle all
                  types of garments — from everyday clothing to Ihram, abayas,
                  thobes, and household linens.
                </p>
                <p className="mb-6">
                  Every order is cleaned individually using modern machines and
                  quality detergents. We offer standard, express, and urgent
                  turnaround options so you get your clothes back when you need
                  them.
                </p>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  What We Do
                </h2>
                <p className="mb-6">
                  Wash and fold, dry cleaning, ironing, stain removal, and
                  express laundry — with free pickup and delivery across Makkah.
                  Book through WhatsApp in seconds.
                </p>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Who We Serve
                </h2>
                <p>
                  Pilgrims visiting Masjid al-Haram, hotel guests, apartment
                  residents, families, and anyone in Makkah who needs reliable
                  laundry service without the hassle. Open 24/7, including
                  holidays.
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
