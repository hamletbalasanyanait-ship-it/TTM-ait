// Media of the original page.
// `local`  - illustration that ships with this repo (public/media/entertainment).
// `remote` - original file on telecomarmenia.am (hot-linked only where listed).
// scripts/download-entertainment-media.mjs fetches every `remote` file into
// public/media/entertainment/original/ (needs network access).
import { ORIGIN } from "./services.js";

const local = (slug) => `/media/entertainment/${slug}.svg`;

export const media = {
  // header icon of the «Զվարճանք» menu entry (45x45)
  sectionIcon: {
    remote: `${ORIGIN}/files/icons/1/16511222214647/45x45.png`,
    alt: "Զվարճանք",
  },
  // og:image of the SMS Պրեմիում page
  smsPremiumCover: {
    remote: `${ORIGIN}/images/service/1/15553135300406.jpeg`,
    alt: "SMS Պրեմիում",
  },
  // default share image of the site
  share: { remote: `${ORIGIN}/img/fb-share.png?v=2`, alt: "Team" },
  services: {
    "sms-premium": { local: local("sms-premium"), alt: "SMS Պրեմիում" },
    koreez: { local: local("koreez"), alt: "Koreez" },
    "geforce-games": { local: local("geforce-games"), alt: "GeForce Games" },
    "mobi-battle": { local: local("mobi-battle"), alt: "MobiBattle" },
    "melomania-quiz": { local: local("melomania-quiz"), alt: "Մելոմանիա" },
    "book-portal": { local: local("book-portal"), alt: "Գրքային պորտալ" },
    "dating-portal": { local: local("dating-portal"), alt: "Ծանոթությունների պորտալ" },
    "kids-portal": { local: local("kids-portal"), alt: "Մանկական պորտալ" },
    "humor-club": { local: local("humor-club"), alt: "Հումորի ակումբ" },
    funbox: { local: local("funbox"), alt: "Զվարճալի արկղ" },
    laughcall: { local: local("laughcall"), alt: "Ուրախ զանգ" },
  },
};

export const mediaFor = (slug) => media.services[slug] || null;
