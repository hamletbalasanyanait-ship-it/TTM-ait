import { useMemo, useState } from "react";
import ServiceCard from "./ServiceCard";
import { SearchIcon } from "./Icons";
import db from "./data/db";

// Grid of all cards + a small client-side filter (not on the original site,
// but cheap thanks to the db layer).
export default function ServiceGrid() {
  const [query, setQuery] = useState("");
  const list = useMemo(() => db.search(query), [query]);

  return (
    <section className="ent-section" aria-labelledby="ent-grid-title">
      <div className="ent-wrap">
        <h2 id="ent-grid-title" className="ent-section__title">
          Զվարճանք
        </h2>

        <label className="ent-search">
          <SearchIcon width={18} height={18} />
          <span className="ent-sr">Որոնել ծառայություն</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Որոնել ծառայություն"
          />
        </label>

        {list.length ? (
          <div className="ent-grid">
            {list.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        ) : (
          <p className="ent-empty" role="status">
            Ոչինչ չի գտնվել
          </p>
        )}
      </div>
    </section>
  );
}
