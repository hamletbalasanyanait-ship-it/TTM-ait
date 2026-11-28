// Generic table of the original pages (prices, prizes). Scrolls on phones.
export default function DataTable({ head, rows, groupRow }) {
  return (
    <div className="ent-table-wrap" tabIndex={0} role="region" aria-label="Աղյուսակ">
      <table className="ent-table">
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {groupRow && (
            <tr className="ent-table__group">
              <td colSpan={head.length}>{groupRow}</td>
            </tr>
          )}
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
