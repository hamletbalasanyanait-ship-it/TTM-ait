import Linkified from "./Linkified";
import UssdCode from "./UssdCode";
import SmsCommand from "./SmsCommand";
import CallNumber from "./CallNumber";
import PriceTag from "./PriceTag";
import DataTable from "./DataTable";
import ShortCodesTable from "./ShortCodesTable";
import { ExternalIcon } from "./Icons";

// Renders one content block of the data files. `type` decides the component:
// p, ul, ol, note, link, spec, table, ussd, sms, call, price, shortcodes.
function Block({ b }) {
  switch (b.type) {
    case "p":
      return (
        <p className={`ent-p${b.strong ? " ent-p--strong" : ""}`}>
          <Linkified text={b.text} />
        </p>
      );
    case "note":
      return (
        <p className="ent-note">
          <Linkified text={b.text} />
        </p>
      );
    case "ul":
      return (
        <ul className="ent-list">
          {b.items.map((x) => (
            <li key={x}>
              <Linkified text={x} />
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="ent-list ent-list--num">
          {b.items.map((x) => (
            <li key={x}>
              <Linkified text={x} />
            </li>
          ))}
        </ol>
      );
    case "link":
      return (
        <p className="ent-p">
          <a className="ent-extlink" href={b.href} target="_blank" rel="noopener noreferrer">
            {b.label} <ExternalIcon width={14} height={14} />
          </a>
        </p>
      );
    case "spec":
      return (
        <div className="ent-spec">
          <h4 className="ent-spec__label">{b.label}</h4>
          {b.text && <p className="ent-p">{b.text}</p>}
          {b.items && (
            <ul className="ent-list">
              {b.items.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          )}
        </div>
      );
    case "table":
      return <DataTable head={b.head} rows={b.rows} groupRow={b.groupRow} />;
    case "ussd":
      return <UssdCode code={b.code} text={b.text} />;
    case "sms":
      return <SmsCommand to={b.to} text={b.text} label={b.label} />;
    case "call":
      return <CallNumber number={b.number} text={b.text} />;
    case "price":
      return <PriceTag period={b.period} amount={b.amount} text={b.text} />;
    case "shortcodes":
      return <ShortCodesTable />;
    default:
      return null;
  }
}

export default function Blocks({ blocks }) {
  return (
    <div className="ent-blocks">
      {blocks.map((b, i) => (
        <Block key={i} b={b} />
      ))}
    </div>
  );
}
