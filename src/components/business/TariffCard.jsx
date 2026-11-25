import { IconData, IconCall, IconTv, IconSms } from "./Icons";

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
      <button type="button" className="biz-btn biz-btn--outline">
        Մանրամասն
      </button>
    </article>
  );
}
