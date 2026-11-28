import "./Roming.css";

const HERO_BUTTON_TEXT = "Քարթեց"; // սքրինշոթում տեքստը անհասկանալի է, ստուգիր

const packages = [
  { name: "Ռումինգի փաթեթ", size: "1 ԳԲ +", price: "2000 դրամ" },
  { name: "Ռումինգի փաթեթ", size: "6 ԳԲ", price: "5000 դրամ" },
  { name: "Ռումինգի փաթեթ", size: "15 ԳԲ", price: "12000 դրամ" },
  { name: "Ռումինգի փաթեթ", size: "30 ԳԲ", price: "20000 դրամ" },
  {
    name: "Ռումինգի փաթեթ",
    size: "1 ԳԲ (Ռուսաստան, Վրաստան)",
    price: "500 դրամ",
  },
];

const features = [
  { icon: "🌐", title: "Զանգեր", text: "Սկսած 29,99 դրամ/րոպեից" },
  { icon: "✈️", title: "Ինտերնետ", text: "0.5 դրամ/ՄԲ-ից" },
  { icon: "💬", title: "SMS", text: "25 դրամից սկսած" },
];

const generalTariffs = [
  { label: "Ինտերնետ", value: "9 դրամ/ՄԲ*" },
  { label: "Մուտքային և ելքային զանգեր դեպի Հայաստան", value: "150 դրամ/րոպե" },
  { label: "Ելքային և միջազգային զանգեր", value: "250 դրամ/րոպե" },
  { label: "SMS", value: "25 դրամ" },
];

const bestTariffs = [
  { label: "Ինտերնետ", value: "9 դրամ/ՄԲ" },
  {
    label: "Մուտքային և ելքային զանգեր Team* բջջային ցանցին",
    value: "29.99 դրամ/րոպե",
  },
  { label: "Ելքային և միջազգային զանգեր", value: "250 դրամ/րոպե" },
];

const infoCards = [
  { title: "Ռումինգի ակտիվացման պայմաններ", text: "" },
  {
    title: "Ռումինգի սակագներ ծովում և օդում",
    text: "Be online even at the sea and in the air",
  },
];

const faq = [
  "Թափառող հյուրերի համար",
  "Ինչպե՞ս լիցքավորել մնացորդը արտասահմանում:",
];

function TariffTable({ rows }) {
  return (
    <div className="rm-table">
      {rows.map((row) => (
        <div className="rm-table-row" key={row.label}>
          <div className="rm-table-label">{row.label}</div>
          <div className="rm-table-value">{row.value}</div>
        </div>
      ))}
    </div>
  );
}

export default function Roming() {
  return (
    <div className="rm-page">
      {/* HERO */}
      <section className="rm-hero">
        <div className="rm-hero-card">
          <h1>եկեք բացահայտենք աշխարհը</h1>
          <p>Ռումինգ, որը շարժվում է ձեզ հետ</p>
          <button className="rm-btn">{HERO_BUTTON_TEXT}</button>
        </div>
        <div className="rm-hero-image">
          {/* նկարը դիր public/roaming-plane.jpg */}
          <img src="/roaming-plane.jpg" alt="Roaming" />
          <div className="rm-hero-badge">
            <span>140+</span>
            <span>ԵՐԿԻՐ</span>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="rm-packages">
        <h2>Ինտերնետ ռումինգում</h2>
        <div className="rm-packages-grid">
          {packages.map((p, i) => (
            <div className="rm-package" key={i}>
              <h3>{p.name}</h3>
              <h3>{p.size}</h3>
              <h3>{p.price}</h3>
            </div>
          ))}
        </div>

        <h3 className="rm-countries">Ավելի քան 140 երկիր</h3>
        <div className="rm-features">
          {features.map((f) => (
            <div className="rm-feature" key={f.title}>
              <div className="rm-feature-icon">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GENERAL TARIFFS */}
      <section className="rm-section">
        <h2>Ինտերնետ ռումինգում 9 դրամ/ՄԲ</h2>
        <p className="rm-sub">
          Հասանելի ուղղություններ և սակագներ՝ <a href="#">ցանկ</a>
        </p>
        <TariffTable rows={generalTariffs} />
        <p className="rm-note">
          *Այստեղ պետք է երկրների ցանկը (տես ներքևում ծանոթագրությունը)
        </p>
      </section>

      {/* BEST TARIFFS */}
      <section className="rm-section">
        <h2>Լավագույն սակագներ</h2>
        <div className="rm-flags">🇮🇹 🇷🇺 🇬🇪 🇺🇦</div>
        <p className="rm-sub">
          Իտալիա (Wind), Ռուսաստան (Beeline), Վրաստան (Cellfie), Ուկրաինա
          (Kyivstar)
          <br />
          Հասանելի ուղղություններ և սակագներ՝ <a href="#">ցանկ</a>
        </p>
        <TariffTable rows={bestTariffs} />
      </section>

      {/* USEFUL INFO */}
      <section className="rm-section rm-info">
        <h2>Օգտակար տեղեկատվություն</h2>
        <div className="rm-info-grid">
          {infoCards.map((c) => (
            <div className="rm-info-card" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <button className="rm-btn">Մանրամասներ</button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="rm-section rm-faq">
        <h2>Հաճախակի տրվող հարցեր</h2>
        <div className="rm-faq-grid">
          {faq.map((q) => (
            <div className="rm-faq-item" key={q}>
              <span>{q}</span>
              <span>⌄</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}