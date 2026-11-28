import Reveal from "../business/Reveal";
import { steps } from "./data/steps";
import "./Steps.css";

export default function Steps() {
  return (
    <section className="sms-section sms-section--soft sms-steps" id="steps">
      <div className="sms-wrap">
        <h2 className="sms-title">Ակտիվացման քայլեր</h2>

        <ol className="sms-steps__grid">
          {steps.map((step, i) => (
            <li key={step.id}>
              <Reveal delay={i * 110} from={i % 2 ? "right" : "left"} className="sms-steps__reveal">
                <article className="sms-step">
                  <span className="sms-step__num">{step.id}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
