import Reveal from "../business/Reveal";
import { plan } from "./data/plan";
import { IconCheck } from "./Icons";
import "./Plans.css";

// smooth scroll to the join block instead of an instant jump
function goToJoin(e) {
  const el = document.getElementById("join");
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Plans() {
  return (
    <section className="sms-section sms-plans" id="packages" aria-labelledby="sms-plans-title">
      <div className="sms-wrap">
        <h2 className="sms-title" id="sms-plans-title">SMS-ինֆո փաթեթներ</h2>

        <div className="sms-plans__wrap">
          <Reveal>
            <article className="sms-plan">
              <header className="sms-plan__head">
                <h3>{plan.name}</h3>
                <p className="sms-plan__fee">
                  <strong>{plan.fee}</strong> {plan.feeUnit}
                </p>
              </header>

              <ul className="sms-plan__features">
                {plan.features.map((f) => (
                  <li key={f.label}>
                    <span className="sms-plan__check">
                      <IconCheck />
                    </span>
                    <span className="sms-plan__text">
                      <span className="sms-plan__value">
                        <strong>{f.value}</strong> {f.unit}
                      </span>
                      <span className="sms-plan__label">{f.label}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="sms-plan__cta">
                <a className="sms-btn" href="#join" onClick={goToJoin}>
                  Միանալ
                </a>
              </div>

              <p className="sms-plan__note">{plan.note}</p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
