
import { useState } from "react";
import { Link } from "react-router-dom";
import "../FixedPhone.css";

const cats = [
  { label: "Բջջային կապ", to: "/tariffs/mobile", icon: "▯" },
  { label: "Ինտերնետ և TV - ԿՈՍՄՈ", to: "/tariffs/kosmo", icon: "▣" },
  { label: "Ինտերնետ և TV - ԿՈՄԲՈ", to: "/tariffs/combo", icon: "▣" },
  { label: "Ֆիքսված հեռախոսակապ", to: "/tariffs/fixed", icon: "♧" },
];

const plans = [
  {
    id: "favorite",
    name: "Նախընտրելի",
    price: "1,300",
    included: [
      ["Զանգեր Team ֆիքսված ցանց", "500"],
      ["Զանգեր ՀՀ ֆիքսված և բջջային ցանցեր, ԱՄՆ, Կանադա, Մեծ Բրիտանիա", "100"],
    ],
    rates: [
      ["Զանգեր Team ֆիքսված ցանց՝ 501-րդ րոպեից", "5"],
      ["Զանգեր ՀՀ և Արցախի ֆիքսված ցանցեր՝ 101-րդ րոպեից", "5"],
      ["Զանգեր ՀՀ և Արցախի բջջային ցանցեր՝ 101-րդ րոպեից", "35"],
      ["Զանգեր ՌԴ ֆիքսված ցանց", "29"],
      ["Զանգեր ԱՄՆ և Կանադա՝ 101-րդ րոպեից", "13.9"],
      ["Զանգեր Մեծ Բրիտանիա", "89"],
      ["Զանգեր ՌԴ Beeline բջջային ցանց", "1"],
    ],
  },
  {
    id: "basic-1",
    name: "Բազային 1",
    price: "1,100",
    included: [["Զանգեր Team ֆիքսված ցանց", "360"]],
    rates: [
      ["Տեղական և միջքաղաքային զանգեր՝ 361-րդ րոպեից", "5"],
      ["Զանգեր ՀՀ ֆիքսված ցանցեր", "5"],
      ["Զանգեր ՌԴ ֆիքսված ցանց", "29"],
      ["Զանգեր ՀՀ բջջային ցանցեր, 07:00-23:00", "70"],
      ["Զանգեր ՀՀ բջջային ցանցեր, 23:00-07:00", "49"],
      ["Զանգեր ՌԴ Beeline և t2 բջջային ցանցեր", "35"],
      ["Ինտերնետ հասանելիության ծառայություն", "1"],
    ],
  },
  {
    id: "basic-2",
    name: "Բազային 2",
    price: "5,160",
    included: [["Զանգեր Team ֆիքսված ցանց", "1,600"]],
    rates: [
      ["Տեղական և միջքաղաքային զանգեր՝ 1601-րդ րոպեից", "5"],
      ["Զանգեր ՀՀ ֆիքսված ցանցեր", "5"],
      ["Զանգեր ՀՀ բջջային ցանցեր, 07:00-23:00", "70"],
      ["Զանգեր ՀՀ բջջային ցանցեր, 23:00-07:00", "49"],
      ["Զանգեր ՌԴ Beeline և t2 բջջային ցանցեր", "35"],
      ["Ինտերնետ հասանելիության ծառայություն", "1"],
    ],
  },
  {
    id: "alternative-1",
    name: "Այլընտրանքային 1",
    price: "1,100",
    included: [["Զանգեր Team ֆիքսված ցանց", "260"]],
    rates: [
      ["Տեղական և միջքաղաքային զանգեր՝ 261-րդ րոպեից", "5"],
      ["Զանգեր ՀՀ և Արցախի ֆիքսված ցանցեր", "5"],
      ["Զանգեր ՀՀ բջջային ցանցեր", "36"],
      ["Զանգեր ՌԴ Beeline բջջային ցանց", "35"],
      ["Զանգեր Արցախի բջջային ցանց", "35"],
      ["Ինտերնետ հասանելիության ծառայություն", "1"],
    ],
  },
  {
    id: "alternative-2",
    name: "Այլընտրանքային 2",
    price: "4,000",
    included: [["Զանգեր Team ֆիքսված ցանց", "600"]],
    rates: [
      ["Տեղական և միջքաղաքային զանգեր՝ 601-րդ րոպեից", "5"],
      ["Զանգեր ՀՀ և Արցախի ֆիքսված ցանցեր", "5"],
      ["Զանգեր ՀՀ բջջային ցանցեր", "36"],
      ["Զանգեր ՌԴ Beeline բջջային ցանց", "35"],
      ["Զանգեր Արցախի բջջային ցանց", "35"],
      ["Ինտերնետ հասանելիության ծառայություն", "1"],
    ],
  },
];

export default function FixedPhone() {
  const [selected, setSelected] = useState(plans[0].id);
  const plan = plans.find((p) => p.id === selected);

  return (
    <div className="fx">

      {/* Hero */}
      <section className="fx__hero">
        <img
          src="https://www.telecomarmenia.am/images/menu/1/16509749987896.png"
          alt="Ֆիքսված հեռախոսակապ"
        />
      </section>

      <div className="fx__container">

        {/* Categories */}
        <nav className="fx__cats" aria-label="Սակագներ">
          {cats.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className={c.to === "/tariffs/fixed" ? "is-active" : ""}
            >
              <span className="fx__cat-icon">{c.icon}</span>
              <span>{c.label}</span>
            </Link>
          ))}
        </nav>

        {/* Breadcrumbs */}
        <div className="fx__crumbs">
          <Link to="/">Գլխավոր</Link>
          <span>›</span>
          <Link to="/">Անհատներին</Link>
          <span>›</span>
          <Link to="/tariffs">Սակագներ</Link>
          <span>›</span>
          <span>Ֆիքսված հեռախոսակապ</span>
        </div>

        <h1 className="fx__title">Ֆիքսված հեռախոսակապ</h1>

        {/* Plans */}
        <div className="fx__grid">
          {plans.map((p) => (
            <article
              key={p.id}
              className={`fx__card ${
                p.id === selected ? "is-selected" : ""
              }`}
            >
              <h2>{p.name}</h2>

              <ul>
                {p.included.map(([label, minutes]) => (
                  <li key={label}>
                    <b>{minutes} րոպե</b>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>

              <p className="fx__price">
                {p.price} ֏ <small>/ ամիս</small>
              </p>

              <button
                type="button"
                aria-pressed={p.id === selected}
                onClick={() => setSelected(p.id)}
              >
                Մանրամասն
              </button>
            </article>
          ))}
        </div>

        {/* Details */}
        <section className="fx__details" aria-live="polite">
          <h2>{plan.name}․ սակագներ</h2>

          <table>
            <tbody>
              {plan.rates.map(([label, rate]) => (
                <tr key={label}>
                  <td>{label}</td>
                  <td>{rate} ֏/րոպե</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Terms */}
        <ul className="fx__terms">
          <li>Նոր հեռախոսագծի տեղադրման միանվագ վճարը՝ 2,400 ֏։</li>
          <li>Մեկ զանգի առավելագույն տևողությունը՝ 2 ժամ։</li>
          <li>Սակագնային պլանը հետվճարային է։</li>
          <li>Հարցերի դեպքում զանգահարեք 100 անվճար համարին։</li>
        </ul>

      </div>
    </div>
  );
}
