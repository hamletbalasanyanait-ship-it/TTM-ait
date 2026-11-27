import { useState } from "react";
import "./GeForce.css";

const sections = [
  {
    theme: "dark",
    img: "servers",
    title: "Խաղային համակարգիչ ամպային սերվերում",
    text: "Ամենապահանջկոտ խաղերը խաղալու համար այլևս կարիք չկա գնել թանկարժեք խաղային համակարգիչ: Բոլոր խաղերը հեռակա աշխատում են հզոր սերվերների վրա, և պատկերը փոխանցվում է Ձեր սարքավորմանը՝ առանց հապաղելու:",
    btn: "Խաղալ",
    href: "https://gfn.am",
  },
  {
    theme: "light",
    img: "internet",
    title: "Արագ ինտերնետ",
    text: "ԿՈՍՄՈ և ԿՈՄԲՈ սակագներով դուք կստանաք Full HD որակ 60 FPS հաճախականությամբ ինչպես նաև NVIDIA RTX և DLSS տեխնոլոգիայի հնարավորություն: Դարձի՛ր TEAM-ի բաժանորդ, ակտիվացրու՝ բաժանորդագրություն GeForce Games-ի սերվիսում:",
  },
  {
    theme: "dark",
    img: "cosmobox",
    title: "Cosmo Box՝ դիտիր, խաղա, վայելիր",
    text: "Բացահայտի՛ր խաղային փորձի նոր հորիզոնները և սուզվիր զվարճանքի աշխարհ մեր Cosmo Box սարքի միջոցով:",
    btn: "Մանրամասն",
    href: "#",
  },
  {
    theme: "light",
    img: "devices",
    title: "Ցանկացած սարք կարող է լինել խաղային",
    text: "Բոլոր խաղերը արդեն տեղադրված են և ակտիվանում են GFN.AM-ի անվճար սերվերով, որը թույլ է տալիս միացնել պահանջկոտ խաղեր ցանկացած սարքի վրա՝ PC, Mac, TV և smartphone",
  },
  {
    theme: "dark",
    img: "apex",
    title: "Սկսի՛ր խաղալ հենց հիմա",
    text: "Ակտիվացրեք բաժանորդագրությունը և ստացեք Performance հնարավորություն խաղալու ավելի քան 2000 խաղ GFN.AM կատալոգից",
  },
  {
    theme: "light",
    img: "auth",
    title: "Միացեք 3 քայլով",
    steps: [
      "Միացրեք GeForce Games ծառայությունը, օգտագործեք *321# հրահանգը",
      "Գրանցվեք և մուտք գործեք GFN.AM կայք Team կոճակի միջոցով՝ ձեր հեռախոսահամարով",
      "GFN.AM կայքից ներբեռնեք հավելվածը",
    ],
  },
];

const faq = [
  { q: "Performance բաժանորդագրություն:", a: "Performance բաժանորդագրությամբ կարող եք գործարկել GFN.AM կատալոգի ավելի քան 2000 խաղ՝ առանց հերթերի, առավելագույն կարգավորումներով:" },
  { q: "Ակտիվացում և ապաակտիվացում:", a: "Ակտիվացնելու համար հավաքեք *321#, ապաակտիվացնելու համար՝ *320#, կամ օգտվեք My Team հավելվածի «Ծառայություններ» բաժնից:" },
  { q: "Ինչ արժե բաժանորդագրությունը:", a: "Բաժանորդագրության գինը 3999 դրամ է ամսական: ԿՈՍՄՈ 16500 և ԿՈՍՄՈ GIG սակագնային պլաններում այն ներառված է անվճար:" },
  { q: "Ո՞ր սարքավորումներով կարող եմ խաղալ:", a: "PC, Mac, Android, TV և smartphone սարքերով, ինչպես նաև Cosmo Box-ի միջոցով:" },
  { q: "Ո՞ւմ է հասանելի:", a: "Ծառայությունը հասանելի է Team-ի բաժանորդներին:" },
  { q: "Համակարգային պահանջները:", a: "Անհրաժեշտ է կայուն ինտերնետ կապ: ԿՈՍՄՈ և ԿՈՄԲՈ սակագներով հասանելի է Full HD, 60 FPS:" },
  { q: "Ինչպե՞ս սկսել խաղալ:", a: "Ակտիվացրեք ծառայությունը (*321#), գրանցվեք GFN.AM կայքում Team կոճակի միջոցով և ներբեռնեք հավելվածը:" },
  { q: "Cosmo Box", a: "Cosmo Box-ը սարք է, որի միջոցով կարող եք դիտել, խաղալ և վայելել ամպային խաղեր հեռուստացույցով:" },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`gf-faq__item ${open ? "is-open" : ""}`}>
      <button type="button" className="gf-faq__q" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <i aria-hidden="true" />
      </button>
      {open && <p className="gf-faq__a">{a}</p>}
    </div>
  );
}

export default function GeForce() {
  return (
    <div className="gf">
      {/* HERO */}
      <section className="gf-hero">
        <div className="gf-container gf-hero__inner">
          <div className="gf-hero__card">
            <h1>Վերջապես</h1>
            <p>Խաղային համակարգիչը այլևս անհրաժեշտ չէ:</p>
            <a className="gf-btn" href="https://gfn.am" target="_blank" rel="noreferrer">Խաղալ</a>
          </div>
          <div className="gf-hero__img" aria-hidden="true" />
        </div>
      </section>

      {/* ALTERNATING SECTIONS */}
      {sections.map((s) => (
        <section key={s.title} className={`gf-sec gf-sec--${s.theme}`}>
          <div className="gf-container gf-sec__inner">
            <div className={`gf-img gf-img--${s.img}`} role="img" aria-label={s.title} />
            <div className="gf-sec__text">
              <h2>{s.title}</h2>
              {s.text && <p>{s.text}</p>}
              {s.steps && (
                <ol>
                  {s.steps.map((t) => <li key={t}>{t}</li>)}
                </ol>
              )}
              {s.btn && (
                <a className="gf-btn" href={s.href}>{s.btn}</a>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="gf-faq">
        <div className="gf-container">
          <h2>Հաճախ տրվող հարցեր</h2>
          <div className="gf-faq__grid">
            <div>{faq.filter((_, i) => i % 2 === 0).map((f) => <FaqItem key={f.q} {...f} />)}</div>
            <div>{faq.filter((_, i) => i % 2 === 1).map((f) => <FaqItem key={f.q} {...f} />)}</div>
          </div>
        </div>
      </section>
    </div>
  );
}