import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import WhatsAppIcon from "@/components/icons/Whatsapp";
import { managerInfo, siteInfo } from "@/constants";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              We're available 24/7 to handle your laundry needs in Makkah.
              Contact us via any of the channels below for fast pickup.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground">{managerInfo.phoneNumber}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">{managerInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground">{managerInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Service Hours</h3>
                  <p className="text-muted-foreground">Open 24 Hours, 7 Days a Week</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-primary/5 rounded-3xl border border-primary/10">
              <div className="flex items-center gap-4 mb-4">
                <MessageCircle className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold">Fastest Response</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                For the quickest service, message us on WhatsApp. We typically respond within seconds.
              </p>
              <a
                href={`https://wa.me/${managerInfo.onlyNumber.whatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all"
              >
                <WhatsAppIcon size={20} />
                Message on WhatsApp
              </a>
            </div>
          </div>

            <div className="relative h-[600px] rounded-3xl overflow-hidden border border-border shadow-2xl">
            <iframe
              src={siteInfo.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${siteInfo.shortName} Laundry Location`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
