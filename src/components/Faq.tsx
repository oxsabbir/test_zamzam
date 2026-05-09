import { handleCall, handleWhatsApp } from "@/lib/utils";
import WhatsAppIcon from "./icons/Whatsapp";
import { whatsappMessages } from "@/constants/messages";

const faqData = [
  {
    question: "How do I schedule a pickup?",
    answer:
      "You can easily book via our website, call us directly, or send a message on WhatsApp. We provide prompt collection services throughout all districts of Makkah.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "We are open 24/7, every day of the year. Our team is always ready to assist, especially during the busy Hajj and Umrah seasons.",
  },
  {
    question: "How much do you charge?",
    answer:
      "Our rates are transparent and competitive, starting at 18 SAR per kg for standard washing. We also offer specific pricing for items like abayas and thobes.",
  },
  {
    question: "What is your turnaround time?",
    answer:
      "Most orders are delivered within 24 hours. For those who need it sooner, our express service can have your clothes ready in as little as 1 to 3 hours.",
  },
  {
    question: "Do you clean delicate items like Ihram?",
    answer:
      "Absolutely. We are experts in handling traditional and delicate fabrics, ensuring your Ihram, thobes, and abayas are returned in pristine condition.",
  },
  {
    question: "Which areas in Makkah do you serve?",
    answer:
      "We provide free collection and delivery to every hotel, residence, and neighborhood across Makkah, ensuring convenience wherever you stay.",
  },
  {
    question: "Is there a minimum order size?",
    answer:
      "There is no minimum weight requirement. Whether you have just a few pieces or a large family load, we are happy to provide our services.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash on delivery as well as all major credit and debit cards. You only settle the payment once your clean laundry is delivered back to you.",
  },
];

export default function Faq() {
  return (
    <section className="py-8 sm:py-16 bg-muted">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-foreground">
            Common Questions & Answers
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about our premium laundry services for visitors and locals in Makkah.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg bg-card text-card-foreground shadow-md p-4 sm:p-6 hover:shadow-lg transition-all border border-primary/10 transform hover:-translate-y-1"
              >
                <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                  {faq.question}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm mt-8 sm:mt-12 bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/30">
            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground">
                💬 Still Have Questions?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                We speak your language. Our support team is available 24/7 in English, Arabic, and Urdu to assist you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => handleWhatsApp(whatsappMessages.faq)}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all h-10 px-4 py-2 w-full"
                >
                  <WhatsAppIcon />
                  Message Us on WhatsApp
                </button>
                <button
                  onClick={handleCall}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone w-4 h-4 mr-2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Give Us a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
