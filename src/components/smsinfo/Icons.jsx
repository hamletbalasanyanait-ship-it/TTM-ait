// Inline SVG icons (stroke = currentColor) used by the SMS-info page.
const base = {
  viewBox: "0 0 48 48",
  width: 48,
  height: 48,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

export function IconReady() {
  return (
    <svg {...base}>
      <path d="M8 12h32a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H22l-8 7v-7H8a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2Z" />
      <path d="m17 23 5 5 9-10" />
    </svg>
  );
}

export function IconLoyalty() {
  return (
    <svg {...base}>
      <path d="M24 40S7 30 7 18.5A9.5 9.5 0 0 1 24 13a9.5 9.5 0 0 1 17 5.5C41 30 24 40 24 40Z" />
    </svg>
  );
}

export function IconSales() {
  return (
    <svg {...base}>
      <path d="M6 40h36" />
      <path d="M10 32l10-10 7 7 13-15" />
      <path d="M31 14h9v9" />
    </svg>
  );
}

export function IconTarget() {
  return (
    <svg {...base}>
      <circle cx="24" cy="24" r="16" />
      <circle cx="24" cy="24" r="9" />
      <circle cx="24" cy="24" r="2.5" fill="currentColor" />
      <path d="M24 4v6M24 38v6M4 24h6M38 24h6" />
    </svg>
  );
}

// advantage id -> icon component
export const advantageIcons = {
  ready: IconReady,
  loyalty: IconLoyalty,
  sales: IconSales,
  target: IconTarget,
};

export function IconChevron() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor"
      strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
      strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function IconMail() {
  return (
    <svg {...base}>
      <rect x="6" y="11" width="36" height="26" rx="3" />
      <path d="m7 14 17 13 17-13" />
    </svg>
  );
}

export function IconGift() {
  return (
    <svg {...base}>
      <rect x="7" y="19" width="34" height="21" rx="2" />
      <path d="M5 13h38v6H5zM24 13v27" />
      <path d="M24 13c-3-7-11-7-10-2.5C14.6 13 24 13 24 13Zm0 0c3-7 11-7 10-2.5C33.4 13 24 13 24 13Z" />
    </svg>
  );
}
