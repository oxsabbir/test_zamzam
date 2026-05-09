import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { managerInfo } from "@/constants";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleWhatsApp = (message?: string, isBooking?: boolean) => {
  const defaultMessage = encodeURIComponent(
    "Greetings! I require professional laundry assistance in Makkah. Kindly provide the collection details."
  );

  // doing booking intent

  const number = Number(managerInfo.onlyNumber.whatsApp);

  if (isBooking) {
    sendBookingEvent(message || defaultMessage);
  }
  window.open(
    `https://wa.me/${number}?text=${message || defaultMessage}`,
    "_blank"
  );
};

export const handleCall = () => {
  const number = Number(managerInfo.onlyNumber.phoneNumber);
  window.open(`tel:+${number}`, "_blank");
};

export const sendBookingEvent = (message: string) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "generate_lead",
    lead_type: "whatsapp_booking",
    message: message,
  });
};
