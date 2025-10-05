import { useInView } from "@/hooks/useInView";
import { useRef } from "react";

const customers = [
  "TechCorp", "InnovateLabs", "DesignHub", "DataFlow", 
  "CloudNine", "DigitalWave", "NextGen", "Quantum"
];

const CustomerLogos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="py-16 relative overflow-hidden" ref={ref}>
      <div className="container px-4">
        <p className="text-center text-muted-foreground mb-12 text-sm uppercase tracking-wider">
          Trusted by Industry Leaders
        </p>

        <div className="relative">
          <div className="flex gap-12 animate-marquee">
            {[...customers, ...customers].map((customer, index) => (
              <div
                key={index}
                className={`flex-shrink-0 px-8 py-6 bg-card border border-border rounded-lg hover-lift transition-all ${
                  isInView ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${(index % customers.length) * 0.1}s` }}
              >
                <div className="text-2xl font-bold text-gradient whitespace-nowrap">
                  {customer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default CustomerLogos;
