import { useState, useEffect } from "react";
import "./TVCosmo.css";

/* ---------- Տվյալներ (վերցված են սքրինշոթից) ---------- */

// Սքրինշոթում երևում է միայն 5-րդ սլայդը, մյուսների բովանդակությունը հայտնի չէ։
const slides = [
  {
    title: "ԿՈՍՄՈ GIG",
    text: "1 ԳԲ գերարագ ինտերնետ լավագույն Nokia սարքով:",
    btn: "Իմանալ ավելին",
    href: "#",
  },
];

const tariffs = [
  {
    name: "ԿՈՍՄՈ 2",
    price: "8000",
    rows: [
      { icon: "wifi", big: "250", unit: "Մբիթ/վրկ" },
      { icon: "minutes", big: "3,200", note: "1500 րոպե դեպի ՀՀ բոլոր ցանցեր, ԱՄՆ, Կանադա, ՌԴ Beeline և t2" },
      { icon: "4g", big: "40", unit: "ԳԲ" },
      { icon: "gift", big: "3 Be Free" },
    ],
    apps: true,
  },
  {
    name: "ԿՈՍՄՈ 4",
    oldPrice: "12500",
    price: "9375",
    badge: "25%",
    rows: [
      { icon: "wifi", big: "450", unit: "Մբիթ/վրկ" },
      { icon: "tv", big: "150", unit: "ալիք", note: "+1 TeamTV Smart համալրված Android, Samsung, LG Smart հեռուստացույցների համար" },
      { icon: "minutes", big: "5,000", note: "3000 րոպե դեպի ՀՀ բոլոր ցանցեր, ԱՄՆ, Կանադա, ՌԴ Beeline և t2" },
      { icon: "4g", big: "Անսահմ." },
      { icon: "plane", big: "200", unit: "ՄԲ" },
      { icon: "phone", big: "180", unit: "րոպե" },
      { icon: "gift", big: "3 Be Free" },
    ],
  },
  {
    name: "ԿՈՍՄՈ 4",
    oldPrice: "16500",
    price: "12375",
    badge: "25%",
    rows: [
      { icon: "wifi", big: "700", unit: "Մբիթ/վրկ" },
      { icon: "tv", big: "200", unit: "ալիք", note: "+1 TeamTV Smart համալրված Android, Samsung, LG Smart հեռուստացույցների համար" },
      { icon: "minutes", big: "8,000", note: "5000 րոպե դեպի ՀՀ բոլոր ցանցեր, ԱՄՆ, Կանադա, ՌԴ Beeline և t2" },
      { icon: "4g", big: "Անսահմ." },
      { icon: "plane", big: "300", unit: "ՄԲ" },
      { icon: "phone", big: "180", unit: "րոպե" },
      { icon: "nokia", big: "Beacon 2" },
      { icon: "bank", big: "PowerBank" },
      { icon: "gift", big: "3 Be Free" },
    ],
  },
  {
    name: "ԿՈՍՄՈ ULTRA",
    price: "20500",
    rows: [
      { icon: "wifi", big: "1", unit: "ԳԲիթ/վրկ" },
      { icon: "tv", big: "200", unit: "ալիք", note: "+1 TeamTV Smart համալրված Android, Samsung, LG Smart հեռուստացույցների համար" },
      { icon: "minutes", big: "8,000", note: "5000 րոպե դեպի ՀՀ բոլոր ցանցեր, ԱՄՆ, Կանադա, ՌԴ Beeline և t2" },
      { icon: "4g", big: "Անսահմ." },
      { icon: "plane", big: "300", unit: "ՄԲ" },
      { icon: "phone", big: "180", unit: "րոպե" },
      { icon: "nokia", big: "Beacon 2" },
      { icon: "bank", big: "PowerBank" },
      { icon: "gift", big: "3 Be Free" },
    ],
  },
];

const beFree = [
  { name: "Be Free", num: "3 200", price: "1 600", rows: [["data", "25", "ԳԲ"], ["calls", "1000", "րոպե"], ["sms", "300", "SMS"]], foot: "ԿԱՆԽԱՎՃԱՐԱՅԻՆ", red: true },
  { name: "Be Free", num: "3 200", price: "1 600", rows: [["data", "40", "ԳԲ"], ["calls", "1500", "րոպե"], ["sms", "300", "SMS"]], foot: "ՀԵՏՎՃԱՐԱՅԻՆ" },
  { name: "Be Free", num: "5 000", price: "2 500", oldPrice: "3 500", badge: "ԶԵՂՉ", rows: [["data", "∞", ""], ["calls", "3,000", "րոպե"], ["sms", "500", "SMS"], ["roam", "200", "ՄԲ"]], foot: "ՀԵՏՎՃԱՐԱՅԻՆ" },
];

