import { useEffect } from "react";
import { Hero, ServiceGrid } from "../components/entertainment";
import { pageMeta } from "../components/entertainment/data/services";
import "../components/entertainment/entertainment.css";

// /entertainment - listing of all entertainment services.
// Header and Footer are rendered globally in App.jsx.
export default function Entertainment() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const previous = document.title;
    document.title = pageMeta.documentTitle;
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="ent">
      <Hero title={pageMeta.title} showIcon />
      <ServiceGrid />
    </div>
  );
}
