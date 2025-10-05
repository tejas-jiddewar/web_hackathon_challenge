import { useInView } from "@/hooks/useInView";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 5000, suffix: "+", label: "Happy Clients", duration: 2000 },
  { value: 99, suffix: "%", label: "Success Rate", duration: 2500 },
  { value: 250, suffix: "K+", label: "Lines of Code", duration: 2000 },
  { value: 24, suffix: "/7", label: "Support Available", duration: 1500 },
];

const AnimatedCounter = ({ 
  value, 
  duration, 
  isInView 
}: { 
  value: number; 
  duration: number; 
  isInView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration, isInView]);

  return <span>{count}</span>;
};

const Statistics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-primary/20 rounded-full animate-ping"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              animationDuration: `${3 + i}s`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Proven <span className="text-gradient">Track Record</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Numbers that speak for our excellence and commitment
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center space-y-3 p-8 rounded-lg bg-card border border-border card-glow hover-lift ${
                isInView ? "animate-slide-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-5xl md:text-6xl font-bold text-gradient">
                <AnimatedCounter 
                  value={stat.value} 
                  duration={stat.duration}
                  isInView={isInView}
                />
                {stat.suffix}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Graph visualization */}
        <div className="mt-16 p-8 rounded-lg bg-card border border-border card-glow">
          <h3 className="text-2xl font-bold mb-8 text-center">Growth Trajectory</h3>
          <div className="flex items-end justify-around gap-4 h-64">
            {[40, 65, 52, 78, 85, 95, 100].map((height, index) => (
              <div 
                key={index} 
                className="flex-1 group relative"
              >
                <div 
                  className={`bg-gradient-to-t from-primary to-primary-glow rounded-t-lg transition-all duration-1000 hover:from-accent hover:to-accent ${
                    isInView ? "" : "h-0"
                  }`}
                  style={{ 
                    height: isInView ? `${height}%` : "0%",
                    transitionDelay: `${index * 0.1}s`
                  }}
                />
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-popover text-popover-foreground px-2 py-1 rounded text-sm whitespace-nowrap">
                  {height}%
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-sm text-muted-foreground">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <span key={day} className="flex-1 text-center">{day}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
