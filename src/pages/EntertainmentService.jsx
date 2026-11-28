import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { ServiceDetail, db } from "../components/entertainment";
import "../components/entertainment/entertainment.css";

// /entertainment/:slug and /entertainment/:slug/:id
// The second form mirrors the original URLs (/hy/entertainment/koreez/2416/).
export default function EntertainmentService() {
  const { slug, id } = useParams();

  // resolve by slug first, then by the numeric id of the original site
  const service = db.service(slug) || (id ? db.serviceById(id) : null);
  const detail = service ? db.detail(service.slug) : null;

  useEffect(() => {
    if (!detail) return undefined;
    window.scrollTo(0, 0);
    const previous = document.title;
    document.title = detail.documentTitle;
    return () => {
      document.title = previous;
    };
  }, [detail]);

  if (!detail) return <Navigate to="/entertainment" replace />;
  // /entertainment/<wrong-slug>/<right-id> -> canonical url
  if (service.slug !== slug) return <Navigate to={`/entertainment/${service.slug}`} replace />;

  return (
    <div className="ent">
      <ServiceDetail detail={detail} />
    </div>
  );
}
