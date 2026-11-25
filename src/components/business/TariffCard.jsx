import { IconData, IconCall, IconTv, IconSms } from "./Icons";

const apps = [
  { label: "f", bg: "#1877f2" },
  { label: "m", bg: "#a334fa" },
  { label: "w", bg: "#25d366" },
  { label: "v", bg: "#7360f2" },
];

function Gear({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="12" strokeDasharray="9.4 9.4" />
      <circle cx="50" cy="50" r="33" stroke="currentColor" strokeWidth="8" />
      <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="6" />
    </svg>
  );
}

function CustomCard({ t }) {
  return (
    <article className="biz-tariff biz-tariff--custom">
      <Gear className="biz-gear biz-gear--big" />
      <Gear className="biz-gear biz-gear--small" />
      <h3>{t.title}</h3>
      <h4>{t.sub}</h4>
      <p>{t.text}</p>
      <button type="button" className="biz-btn biz-btn--red">
        {t.btn}
      </button>
    </article>
  );
}

export default function TariffCard({ t }) {
  if (t.type === "custom") return <CustomCard t={t} />;

  return (
    <article className="biz-tariff">
      <h3 className="biz-tariff__name">{t.name}</h3>
      <div className="biz-tariff__price">{t.price}</div>
      <ul className="biz-tariff__list">
        <li>
          <IconData /> <b>{t.gb}</b> <small>գբ</small>
        </li>
        <li>
          <IconCall /> <b>{t.min}</b> <small>րոպե</small>
        </li>
        <li>
          <IconTv /> <b>{t.ch}</b> <small>ալիք</small>
        </li>
        <li>
          <IconSms /> <b>{t.sms}</b> <small>SMS</small>
        </li>
      </ul>

      <div className="biz-tariff__apps" aria-label="Անսահմանափակ հավելվածներ">
        {apps.map((a) => (
          <i key={a.label} style={{ background: a.bg }}>
            {a.label}
          </i>
        ))}
        <i className="more">+6</i>
      </div>

      <button type="button" className="biz-btn biz-btn--outline">
        Մանրամասն
      </button>
    </article>
  );
}
