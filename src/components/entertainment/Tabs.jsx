import { useId, useRef, useState } from "react";

// Accessible tabs (WAI-ARIA tabs pattern): arrow keys, Home and End move focus.
export default function Tabs({ tabs, renderPanel }) {
  const uid = useId();
  const [active, setActive] = useState(tabs[0]?.id);
  const refs = useRef({});

  const focusTab = (id) => {
    setActive(id);
    refs.current[id]?.focus();
  };

  const onKeyDown = (e, index) => {
    let next = null;
    if (e.key === "ArrowRight") next = (index + 1) % tabs.length;
    if (e.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = tabs.length - 1;
    if (next === null) return;
    e.preventDefault();
    focusTab(tabs[next].id);
  };

  return (
    <div className="ent-tabs">
      <div className="ent-tabs__list" role="tablist" aria-label="Բաժիններ">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => (refs.current[t.id] = el)}
            id={`${uid}-tab-${t.id}`}
            role="tab"
            type="button"
            className={`ent-tabs__tab${active === t.id ? " is-active" : ""}`}
            aria-selected={active === t.id}
            aria-controls={`${uid}-panel-${t.id}`}
            tabIndex={active === t.id ? 0 : -1}
            onClick={() => setActive(t.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tabs.map((t) => (
        <div
          key={t.id}
          id={`${uid}-panel-${t.id}`}
          role="tabpanel"
          className="ent-tabs__panel"
          aria-labelledby={`${uid}-tab-${t.id}`}
          hidden={active !== t.id}
          tabIndex={0}
        >
          {active === t.id && renderPanel(t)}
        </div>
      ))}
    </div>
  );
}