const teamTv = [
  { icon: "catch", title: "Catch-Up մինչև 7 օր", text: "Ընտրեք հաղորդումը և դիտեք այն Ձեզ հարմար ժամանակ" },
  { icon: "play", title: "Հարուստ տեսադարան", text: "Ֆիլմերի, մուլտֆիլմերի և հեռուստասերիալների մեծ ընտրություն" },
  { icon: "4k", title: "4K հնարավորությամբ TV սարքավորում" },
];

const tvPackages = ["150 ալիք", "200 ալիք"];

// Սքրինշոթում միայն վերնագրերն են երևում, պատասխանների տեքստը հայտնի չէ։
const conditionsLeft = [
  "Ինչպես վճարել և ստուգել հաշվեկշիռը",
  "Հավելյալ սարքեր",
  "ԿՈՍՄՈ-ն առանց ժամկետային պարտավորության",
  "TeamTV",
];
const conditionsRight = [
  "Be Free հատուկ պայմաններով",
  "Լրացուցիչ տեղեկություններ",
  "Սակագներ՝ փաթեթի ներառումները սպառելուց հետո",
  "Անսահմանափակ հավելվածներ",
];

/* ---------- Պարզ SVG պատկերակներ ---------- */

const paths = {
  wifi: "M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 19.5h.01",
  tv: "M3 5h18v12H3zM8 21h8",
  minutes: "M4 4h16v12H9l-5 4z",
  "4g": "M7 2h10v20H7zM11 18h2",
  plane: "M2 14l20-8-6 14-4-5-4 3z",
  phone: "M5 3h4l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z",
  gift: "M4 7h16v13H4zM12 7v13M4 12h16",
  nokia: "M12 3a9 9 0 1 0 .01 0z",
  bank: "M7 2h10v20H7zM12 8l-2 4h4l-2 4",
  data: "M7 2h10v20H7zM11 18h2",
  calls: "M5 3h4l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z",
  sms: "M3 4h18v12H8l-5 4z",
  roam: "M2 14l20-8-6 14-4-5-4 3z",
  catch: "M12 3a9 9 0 1 1-8 5M3 3v5h5M10 9l5 3-5 3z",
  play: "M3 4h18v16H3zM10 9l5 3-5 3z",
  "4k": "M3 4h18v13H3zM8 21h8M7 8v5h4M11 8v5M14 8v5M14 10l3-2M14 10l3 3",
};

