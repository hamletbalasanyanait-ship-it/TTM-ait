import { useState } from "react";
import { Link } from "react-router-dom";
import "./TeamTV.css";

const FEATURES = [
  { icon: "▶", title: "Catch-Up մինչև 7 օր", text: "Ընտրեք հաղորդումը և դիտեք այն ձեզ հարմար ժամանակ" },
  { icon: "🎬", title: "Հարուստ տեսադարան", text: "Ֆիլմերի, մուլտֆիլմերի և սերիալների մեծ ընտրանի" },
];

const STEPS = [
  { icon: "📺", text: "Ներբեռնի՛ր TeamTV հավելվածը", button: "Ներբեռնել" },
  { icon: "📱", text: "Գրանցվի՛ր հավելվածում՝ հավաքելով *818#" },
  { icon: "▶", text: "Դիտի՛ր բազմաթիվ ֆիլմեր և ալիքներ" },
];

const NEW_INTERFACE = [
  "Թարմացված դիզայն",
  "Ալիքների ցանկ ըստ ժանրերի և միաժամանակ 2 ալիք դիտելու հնարավորություն",
  "Նախընտրած ֆիլմերի ցանկ ստեղծելու հնարավորություն",
  "Ծրագրեր փնտրելու հնարավորություն",
  "Սարքերի կառավարում",
];

const CHANNELS_HOME = [
  "1. Առաջին ալիք", "2. Առաջինի լր. ալիք", "4. Արմենիա TV", "5. Շանթ", "6. ATV",
  "7. Fast Sports", "8. Կենտրոն", "9. Free News", "11. Բուն TV", "12. Նոր Հայաստան",
  "13. Հինգերորդ ալիք", "14. 21 TV", "18. Ցայգ TV", "19. Սյունիք TV", "30. Շանթ Պյուրի",
  "31. Հ2", "32. Երկիր Մեդիա", "33. ABN", "39. Россия 24", "40. CTC International",
  "41. НТВ Мир", "43. ТВЦ", "44. 5 канал", "48. Рен ТВ", "49. Центральное ТВ",
  "50. ТВ-3", "51. ТНТ 4", "52. ТНТ International", "62. Киноомикс", "65. Наше Новое Кино",
  "67. Иллюзион +", "68. Индийское кино", "69. Индия TV", "71. Viju TV 1000", "73. Еврокино",
  "92. Խաղալիք", "93. Детский мир", "94. СТС Кидс", "97. Капитан Фантастика", "100. Armtoon TV",
  "106. Discovery channel", "139. Кухня ТВ", "141. Домашний", "143. КВН ТВ", "147. Охотник и рыболов HD",
  "154. TLC", "157. Լայֆ", "169. РБК", "174. Deutsche Welle", "175. France 24",
  "177. DW Russian", "187. CGTN HD", "189. Mezzo", "190. Հայ TV", "193. ТНТ Music",
  "208. КХЛ", "209. MMA-TV", "219. Матч!Планета", "234. 4Y", "235. Vesna",
];

const EXTRA_PACKS = ["120 ալիք", "150 ալիք", "200 ալիք"];

const FAQ_LEFT = [
  "Ալիքների ցանկը կարո՞ղ է փոփոխվել",
  "Ինչպե՞ս սկսել օգտվել նոր հեռուստատեսությունից:",
  "Ինչպե՞ս կարող եմ վերականգնել գաղտնաբառս",
];
const FAQ_RIGHT = [
  "Ո՞րտեղ կարող եմ տեսնել հավելյալ ալիքների գնացուցակը",
  "Ո՞րտեղ կարող եմ ծանոթանալ ալիքների ցանկին",
  "Որտեղի՞ց է հասանելի ծառայությունը",
];

