import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "./assets/logo.png";
import eshop from "./assets/eshop.png";
import cartBtn from "./assets/cart-btn.png";

const tabs = [
  { label: "Անհատներին", to: "/" },
  { label: "Բիզնես", to: "/business" },
];

const navLinks = [
  { label: "Սակագներ", to: "/tariffs" },
  { label: "Ինտերնետ", to: "/internet" },
  { label: "Ծառայություններ", to: "/services" },
  { label: "Ռոումինգ", to: "/roaming" },
  { label: "Ցանց խանութ", to: "/eshop" },
  { label: "Առաջարկներ", to: "/offers" },
  { label: "Օգնություն", to: "/help" },
];

const languages = [
  { label: "Հայ", to: "/hy" },
  { label: "Рус", to: "/ru" },
  { label: "Eng", to: "/en" },
];

export default function Header() {
  return (
    <header className="ait-header">
      <div className="ait-header__top">
        <div className="ait-container ait-header__top-inner">
          <ul className="ait-header__tabs">
            {tabs.map((tab) => (
              <li key={tab.to}>
                <NavLink
                  to={tab.to}
                  end={tab.to === "/"}
                  className={({ isActive }) => (isActive ? "is-active" : "")}
                >
                  {tab.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/eshop" className="ait-header__eshop">
                <img src={eshop} alt="" />
                E-shop
              </Link>
            </li>
          </ul>

          <ul className="ait-header__tools">
            <li>
              <button
                type="button"
                aria-label="Search"
                className="ait-header__icon-btn"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="13"
                  height="13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                >
                  <circle cx="10.5" cy="10.5" r="6.5" />
                  <path d="m16 16 5 5" />
                </svg>
              </button>
            </li>
            {languages.map((lang) => (
              <li key={lang.to}>
                <NavLink
                  to={lang.to}
                  className={({ isActive }) =>
                    `ait-header__lang ${isActive ? "is-current" : ""}`
                  }
                >
                  {lang.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/account" className="ait-header__account">
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
                </svg>
                Անձնական գրասենյակ
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="ait-header__nav">
        <div className="ait-container ait-header__nav-inner">
          <Link
            to="/"
            className="ait-header__logo"
            aria-label="Team Telecom Armenia"
          >
            <img src={logo} alt="Team Telecom Armenia" />
          </Link>
          <nav aria-label="Main">
            <ul className="ait-header__links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => (isActive ? "is-active" : "")}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            to="/payments"
            className="ait-header__cart"
            aria-label="Payments"
          >
            <img src={cartBtn} alt="" />
          </Link>
        </div>
      </div>
    </header>
  );
}