const Ico = ({ n, size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={paths[n]} />
  </svg>
);

/* ---------- Բաժիններ ---------- */

function Hero() {
  const [i, setI] = useState(0);
  const multi = slides.length > 1;

  useEffect(() => {
    if (!multi) return;
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [multi]);

  const s = slides[i];
  return (
    <section className="kc-hero">
      {multi && (
        <button className="kc-hero__arrow kc-hero__arrow--l" onClick={() => setI((i - 1 + slides.length) % slides.length)} aria-label="Նախորդ">‹</button>
      )}
      <div className="kc-hero__inner">
        <div className="kc-hero__card">
          <h2>{s.title}</h2>
          <p>{s.text}</p>
          <a href={s.href} className="kc-hero__btn">{s.btn}</a>
        </div>
        {/* Այստեղ դրեք ԿՈՍՄՈ GIG պաստառի նկարը */}
        <div className="kc-hero__art" aria-hidden="true">
          <span>ԿՈՍՄՈ</span>
          <b>GIG</b>
        </div>
      </div>
      {multi && (
        <button className="kc-hero__arrow kc-hero__arrow--r" onClick={() => setI((i + 1) % slides.length)} aria-label="Հաջորդ">›</button>
      )}
      <div className="kc-dots">
        {slides.map((_, k) => (
          <button key={k} className={k === i ? "on" : ""} onClick={() => setI(k)} aria-label={`Սլայդ ${k + 1}`} />
        ))}
      </div>
    </section>
  );
}

function Tariffs() {
  const [tab, setTab] = useState(0);
  return (
    <section className="kc-tariffs">
      <div className="kc-wrap">
        <div className="kc-ttabs">
          <button className={tab === 0 ? "on" : ""} onClick={() => setTab(0)}>Հիմնական</button>
          <button className={tab === 1 ? "on" : ""} onClick={() => setTab(1)}>Մարզային</button>
        </div>

        {tab === 0 ? (
          <div className="kc-cards">
            {tariffs.map((t, idx) => (
              <article className="kc-card" key={idx}>
                {t.badge && <span className="kc-card__badge">{t.badge}</span>}
                <header>
                  <h3>{t.name}</h3>
                  {t.oldPrice && <s>{t.oldPrice}</s>}
                  <strong className={t.oldPrice ? "new" : ""}>{t.price}</strong>
                </header>
                <ul>
                  {t.rows.map((r, k) => (
                    <li key={k}>
                      <div className="kc-card__row">
                        <Ico n={r.icon} />
                        <span className="kc-card__big">{r.big}{r.unit && <small> {r.unit}</small>}</span>
                      </div>
                      {r.note && <p>{r.note}</p>}
                    </li>
                  ))}
                </ul>
                {t.apps && <div className="kc-card__apps">{[0, 1, 2, 3].map((n) => <i key={n} />)}<em>+13</em></div>}
                <a href="#" className="kc-card__btn">Միանալ</a>
              </article>
            ))}
          </div>
        ) : (
          <p className="kc-empty">Մարզային սակագների բովանդակությունը սքրինշոթում չկա։</p>
        )}
      </div>
    </section>
  );
}

function Terms() {
  return (
    <p className="kc-terms">
      Ծառայությունների փաթեթների նշված ներառումները հասանելի են միայն 12 ամիս տևողությամբ, ավտոմատ երկարաձգմամբ, ժամկետային պարտավորությամբ:
    </p>
  );
}

function BeFree() {
  return (
    <section className="kc-befree">
      <h2>Ձեռք բեր Be Free փաթեթները հատուկ գնով</h2>
      <div className="kc-bf">
        {beFree.map((b, i) => (
          <div className="kc-bf__card" key={i}>
            {b.badge && <span className="kc-bf__badge">{b.badge}</span>}
            <div className="kc-bf__name"><b>{b.name}</b> {b.num}</div>
            <div className="kc-bf__price">
              <small>ամիս</small> {b.price}
              {b.oldPrice && <s>{b.oldPrice}</s>}
            </div>
            <ul>
              {b.rows.map(([ic, v, u], k) => (
                <li key={k}><Ico n={ic} size={20} /><b>{v}</b> <small>{u}</small></li>
              ))}
            </ul>
            <div className={"kc-bf__foot" + (b.red ? " red" : "")}>{b.foot}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TeamTV() {
  return (
    <section className="kc-tv">
      <h2><span>Team</span><span>TV</span></h2>
      <div className="kc-tv__body">
        <ul>
          {teamTv.map((f) => (
            <li key={f.title}>
              <Ico n={f.icon} size={54} />
              <div>
                <h4>{f.title}</h4>
                {f.text && <p>{f.text}</p>}
              </div>
            </li>
          ))}
        </ul>
        {/* Այստեղ դրեք TV + հեռախոսի նկարը */}
        <div className="kc-tv__img" aria-hidden="true" />
      </div>
    </section>
  );
}

function TvPackages() {
  return (
    <>
      <div className="kc-beige" />
      <section className="kc-pk">
        <h2>Հասանելի TV փաթեթներ</h2>
        <ul>{tvPackages.map((p) => <li key={p}>{p}</li>)}</ul>
      </section>
    </>
  );
}

function Nokia() {
  return (
    <>
      <div className="kc-band kc-band--blue" />
      <div className="kc-band kc-band--light" />
      <div className="kc-band kc-band--gray" />
      <p className="kc-nokia-link">Տրամադրվող NOKIA հզոր սարքավորումներ</p>
      <section className="kc-nokia">
        <h2>Nokia սարքավորումներ</h2>
        <p>Լավագույն սարքեր՝ լավագույն ծառայությունների համար</p>
        {/* Սարքերի ցանկը սքրինշոթում դատարկ է */}
        <div className="kc-nokia__empty" />
      </section>
    </>
  );
}

function Conditions() {
  const [open, setOpen] = useState(null);
  const col = (list, side) =>
    list.map((q) => {
      const id = side + q;
      return (
        <li key={id}>
          <button onClick={() => setOpen(open === id ? null : id)} aria-expanded={open === id}>
            <span>{q}</span>
            <i className={open === id ? "up" : ""} />
          </button>
          {/* Բացվող տեքստը սքրինշոթում չկա */}
          {open === id && <div className="kc-acc__body" />}
        </li>
      );
    });

  return (
    <section className="kc-cond">
      <h2>Պայմաններ</h2>
      <div className="kc-acc">
        <ul>{col(conditionsLeft, "l")}</ul>
        <ul>{col(conditionsRight, "r")}</ul>
      </div>
    </section>
  );
}

export default function TVCosmo() {
  return (
    <div className="kc">
      <Hero />
      <Tariffs />
      <Terms />
      <BeFree />
      <TeamTV />
      <TvPackages />
      <Nokia />
      <Conditions />
    </div>
  );
}