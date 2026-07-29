import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  ChevronRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { siteInfo, managerInfo } from "@/constants";
import logo from "@/assets/logo-light.webp";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About Us", href: "#about" },
];

const servicesLinks = [
  { label: "Regular Laundry", href: "#pricing" },
  { label: "Dry Cleaning", href: "#services" },
  { label: "Ihram Care", href: "#pricing" },
  { label: "Ironing & Pressing", href: "#pricing" },
  { label: "Express Delivery", href: "#services" },
];

const socials = [
  { label: "Facebook", Icon: Facebook, href: "#" },
  { label: "Twitter", Icon: Twitter, href: "#" },
  { label: "Instagram", Icon: Instagram, href: "#" },
  { label: "WhatsApp", Icon: MessageCircle, href: "#" },
];

const contactItems = [
  { Icon: MapPin, text: managerInfo.address, href: managerInfo.mapsUrl },
  { Icon: Phone, text: managerInfo.phoneNumber },
  { Icon: Mail, text: managerInfo.email },
  { Icon: Clock, text: "Open 24/7, including holidays" },
];

function LinkColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="min-w-0">
      <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-foreground">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ChevronRight className="h-4 w-4 shrink-0 text-primary/50 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              <span className="min-w-0">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary/40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-12">
          {/* Brand */}
          <div className="min-w-0">
            <div className="flex min-w-0 items-center gap-3">
              <img
                src={logo}
                alt={siteInfo.siteTitle}
                className="w-[250px] h-auto ml-[-10px]"
              />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              We handle laundry so you don't have to. Fast pickup, careful
              cleaning, and on-time delivery — all booked through a quick
              WhatsApp message.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {socials.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <LinkColumn title="Quick Links" items={quickLinks} />
          <LinkColumn title="Our Services" items={servicesLinks} />

          {/* Contact */}
          <div className="min-w-0">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-foreground">
              Contact Us
            </h3>
            <ul className="mt-5 space-y-4">
              {contactItems.map(({ Icon, text, href }) => (
                <li key={text} className="flex min-w-0 items-start gap-3">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-w-0 break-words text-sm leading-relaxed text-muted-foreground transition-colors hover:text-primary"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="min-w-0 break-words text-sm leading-relaxed text-muted-foreground">
                      {text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-8 sm:mt-16 sm:flex-row sm:justify-between">
          <p className="text-center text-xs text-muted-foreground sm:text-left">
            © {currentYear} {siteInfo.siteTitle}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] font-bold uppercase tracking-[0.16em]">
            <Link
              to="/"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
