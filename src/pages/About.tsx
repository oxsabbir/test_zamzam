import { siteInfo } from "@/constants";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about.webp";
import { motion } from "motion/react";
import {
  Sparkles,
  Heart,
  Shield,
  Zap,
  Users,
  Clock,
  MessageCircle,
  Award,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Fair Pricing",
    description:
      "No hidden charges. What you see is what you pay — always transparent.",
  },
  {
    icon: Zap,
    title: "Same-Day Turnaround",
    description:
      "Standard service means your clothes are ready the same day, every time.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "Drivers who arrive when they say they will. No delays, no excuses.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Booking",
    description: "Book in seconds. No apps to download, no accounts to create.",
  },
];

const differentiators = [
  {
    icon: Sparkles,
    title: "Professional Cleaning",
    description:
      "Commercial-grade machines and gentle detergents for a perfect clean every time.",
  },
  {
    icon: Heart,
    title: "Careful Handling",
    description:
      "From everyday clothes to delicate ihram garments — we treat every item with respect.",
  },
  {
    icon: Users,
    title: "Thousands of Customers",
    description:
      "Pilgrims and residents across Makkah trust us with their laundry — and keep coming back.",
  },
  {
    icon: Award,
    title: "Built Around You",
    description:
      "We didn't just build a laundry service. We built a system around convenience.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="pt-32 bg-gradient-to-b from-primary/70 via-background to-background relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Sparkles size={14} />
                About Us
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                {siteInfo.siteTitle}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Fast pickup, careful cleaning, and on-time delivery — that's
                what we do best.
              </p>
            </motion.div>
          </div>
        </section>

        <section className=" py-16 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative mb-6 rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={aboutImage}
                  alt="About Zamzam Laundry Nasir"
                  className="w-full h-[400px] md:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-lg">
                    <p className="text-white font-semibold text-lg">
                      Laundry in Makkah — made simple, fast, and affordable.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/50 backdrop-blur-xl border border-white/60 rounded-3xl p-8"
                >
                  <p className="text-muted-foreground leading-relaxed">
                    {siteInfo.siteTitle} started with one idea: laundry in
                    Makkah should be simple, fast, and affordable. We built a
                    service around that — quick WhatsApp booking, drivers who
                    show up in 20 minutes, and cleaning that handles everything
                    from everyday clothes to delicate ihram garments.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/50 backdrop-blur-xl border border-white/60 rounded-3xl p-8"
                >
                  <p className="text-muted-foreground leading-relaxed">
                    We use professional-grade machines, gentle detergents, and
                    careful pressing to make sure every item comes back looking
                    right. Whether you're a pilgrim staying for a few days or a
                    resident who needs regular service, we treat your clothes
                    with the same attention.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-foreground mb-3">
                  What We Stand For
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  The values that drive everything we do
                </p>
              </motion.div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                {values.map((value, i) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="bg-white/50 backdrop-blur-xl border border-white/60 rounded-3xl p-6 text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative inline-block mb-4">
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-lg group-hover:blur-xl transition-all" />
                      <div className="relative bg-gradient-to-br from-primary to-primary/70 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                        <value.icon size={24} className="text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-foreground mb-3">
                  What Makes Us Different
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We don't just clean clothes — we built a system around
                  convenience
                </p>
              </motion.div>
              <div className="grid sm:grid-cols-2 gap-6">
                {differentiators.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="bg-white/50 backdrop-blur-xl border border-white/60 rounded-3xl p-6 flex items-start gap-4 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-lg group-hover:blur-xl transition-all" />
                      <div className="relative bg-gradient-to-br from-primary to-primary/70 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                        <item.icon size={20} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
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
