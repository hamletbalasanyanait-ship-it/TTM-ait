import { useState } from 'react';

export default function Sidebar({ combos, activeId, onSelect }) {
  const activeGroup = combos.find((g) => g.plans.some((p) => p.id === activeId));
  const [openId, setOpenId] = useState(activeGroup?.id);

  return (
    <aside className="tv-combo__sidebar">
      <h2>Ընտրիր քո փաթեթը</h2>
      {combos.map((group) => {
        const isOpen = openId === group.id;
        return (
          <div key={group.id} className="tv-combo__group">
            <button
              type="button"
              className="tv-combo__group-title"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : group.id)}
            >
              {group.title} <span>{isOpen ? '▴' : '▾'}</span>
            </button>
            {isOpen && (
              <ul>
                {group.plans.map((p) => (
                  <li key={p.id}>
                    <button
                      type="button"
                      className={p.id === activeId ? 'is-active' : ''}
                      onClick={() => onSelect(p.id)}
                    >
                      {p.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </aside>
  );
}