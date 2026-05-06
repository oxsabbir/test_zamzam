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
              Urgent: Fastest Critical Cleaning in Mecca!
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Need Emergency Laundry in Mecca? <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-500">
                We're on Our Way!
              </span>
            </h2>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Caught in a laundry pinch? From unexpected spills to last-second events, our <strong>Fast-Action Team</strong> provides rapid, top-tier care.
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
                60-Min Rush Wash
              </h3>
              <p className="text-slate-600 text-sm">
                Unmatched speed for your urgent needs. Your items are cleaned, steamed, and back in just one hour.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
                <Clock size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Round-the-Clock Support
              </h3>
              <p className="text-slate-600 text-sm">
                Morning or night, weekdays or holidays, our priority lines stay open. We work around your busy schedule.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4 text-emerald-600">
                <ShieldCheck size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Satisfaction Guarantee
              </h3>
              <p className="text-slate-600 text-sm">
                We promise thorough attention and great results. If you aren't pleased, we'll fix it for free.
              </p>
            </div>
          </div>

          {/* Checklist & CTA Split */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left Side: Checklist */}
              <div className="lg:col-span-3 p-8 sm:p-10">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  We Resolve Every Crisis:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                  {[
                    "Urgent travel needs",
                    "Special occasion clothes",
                    "Executive business attire",
                    "Difficult stain removal",
                    "Clothing emergencies",
                    "Last-second meeting prep",
                    "Sudden fabric accidents",
                    "Express steaming/ironing",
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
                  Laundry Trouble? Get in Touch!
                </h3>
                <p className="text-slate-400 text-sm mb-6 relative z-10">
                  Click the button to reach our priority support team for instant help.
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
                  <span>REQUEST PRIORITY SERVICE</span>
                </button>

                <p className="text-xs text-slate-500 mt-4 text-center">
                  *Express fees apply for one-hour turnaround.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}