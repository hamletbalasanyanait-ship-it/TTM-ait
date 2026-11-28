import { useState } from "react";
import "./bonus.css";

import heroImg from "../assets/bonus/hero.png";
import aboutImg from "../assets/bonus/about.png";
import step1 from "../assets/bonus/step1.jpg";
import step2 from "../assets/bonus/step2.jpg";
import step3 from "../assets/bonus/step3.jpg";
import roamingImg from "../assets/bonus/roaming.png";
import mobiImg from "../assets/bonus/mobibattle.png";

const steps = [
  {
    img: step1,
    title: "Ինչպե՞ս դառնալ մասնակից",
    text: "Ծրագրին կարող եք միանալ ներբեռնելով «My Team» հավելվածը և այցելելով Բոնուս բաժինը կամ գրանցվելով «Անձնական գրասենյակում»: Ծրագրին կարող եք նաև միանալ հավաքելով *555#:",
  },
  {
    img: step2,
    title: "Ինչպե՞ս կուտակել միավորներ",
    text: "Team Բոնուս ծրագրից օգտվելու համար պարզապես պետք է լինել Team բաժանորդ, օգտվել ծառայություններից և կուտակել միավորներ:",
  },
  {
    img: step3,
    title: "Ինչպե՞ս օգտագործել միավորները",
    text: "Կուտակած միավորները կարող եք փոխանակել րոպեների, ԳԲ/ՄԲ-ների, SMS-ների, ձայնային փաթեթների և հատուկ առաջարկների հետ:",
  },
];

const benefits = [
  { icon: "📱", label: "Րոպեներ" },
  { icon: "📶", label: "Ինտերնետ" },
  { icon: "🔢", label: "Գեղեցիկ համարներ" },
  { icon: "％", label: "Պրոմոկոդեր" },
];

const faq = [
  { q: "Ո՞վ կարող է օգտվել MobiBattle պրոմոկոդերից:", a: "Պատասխանը ավելացրեք այստեղ:" },
  { q: "Որտե՞ղ կարող եմ ծանոթանալ Հաճախ Տրվող Հարցերին:", a: "Պատասխանը ավելացրեք այստեղ:" },
];

function Faq({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-q" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className={`faq-arrow ${open ? "open" : ""}`}>▾</span>
      </button>
      {open && <p className="faq-a">{a}</p>}
    </div>
  );
}

export default function Bonus() {
  return (
    <main className="bonus">
      {/* HERO */}
      <section className="b-hero">
        <div className="b-container b-hero-inner">
          <div className="b-hero-card">
            <h1>«Team Բոնուս»</h1>
            <p>Միացիր և կուտակիր միավորներ</p>
            <a href="#about" className="b-btn">Ավելին</a>
          </div>
          <img src={heroImg} alt="Team Bonus" className="b-hero-img" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="b-about" id="about">
        <div className="b-container b-two-col">
          <img src={aboutImg} alt="" />
          <div>
            <h2>Ի՞նչ է «Team Բոնուս»-ը</h2>
            <p>
              «Team Բոնուս»-ը խրախուսական ծրագիր է, որը հնարավորություն է տալիս
              կուտակել բոնուսային միավորներ կատարված ծախսերի դիմաց և փոխանակել
              մի շարք ծառայություններով:
            </p>
          </div>
        </div>
      </section>

      {/* HOW TO JOIN */}
      <section className="b-how">
        <h2>Ինչպե՞ս միանալ</h2>
        <div className="b-timeline">
          {[1, 2, 3].map((n) => (
            <div className="b-dot" key={n}>
              <span>{n}</span>
              <i />
            </div>
          ))}
        </div>
        <div className="b-container b-cards">
          {steps.map((s) => (
            <article key={s.title}>
              <img src={s.img} alt="" />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* WHAT CAN I GET */}
      <section className="b-get">
        <h2>Ի՞նչ կարող եմ ստանալ կուտակած միավորների փոխարեն</h2>
        <div className="b-container b-icons">
          {benefits.map((b) => (
            <div className="b-icon" key={b.label}>
              <span className="b-icon-sym">{b.icon}</span>
              <p>{b.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROAMING */}
      <section className="b-roaming">
        <div className="b-container b-two-col">
          <img src={roamingImg} alt="" />
          <div>
            <h2>Ռոումինգ փաթեթ Team Բոնուսում</h2>
            <p>
              Կուտակե՛ք բոնուսային միավորներ և դարձրե՛ք ձեր ճամփորդությունները
              առավել հեշտ Team Բոնուսի հետ: Բաց մի թողեք հնարավորությունը՝ ձեռք
              բերելու Ռոումինգ փաթեթ 1ԳԲ+ 12000 միավորի և 100 դրամի:
            </p>
            <a href="#" className="b-btn">Ավելին</a>
          </div>
        </div>
      </section>

      {/* MOBIBATTLE */}
      <section className="b-mobi">
        <div className="b-container b-two-col">
          <div>
            <h2>MobiBattle պրոմոկոդեր:</h2>
            <p>
              Գործընկերների առաջարկներ բաժնում ակտիվացրե՛ք MobiBattle-ի 7 օրյա
              անվճար բաժանորդագրության պրոմոկոդը 1000 Team Բոնուս միավորի դիմաց:
              Այցելե՛ք MobiBattle խաղային պորտալը: Ակտիվացրե՛ք և ստացե՛ք 7-օրյա
              անվճար բաժանորդագրություն:
            </p>
            <a href="#" className="b-btn">Ավելին</a>
          </div>
          <img src={mobiImg} alt="MobiBattle" />
        </div>
      </section>

      {/* FAQ */}
      <section className="b-faq">
        <h3>Օգտակար տեղեկատվություն</h3>
        <div className="b-container b-faq-grid">
          {faq.map((f) => (
            <Faq key={f.q} {...f} />
          ))}
        </div>
      </section>
    </main>
  );
}