import useReveal from "./hooks/useReveal";

export default function Reveal({ children }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`biz-reveal ${visible ? "biz-reveal--in" : ""}`}>
      {children}
    </div>
  );
}
