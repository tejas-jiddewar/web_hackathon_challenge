import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Statistics from "@/components/Statistics";
import WorkShowcase from "@/components/WorkShowcase";
import Testimonials from "@/components/Testimonials";
import CustomerLogos from "@/components/CustomerLogos";
import FloatingObject from "@/components/FloatingObject";
import RippleEffect from "@/components/RippleEffect";

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
      <RippleEffect />
      <FloatingObject />
      
      <Hero />
      <CustomerLogos />
      <Features />
      <Statistics />
      <WorkShowcase />
      <Testimonials />
      
      {/* Footer */}
      <footer className="relative py-12 border-t border-border">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gradient">InnovateHub</h3>
              <p className="text-muted-foreground">
                Transforming ideas into exceptional digital experiences
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Connect With Us</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Dribbble</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <p>© 2025 InnovateHub. All rights reserved. Built with passion and precision.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
