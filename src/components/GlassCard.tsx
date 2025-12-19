import { type ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: "cyan" | "purple" | "blue";
  tiltEffect?: boolean;
}

const GlassCard = ({ 
  children, 
  className, 
  hoverEffect = true,
  glowColor = "cyan",
  tiltEffect = true
}: GlassCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const glowClasses = {
    cyan: "hover:shadow-[0_0_40px_hsl(185_100%_50%/0.25)]",
    purple: "hover:shadow-[0_0_40px_hsl(265_89%_60%/0.25)]",
    blue: "hover:shadow-[0_0_40px_hsl(220_100%_60%/0.25)]",
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !tiltEffect) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    const gx = (x / rect.width) * 100;
    const gy = (y / rect.height) * 100;
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(600px circle at ${gx}% ${gy}%, hsl(var(--primary) / 0.1), transparent 40%)`;
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "";
    }
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(600px circle at 50% 50%, hsl(var(--primary) / 0.08), transparent 40%)`;
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.1s ease-out", willChange: "transform" }}
      className={cn(
        "glass-card p-6 relative overflow-hidden",
        hoverEffect && [
          "transition-all duration-300",
          glowClasses[glowColor],
          "hover:border-primary/40",
        ],
        className
      )}
    >
      {/* Dynamic glow effect that follows cursor */}
      <div 
        ref={glowRef}
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at 50% 50%, hsl(var(--primary) / 0.08), transparent 40%)`,
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
