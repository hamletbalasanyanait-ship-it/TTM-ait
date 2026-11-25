import "./Hero.css";

export default function Hero() {
  return (
    <section className="biz-hero" id="top">
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
