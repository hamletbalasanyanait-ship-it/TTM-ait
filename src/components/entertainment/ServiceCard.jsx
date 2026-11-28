import { Link } from "react-router-dom";
import { ArrowIcon } from "./Icons";
import { mediaFor } from "./data/media";

// One card of the listing: illustration, title, description, «Ավելին».
export default function ServiceCard({ service }) {
  const img = mediaFor(service.slug);
  const to = `/entertainment/${service.slug}`;
  const titleId = `ent-card-${service.slug}`;

  return (
    <article className="ent-card" aria-labelledby={titleId}>
      {img && (
        <Link to={to} className="ent-card__media" tabIndex={-1} aria-hidden="true">
          <img src={img.local} alt="" loading="lazy" width="320" height="200" />
        </Link>
      )}
      <div className="ent-card__body">
        <h3 id={titleId} className="ent-card__title">
          {service.title}
        </h3>
        <p className="ent-card__text">{service.summary}</p>
        <Link to={to} className="ent-card__more">
          Ավելին <ArrowIcon width={16} height={16} />
        </Link>
      </div>
    </article>
  );
}
