import { useState, useEffect } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

const RippleEffect = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 1000);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute w-4 h-4 -ml-2 -mt-2 rounded-full border-2 border-primary animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
        />
      ))}
    </div>
  );
};

export default RippleEffect;
