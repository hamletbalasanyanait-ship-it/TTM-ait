import { useState } from "react";
import Reveal from "./Reveal";
import "./JoinForm.css";

const empty = { number: "", name: "", org: "", phone: "" };

export default function JoinForm() {
  const [form, setForm] = useState(empty);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

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
          <input placeholder="0" value={form.number} onChange={set("number")} />
        </label>
        <label>
          Անուն Ազգանուն*
          <input value={form.name} onChange={set("name")} />
        </label>
        <label>
          Կազմակերպություն*
          <input value={form.org} onChange={set("org")} />
        </label>
        <label>
          Կոնտակտային համար*
          <input placeholder="0" value={form.phone} onChange={set("phone")} />
        </label>
        <button type="submit" className="biz-btn biz-btn--red biz-btn--center">
          Միանալ
        </button>
      </form>
    </section>
  );
}
