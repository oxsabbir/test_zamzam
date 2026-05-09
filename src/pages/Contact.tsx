import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import WhatsAppIcon from "@/components/icons/Whatsapp";
import { managerInfo } from "@/constants";

const Contact = () => {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Questions about our service or ready for a pickup? Our Makkah
              support team is available 24/7 to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            <motion.a
              href={`https://wa.me/${managerInfo.onlyNumber.whatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-primary hover:bg-primary/90 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <WhatsAppIcon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-white/90 text-sm mb-3">Instant messaging</p>
              <p className="text-white font-semibold">{managerInfo.whatsApp}</p>
            </motion.a>

            <motion.a
              href={`tel:${managerInfo.onlyNumber.phoneNumber}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-card hover:bg-muted/50 p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all hover:scale-105"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Direct Call
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                Speak with us now
              </p>
              <p className="text-foreground font-semibold">
                {managerInfo.phoneNumber}
              </p>
            </motion.a>

            <motion.a
              href={`mailto:${managerInfo.email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-card hover:bg-muted/50 p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all hover:scale-105"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Email Support
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                Send us a message
              </p>
              <p className="text-foreground font-semibold text-sm break-all">
                {managerInfo.email}
              </p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Service Hours
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                Always available
              </p>
              <p className="text-foreground font-semibold">Open 24/7</p>
            </motion.div>
          </div>

          {/* Book a Pickup Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="bg-gradient-to-r from-primary/10 to-primary/20 p-10 rounded-3xl border border-border">
              <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Schedule Your Instant Pickup
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Experience Makkah's most reliable laundry care. Contact our
                priority team on WhatsApp and we'll be at your location
                promptly.
              </p>
              <a
                href={`https://wa.me/${
                  managerInfo.onlyNumber.whatsApp
                }?text=${encodeURIComponent(
                  "Hi! I'd like to book a laundry pickup.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <WhatsAppIcon size={24} />
                Request Pickup on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Location Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Where We Operate
              </h2>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <p className="text-lg">{managerInfo.address}</p>
              </div>
            </div>

            {/* Map */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-border shadow-lg group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1857.132881685398!2d39.82445418878477!3d21.41879649204934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204c82533f16f%3A0xca0cff6480eeca59!2sThe%20Clock%20Towers!5e0!3m2!1sen!2sbd!4v1778319501919!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className=" group-hover:grayscale-0 transition-all duration-500"
                title="Bismillah Laundry Makkah Location"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Regional Service Times
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    Haram & Clock Tower District (5-10 min)
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    Jabal Omar & Aziziyah Area (10-15 min)
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    Kudai, Misfalah & Surrounds (15-20 min)
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    Full coverage across all Makkah districts
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Our Service Promise
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    Rapid-response pickup team
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    Zero-cost collection and return
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    Expert fabric handling and care
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    Complete satisfaction guarantee
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
