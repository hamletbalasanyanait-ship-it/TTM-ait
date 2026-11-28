
import { useState } from "react";
import { Link } from "react-router-dom";
import "./TVCombo.css";

const cats = [
  { label: "Բջջային կապ", to: "/tariffs/mobile" },
  { label: "Ինտերնետ և TV - ԿՈՍՄՈ", to: "/tariffs/kosmo" },
  { label: "Ինտերնետ և TV - ԿՈՄԲՈ", to: "/tariffs/combo" },
  { label: "Ֆիքսված հեռախոսակապ", to: "/tariffs/fixed" },
];

const plans = [
  {
    name: "ԿՈՄԲՈ 2",
    description: "Երկուսը մեկում փաթեթ",
    options: [],
  },
  {
    name: "ԿՈՄԲՈ 3",
    description: "Երեքը մեկում փաթեթ",
    options: [],
  },
  {
    name: "ԿՈՄԲՈ 4",
    description: "Չորսը մեկում փաթեթ",
    options: [
      {
        name: "ԿՈՄԲՈ 4 9900",
        price: "9900",
        discount: "7425",
      },
      {
        name: "ԿՈՄԲՈ 4 Մարզային",
        price: "7990",
        discount: null,
      },
    ],
  },
];

const mobile = [
  ["Be Free 5000", "5,000", ""],
  [
    "Րոպեներ դեպի ՀՀ բոլոր ցանցեր, ԱՄՆ, Կանադա, ՌԴ Beeline և t2*",
    "3,000",
    "րոպե",
  ],
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

const tabs = [
  "Փաթեթում ներառված է",
  "TeamTV",
  "Սակագներ",
  "Պայմաններ",
  "Team Բոնուս",
];

const tabContent = [
  {
    title: "Փաթեթում ներառված է",
    text: "Փաթեթը ներառում է Wi-Fi սարք, TV Box և 3 Be Free հատուկ պայմաններով։",
    items: [
      "Wi-Fi սարք",
      "TV Box",
      "3 Be Free հատուկ պայմաններով",
    ],
  },
  {
    title: "TeamTV",
    text: "Փաթեթում ներառված է TeamTV ծառայությունը՝ մինչև 150 ալիքով։",
    items: [
      "150 հեռուստաալիք",
      "TeamTV ծառայություն",
    ],
  },
  {
    title: "Սակագներ",
    text: "Ընտրված փաթեթի ամսական արժեքը ցուցադրվում է վերևում։",
    items: [
      "ԿՈՄԲՈ 4 9900 — 9900 դրամ",
      "ԿՈՄԲՈ 4 Մարզային — 7990 դրամ",
    ],
  },
  {
    title: "Պայմաններ",
    text: "ԿՈՄԲՈ 4 9900 փաթեթի համար նշված է զեղչված արժեք՝ 7425 դրամ։ Զեղչի ժամկետը՝ 17.11.2026–17.02.2027։",
    items: [
      "Ամսական վճար",
      "Զեղչի պայմանները կարող են կիրառվել փաթեթին միանալու դեպքում",
    ],
  },
  {
    title: "Team Բոնուս",
    text: "Team Բոնուսի մանրամասների համար ծանոթացիր Team Telecom Armenia-ի պաշտոնական առաջարկներին։",
    items: [
      "Լրացուցիչ տեղեկություններ՝ պաշտոնական կայքում",
    ],
  },
];

function Row({ item }) {
  const [label, value, unit] = item;

  return (
    <div className="tvc__row">
      <span>{label}</span>
      {value && (
        <strong>
          {value} <small>{unit}</small>
        </strong>
      )}
    </div>
  );
}

export default function TVCombo() {
  const [open, setOpen] = useState(2);
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [tab, setTab] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const currentPlan = plans[2].options[selectedPlan];
  const currentTab = tabContent[tab];

  const choosePlan = (index) => {
    setSelectedPlan(index);
    setOpen(2);
  };

  return (
    <div className="tvc">
      <div className="tvc__hero">
        <div className="tvc__hero-content">
          <span className="tvc__hero-label">
            TEAM TELECOM ARMENIA
          </span>

          <h1>ԿՈՄԲՈ</h1>

          <p>
            Ինտերնետ, հեռուստատեսություն և բջջային կապ՝ մեկ փաթեթում
          </p>

          <a href="#tvc-packages" className="tvc__hero-btn">
            Տեսնել փաթեթը <span>→</span>
          </a>
        </div>
      </div>

      <div className="tvc__container">
        <div className="tvc__cats">
          {cats.map((category, index) => (
            <Link
              key={category.to}
              to={category.to}
              className={index === 2 ? "active" : ""}
            >
              {category.label}
            </Link>
          ))}
        </div>

        <nav className="tvc__crumbs">
          <Link to="/">Գլխավոր</Link>
          <span>›</span>
          <Link to="/">Անհատներին</Link>
          <span>›</span>
          <Link to="/tariffs">Սակագներ</Link>
          <span>›</span>
          <span className="tvc__crumb-current">
            Ինտերնետ և TV - ԿՈՄԲՈ
          </span>
        </nav>

        <div className="tvc__layout" id="tvc-packages">
          <aside className="tvc__side">
            <h3>Ընտրիր քո փաթեթը</h3>

            {plans.map((plan, index) => (
              <div className="tvc__plan-group" key={plan.name}>
                <button
                  className={open === index ? "on" : ""}
                  onClick={() =>
                    setOpen(open === index ? -1 : index)
                  }
                >
                  <span>
                    <b>{plan.name}</b>
                    <small>{plan.description}</small>
                  </span>

                  <span className="tvc__arrow">
                    {open === index ? "−" : "+"}
                  </span>
                </button>

                {open === index && (
                  <div className="tvc__plan-options">
                    {plan.options.length > 0 ? (
                      plan.options.map((option, optionIndex) => (
                        <button
                          key={option.name}
                          className={
                            selectedPlan === optionIndex
                              ? "selected"
                              : ""
                          }
                          onClick={() => choosePlan(optionIndex)}
                        >
                          {option.name}

                          {selectedPlan === optionIndex && (
                            <span>✓</span>
                          )}
                        </button>
                      ))
                    ) : (
                      <p className="tvc__empty">
                        Այս բաժնի փաթեթների մանրամասները հասանելի չեն։
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </aside>

          <main className="tvc__main">
            <div className="tvc__heading">
              <span className="tvc__eyebrow">
                ԻՆՏԵՐՆԵՏ ԵՎ TV
              </span>

              <h2>{currentPlan.name}</h2>
              <p>Չորսը մեկում փաթեթ</p>
            </div>

            <div className="tvc__price-card">
              <div>
                <span className="tvc__price-label">
                  Ամսական վճար
                </span>

                <div className="tvc__price">
                  {currentPlan.price} <small>դրամ</small>
                </div>

                {currentPlan.discount && (
                  <span className="tvc__discount">
                    Զեղչված արժեք՝ {currentPlan.discount} դրամ
                  </span>
                )}
              </div>

              <div className="tvc__price-icon">₽</div>
            </div>

            <section className="tvc__section">
              <h3>Բջջային ներառումներ</h3>

              {mobile.map((item) => (
                <Row key={item[0]} item={item} />
              ))}
            </section>

            <section className="tvc__section">
              <h3>Ֆիքսված ներառումներ</h3>

              {fixed.map((item) => (
                <Row key={item[0]} item={item} />
              ))}
            </section>

            <button
              className="tvc__btn"
              onClick={() => setShowModal(true)}
            >
              Միանալ փաթեթին <span>→</span>
            </button>

            <section className="tvc__details">
              <div className="tvc__tabs">
                {tabs.map((item, index) => (
                  <button
                    key={item}
                    className={tab === index ? "on" : ""}
                    onClick={() => setTab(index)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="tvc__tab-content">
                <h3>{currentTab.title}</h3>
                <p>{currentTab.text}</p>

                <ul>
                  {currentTab.items.map((item) => (
                    <li key={item}>
                      <span>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <p className="tvc__foot">
              Արխիվային սակագնային և ինտերնետ{" "}
              <a
                href="https://www.telecomarmenia.am/"
                target="_blank"
                rel="noreferrer"
              >
                փաթեթներ
              </a>
            </p>
          </main>
        </div>
      </div>

      {showModal && (
        <div
          className="tvc__modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div
            className="tvc__modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="tvc__modal-close"
              onClick={() => setShowModal(false)}
              aria-label="Փակել"
            >
              ×
            </button>

            <div className="tvc__modal-icon">✓</div>

            <h3>
              Դու ընտրել ես {currentPlan.name} փաթեթը
            </h3>

            <p>
              Միանալու պայմանների և հասանելիության մասին տեղեկանալու
              համար այցելիր Team Telecom Armenia-ի պաշտոնական կայք։
            </p>

            <a
              href="https://www.telecomarmenia.am/"
              target="_blank"
              rel="noreferrer"
              className="tvc__modal-link"
            >
              Պաշտոնական կայք →
            </a>

            <button
              className="tvc__modal-back"
              onClick={() => setShowModal(false)}
            >
              Փակել
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
