import { Link } from "react-router-dom";
import db from "./data/db";

// The «Զվարճանք» list at the bottom of every service page.
export default function RelatedServices({ slug }) {
  const list = db.related(slug);
  return (
    <aside className="ent-related" aria-labelledby="ent-related-title">
      <h2 id="ent-related-title" className="ent-section__title">
        Զվարճանք
      </h2>
      <ul className="ent-related__list">
        {list.map((s) => (
          <li key={s.id}>
            <Link to={`/entertainment/${s.slug}`}>{s.title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
