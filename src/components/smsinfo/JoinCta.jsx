import Reveal from "../business/Reveal";
import { contact } from "./data/contact";
import "./JoinCta.css";

const mailto =
  `mailto:${contact.email}` +
  `?subject=${encodeURIComponent(contact.subject)}` +
  `&body=${encodeURIComponent(contact.body)}`;

export default function JoinCta() {
  return (
    <section className="sms-section sms-join" id="join">
      <div className="sms-wrap">
        <Reveal>
          <div className="sms-join__box">
            <h2>{contact.title}</h2>
            <p>
              Ուղարկե՛ք միացման հայտ{" "}
              <a href={`mailto:${contact.email}`}>{contact.email}</a> հասցեով,
              կամ զանգահարեք <a href={contact.phoneHref}>{contact.phone}</a>{" "}
              հեռախոսահամարով։
            </p>
            <a className="sms-btn" href={mailto}>
              Միանալ
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
