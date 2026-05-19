import { Phone, Clock, ChevronRight, Truck, UserCheck, ShieldCheck } from "lucide-react";
import WhatsAppIcon from "./icons/Whatsapp";
import { managerInfo } from "@/constants";
import { handleWhatsApp } from "@/lib/utils";
import { whatsappMessages } from "@/constants/messages";

const PickupManager = () => {
  return (
    <section id="pickup" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-[3rem] border border-border/50 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] overflow-hidden">
            <div className="grid lg:grid-cols-12 min-h-[600px]">
              {/* Left Side: The "Identity" Side */}
              <div className="lg:col-span-5 bg-[#0F172A] p-10 lg:p-14 text-white flex flex-col justify-between relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-transparent to-transparent"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-10">
                    <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">Premium Concierge</span>
                  </div>

                  <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 leading-tight tracking-tight">
                    Personalized <br />
                    <span className="text-primary-400">Garment Care</span>
                  </h2>

                  <div className="space-y-8 mb-12">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-primary-500 to-primary-400 flex items-center justify-center shadow-lg shadow-primary-500/20">
                        <UserCheck className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <p className="text-primary-300/60 text-xs font-bold uppercase tracking-wider mb-1">General Manager</p>
                        <h3 className="text-xl font-bold tracking-tight">{managerInfo.fullName}</h3>
                        <p className="text-white/40 text-sm italic">Direct accountability for every order</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                      <div className="flex items-start gap-4 group cursor-pointer" onClick={() => handleWhatsApp(whatsappMessages.pickup, true)}>
                        <div className="bg-white/5 p-3 rounded-xl group-hover:bg-primary-500/20 group-hover:scale-110 transition-all duration-300 border border-white/5">
                          <WhatsAppIcon size={24} className="text-primary-400" />
                        </div>
                        <div>
                          <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-0.5">Priority WhatsApp</p>
                          <p className="text-lg font-semibold group-hover:text-primary-400 transition-colors">{managerInfo.whatsApp}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 group cursor-pointer" onClick={() => window.open(`tel:${managerInfo.onlyNumber.phoneNumber}`)}>
                        <div className="bg-white/5 p-3 rounded-xl group-hover:bg-primary-500/20 group-hover:scale-110 transition-all duration-300 border border-white/5">
                          <Phone size={24} className="text-primary-400" />
                        </div>
                        <div>
                          <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-0.5">Direct Helpline</p>
                          <p className="text-lg font-semibold group-hover:text-primary-400 transition-colors">{managerInfo.phoneNumber}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 pt-8 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0F172A] bg-slate-800 flex items-center justify-center overflow-hidden">
                           <UserCheck size={14} className="text-slate-500" />
                        </div>
                      ))}
                    </div>
                    <p className="text-sm font-medium text-white/60">
                      <span className="text-white font-bold">12k+</span> Successful Collections
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side: The "Value" Side */}
              <div className="lg:col-span-7 p-10 lg:p-16 flex flex-col justify-center bg-background">
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Elite Logistical Standards</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our operational framework is engineered for pilgrims who demand both speed and excellence. Under the direct supervision of our management team, we guarantee a frictionless door-to-door experience.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-10 mb-14">
                  <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors group">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/20 group-hover:bg-primary transition-colors"></div>
                    <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                       <Clock className="w-5 h-5 text-primary" /> Rapid Response
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We aim to coordinate a collection at your location within <span className="text-foreground font-bold">15-30 minutes</span> of your inquiry.
                    </p>
                  </div>

                  <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors group">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/20 group-hover:bg-primary transition-colors"></div>
                    <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                       <Truck className="w-5 h-5 text-primary" /> Integrated Logistics
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Complimentary collection and delivery are standard. Zero hidden fees for our premium logistical support.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <button 
                    onClick={() => handleWhatsApp(whatsappMessages.pickup, true)}
                    className="group relative w-full bg-primary text-white text-lg font-bold py-6 px-8 rounded-2xl shadow-[0_20px_40px_-10px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_25px_50px_-12px_rgba(var(--primary-rgb),0.4)] transition-all active:scale-[0.98] flex items-center justify-center gap-3 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <WhatsAppIcon size={24} />
                    <span>Request Priority Collection</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                    <div className="flex items-center gap-2 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                      Hygienic Verified
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                      24/7 Priority
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                      Insured Service
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickupManager;
