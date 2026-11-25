import "./Hero.css";

const bubbles = [
  { label: "ՀՀ", cls: "biz-bubble--1" },
  { label: "ՌՈՒՍԱՍՏԱՆ", cls: "biz-bubble--2" },
  { label: "ԱՄՆ ԿԱՆԱԴԱ", cls: "biz-bubble--3" },
  { label: "ՉԻՆԱՍՏԱՆ", cls: "biz-bubble--4" },
];

export default function Hero() {
  return (
    <section className="biz-hero" id="top">
      {bubbles.map((b) => (
        <div key={b.cls} className={`biz-bubble ${b.cls}`}>
          {b.label}
        </div>
      ))}

      <div className="biz-hero__text">
        <h1>Բիզնես</h1>
        <ul>
          <li>ԱՄՆ, Կանադա, Չինաստան զանգեր</li>
          <li>ՀՀ բոլոր զանգեր</li>
          <li>Ռուսաստանյան Beeline զանգ</li>
        </ul>
        <button type="button" className="biz-btn biz-btn--white">
          Մանրամասն
        </button>
      </div>
    </section>
  );
}
