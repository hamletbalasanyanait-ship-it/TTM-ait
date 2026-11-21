import { formatPrice } from './formatPrice';

export default function PlanHeader({ name, price }) {
  return (
    <header>
      <h1 className="tv-combo__title">{name}</h1>
      <p className="tv-combo__price">Ամսական վճարը՝ {formatPrice(price)} դրամ։</p>
    </header>
  );
}