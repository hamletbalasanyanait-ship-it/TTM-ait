import useReveal from "./hooks/useReveal";
import "./Reveal.css";

// from: "up" (default) | "left" | "right"
export default function Reveal({ children, delay = 0, from = "up", className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`biz-reveal biz-reveal--${from} ${visible ? "biz-reveal--in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
