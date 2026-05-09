import { useEffect, useRef, useState } from "react";

export const useScrollAnimation = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}

export const ScrollReveal = ({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const baseStyles: React.CSSProperties = {
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? "none"
      : direction === "up"
      ? "translateY(40px)"
      : direction === "left"
      ? "translateX(-40px)"
      : direction === "right"
      ? "translateX(40px)"
      : "scale(0.9)",
  };

  return (
    <div ref={ref} style={baseStyles} className={className}>
      {children}
    </div>
  );
};
