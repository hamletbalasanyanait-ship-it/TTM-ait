import { useState } from 'react';
import { combos } from './combos';
import Breadcrumbs from './Breadcrumbs';
import PlanHeader from './PlanHeader';
import Sidebar from './Sidebar';
import InclusionList from './InclusionList';
import Tabs from './Tabs';
import JoinModal from './JoinModal';
import './TVCombo.css';

export default function TVComboView() {
  const allPlans = combos.flatMap((g) => g.plans);
  const [planId, setPlanId] = useState('combo-4-9900');
  const [joinOpen, setJoinOpen] = useState(false);
  const plan = allPlans.find((p) => p.id === planId);

  return (
    <main className="tv-combo">
      <Breadcrumbs
        items={[
          { label: 'Գլխավոր', href: '/' },
          { label: 'Սակագներ', href: '/' },
          { label: 'Ինտերնետ և TV' },
        ]}
      />
      <div className="tv-combo__layout">
        <Sidebar combos={combos} activeId={planId} onSelect={setPlanId} />
        <section className="tv-combo__content">
          <PlanHeader name={plan.name} price={plan.price} />
          <InclusionList title="Բջջային ներառումներ" items={plan.mobile} />
          <InclusionList title="Ֆիքսված ներառումներ" items={plan.fixed} />
          <button className="tv-combo__join" type="button" onClick={() => setJoinOpen(true)}>
            Միանալ
          </button>
          <Tabs included={plan.included} />
        </section>
      </div>
      <JoinModal open={joinOpen} planName={plan.name} onClose={() => setJoinOpen(false)} />
    </main>
  );
}