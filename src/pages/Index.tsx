import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Statistics from "@/components/Statistics";
import WorkShowcase from "@/components/WorkShowcase";
import Testimonials from "@/components/Testimonials";
import CustomerLogos from "@/components/CustomerLogos";
import CallToAction from "@/components/CallToAction";
import FloatingObject from "@/components/FloatingObject";
import RippleEffect from "@/components/RippleEffect";
import ParticleField from "@/components/ParticleField";
import ScrollProgress from "@/components/ScrollProgress";
import SectionTransition from "@/components/SectionTransition";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling during loading
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      <ParticleField />
      <RippleEffect />
      <FloatingObject />
      <Navigation />
      <BackToTop />
      
      <Hero />
      
      <SectionTransition>
        <CustomerLogos />
      </SectionTransition>
      
      <SectionTransition>
        <Features />
      </SectionTransition>
      
      <SectionTransition>
        <Services />
      </SectionTransition>
      
      <SectionTransition>
        <Statistics />
      </SectionTransition>
      
      <SectionTransition>
        <WorkShowcase />
      </SectionTransition>
      
      <SectionTransition>
        <Testimonials />
      </SectionTransition>
      
      <SectionTransition>
        <CallToAction />
      </SectionTransition>
      
      {/* Footer */}
      <footer className="relative py-16 border-t border-border overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-background" />
        
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
              style={{
                left: `${20 + i * 20}%`,
                bottom: `${Math.random() * 50}%`,
                animationDuration: `${8 + i * 2}s`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
        
        <div className="container px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4 animate-slide-in">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-primary-foreground rounded animate-spin-slow" />
                </div>
                <h3 className="text-2xl font-bold text-gradient">InnovateHub</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Transforming ideas into exceptional digital experiences with cutting-edge technology and creative excellence.
              </p>
              {/* Social links with hover effects */}
              <div className="flex gap-4 pt-4">
                {["LinkedIn", "Twitter", "GitHub", "Dribbble"].map((social, i) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-glow animate-scale-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {social.charAt(0)}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="space-y-4 animate-slide-in" style={{ animationDelay: "0.1s" }}>
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <ul className="space-y-3 text-muted-foreground">
                {["About Us", "Services", "Portfolio", "Careers", "Blog", "Contact"].map((link, i) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="group flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      <div className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4 animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <h4 className="font-semibold text-lg">Newsletter</h4>
              <p className="text-muted-foreground text-sm">
                Stay updated with our latest news and exclusive offers
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <Button 
                  size="icon"
                  className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow"
                >
                  →
                </Button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
              <p className="animate-slide-in">
                © 2025 InnovateHub. All rights reserved. Built with passion and precision.
              </p>
              <div className="flex gap-6 animate-slide-in" style={{ animationDelay: "0.1s" }}>
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
