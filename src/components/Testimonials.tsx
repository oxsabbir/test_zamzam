import { Star } from "lucide-react";

const testimonials = [
  {
    text:
      "Booked on WhatsApp at midnight and they picked up my clothes within 20 minutes. Delivered fresh by morning. Saved my Umrah trip!",
    author: "Tariq Hasan",
    location: "Pilgrim from Pakistan",
  },
  {
    text:
      "I use them every week for my hotel staff uniforms. Consistent quality, always on time, and the prices can't be beat.",
    author: "Nadia Karim",
    location: "Hotel Supervisor, Ajyad Area",
  },
  {
    text:
      "My abaya had a tough coffee stain. I thought it was done for, but they got it out completely. Really impressed.",
    author: "Reem Al-Qahtani",
    location: "Makkah Resident",
  },
  {
    text:
      "We're a family of six and laundry was eating our budget. Their per-kg pricing made a huge difference. Reliable service every time.",
    author: "Omar Siddiqui",
    location: "Expatriate, Aziziyah",
  },
  {
    text:
      "Needed an emergency iron for my thobe before Friday prayer. They had it ready in one hour. Lifesavers!",
    author: "Khalid Al-Mutairi",
    location: "Makkah Resident",
  },
  {
    text:
      "I manage a small guesthouse and send all guest laundry to Zamzam Laundry Nasir. Fast turnaround and my guests are always happy.",
    author: "Fatima Noor",
    location: "Guesthouse Owner, Misfalah",
  },
  {
    text:
      "Tried them during Ramadan when everything was chaotic. They still picked up and delivered on time. Very professional team.",
    author: "Asif Rahman",
    location: "Pilgrim from Bangladesh",
  },
  {
    text:
      "Affordable, quick, and the clothes come back smelling great. I've推荐 them to everyone in my building.",
    author: "Hassan Al-Faqih",
    location: "Makkah Resident",
  },
  {
    text:
      "They handled 20 ihram sets for our group without a single mix-up. Perfect for large orders.",
    author: "Ibrahim Yusuf",
    location: "Group Leader, Jabal Omar",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-foreground tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from pilgrims, residents, and hotels who trust us
            with their laundry every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-3xl border border-border/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground">
                  {testimonial.author}
                </h4>
                <p className="text-sm text-primary">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
