import Reveal from "./Reveal";
import { services } from "./data/services";
import "./Services.css";

export default function Services() {
  return (
    <section className="biz-section biz-services">
      {services.map(({ id, title, text, Icon }, i) => (
        <Reveal key={id} delay={i * 100}>
          <article className="biz-service">
            <h3>{title}</h3>
            <p>{text}</p>
            <a href="https://www.telecomarmenia.am/hy/b2b/" className="biz-service__link">
              Մանրամասն <span>›</span>
            </a>
            <div className="biz-service__art">
              <Icon size={64} />
            </div>
          </article>
        </Reveal>
      ))}
    </section>
  );
}
