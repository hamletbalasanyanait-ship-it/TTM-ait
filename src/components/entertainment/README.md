# entertainment

Components of the **Զվարճանք** section, rebuilt from
https://www.telecomarmenia.am/hy/entertainment/ and its 11 service pages.

Every style is scoped under `.ent` / `.ent-*`, so it never collides with the
CSS of the other pages. Header and Footer are rendered globally in `App.jsx`.

## Routes

| Route | Page |
| --- | --- |
| `/entertainment`, `/services/entertainment` | listing of the 11 cards |
| `/entertainment/:slug` | one service (`koreez`, `mobi-battle`, ...) |
| `/entertainment/:slug/:id` | same, with the numeric id of the original URL (`/entertainment/koreez/2416`) |
| `/offers/mobibattle`, `/offers/koreez` | redirect to the matching service |

The header entry **Ծառայություններ → Զվարճանք** points to `/entertainment`.

## Data ("DB")

All content lives in `data/` - nothing is hard-coded in the components.

| File | Content |
| --- | --- |
| `data/services.js` | the 11 cards (slug, original `siteId`, title, summary) |
| `data/details/*.js` | one file per service page: lead, tabs, blocks, provider |
| `data/shortcodes.js` | 34 SMS short codes of «SMS Պրեմիում» (code, provider, price) |
| `data/media.js` | manifest of local illustrations and original remote files |
| `data/contact.js` | phone, e-mail, breadcrumb trail |
| `data/db.js` | normalised in-memory db: `services`, `tabs`, `blocks`, `shortCodes`, `providers`, `ussd`, `prices` + query helpers |

Block types understood by `Blocks.jsx`: `p`, `note`, `ul`, `ol`, `link`,
`spec`, `table`, `ussd`, `sms`, `call`, `price`, `shortcodes`.

### JSON export

```bash
node scripts/build-entertainment-db.mjs
```

writes `public/data/entertainment.json` (services, details, short codes).
Re-run it after editing anything in `data/`.

## Media

`public/media/entertainment/*.svg` - one illustration per service, drawn for
this project (the original card images could not be downloaded offline).

The original files (menu icon, SMS Պրեմիում cover, share image) are listed in
`data/media.js`. To fetch them when you have network access:

```bash
node scripts/download-entertainment-media.mjs
```

## Components

| File | Role |
| --- | --- |
| `Hero.jsx`, `Breadcrumbs.jsx` | title block |
| `ServiceGrid.jsx`, `ServiceCard.jsx` | listing + client-side search |
| `ServiceDetail.jsx`, `RelatedServices.jsx` | service page |
| `Tabs.jsx` | WAI-ARIA tabs (arrow keys, Home, End) |
| `Blocks.jsx` | block renderer |
| `UssdCode.jsx`, `SmsCommand.jsx`, `CallNumber.jsx` | tappable `tel:` / `sms:` actions, copy button |
| `PriceTag.jsx`, `DataTable.jsx`, `ShortCodesTable.jsx` | prices and tables (short codes: search, filter, sort) |

## Notes

- Accessible by default: labelled sections, tabs pattern, focusable scroll
  regions, `aria-live` status messages, reduced-motion and print styles.
- `GeForce Games` has two ids on the original site (2395 and 2397); the page
  mirrors 2397, which is the one linked from the listing.
- «SMS Պրեմիում» is 34 rows (an early commit message says 35 - the data is right).
