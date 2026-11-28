import { PhoneIcon } from "./Icons";

// Short call number (8010, 8030, ...) with the instruction text.
export default function CallNumber({ number, text }) {
  return (
    <div className="ent-action">
      {text && <p className="ent-action__text">{text}</p>}
      <div className="ent-action__row">
        <a className="ent-code ent-code--call" href={`tel:${number}`}>
          <PhoneIcon width={18} height={18} />
          <span>{number}</span>
        </a>
      </div>
    </div>
  );
}
