import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface GlitchTextProps {
  children: string;
  className?: string;
  intensity?: "low" | "medium" | "high";
}

export function GlitchText({ children, className = "", intensity = "medium" }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, intensity === "high" ? 2000 : intensity === "medium" ? 4000 : 8000);

    return () => clearInterval(glitchInterval);
  }, [intensity]);

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      animate={isGlitching ? {
        x: [0, -2, 2, -2, 0],
        y: [0, 2, -2, 2, 0],
      } : {}}
      transition={{ duration: 0.2 }}
    >
      <span className="relative z-10">{children}</span>
      {isGlitching && (
        <>
          <span 
            className="absolute top-0 left-0 text-red-500 opacity-70 z-0"
            style={{ transform: "translate(-2px, -1px)" }}
          >
            {children}
          </span>
          <span 
            className="absolute top-0 left-0 text-blue-500 opacity-70 z-0"
            style={{ transform: "translate(2px, 1px)" }}
          >
            {children}
          </span>
        </>
      )}
    </motion.div>
  );
}
