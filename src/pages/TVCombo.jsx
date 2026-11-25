import { useState } from "react";
import "./TVCombo.css";

const plans = [
  { name: "ԿՈՄԲՈ 2: Երկուսը մեկում փաթեթ", items: [] },
  { name: "ԿՈՄԲՈ 3: Երեքը մեկում փաթեթ", items: [] },
  { name: "ԿՈՄԲՈ 4: Չորսը մեկում փաթեթ", items: ["ԿՈՄԲՈ 4 9900", "ԿՈՄԲՈ 4 Մարզային 7990"] },
];
const mobile = [
  ["Be Free 5000", "5,000", ""],
  ["Րոպեներ դեպի ՀՀ բոլոր ցանցեր, ԱՄՆ, Կանադա, ՌԴ Beeline և t2*", "3,000", "րոպե"],
  ["SMS դեպի ՀՀ բոլոր ցանցեր", "500", "SMS"],
  ["Բջջային ինտերնետ", "Անսահմ.", ""],
  ["Ինտերնետ ռոումինգում", "200", "ՄԲ"],
  ["3 Be Free հատուկ պայմաններով", "", ""],
];
const fixed = [
  ["Ֆիքսված ինտերնետ (մինչև)", "100", "Մբիթ/վրկ"],
  ["TeamTV (+1 TeamTV համալրված)", "150", "ալիք"],
  ["Րոպեներ", "180", "րոպե"],
];
const tabs = ["Փաթեթում ներառված է", "TeamTV", "Սակագներ", "Պայմաններ", "Team Բոնուս"];
const included = ["Wi-Fi սարք", "TV Box", "3 Be Free հատուկ պայմաններով"];

const Row = ({ r: [label, val, unit] }) => (
  <div className="tvc__row">
    <span>{label}</span>
    {val && <b>{val} <small>{unit}</small></b>}
  </div>
);

export default function TVCombo() {
  const [open, setOpen] = useState(2);
  const [tab, setTab] = useState(0);

  return (
    <div className="tvc">
      <div className="tvc__hero" />

      <div className="tvc__container">
        <div className="tvc__cats">
          {["Բջջային կապ", "Ինտերնետ և TV - ԿՈՍՄՈ", "Ինտերնետ և TV - ԿՈՄԲՈ", "Ֆիքսված հեռախոսակապ"].map((c, i) => (
            <a key={c} href="#" className={i === 2 ? "active" : ""}>{c}</a>
          ))}
        </div>

        <nav className="tvc__crumbs">
          <a href="/">Գլխավոր</a> › <a href="#">Անհատներին</a> › <a href="#">Սակագներ</a> › <a href="#">Ինտերնետ և TV - ԿՈՄԲՈ</a>
        </nav>

        <div className="tvc__layout">
          <aside className="tvc__side">
            <h4>Ընտրիր քո փաթեթը</h4>
            {plans.map((p, i) => (
              <div key={p.name}>
                <button className={open === i ? "on" : ""} onClick={() => setOpen(open === i ? -1 : i)}>
                  {p.name} <span>{open === i ? "▴" : "▾"}</span>
                </button>
                {open === i && p.items.map((it, j) => (
                  <a key={it} href="#" className={j === 0 ? "sel" : ""}>{it}</a>
                ))}
              </div>
            ))}
          </aside>

          <section className="tvc__main">
            <h1>ԿՈՄԲՈ 4 9900</h1>
            <p className="tvc__note">
              Ամսական վճարը 9900 դրամ է:<br />
              Զեղչված արժեք՝ 7425 դրամ: Զեղչը գործում է 17.11.2026-17.02.2027թ. բժանորդագրությամբ միանալու դեպքում:
            </p>

            <h2>Բջջային ներառումներ</h2>
            {mobile.map((r) => <Row key={r[0]} r={r} />)}
            <hr />
            <h2>Ֆիքսված ներառումներ</h2>
            {fixed.map((r) => <Row key={r[0]} r={r} />)}

            <button className="tvc__btn">Միանալ</button>

            <div className="tvc__tabs">
              {tabs.map((t, i) => (
                <button key={t} className={tab === i ? "on" : ""} onClick={() => setTab(i)}>{t}</button>
              ))}
            </div>
            {tab === 0 && (
              <ul className="tvc__included">
                {included.map((i) => <li key={i}>{i}</li>)}
              </ul>
            )}

            <p className="tvc__foot">Արխիվային սակագնային և ինտերնետ <a href="#">փաթեթներ</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}