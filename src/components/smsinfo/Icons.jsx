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
