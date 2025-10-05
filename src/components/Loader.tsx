import { useEffect, useState } from "react";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center space-y-8">
        <div className="perspective-1000">
          <div className="w-24 h-24 mx-auto relative animate-float">
            <div className="absolute inset-0 border-4 border-primary rounded-lg animate-spin-slow"
                 style={{ transformStyle: "preserve-3d", transform: "rotateX(45deg) rotateY(45deg)" }}
            />
            <div className="absolute inset-2 border-4 border-accent rounded-lg animate-spin-slow"
                 style={{ 
                   transformStyle: "preserve-3d", 
                   transform: "rotateX(-45deg) rotateY(-45deg)",
                   animationDirection: "reverse",
                   animationDuration: "15s"
                 }}
            />
          </div>
        </div>
        
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gradient">Loading Experience</h2>
          <div className="w-64 h-2 bg-secondary rounded-full overflow-hidden mx-auto">
            <div 
              className="h-full bg-gradient-to-r from-primary via-primary-glow to-accent transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-muted-foreground text-sm">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
