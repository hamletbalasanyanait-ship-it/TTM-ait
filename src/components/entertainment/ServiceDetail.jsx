import Hero from "./Hero";
import Tabs from "./Tabs";
import Blocks from "./Blocks";
import RelatedServices from "./RelatedServices";
import { ExternalIcon } from "./Icons";
import { mediaFor } from "./data/media";

// Whole service page: hero, tabs, provider line, list of other services.
export default function ServiceDetail({ detail }) {
  const img = mediaFor(detail.slug);

  return (
    <>
      <Hero
        title={detail.title}
        current={detail.title}
        lead={detail.lead}
        leadList={detail.leadList}
      />

      <section className="ent-section ent-section--soft">
        <div className="ent-wrap ent-detail">
          {img && (
            <img className="ent-detail__cover" src={img.local} alt={img.alt} width="320" height="200" />
          )}

          <Tabs tabs={detail.tabs} renderPanel={(t) => <Blocks blocks={t.blocks} />} />

          {(detail.provider || detail.portalUrl) && (
            <p className="ent-provider">
              {detail.provider && <span>Ծառայությունը մատուցվում է {detail.provider} կողմից։</span>}
              {detail.portalUrl && (
                <a href={detail.portalUrl} target="_blank" rel="noopener noreferrer">
                  Պորտալ <ExternalIcon width={14} height={14} />
                </a>
              )}
            </p>
          )}
        </div>
      </section>

      <section className="ent-section">
        <div className="ent-wrap">
          <RelatedServices slug={detail.slug} />
        </div>
      </section>
    </>
  );
}
