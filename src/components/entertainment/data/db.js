// A small normalised "database" built from the raw data files.
// Collections: services, tabs, blocks, shortCodes, providers, ussd, prices.
// Everything is derived, so the data files stay the single source of truth.
import { services, ORIGIN } from "./services";
import { details } from "./details";
import { shortCodes } from "./shortcodes";

const byId = (list) => Object.fromEntries(list.map((x) => [x.id, x]));

const detailBySlug = Object.fromEntries(details.map((d) => [d.slug, d]));

const originUrl = (s) => `${ORIGIN}/hy/entertainment/${s.slug}/${s.siteId}/`;

export const collections = (() => {
  const tabs = [];
  const blocks = [];
  const ussd = [];
  const prices = [];

  for (const d of details) {
    d.tabs.forEach((tab, tabIndex) => {
      const tabId = `${d.slug}:${tab.id}`;
      tabs.push({ id: tabId, service: d.slug, key: tab.id, label: tab.label, order: tabIndex });
      tab.blocks.forEach((b, i) => {
        blocks.push({ id: `${tabId}:${i}`, tab: tabId, service: d.slug, order: i, ...b });
        if (b.type === "ussd") ussd.push({ service: d.slug, tab: tab.id, code: b.code, text: b.text });
        if (b.type === "price") prices.push({ service: d.slug, period: b.period, amount: b.amount, currency: "AMD" });
      });
    });
  }

  const providers = [...new Set(shortCodes.map((c) => c.provider))].sort().map((name) => ({
    id: name,
    name,
    codes: shortCodes.filter((c) => c.provider === name).map((c) => c.code),
  }));

  return {
    services: services.map((s) => ({ ...s, originUrl: originUrl(s) })),
    tabs,
    blocks,
    shortCodes,
    providers,
    ussd,
    prices,
  };
})();

export const db = {
  collections,

  services: () => collections.services,
  service: (slug) => collections.services.find((s) => s.slug === slug) || null,
  serviceById: (siteId) => collections.services.find((s) => s.siteId === Number(siteId)) || null,
  detail: (slug) => detailBySlug[slug] || null,
  related: (slug) => collections.services.filter((s) => s.slug !== slug),

  // short codes
  shortCodes: () => collections.shortCodes,
  providers: () => collections.providers,

  // simple full-text search over service titles and summaries
  search(query) {
    const q = query.trim().toLowerCase();
    if (!q) return collections.services;
    return collections.services.filter((s) => `${s.title} ${s.summary}`.toLowerCase().includes(q));
  },

  // everything needed to look a service up by id or slug
  index: { services: byId(collections.services.map((s) => ({ ...s, id: s.slug }))) },
};

export default db;
