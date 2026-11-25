import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../components/header/assets/logo.png";

const topTabs = ["Անհատներին", "Բիզնես"];
const methods = [
  { id: "phone", label: "Հեռախոսահամար" },
  { id: "email", label: "Էլ. հասցե" },
];

const Eye = ({ off }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
    <path
      d="M1.5 12S5.5 4.5 12 4.5 22.5 12 22.5 12 18.5 19.5 12 19.5 1.5 12 1.5 12Z"
      fill="currentColor"
    />
    <circle cx="12" cy="12" r="3.6" fill="#fff" />
    <circle cx="12" cy="12" r="1.8" fill="currentColor" />
    {off && (
      <path d="M3 3l18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    )}
  </svg>
);

const social = [
  {
    label: "Facebook",
    d: "M14 8V6.2c0-.8.2-1.2 1.4-1.2H17V2h-2.6C11.3 2 10 3.7 10 6v2H7.5v3H10v11h4V11h2.7l.4-3H14Z",
  },
  {
    label: "Instagram",
    d: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z",
  },
  {
    label: "YouTube",
    d: "M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2C1.5 10 1.5 12 1.5 12s0 2 .5 3.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.5-1.8.5-3.8.5-3.8s0-2-.5-3.8ZM10 15V9l5.2 3L10 15Z",
  },
];

export default function Login() {
  const [segment, setSegment] = useState(0); // 0 = Անհատներին, 1 = Բիզնես
  const [method, setMethod] = useState("phone");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to your auth API
    console.log({ segment, method, login, password });
  };

  return (
    <div className="login">
      <div className="login__container">
        <header className="login__header">
          <Link to="/" aria-label="Team Telecom Armenia">
            <img className="login__logo" src={logo} alt="Team Telecom Armenia" />
          </Link>
          <button type="button" className="login__flag" aria-label="Language" />
        </header>

        <ul className="login__tabs" role="tablist">
          {topTabs.map((label, i) => (
            <li key={label} className="login__tab-item">
              <button
                type="button"
                role="tab"
                aria-selected={segment === i}
                className={`login__tab ${segment === i ? "is-active" : ""}`}
                onClick={() => setSegment(i)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <form className="login__card" onSubmit={handleSubmit}>
          <ul className="login__tabs login__tabs--inner" role="tablist">
            {methods.map((m) => (
              <li key={m.id} className="login__tab-item">
                <button
                  type="button"
                  role="tab"
                  aria-selected={method === m.id}
                  className={`login__tab ${method === m.id ? "is-active" : ""}`}
                  onClick={() => {
                    setMethod(m.id);
                    setLogin("");
                  }}
                >
                  {m.label}
                </button>
              </li>
            ))}
          </ul>

          <label className="login__label" htmlFor="login-user">
            Օգտանուն
          </label>
          <div className="login__line-field">
            {method === "phone" && (
              <>
                <span className="login__prefix">+374</span>
                <span className="login__divider" />
              </>
            )}
            <input
              id="login-user"
              className="login__input"
              type={method === "phone" ? "tel" : "email"}
              inputMode={method === "phone" ? "numeric" : "email"}
              autoComplete="username"
              placeholder="Մուտքագրեք ձեր օգտանունը"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>

          <label className="login__label" htmlFor="login-pass">
            Գաղտնաբառ
          </label>
          <div className="login__pill-field">
            <input
              id="login-pass"
              className="login__input"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Մուտքագրեք գաղտնաբառը"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="login__eye"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((v) => !v)}
            >
              <Eye off={showPassword} />
            </button>
          </div>

          <button type="submit" className="login__btn login__btn--primary">
            Մուտք
          </button>

          <Link to="/forgot-password" className="login__forgot">
            Մոռացե՞լ եք գաղտնաբառը
          </Link>

          <Link to="/register" className="login__btn login__btn--outline">
            Գրանցում
          </Link>
        </form>
      </div>

      <footer className="login__footer">
        <ul className="login__social">
          {social.map((s) => (
            <li key={s.label}>
              <a href="#" aria-label={s.label}>
                <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
                  <path d={s.d} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
        <p>Team © 2026.</p>
      </footer>
    </div>
  );
}