// Turns bare http(s) URLs inside a text into links.
const URL_RE = /(https?:\/\/[^\s)»]+)/g;

export default function Linkified({ text }) {
  const parts = text.split(URL_RE);
  return parts.map((p, i) =>
    /^https?:\/\//.test(p) ? (
      <a key={i} href={p} target="_blank" rel="noopener noreferrer">
        {p}
      </a>
    ) : (
      <span key={i}>{p}</span>
    ),
  );
}
