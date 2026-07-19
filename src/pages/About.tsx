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
                Fast pickup, careful cleaning, and on-time delivery — that's what we do best.
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
                  alt="About Zamzam Laundry Nasir"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  {siteInfo.siteTitle} started with one idea: laundry in Makkah should be simple, fast, and affordable. We built a service around that — quick WhatsApp booking, drivers who show up in 20 minutes, and cleaning that handles everything from everyday clothes to delicate ihram garments.
                </p>
                <p className="mb-6">
                  We use professional-grade machines, gentle detergents, and careful pressing to make sure every item comes back looking right. Whether you're a pilgrim staying for a few days or a resident who needs regular service, we treat your clothes with the same attention.
                </p>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  What We Stand For
                </h2>
                <p className="mb-6">
                  Fair pricing with no hidden charges. Same-day turnaround as standard. Pickup and delivery that actually arrives on time. We keep things simple so you can focus on what matters to you.
                </p>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  What Makes Us Different
                </h2>
                <p>
                  We don't just clean clothes — we built a system around convenience. WhatsApp ordering, real-time updates, fixed pricing, and drivers who know Makkah inside out. That's why thousands of customers keep coming back.
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
