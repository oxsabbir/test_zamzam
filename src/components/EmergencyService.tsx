import { Check, Clock, ShieldCheck, Zap } from "lucide-react";
import WhatsAppIcon from "./icons/Whatsapp";
import { handleWhatsApp } from "@/lib/utils";
import { whatsappMessages } from "@/constants/messages";

export default function EmergencyService() {
  return (
    <section className="relative py-12 sm:py-20 overflow-hidden bg-gradient-to-b from-white to-red-50/50">
      {/* Background Decorator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-100/30 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 border border-red-200 text-red-700 text-sm font-semibold mb-6 animate-fade-in">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              EXPRESS: Instant Laundry Assistance in Makkah!
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Require Immediate Laundry Support? <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-500">
                Our Priority Team is On Standby!
              </span>
            </h2>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Facing a laundry crisis? Our <strong>Rapid Response Unit</strong> is specialized in handling urgent requests with utmost efficiency and care.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4 text-red-600">
                <Zap size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Ultra-Fast Turnaround
              </h3>
              <p className="text-slate-600 text-sm">
                For those in a critical rush, we offer an expedited service that covers collection, washing, and return within a very tight window.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
                <Clock size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Around-the-Clock
              </h3>
              <p className="text-slate-600 text-sm">
                We never close. Our dedicated support lines are available 24/7 to manage your high-priority laundry needs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4 text-emerald-600">
                <ShieldCheck size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Superior Quality
              </h3>
              <p className="text-slate-600 text-sm">
                Speed doesn't compromise our standards. We ensure every garment is returned in pristine condition, smelling fresh and looking perfect.
              </p>
            </div>
          </div>

          {/* Checklist & CTA Split */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left Side: Checklist */}
              <div className="lg:col-span-3 p-8 sm:p-10">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Comprehensive Support For:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                  {[
                    "Unplanned departures",
                    "Special occasion attire",
                    "Professional business wear",
                    "Stubborn stain removal",
                    "Accidental spills",
                    "Crucial appointments",
                    "Emergency Ihram cleaning",
                    "Express steam pressing",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-slate-700 font-medium text-sm"
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: CTA Action Area */}
              <div className="lg:col-span-2 bg-slate-900 p-8 sm:p-10 flex flex-col justify-center text-center lg:text-left relative overflow-hidden">
                {/* Decorative circle */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>

                <h3 className="text-white text-xl font-bold mb-2 relative z-10">
                  Direct Express Line
                </h3>
                <p className="text-slate-400 text-sm mb-6 relative z-10">
                  Connect via WhatsApp for immediate collection and premium care.
                </p>

                <button
                  id="generate_lead_emergency"
                  onClick={() =>
                    handleWhatsApp(whatsappMessages.emergency, true)
                  }
                  className="relative z-10 w-full bg-red-600 hover:bg-red-500 text-white font-bold text-lg py-4 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-red-900/20 active:scale-[0.98] group flex items-center justify-center gap-3"
                >
                  <WhatsAppIcon
                    size={24}
                    className="text-white group-hover:scale-110 transition-transform"
                  />
                  <span>REQUEST PRIORITY PICKUP</span>
                </button>

                <p className="text-xs text-slate-500 mt-4 text-center">
                  *Express turnaround services may incur a premium fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
