// Price badge: «800 դրամ / Շաբաթական» + the original sentence.
const fmt = (n) => new Intl.NumberFormat("en-US").format(n);

export default function PriceTag({ period, amount, text }) {
  return (
    <div className="ent-price">
      <div className="ent-price__badge">
        <strong>{fmt(amount)}</strong>
        <span>դրամ</span>
        {period && <em>{period}</em>}
      </div>
      {text && <p className="ent-price__text">{text}</p>}
    </div>
  );
}
