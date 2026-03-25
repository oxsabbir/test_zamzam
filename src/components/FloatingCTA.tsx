import WhatsAppIcon from "./icons/Whatsapp";
import { whatsappMessages } from "@/constants/messages";
import { handleWhatsApp } from "@/lib/utils";

const FloatingCTA = () => {
  return (
    <div
      onClick={() => handleWhatsApp(whatsappMessages.pickup, true)}
      className="fixed z-50 bottom-4 right-4 md:bottom-10 md:right-10 w-[70px] h-[70px] bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:scale-105 hover:opacity-90 rounded-full flex items-center justify-center cursor-pointer  duration-200 shadow-xl shadow-blue-600/20"
    >
      <div className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
      <WhatsAppIcon size={35} className="text-white" />
    </div>
  );
};

export default FloatingCTA;
