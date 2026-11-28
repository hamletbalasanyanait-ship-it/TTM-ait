import Reveal from "../business/Reveal";
import { plan } from "./data/plan";
import "./Plans.css";

export default function Plans() {
  return (
    <section className="sms-section sms-plans" id="packages">
      <div className="sms-wrap">
        <h2 className="sms-title">SMS-ինֆո փաթեթներ</h2>

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
                    <span className="sms-plan__value">
                      <strong>{f.value}</strong> {f.unit}
                    </span>
                    <span className="sms-plan__label">{f.label}</span>
                  </li>
                ))}
              </ul>

              <p className="sms-plan__note">{plan.note}</p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
