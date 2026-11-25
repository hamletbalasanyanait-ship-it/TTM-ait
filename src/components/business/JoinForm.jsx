import { useState } from "react";
import Reveal from "./Reveal";
import "./JoinForm.css";

const empty = { number: "", name: "", org: "", phone: "" };
const PHONE = /^0\d{8}$/; // 0XXYYYYYY

function validate(f) {
  const errors = {};
  if (!PHONE.test(f.number)) errors.number = "Մուտքագրեք համարը 0XXYYYYYY ֆորմատով";
  if (!f.name.trim()) errors.name = "Լրացրեք անուն ազգանունը";
  if (!f.org.trim()) errors.org = "Լրացրեք կազմակերպությունը";
  if (!PHONE.test(f.phone)) errors.phone = "Մուտքագրեք համարը 0XXYYYYYY ֆորմատով";
  return errors;
}

export default function JoinForm() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => {
    setForm({ ...form, [key]: e.target.value });
    if (errors[key]) setErrors({ ...errors, [key]: undefined });
  };

  const submit = (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;

    // TODO: send `form` to the backend when the API is ready
    console.log("business join request", form);
    setSent(true);
    setForm(empty);
  };

  const field = (key, label, placeholder) => (
    <label className={errors[key] ? "has-error" : ""}>
      {label}
      <input
        placeholder={placeholder}
        value={form[key]}
        onChange={set(key)}
        inputMode={key === "number" || key === "phone" ? "numeric" : "text"}
      />
      {errors[key] && <em>{errors[key]}</em>}
    </label>
  );

  return (
    <section className="biz-join">
      <Reveal>
        <h2>ՏԵՂԱՓՈԽՎԵ՛Ք TEAM ՁԵՐ ՀԱՄԱՐՈՎ</h2>
        <p className="biz-join__sub">
          Դարձե՛ք Team բաժանորդ, օգտվեք ցանցի առավելություններից՝ պահելով ձեր բջջային հեռախոսի համարը:
        </p>
      </Reveal>

      <form className="biz-join__form" onSubmit={submit} noValidate>
        {field("number", "Տեղափոխվող համար (0XXYYYYYY ֆորմատով)*", "0")}
        {field("name", "Անուն Ազգանուն*", "")}
        {field("org", "Կազմակերպություն*", "")}
        {field("phone", "Կոնտակտային համար*", "0")}
        <button type="submit" className="biz-btn biz-btn--red biz-btn--center">
          Միանալ
        </button>
        {sent && (
          <p className="biz-join__ok" role="status">
            Շնորհակալություն, ձեր հայտը ընդունված է:
          </p>
        )}
      </form>
    </section>
  );
}
