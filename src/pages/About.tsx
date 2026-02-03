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
                Makkah ZamZam Express Laundry is a trusted provider of pickup
                and delivery laundry services in Makkah, serving pilgrims,
                residents, and visitors with reliable care and professional
                handling. Conveniently located near central Makkah and Masjid
                Al-Haram, we understand the unique schedules of Umrah and Hajj
                pilgrims as well as the everyday needs of local residents.
                <p className="text-muted-foreground mb-4 leading-relaxed"></p>
                Our services are designed to be flexible, efficient, and easy to
                fit into your daily routine. With fast express pickup,
                round-the-clock availability, and careful garment handling, we
                take care of your laundry so you can focus on your worship,
                stay, and peace of mind in Makkah.
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
              Our mission is to provide pilgrims and residents with a seamless
              and reliable laundry experience, ensuring their garments are
              treated with the utmost care. We aim to deliver convenience,
              quality, and peace of mind, so our clients can focus on their
              spiritual journey and daily lives.
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
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Efficiency & Reliability
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With a guaranteed 15-minute pickup and express turnaround, we
                respect your time and deliver on our promises.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Unmatched Quality
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                From high-quality detergents to professional handling, we
                ensure your clothes receive the best care possible.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Leaf className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Sustainable Practices
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our eco-friendly cleaning solutions protect your garments and
                our planet, reflecting our commitment to sustainability.
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
                Our Team: The Heart of Our Service
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Our professionals are the backbone of Makkah ZamZam Express
                Laundry. Carefully selected and extensively trained, they are
                committed to upholding our values of integrity, respect, and
                excellence in every task they perform.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary/5 to-background p-8 rounded-2xl border border-border"
              >
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Expertise & Dedication
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our team's expertise in modern fabric care is matched only by
                  their dedication to serving our clients with a personal touch.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    Skilled in handling delicate and traditional garments
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    Deep understanding of our clients' unique needs
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    Fluent in multiple languages for clear communication
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-background to-primary/5 p-8 rounded-2xl border border-border"
              >
                <Award className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Commitment to Satisfaction
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your trust is our priority. We guarantee your satisfaction
                  with our transparent, reliable, and high-quality service.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    Satisfaction guarantee on all our services
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    Hassle-free re-wash if our service does not meet your
                    expectations
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    Clear and upfront pricing, always
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
