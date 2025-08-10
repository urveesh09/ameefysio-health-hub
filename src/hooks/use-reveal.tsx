import { useEffect, useRef, useState, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: As = "div",
  ...rest
}: HTMLAttributes<HTMLDivElement> & { delay?: number; as?: any }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <As
      ref={ref}
      className={cn(
        "opacity-0 will-change-transform",
        visible && "opacity-100 animate-fade-in",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </As>
  );
}
