import { useMemo, useState } from "react";
import { SearchIcon } from "./Icons";
import db from "./data/db";

const fmt = (n) => new Intl.NumberFormat("en-US").format(n);

const SORTS = {
  code: (a, b) => Number(a.code) - Number(b.code),
  provider: (a, b) => a.provider.localeCompare(b.provider) || Number(a.code) - Number(b.code),
  price: (a, b) => a.price - b.price || Number(a.code) - Number(b.code),
};

// «SMS կարճ համարների ցուցակ» - the 34-row table of the SMS Պրեմիում page,
// with search, provider filter and sortable columns.
export default function ShortCodesTable() {
  const [query, setQuery] = useState("");
  const [provider, setProvider] = useState("");
  const [sort, setSort] = useState("code");

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return db
      .shortCodes()
      .filter((r) => (!provider || r.provider === provider) && (!q || `${r.code} ${r.provider}`.toLowerCase().includes(q)))
      .slice()
      .sort(SORTS[sort]);
  }, [query, provider, sort]);

  const th = (key, label) => (
    <th scope="col" aria-sort={sort === key ? "ascending" : "none"}>
      <button type="button" className="ent-sortbtn" onClick={() => setSort(key)}>
        {label}
        {sort === key && <span aria-hidden="true"> ↑</span>}
      </button>
    </th>
  );

  return (
    <div className="ent-codes">
      <div className="ent-codes__tools">
        <label className="ent-search">
          <SearchIcon width={18} height={18} />
          <span className="ent-sr">Որոնել համար կամ պրովայդեր</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Որոնել համար կամ պրովայդեր"
          />
        </label>
        <label className="ent-select">
          <span className="ent-sr">Պրովայդեր</span>
          <select value={provider} onChange={(e) => setProvider(e.target.value)}>
            <option value="">Բոլոր պրովայդերները</option>
            {db.providers().map((p) => (
              <option key={p.id} value={p.name}>
                {p.name} ({p.codes.length})
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="ent-table-wrap" tabIndex={0} role="region" aria-label="SMS կարճ համարների ցուցակ">
        <table className="ent-table ent-table--codes">
          <thead>
            <tr>
              {th("code", "SMS կարճ համար")}
              {th("provider", "Պրովայդեր")}
              {th("price", "գին, դրամ")}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.code}>
                <td>
                  <a href={`sms:${r.code}`} className="ent-codelink">
                    {r.code}
                  </a>
                </td>
                <td>{r.provider}</td>
                <td>
                  {fmt(r.price)}
                  {r.incoming && <span className="ent-incoming"> (incoming SMS)</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="ent-codes__count" role="status">
        {rows.length} / {db.shortCodes().length}
      </p>
    </div>
  );
}
