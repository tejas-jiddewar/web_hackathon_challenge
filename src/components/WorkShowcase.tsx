import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Modern shopping experience with AI-powered recommendations",
    gradient: "from-purple-600 to-blue-600",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "Secure and intuitive financial management solution",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    title: "Healthcare Dashboard",
    category: "UI/UX Design",
    description: "Comprehensive patient management system",
    gradient: "from-cyan-600 to-teal-600",
  },
  {
    title: "Real Estate Portal",
    category: "Full Stack",
    description: "Property listing platform with virtual tours",
    gradient: "from-teal-600 to-green-600",
  },
];

const WorkShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="work" className="py-24 relative overflow-hidden">
      {/* 3D background elements */}
      <div className="absolute inset-0 perspective-1000">
        <div 
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-2xl animate-float"
          style={{ transformStyle: "preserve-3d", animationDuration: "12s" }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-accent/20 to-secondary-glow/20 rounded-lg blur-2xl animate-float"
          style={{ transformStyle: "preserve-3d", animationDuration: "15s", animationDelay: "3s" }}
        />
      </div>
      
      <div className="container px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-gradient">Latest Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing excellence through innovative projects
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel */}
          <div className="relative h-96 perspective-1000">
            {projects.map((project, index) => {
              const offset = index - currentIndex;
              const isActive = offset === 0;
              
              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ${
                    isActive ? "z-20" : "z-10"
                  }`}
                  style={{
                    transform: `
                      translateX(${offset * 100}%)
                      scale(${isActive ? 1 : 0.8})
                      rotateY(${offset * 15}deg)
                    `,
                    opacity: Math.abs(offset) > 1 ? 0 : 1 - Math.abs(offset) * 0.5,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className={`h-full rounded-2xl bg-gradient-to-br ${project.gradient} p-1 card-glow`}>
                    <div className="h-full rounded-xl bg-card p-8 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                          {project.category}
                        </div>
                        <h3 className="text-3xl font-bold">{project.title}</h3>
                        <p className="text-muted-foreground text-lg">
                          {project.description}
                        </p>
                      </div>
                      
                      <Button 
                        className="group w-fit bg-gradient-to-r from-primary to-primary-glow"
                        disabled={!isActive}
                      >
                        View Project
                        <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prev}
              variant="outline"
              size="icon"
              className="rounded-full border-primary/50 hover:border-primary hover:bg-primary/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-primary w-8" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={next}
              variant="outline"
              size="icon"
              className="rounded-full border-primary/50 hover:border-primary hover:bg-primary/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
