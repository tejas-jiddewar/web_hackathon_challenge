import { useInView } from "@/hooks/useInView";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 2px, transparent 2px),
              linear-gradient(90deg, hsl(var(--primary)) 2px, transparent 2px)
            `,
            backgroundSize: "60px 60px",
            animation: "grid-move 30s linear infinite",
          }}
        />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container px-4 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center space-y-8 ${
            isInView ? "animate-scale-in" : "opacity-0"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Main CTA card */}
          <div 
            className="relative bg-card/50 backdrop-blur-xl border-2 border-primary/30 rounded-3xl p-12 card-glow overflow-hidden transition-all duration-300"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 0.3}deg) rotateY(${mousePosition.x * 0.3}deg)`,
            }}
          >
            {/* Animated gradient overlay */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                transition: "transform 0.3s ease-out",
              }}
            />

            {/* Sparkle effects */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <Sparkles
                  key={i}
                  className="absolute text-accent/30 animate-glow"
                  style={{
                    left: `${(i * 12.5)}%`,
                    top: `${Math.sin(i) * 50 + 50}%`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary font-medium text-sm animate-pulse">
                Limited Time Offer
              </div>

              <h2 className="text-4xl md:text-6xl font-bold">
                Ready to{" "}
                <span className="text-gradient">Transform</span>
                <br />
                Your Digital Presence?
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have elevated their business with our innovative solutions
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-primary via-primary-glow to-accent hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="group border-primary/50 hover:border-primary hover:bg-primary/10"
                >
                  Schedule a Call
                </Button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Money-Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
