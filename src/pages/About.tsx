import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "motion/react";
import { Users, Heart, Leaf, Clock, Award, Target } from "lucide-react";
import aboutServiceImage from "@/assets/about.webp";
import { managerInfo } from "@/constants";

const About = () => {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About Makkah ZamZam Express Laundry
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Dedicated to providing exceptional laundry services for pilgrims
              and residents in Makkah.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={aboutServiceImage}
                alt="Professional laundry service in Makkah"
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Makkah ZamZam Express Laundry is a trusted provider of pickup and delivery
                laundry services, dedicated to serving pilgrims, residents, and
                visitors throughout the holy city of Makkah with the utmost care
                and professionalism.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Located near the central areas of Makkah and Masjid al-Haram, we
                have a deep understanding of the unique schedules and needs of
                Umrah and Hajj pilgrims, as well as the daily requirements of
                local residents. Our services are designed to be flexible and
                convenient, fitting seamlessly into your busy schedule.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With our 15-minute express pickup, 24/7 availability, and expert
                garment care, we handle your laundry needs so you can focus on
                what matters most during your time in Makkah.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To provide exceptional laundry care that respects your time, your
              garments, and the environment — allowing you to focus on what
              truly matters during your time in Makkah.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-success/10 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-success" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Speed & Convenience
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                15-minute pickup guaranteed, with express turnaround options as
                fast as 1 hour for urgent needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-success/10 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-success" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Premium Care
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every garment receives gentle, professional treatment using
                quality detergents and modern equipment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-success/10 rounded-xl flex items-center justify-center mb-6">
                <Leaf className="w-7 h-7 text-success" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Eco-Friendly
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We use environmentally safe cleaning products that are gentle on
                fabrics and kind to our planet.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team & Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Experienced Team, Customer-First Service
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Our dedicated team consists of trained professionals who
                understand the importance of trust, especially when handling
                your personal belongings during your spiritual journey.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary/5 to-success/5 p-8 rounded-2xl border border-border"
              >
                <Users className="w-10 h-10 text-success mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Trained Professionals
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Every member of our team is carefully trained in fabric care,
                  stain removal, and customer service excellence.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    Certified in professional laundry techniques
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    Understanding of cultural and religious sensitivities
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    Multilingual support for international guests
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-success/5 to-primary/5 p-8 rounded-2xl border border-border"
              >
                <Award className="w-10 h-10 text-success mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Quality Guarantee
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We stand behind our work with a complete satisfaction
                  guarantee on every order.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    Money-back guarantee if not satisfied
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    Free re-wash if you're not happy
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    Transparent pricing with no hidden fees
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-success">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Target className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Join thousands of satisfied customers who trust us with their
              laundry needs in Makkah. Let us take care of your clothes while
              you focus on your spiritual journey.
            </p>
            <a
              href={`https://wa.me/${managerInfo.onlyNumber.whatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Try Our Service Today
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
