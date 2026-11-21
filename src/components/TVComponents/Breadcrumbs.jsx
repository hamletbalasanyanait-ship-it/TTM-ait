export default function Breadcrumbs({ items }) {
  return (
    <nav className="tv-combo__breadcrumbs" aria-label="Breadcrumbs">
      {items.map((item, i) => (
        <span key={item.label}>
          {item.href ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}
          {i < items.length - 1 && ' › '}
        </span>
      ))}
    </nav>
  );
}