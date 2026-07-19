import { MessageCircle, Phone, ArrowRight, Users, Clock, Truck, CheckCircle } from "lucide-react";
import { managerInfo } from "@/constants";
import WhatsAppIcon from "./icons/Whatsapp";
import { handleCall, handleWhatsApp } from "@/lib/utils";
import { whatsappMessages } from "@/constants/messages";
import ctaBackground from "@/assets/cta-background.webp";

export default function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background image + deep overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url("${ctaBackground}")` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/85 via-gray-900/90 to-gray-950/95" />

      {/* Glow blobs */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/12 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]" />

      <div className="relative container mx-auto px-4">
        {/* Top badge + Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-white/80">
              Available now — pickup in 20 min
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.05]">
            Your Clothes.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400">
              Our Problem.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-white/60 max-w-lg mx-auto leading-relaxed">
            We pick up, wash, press, and deliver — all in the same day.
            You just send a message.
          </p>
        </div>

        {/* Stats — Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mb-14">
          {/* Big stat */}
          <div className="col-span-2 row-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:bg-white/8 transition-all duration-500">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/15 rounded-full blur-[80px] group-hover:bg-emerald-500/25 transition-all duration-700" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/25 mb-6">
                <Users size={28} className="text-white" />
              </div>
              <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none mb-2">
                3,000+
              </div>
              <div className="text-base sm:text-lg text-white/50 font-medium">
                Happy customers across Makkah
              </div>
            </div>
            <div className="relative z-10 mt-8 flex items-center gap-2 text-emerald-400 text-sm font-semibold">
              <span className="w-8 h-px bg-emerald-400/50" />
              Rated 4.8 on Google
            </div>
          </div>

          {/* Small stat 1 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group hover:bg-white/8 transition-all duration-500">
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-amber-500/15 rounded-full blur-[60px] group-hover:bg-amber-500/25 transition-all duration-700" />
            <div className="relative z-10">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-md shadow-amber-500/20 mb-4">
                <Clock size={20} className="text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                20<span className="text-lg font-bold text-white/40 ml-1">min</span>
              </div>
              <div className="text-sm text-white/50">
                Average pickup time
              </div>
            </div>
          </div>

          {/* Small stat 2 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group hover:bg-white/8 transition-all duration-500">
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-sky-500/15 rounded-full blur-[60px] group-hover:bg-sky-500/25 transition-all duration-700" />
            <div className="relative z-10">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center shadow-md shadow-sky-500/20 mb-4">
                <Truck size={20} className="text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                Same<span className="text-lg font-bold text-white/40 ml-1">day</span>
              </div>
              <div className="text-sm text-white/50">
                Standard delivery
              </div>
            </div>
          </div>

          {/* Small stat 3 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group hover:bg-white/8 transition-all duration-500">
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-violet-500/15 rounded-full blur-[60px] group-hover:bg-violet-500/25 transition-all duration-700" />
            <div className="relative z-10">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center shadow-md shadow-violet-500/20 mb-4">
                <CheckCircle size={20} className="text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                0<span className="text-lg font-bold text-white/40 ml-1">SAR</span>
              </div>
              <div className="text-sm text-white/50">
                Pickup & delivery fee
              </div>
            </div>
          </div>

          {/* Small stat 4 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group hover:bg-white/8 transition-all duration-500">
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-rose-500/15 rounded-full blur-[60px] group-hover:bg-rose-500/25 transition-all duration-700" />
            <div className="relative z-10">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-md shadow-rose-500/20 mb-4">
                <MessageCircle size={20} className="text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                4<span className="text-lg font-bold text-white/40 ml-1">langs</span>
              </div>
              <div className="text-sm text-white/50">
                En, Ar, Ur, Hi support
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-12">
          <button
            id="generate_lead"
            onClick={() => handleWhatsApp(whatsappMessages.pickup, true)}
            className="flex-1 group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold text-lg py-5 px-6 rounded-2xl transition-all duration-300 shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/40 hover:-translate-y-0.5"
          >
            <WhatsAppIcon size={24} />
            <span className="text-left">
              <span className="block text-base">WhatsApp Pickup</span>
              <span className="text-xs font-normal text-white/70">Instant response</span>
            </span>
            <ArrowRight size={18} className="ml-auto opacity-50 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
          </button>
          <button
            onClick={handleCall}
            className="flex-1 group inline-flex items-center justify-center gap-3 bg-white/8 backdrop-blur-sm border border-white/12 hover:bg-white/12 text-white font-bold text-lg py-5 px-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <Phone size={22} />
            <span className="text-left">
              <span className="block text-base">Call Now</span>
              <span className="text-xs font-normal text-white/50">Talk to a person</span>
            </span>
            <ArrowRight size={18} className="ml-auto opacity-50 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
          </button>
        </div>

        {/* Contact Strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/40">
          <span className="flex items-center gap-2">
            <MessageCircle size={14} className="text-green-400/70" />
            {managerInfo.whatsApp}
          </span>
          <span className="hidden sm:block w-px h-4 bg-white/15" />
          <span className="flex items-center gap-2">
            <Phone size={14} className="text-white/40" />
            {managerInfo.phoneNumber}
          </span>
          <span className="hidden sm:block w-px h-4 bg-white/15" />
          <span className="flex items-center gap-2">
            <Clock size={14} className="text-white/40" />
            24/7 — Every day
          </span>
        </div>
      </div>
    </section>
  );
}
