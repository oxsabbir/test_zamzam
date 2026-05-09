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
                The Bismillah Laundry Mecca Story
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Empowering your spiritual journey and daily life with Makkah's most professional laundry and textile care.
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
                  alt="About Bismillah Laundry Mecca"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  Bismillah Laundry Mecca stands as a beacon of quality in the heart of the Holy City. We are dedicated to providing exceptional garment care for every visitor and resident, ensuring that your attire remains as pure and clean as your intentions. We understand that during your stay in Makkah, your focus should be on your spiritual path, not your laundry.
                </p>
                <p className="mb-6">
                  By combining state-of-the-art cleaning equipment with gentle, effective detergents, we ensure every piece of fabric is treated with individual attention. Whether it's the sacred Ihram, an elegant abaya, or your daily thobe, our experts deliver professional precision with every wash and fold.
                </p>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Our Commitment
                </h2>
                <p className="mb-6">
                  Our goal is to be the most trusted and efficient laundry provider in Makkah. We strive to serve our community by delivering convenience and peace of mind, allowing you to dedicate your time to worship, reflection, and family.
                </p>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  What Sets Us Apart
                </h2>
                <p>
                  We redefine convenience by integrating modern WhatsApp booking with a dedicated rapid-response fleet. Unlike traditional services, we offer a level of speed and accessibility that matches the pace of life in Makkah. Our 24/7 availability and transparent pricing make us the first choice for those who value their time and their wardrobe.
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
