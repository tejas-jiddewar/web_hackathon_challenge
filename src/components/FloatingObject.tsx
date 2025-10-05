import { useEffect, useState } from "react";
import object3d from "@/assets/3d-object.png";

const FloatingObject = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed top-1/2 right-10 -translate-y-1/2 pointer-events-none z-0 hidden lg:block opacity-30">
      <div 
        className="w-64 h-64 animate-float perspective-1000"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        <img 
          src={object3d} 
          alt="3D Object" 
          className="w-full h-full object-contain drop-shadow-2xl"
          style={{ filter: "drop-shadow(0 0 40px rgba(138, 67, 229, 0.6))" }}
        />
      </div>
    </div>
  );
};

export default FloatingObject;
