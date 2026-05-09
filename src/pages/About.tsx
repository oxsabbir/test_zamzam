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
                Our Story
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Helping you stay fresh and clean during your Hajj and Umrah journey with professional laundry service.
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
                  alt="Makkah Royal Premium Laundry Team"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  Makkah Royal Premium Laundry is a top-quality service in the heart of the Holy City. We work hard to provide the best cleaning for every guest and resident. We want your clothes to stay clean and fresh so you can focus on your worship.
                </p>
                <p className="mb-6">
                  We use modern washing machines and safe, gentle soaps. Every piece of clothing is washed with care. Whether it is your sacred Ihram, an abaya, or a thobe, our team makes sure it is returned to you perfectly clean.
                </p>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Our Promise
                </h2>
                <p className="mb-6">
                  Our goal is to be the most trusted laundry service in Makkah. We help our community by making laundry easy and fast, so you can spend your time on prayer, reflection, and family.
                </p>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Why We Are Different
                </h2>
                <p>
                  We make laundry simple by using WhatsApp for easy booking and having a fast team for pickup. We are much faster than traditional services. We are open 24/7 and have simple prices, making us the best choice for people who value their time.
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
