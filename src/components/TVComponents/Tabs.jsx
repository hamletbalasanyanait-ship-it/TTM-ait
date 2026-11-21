import { useState } from 'react';
import TermsTab from './TermsTab';

const TABS = [
  { id: 'included', label: 'Փաթեթում ներառված է' },
  { id: 'terms', label: 'Պայմաններ' },
];

export default function Tabs({ included }) {
  const [tab, setTab] = useState('included');

  return (
    <div>
      <div className="tv-combo__tabs" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            className={tab === t.id ? 'is-active' : ''}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="tv-combo__tab-body" role="tabpanel">
        {tab === 'included' ? (
          <ul>{included.map((x) => <li key={x}>{x}</li>)}</ul>
        ) : (
          <TermsTab />
        )}
      </div>
    </div>
  );
}