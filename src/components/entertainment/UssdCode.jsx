import { useState } from "react";
import { DialIcon, CopyIcon, CheckIcon } from "./Icons";

// A USSD code as a tel: link (# is encoded) with a copy button.
export default function UssdCode({ code, text }) {
  const [copied, setCopied] = useState(false);
  const href = `tel:${code.replace(/#/g, "%23")}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard not available - the tel: link still works */
    }
  };

  return (
    <div className="ent-action">
      {text && <p className="ent-action__text">{text}</p>}
      <div className="ent-action__row">
        <a className="ent-code" href={href}>
          <DialIcon width={18} height={18} />
          <span>{code}</span>
        </a>
        <button type="button" className="ent-copy" onClick={copy} aria-label={`Պատճենել ${code}`}>
          {copied ? <CheckIcon width={16} height={16} /> : <CopyIcon width={16} height={16} />}
          <span aria-live="polite">{copied ? "Պատճենված է" : "Պատճենել"}</span>
        </button>
      </div>
    </div>
  );
}
