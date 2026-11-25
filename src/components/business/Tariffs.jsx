import { useRef, useState } from "react";
import TariffCard from "./TariffCard";
import Reveal from "./Reveal";
import { tariffs } from "./data/tariffs";
import "./Tariffs.css";

export default function Tariffs() {
  const track = useRef(null);
  const [active, setActive] = useState(0);

  const goTo = (i) => {
    setActive(i);
    const card = track.current.children[i];
    track.current.scrollTo({ left: card.offsetLeft - 20, behavior: "smooth" });
  };

  return (
    <section className="biz-section biz-tariffs">
      <Reveal>
        <h2>Բջջային կապի սակագներ</h2>
      </Reveal>

      <div className="biz-tariffs__track" ref={track}>
        {tariffs.map((t) => (
          <TariffCard key={t.id} t={t} />
        ))}
      </div>

      <div className="biz-dots">
        {tariffs.map((t, i) => (
          <button
            key={t.id}
            type="button"
            className={i === active ? "on" : ""}
            onClick={() => goTo(i)}
            aria-label={`Սլայդ ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
