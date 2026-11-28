import { MessageIcon } from "./Icons";

// «Ուղարկեք <text> կարճ համարին <to>» as a tappable sms: link.
export default function SmsCommand({ to, text, label }) {
  const href = `sms:${to}?body=${encodeURIComponent(text)}`;
  return (
    <div className="ent-action">
      <div className="ent-action__row">
        {label && <span className="ent-action__label">{label}</span>}
        <a className="ent-code ent-code--sms" href={href}>
          <MessageIcon width={18} height={18} />
          <span>
            <b>{text}</b> → {to}
          </span>
        </a>
      </div>
    </div>
  );
}
