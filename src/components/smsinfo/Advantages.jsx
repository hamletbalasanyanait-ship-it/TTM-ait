import Reveal from "../business/Reveal";
import { advantages } from "./data/advantages";
import { advantageIcons } from "./Icons";
import "./Advantages.css";

export default function Advantages() {
  return (
    <section className="sms-section sms-adv" id="advantages">
      <div className="sms-wrap">
        <h2 className="sms-title">Ծառայության առավելությունները</h2>

        <ul className="sms-adv__grid">
          {advantages.map((item, i) => {
            const Icon = advantageIcons[item.id];
            return (
              <li key={item.id}>
                <Reveal delay={i * 90} className="sms-adv__reveal">
                  <article className="sms-adv__card">
                    <span className="sms-adv__icon">
                      <Icon />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
