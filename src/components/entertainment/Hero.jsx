import Breadcrumbs from "./Breadcrumbs";
import { media } from "./data/media";

// Top block of the page: breadcrumbs + title (+ lead for service pages).
export default function Hero({ title, lead, leadList, current, showIcon = false }) {
  return (
    <header className="ent-hero">
      <div className="ent-wrap">
        <Breadcrumbs current={current} />
        <div className="ent-hero__row">
          {showIcon && (
            <img
              className="ent-hero__icon"
              src={media.sectionIcon.remote}
              alt=""
              width="45"
              height="45"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          )}
          <h1 className="ent-hero__title">{title}</h1>
        </div>
        {lead && <p className="ent-hero__lead">{lead}</p>}
        {leadList && (
          <ul className="ent-hero__list">
            {leadList.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
