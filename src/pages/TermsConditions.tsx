import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "motion/react";
import {
  FileText,
  CheckCircle,
  AlertTriangle,
  Clock,
  DollarSign,
  Shield,
} from "lucide-react";
import { managerInfo } from "@/constants";

const TermsConditions = () => {
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
            <FileText className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Terms & Conditions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Please read these terms carefully before using our laundry
              services.
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
                By using Makkah ZamZam Express Laundry, you agree to these Terms
                and Conditions. These terms govern your use of our pickup and
                delivery laundry services in Makkah, Saudi Arabia.
              </p>
            </motion.div>

            {/* Service Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Service Agreement
                  </h2>
                </div>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-foreground">Service Area:</strong>
                      <span className="text-muted-foreground">
                        {" "}
                        Our services are available throughout Makkah, with
                        priority service in areas near Masjid al-Haram.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-foreground">
                        Service Hours:
                      </strong>
                      <span className="text-muted-foreground">
                        {" "}
                        We operate 24/7 for your convenience, including holidays
                        and special occasions.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-foreground">Booking:</strong>
                      <span className="text-muted-foreground">
                        {" "}
                        All service requests must be made via WhatsApp, phone
                        call, or through our website contact form.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-foreground">
                        Right to Refuse:
                      </strong>
                      <span className="text-muted-foreground">
                        {" "}
                        We reserve the right to refuse service for items that
                        cannot be safely cleaned or that violate local
                        regulations.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Payment Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Payment & Pricing
                  </h2>
                </div>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-foreground">Pricing:</strong>
                      <span className="text-muted-foreground">
                        {" "}
                        Our standard rate starts at 12 SAR per kg. Final pricing
                        depends on the weight and type of items, as well as any
                        special services requested.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-foreground">
                        Payment Method:
                      </strong>
                      <span className="text-muted-foreground">
                        {" "}
                        Payment is due upon delivery unless otherwise agreed. We
                        accept cash and digital payment methods.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-foreground">
                        Free Pickup & Delivery:
                      </strong>
                      <span className="text-muted-foreground">
                        {" "}
                        Pickup and delivery services are provided free of charge
                        for orders meeting our minimum requirement.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-foreground">
                        Additional Charges:
                      </strong>
                      <span className="text-muted-foreground">
                        {" "}
                        Express services, special fabric care, and stain removal
                        may incur additional fees, which will be communicated
                        before processing.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Delivery Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Pickup & Delivery Terms
                  </h2>
                </div>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-foreground">Pickup Time:</strong>
                      <span className="text-muted-foreground">
                        {" "}
                        We guarantee pickup within 15 minutes in our priority
                        service zones. Actual times may vary based on traffic
                        and location.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-foreground">
                        Turnaround Time:
                      </strong>
                      <span className="text-muted-foreground">
                        {" "}
                        Standard service is completed within 12-24 hours.
                        Express services (1-5 hours) are available at additional
                        cost.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-foreground">
                        Delivery Scheduling:
                      </strong>
                      <span className="text-muted-foreground">
                        {" "}
                        We will coordinate delivery times with you via WhatsApp
                        or phone to ensure convenience.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-foreground">Delays:</strong>
                      <span className="text-muted-foreground">
                        {" "}
                        While we strive to meet all promised delivery times,
                        delays may occur due to unforeseen circumstances. We
                        will notify you immediately of any delays.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Liability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Liability & Responsibility
                  </h2>
                </div>
              </div>
              <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-8 rounded-2xl border border-border">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-foreground">
                        Care & Handling:
                      </strong>
                      <span className="text-muted-foreground">
                        {" "}
                        We take utmost care in cleaning your garments using
                        professional techniques and quality products. However,
                        some fabrics may have unpredictable reactions to
                        cleaning processes.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-foreground">
                        Lost or Damaged Items:
                      </strong>
                      <span className="text-muted-foreground">
                        {" "}
                        In the unlikely event of loss or damage, our liability
                        is limited to 10 times the cleaning charge or the item's
                        depreciated value, whichever is lower, unless a higher
                        value is declared and insured at time of service.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-foreground">
                        Items Left in Pockets:
                      </strong>
                      <span className="text-muted-foreground">
                        {" "}
                        We are not responsible for items left in pockets. Please
                        check all pockets before handing over items.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-foreground">Claim Period:</strong>
                      <span className="text-muted-foreground">
                        {" "}
                        Any claims for loss or damage must be made within 48
                        hours of delivery.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-foreground">
                        Unclaimed Items:
                      </strong>
                      <span className="text-muted-foreground">
                        {" "}
                        Items not claimed within 30 days of completion may be
                        donated to charity or disposed of. Storage fees may
                        apply after 14 days.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Customer Responsibility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Customer Responsibilities
                  </h2>
                </div>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-foreground">
                        Accurate Information:
                      </strong>
                      <span className="text-muted-foreground">
                        {" "}
                        You must provide accurate contact information, delivery
                        address, and any special care instructions for your
                        items.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-foreground">
                        Item Inspection:
                      </strong>
                      <span className="text-muted-foreground">
                        {" "}
                        Please inspect all items before handing them over and
                        inform us of any existing damage, stains, or special
                        requirements.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-foreground">
                        Prohibited Items:
                      </strong>
                      <span className="text-muted-foreground">
                        {" "}
                        Do not send items containing dangerous materials,
                        illegal substances, or items prohibited by Saudi Arabian
                        law.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-foreground">
                        Availability for Delivery:
                      </strong>
                      <span className="text-muted-foreground">
                        {" "}
                        You must be available at the specified delivery address
                        or arrange for someone to receive your items on your
                        behalf.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Changes to Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Changes to Terms
              </h2>
              <div className="bg-card p-8 rounded-2xl border border-border">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We reserve the right to update or modify these Terms and
                  Conditions at any time without prior notice. Changes will be
                  effective immediately upon posting to our website. Your
                  continued use of our services after any changes constitutes
                  acceptance of the new terms.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We encourage you to review these terms periodically to stay
                  informed of any updates.
                </p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Questions About These Terms?
              </h2>
              <div className="bg-gradient-to-r from-primary/10 to-primary/10 p-8 rounded-2xl border border-border">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about these Terms and Conditions,
                  please contact us:
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
                      {managerInfo.onlyNumber.whatsApp}
                    </a>
                  </p>
                  <p className="text-foreground">
                    <strong>Phone:</strong>{" "}
                    <a
                      href={`tel:+${managerInfo.onlyNumber.phoneNumber}`}
                      className="text-primary hover:underline"
                    >
                      {managerInfo.onlyNumber.whatsApp}
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TermsConditions;
