import { useState } from "react";
import { limitations, unsubscribe, generalTerms } from "./data/terms";
import { IconChevron } from "./Icons";
import "./Terms.css";

// One collapsible block of the «Պայմաններ» section.
function Panel({ title, open, onToggle, children }) {
  return (
    <div className={`sms-terms__item ${open ? "is-open" : ""}`}>
      <h3>
        <button type="button" className="sms-terms__head" onClick={onToggle}>
          <span>{title}</span>
          <IconChevron />
        </button>
      </h3>
      <div className="sms-terms__body">
        <div className="sms-terms__inner">{children}</div>
      </div>
    </div>
  );
}

export default function Terms() {
  const [open, setOpen] = useState({ limits: true, general: true });
  const toggle = (id) => setOpen((o) => ({ ...o, [id]: !o[id] }));

  return (
    <section className="sms-section sms-section--soft sms-terms" id="terms">
      <div className="sms-wrap">
        <h2 className="sms-title">Պայմաններ</h2>

        <div className="sms-terms__list">
          <div className="sms-terms__item">
            <h3>Ծառայության սահմանափակումներ</h3>
            <ul className="sms-terms__bullets">
              {limitations.map((text) => (
                <li key={text.slice(0, 24)}>{text}</li>
              ))}
            </ul>
            <ul className="sms-terms__ways">
              {unsubscribe.map((w) => (
                <li key={w.id}>
                  {w.before}
                  <a href={w.href}>{w.label}</a>
                  {w.after}
                </li>
              ))}
            </ul>
          </div>

          <div className="sms-terms__item">
            <h3>Ընդհանուր պայմաններ</h3>
            <ul className="sms-terms__bullets">
              {generalTerms.map((t) => (
                <li key={t.text.slice(0, 24)}>
                  {t.strong ? <strong>{t.text}</strong> : t.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