function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <ul className="ttv-acc">
      {items.map((item, i) => (
        <li key={item} className="ttv-acc__item">
          <button
            className="ttv-acc__btn"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span>{item}</span>
            <span className={`ttv-acc__arrow ${open === i ? "is-open" : ""}`}>▾</span>
          </button>
          {open === i && (
            <div className="ttv-acc__body">
              Տեղեկատվությունը շուտով կավելացվի։
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

function StoreButtons() {
  return (
    <div className="ttv-stores">
      <a href="#" className="ttv-store">Download on the <b>App Store</b></a>
      <a href="#" className="ttv-store">GET IT ON <b>Google Play</b></a>
    </div>
  );
}

export default function TeamTV() {
  const [tariffTab, setTariffTab] = useState("mobile");
  const [channelTab, setChannelTab] = useState("home");

  return (
    <div className="ttv">
      {/* 1. Hero */}
      <section className="ttv-hero">
        <h1 className="ttv-hero__title">
          <span className="ttv-red">Team</span>
          <span className="ttv-cyan">TV</span>
        </h1>
        <div className="ttv-hero__features">
          {FEATURES.map((f) => (
            <div key={f.title} className="ttv-feature">
              <div className="ttv-feature__icon">{f.icon}</div>
              <div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Registration steps */}
      <section className="ttv-section">
        <h2 className="ttv-h2">Ինչպե՞ս գրանցվել հավելվածում</h2>
        <div className="ttv-steps">
          {STEPS.map((s, i) => (
            <div key={i} className="ttv-step">
              <div className="ttv-step__icon">{s.icon}</div>
              <p>{i + 1}. {s.text}</p>
              {s.button && <a href="#" className="ttv-btn">{s.button}</a>}
            </div>
          ))}
        </div>
      </section>

      {/* 3. Available for everyone */}
      <section className="ttv-dark">
        <div className="ttv-split">
          <div className="ttv-promo">
            <div className="ttv-promo__logo">teamTV</div>
            <div className="ttv-promo__sub">ԱՅԺՄ ՀԱՍԱՆԵԼԻ Է ԲՈԼՈՐԻՆ</div>
            <div className="ttv-qr">QR</div>
            <StoreButtons />
          </div>
          <div className="ttv-text">
            <h2>TeamTV-ն հասանելի է բոլորին</h2>
            <ul>
              <li>Ներբեռնիր և գրանցվիր TeamTV հավելվածում</li>
              <li>Բաժանորդագրվիր հետևյալ սակագնային փաթեթներից որևէ մեկին՝ teamTV Ստարտ, teamTV Հանրային, teamTV Սաքս</li>
              <li>Վայելիր բազմաթիվ ալիքներ TeamTV-ով</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Tariffs */}
      <section className="ttv-section">
        <h2 className="ttv-h2">Սակագնային փաթեթներ</h2>
        <div className="ttv-tabs">
          <button
            className={`ttv-tab ${tariffTab === "mobile" ? "is-active" : ""}`}
            onClick={() => setTariffTab("mobile")}
          >
            <span className="ttv-tab__icon">📺</span> Բջջային
          </button>
          <button
            className={`ttv-tab ${tariffTab === "smart" ? "is-active" : ""}`}
            onClick={() => setTariffTab("smart")}
          >
            <span className="ttv-tab__icon">📱</span> Բջջային և Smart TV
          </button>
        </div>
        <div className="ttv-tariff">
          <p>teamTV Ստարտ</p>
          <hr />
        </div>
      </section>
      
      {/* 5. New interface */}
      <section className="ttv-dark">
        <div className="ttv-split">
          <div className="ttv-video">
            <div className="ttv-video__play">▶</div>
            <span>Դիտեք այստեղ՝ YouTube</span>
          </div>
          <div className="ttv-text">
            <h2>Նոր TeamTV ինտերֆեյս</h2>
            <ul>
              {NEW_INTERFACE.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Channel packs */}
      <section className="ttv-section">
        <h2 className="ttv-h2">Հեռուստաալիքների փաթեթներ</h2>
        <div className="ttv-tabs">
          <button
            className={`ttv-tab ${channelTab === "home" ? "is-active" : ""}`}
            onClick={() => setChannelTab("home")}
          >
            <span className="ttv-tab__icon">📺</span> Տան համար
          </button>
          <button
            className={`ttv-tab ${channelTab === "mobile" ? "is-active" : ""}`}
            onClick={() => setChannelTab("mobile")}
          >
            <span className="ttv-tab__icon">📱</span> Բջջային
          </button>
        </div>

        <h3 className="ttv-count">80 ալիք</h3>
        <ul className="ttv-channels">
          {CHANNELS_HOME.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>

        <ul className="ttv-packs">
          {EXTRA_PACKS.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>

      {/* 7. Leave a request */}
      <section className="ttv-dark ttv-cta">
        <h2>Թողնել հայտ</h2>
        <p>Ստուգի՛ր տան ինտերնետի մաքսիմալ արագությունը քո հասցեում՝ թողնելով օնլայն հայտ:</p>
        <Link to="/login" className="ttv-btn ttv-btn--white">Ուղարկել</Link>
      </section>
      
      {/* 8. Mobile apps */}
      <section className="ttv-section ttv-apps">
        <h2 className="ttv-h2 ttv-h2--light">Դիտիր TV նաև շարժական կապով</h2>
        <div className="ttv-apps__row">
          <div className="ttv-apps__left">
            <p>Ներբեռնիր և փորձիր նոր teamTV</p>
            <div className="ttv-apps__box">
              <div className="ttv-apps__icon">teamTV</div>
              <div>
                <a href="#" className="ttv-store">Download on the <b>App Store</b></a>
                <div className="ttv-rating">★★★★☆ 3.8</div>
                <a href="#" className="ttv-store">GET IT ON <b>Google Play</b></a>
                <div className="ttv-rating">★★★★☆ 3.7</div>
              </div>
            </div>
          </div>
          <div className="ttv-apps__phones">📱 📱 📱</div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="ttv-section">
        <h2 className="ttv-h2 ttv-h2--thin">Օգտակար տեղեկատվություն</h2>
        <div className="ttv-faq">
          <Accordion items={FAQ_LEFT} />
          <Accordion items={FAQ_RIGHT} />
        </div>
      </section>
    </div>
  );
}