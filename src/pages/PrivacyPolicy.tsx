import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "motion/react";
import { Shield, Lock, Eye, Mail } from "lucide-react";
import { managerInfo } from "@/constants";

const PrivacyPolicy = () => {
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
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Your privacy and trust are important to us. Here's how we protect
              your information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <p className="text-muted-foreground leading-relaxed text-lg">
                At Makkah ZamZam Express Laundry, we are committed to protecting
                your privacy and handling your personal information with care
                and respect. This Privacy Policy explains what information we
                collect, why we collect it, and how we use it.
              </p>
            </motion.div>

            {/* Information We Collect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    What Information We Collect
                  </h2>
                </div>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect only the essential information needed to provide
                  our laundry services effectively:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-foreground">
                        Contact Information:
                      </strong>
                      <span className="text-muted-foreground">
                        {" "}
                        Your name, phone number, WhatsApp number, and delivery
                        address
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-foreground">
                        Order Details:
                      </strong>
                      <span className="text-muted-foreground">
                        {" "}
                        Information about your laundry items, service
                        preferences, and special instructions
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-foreground">
                        Payment Information:
                      </strong>
                      <span className="text-muted-foreground">
                        {" "}
                        Basic payment method details for billing purposes
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-foreground">
                        Communication Records:
                      </strong>
                      <span className="text-muted-foreground">
                        {" "}
                        Messages and calls related to your service requests
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Why We Collect It */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Why We Collect Information
                  </h2>
                </div>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use your information solely to provide and improve our
                  laundry services:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">
                      To process your laundry orders and coordinate
                      pickup/delivery
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">
                      To communicate with you about your orders and service
                      updates
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">
                      To improve our service quality based on your feedback
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">
                      To send you important service notifications
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">
                      To maintain accurate records for quality assurance
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Data Protection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Your Data Protection
              </h2>
              <div className="bg-gradient-to-br from-primary/5 to-primary/5 p-8 rounded-2xl border border-border">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      We Never Sell Your Data
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Your personal information is never sold, rented, or shared
                      with third parties for marketing purposes. We treat your
                      data with the utmost confidentiality.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Limited Sharing
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We only share your information with our trusted service
                      team members who need it to complete your laundry orders.
                      All team members are bound by strict confidentiality
                      agreements.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Secure Storage
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Your information is stored securely and protected against
                      unauthorized access. We implement industry-standard
                      security measures to safeguard your data.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Cookies & Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Cookies & Website Analytics
              </h2>
              <div className="bg-card p-8 rounded-2xl border border-border">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our website may use cookies and analytics tools to improve
                  your browsing experience:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">
                      Cookies help remember your preferences and improve site
                      functionality
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">
                      Analytics help us understand how visitors use our website
                      to make improvements
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">
                      You can disable cookies in your browser settings if
                      preferred
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Your Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Your Privacy Rights
              </h2>
              <div className="bg-card p-8 rounded-2xl border border-border">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">
                      Request access to your personal information
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">
                      Request corrections to any inaccurate information
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">
                      Request deletion of your data (subject to legal
                      requirements)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">
                      Opt out of marketing communications at any time
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact for Privacy Questions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Questions About Privacy?
                  </h2>
                </div>
              </div>
              <div className="bg-gradient-to-r from-primary/10 to-primary/10 p-8 rounded-2xl border border-border">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions or concerns about how we handle your
                  personal information, please don't hesitate to contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-foreground">
                    <strong>Email:</strong>{" "}
                    <a
                      href={`mailto:${managerInfo.email}`}
                      className="text-primary hover:underline"
                    >
                      {managerInfo.email}
                    </a>
                  </p>
                  <p className="text-foreground">
                    <strong>WhatsApp:</strong>{" "}
                    <a
                      href={`https://wa.me/${managerInfo.onlyNumber.whatsApp}`}
                      className="text-primary hover:underline"
                    >
                      {managerInfo.whatsApp}
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Updates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Policy Updates
              </h2>
              <div className="bg-card p-8 rounded-2xl border border-border">
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or for legal reasons. We will notify
                  you of any significant changes by posting the updated policy
                  on our website with a new "Last Updated" date. We encourage
                  you to review this page periodically to stay informed about
                  how we protect your information.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
