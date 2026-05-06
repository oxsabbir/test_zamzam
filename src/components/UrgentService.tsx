import { whatsappMessages } from "@/constants/messages";
import { handleWhatsApp } from "@/lib/utils";

export default function UrgentService() {
  const handleBooking = (hourDetails: string, service: string) => {
    const message = whatsappMessages.booking
      .replace("<bookingHour>", hourDetails)
      .replace("<bookingService>", service);
    handleWhatsApp(message, true);
  };
  return (
    <section
      className="py-8 sm:py-16 bg-muted/50"
      aria-labelledby="emergency-times-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        <header className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 mb-4 bg-primary text-white text-sm px-4 py-2 animate-pulse">
            ⚡ PREMIER SPEEDY CLEANING IN MECCA
          </div>
          <h2
            id="emergency-times-heading"
            className="text-2xl sm:text-4xl font-bold mb-4 text-foreground"
          >
            Need Fast Laundry in Mecca? We've Got You Covered!
          </h2>
          <p className="text-base sm:text-lg text-slate-700 max-w-3xl mx-auto">
            Providing ultra-fast express and same-day washing solutions designed to
            fit your busy lifestyle and offer total convenience.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <div className="rounded-lg text-card-foreground shadow-sm p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 border bg-primary/10  dark:bg-green-900/10 hover:opacity-90">
            <div className="text-5xl mb-4">⚡</div>
            <div className="text-3xl font-bold mb-2 text-foreground">
              60-Minute
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">
              Rapid Response
            </h3>
            <p className="text-sm text-slate-700 mb-4">For critical needs</p>
            <button
              id="generate_lead"
              onClick={() => handleBooking("1 Hour", "Emergency Service")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary/90 h-10 px-4 py-2 w-full"
            >
              Order Now
            </button>
          </div>
          <div className="rounded-lg text-card-foreground shadow-sm p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 border bg-primary/10  dark:bg-green-900/10 hover:opacity-90">
            <div className="text-5xl mb-4">🚀</div>
            <div className="text-3xl font-bold mb-2 text-foreground">
              24-Hour
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">
              Express Turnaround
            </h3>
            <p className="text-sm text-slate-700 mb-4">Ideal for tight schedules</p>
            <button
              id="generate_lead"
              onClick={() => handleBooking("24 Hour", "Express Service")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary/90 h-10 px-4 py-2 w-full"
            >
              Order Now
            </button>
          </div>
          <div className="rounded-lg text-card-foreground shadow-sm p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 border bg-primary/10  dark:bg-green-900/10 hover:opacity-90">
            <div className="text-5xl mb-4">✨</div>
            <div className="text-3xl font-bold mb-2 text-foreground">
              12-Hour
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">
              Priority Service
            </h3>
            <p className="text-sm text-slate-700 mb-4">Regular fast processing</p>
            <button
              id="generate_lead"
              onClick={() => handleBooking("12 Hour", "Same Day Service")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary/90 h-10 px-4 py-2 w-full"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
