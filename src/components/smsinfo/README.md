# smsinfo

Components of the **SMS-ինֆո** page (`/sms-info`), rebuilt from
https://www.telecomarmenia.am/hy/sms-info.

Every style is scoped under `.sms` / `.sms-*`, so it never collides with
the CSS of the other pages. Header and Footer are rendered globally in
`App.jsx`.

## Structure

| File | Section of the page |
| --- | --- |
| `Hero.jsx` | title + lead text, decorative phone |
| `Advantages.jsx` | «Ծառայության առավելությունները» (4 cards) |
| `Terms.jsx` | «Պայմաններ» (limitations + general terms) |
| `Plans.jsx` | «SMS-ինֆո փաթեթներ» (ԲԱԶԱՅԻՆ) |
| `Steps.jsx` | «Ակտիվացման քայլեր» (3 steps) |
| `JoinCta.jsx` | «Թողնել միացման հայտ» (mailto + phone) |
| `data/*.js` | all texts and prices, edit them here |

## Routes

- `/sms-info`
- `/business/sms-info`

The page is also linked from the header: **Առաջարկներ → SMS-ինֆո**.

Scroll-reveal animation is reused from `../business/Reveal`.

## Design notes

- Sections alternate white / soft grey bands (`sms-section--soft`).
- «Պայմաններ» is an accessible accordion (`aria-expanded`, both blocks open by default).
- Hero image of the original is replaced by a CSS phone, because assets cannot be copied offline.
