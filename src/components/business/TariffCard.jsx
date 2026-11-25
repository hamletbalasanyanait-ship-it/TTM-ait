import { IconData, IconCall, IconTv, IconSms } from "./Icons";

const apps = [
  { label: "f", bg: "#1877f2" },
  { label: "m", bg: "#a334fa" },
  { label: "w", bg: "#25d366" },
  { label: "v", bg: "#7360f2" },
];

export default function TariffCard({ t }) {
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
