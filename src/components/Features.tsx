import { useInView } from "@/hooks/useInView";
import { Zap, Shield, Palette, Code, Globe, Sparkles } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance for blazing fast load times and smooth interactions",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime guarantee",
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description: "Pixel-perfect interfaces that captivate and convert users",
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Maintainable, scalable code following best practices",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Multi-language support and worldwide CDN distribution",
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Smart features powered by cutting-edge artificial intelligence",
  },
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section id="features" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        />
      </div>
      
      <div className="container px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to build exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-card border border-border rounded-lg p-6 hover-lift card-glow transition-all duration-500 ${
                isInView ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transformStyle: "preserve-3d"
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                e.currentTarget.style.transform = `
                  perspective(1000px)
                  rotateY(${x * 10}deg)
                  rotateX(${-y * 10}deg)
                  translateZ(10px)
                `;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              
              {/* Shine effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                  animation: "shine 2s ease-in-out infinite",
                }}
              />
              
              <div className="relative space-y-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
