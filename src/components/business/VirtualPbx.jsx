import Reveal from "./Reveal";
import { pbx } from "./data/pbx";
import "./VirtualPbx.css";

export default function VirtualPbx() {
  return (
    <section className="biz-pbx">
      <Reveal>
        <h2>ՎԻՐՏՈՒԱԼ ԱՀԿ</h2>
      </Reveal>

      <div className="biz-pbx__grid">
        {pbx.map(({ id, Icon, text }, i) => (
          <Reveal key={id} delay={i * 120}>
            <div className="biz-pbx__item">
              <div className="biz-pbx__circle">
                <Icon size={56} />
              </div>
              <p>{text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <button type="button" className="biz-btn biz-btn--white biz-btn--center">
        Մանրամասն
      </button>
    </section>
  );
}
