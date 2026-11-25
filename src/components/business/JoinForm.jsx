import Reveal from "./Reveal";
import "./JoinForm.css";

export default function JoinForm() {
  return (
    <section className="biz-join">
      <Reveal>
        <h2>ՏԵՂԱՓՈԽՎԵ՛Ք TEAM ՁԵՐ ՀԱՄԱՐՈՎ</h2>
        <p className="biz-join__sub">
          Դարձե՛ք Team բաժանորդ, օգտվեք ցանցի առավելություններից՝ պահելով ձեր բջջային հեռախոսի համարը:
        </p>
      </Reveal>

      <form className="biz-join__form">
        <label>
          Տեղափոխվող համար (0XXYYYYYY ֆորմատով)*
          <input placeholder="0" />
        </label>
        <label>
          Անուն Ազգանուն*
          <input />
        </label>
        <label>
          Կազմակերպություն*
          <input />
        </label>
        <label>
          Կոնտակտային համար*
          <input placeholder="0" />
        </label>
        <button type="submit" className="biz-btn biz-btn--red biz-btn--center">
          Միանալ
        </button>
      </form>
    </section>
  );
}
