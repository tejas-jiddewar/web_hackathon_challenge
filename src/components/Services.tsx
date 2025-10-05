import { useInView } from "@/hooks/useInView";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import service1 from "@/assets/service-1.png";
import service2 from "@/assets/service-2.png";
import service3 from "@/assets/service-3.png";

const services = [
  {
    title: "Cloud Solutions",
    description: "Scalable infrastructure and cloud-native applications for enterprise growth",
    image: service1,
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "AI Integration",
    description: "Cutting-edge artificial intelligence solutions to automate and optimize",
    image: service2,
    color: "from-purple-500/20 to-yellow-500/20",
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile experiences that users love",
    image: service3,
    color: "from-cyan-500/20 to-purple-500/20",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto perspective-1000">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative ${
                isInView ? "animate-slide-in" : "opacity-0"
              }`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                transformStyle: "preserve-3d",
              }}
            >
              <div 
                className="relative bg-card border border-border rounded-2xl p-8 overflow-hidden transition-all duration-500 hover-lift"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width - 0.5;
                  const y = (e.clientY - rect.top) / rect.height - 0.5;
                  e.currentTarget.style.transform = `
                    perspective(1000px)
                    rotateY(${x * 15}deg)
                    rotateX(${-y * 15}deg)
                    translateZ(20px)
                  `;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Animated border */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 border-2 border-primary rounded-2xl animate-pulse" />
                </div>

                {/* Content */}
                <div className="relative space-y-6">
                  {/* 3D Image */}
                  <div className="relative w-32 h-32 mx-auto perspective-1000">
                    <div 
                      className="w-full h-full transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-contain drop-shadow-2xl animate-float"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 text-center">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <Button 
                    variant="ghost" 
                    className="w-full group/btn hover:bg-primary/10 hover:text-primary"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Shine effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                    animation: "shine 3s ease-in-out infinite",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
