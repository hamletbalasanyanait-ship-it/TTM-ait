import { Link } from "react-router-dom";
import { breadcrumb } from "./data/contact";

// «Գլխավոր / Անհատներին / Ծառայություններ / Զվարճանք [/ current]»
export default function Breadcrumbs({ current }) {
  const trail = current ? breadcrumb : breadcrumb.slice(0, -1);
  const last = current ? current : breadcrumb[breadcrumb.length - 1].label;

  return (
    <nav className="ent-crumbs" aria-label="Breadcrumb">
      <ol className="ent-crumbs__list">
        {trail.map((c) => (
          <li key={c.label} className="ent-crumbs__item">
            <Link to={c.to}>{c.label}</Link>
          </li>
        ))}
        <li className="ent-crumbs__item ent-crumbs__item--current" aria-current="page">
          {last}
        </li>
      </ol>
    </nav>
  );
}
