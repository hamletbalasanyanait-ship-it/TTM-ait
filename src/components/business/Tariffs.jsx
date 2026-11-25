import TariffCard from "./TariffCard";
import Reveal from "./Reveal";
import { tariffs } from "./data/tariffs";
import "./Tariffs.css";

export default function Tariffs() {
  return (
    <section className="biz-section biz-tariffs">
      <Reveal>
        <h2>Բջջային կապի սակագներ</h2>
      </Reveal>

      <div className="biz-tariffs__track">
        {tariffs.map((t) => (
          <TariffCard key={t.id} t={t} />
        ))}
      </div>
    </section>
  );
}
