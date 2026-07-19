import { MessageCircle, Truck, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import phone from "@/assets/phone.webp";
import delivery from "@/assets/delivery.webp";
import pickup from "@/assets/pickup.webp";
import { handleWhatsApp } from "@/lib/utils";
import { whatsappMessages } from "@/constants/messages";

const steps = [
  {
    number: "1",
    icon: MessageCircle,
    image: phone,
    accent: "from-emerald-400 to-teal-500",
    title: "WhatsApp Us",
    description:
      "Send your location and laundry details. We'll confirm pickup in under a minute.",
    time: "30 seconds",
  },
  {
    number: "2",
    icon: Truck,
    image: pickup,
    accent: "from-sky-400 to-blue-500",
    title: "We Pick Up & Clean",
    description:
      "A driver arrives at your door. Clothes are cleaned, pressed, and packed with care.",
    time: "20 min pickup",
  },
  {
    number: "3",
    icon: Sparkles,
    image: delivery,
    accent: "from-violet-400 to-purple-500",
    title: "Delivered Fresh",
    description:
      "Clean, pressed clothes back at your door — same day. Pay only when you receive them.",
    time: "Same day back",
  },
];

const HowItWorks = () => {
  const handleStart = () => {
    handleWhatsApp(whatsappMessages.firstOrder, true);
  };

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/15 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary">
              Simple as 1-2-3
            </span>
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground tracking-tight"
          >
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Message us on WhatsApp, we pick up your laundry, and deliver it back
            clean — all in the same day.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-14">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[calc(50%+40px)] w-[calc(100%-40px)] h-px border-t-2 border-dashed border-primary/20 z-0" />
                )}

                <div className="relative z-10 rounded-2xl sm:rounded-3xl border border-white/20 bg-white/50 backdrop-blur-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      width={350}
                      height={180}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Icon + title */}
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.accent} flex items-center justify-center shadow-md shrink-0`}
                      >
                        <Icon size={18} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>

                    <div className="flex items-center justify-center">
                      <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-primary to-primary/80 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-md shadow-primary/20">
                        <Icon size={14} className="text-white" />
                        {step.time}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Box — Glassmorphic */}
        <div className="relative max-w-3xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-600 to-gray-900" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTRWMjhIMjR2Mmgxem0tMS0ydjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />

          <div className="relative p-8 sm:p-12 text-center text-white">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mx-auto mb-6">
              <Sparkles size={30} className="text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              Try Us Risk-Free
            </h3>
            <p className="text-base sm:text-lg text-white/80 mb-8 max-w-lg mx-auto leading-relaxed">
              Not satisfied? We'll redo your laundry for free or refund every
              riyal. <span className="font-bold text-white">No questions, no hassle.</span>
            </p>
            <Button
              size="lg"
              id="generate_lead"
              onClick={handleStart}
              className="bg-success hover:bg-success/90 text-white font-bold text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-5 rounded-xl shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300"
            >
              Start Your First Order
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
