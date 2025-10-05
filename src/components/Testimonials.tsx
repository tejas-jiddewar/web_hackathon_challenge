import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    content: "The team delivered beyond our expectations. The attention to detail and innovative solutions transformed our digital presence completely.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateCo",
    content: "Outstanding work! They understood our vision perfectly and brought it to life with stunning design and flawless execution.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Founder, CreativeHub",
    content: "Professional, creative, and extremely talented. Our website traffic increased by 300% after the redesign. Highly recommended!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      {/* Floating quotes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/10 text-6xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            "
          </div>
        ))}
      </div>
      
      <div className="container px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear what our satisfied clients have to say
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative h-80">
          {testimonials.map((testimonial, index) => {
            const offset = index - currentIndex;
            const isActive = offset === 0;
            
            return (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
                style={{
                  transform: `translateX(${offset * 100}%) scale(${isActive ? 1 : 0.9})`,
                }}
              >
                <div className="h-full bg-card border border-border rounded-2xl p-8 md:p-12 card-glow flex flex-col justify-between">
                  <div className="space-y-6">
                    <Quote className="w-12 h-12 text-primary opacity-50" />
                    
                    <p className="text-lg md:text-xl leading-relaxed text-foreground">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-2xl font-bold text-primary-foreground">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-lg">{testimonial.name}</div>
                      <div className="text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? "bg-primary w-10" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
