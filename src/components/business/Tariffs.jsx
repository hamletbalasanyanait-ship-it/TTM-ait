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

  // keep the active dot in sync while the user swipes
  const onScroll = () => {
    const el = track.current;
    const card = el.children[0];
    const step = card.offsetWidth + 16;
    const i = Math.min(tariffs.length - 1, Math.max(0, Math.round(el.scrollLeft / step)));
    if (i !== active) setActive(i);
  };

  return (
    <section className="biz-section biz-tariffs">
      <Reveal>
        <h2>Բջջային կապի սակագներ</h2>
      </Reveal>

      <div className="biz-tariffs__track" ref={track} onScroll={onScroll}>
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

      <div className="biz-more">
        <span />
        <a href="https://www.telecomarmenia.am/hy/b2b/" target="_blank" rel="noreferrer">
          Տեսնել ավելին
        </a>
      </div>
    </section>
  );
}
