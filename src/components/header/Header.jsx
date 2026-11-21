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
  {
    label: "Սակագներ",
    to: "/tariffs",
    children: [
      { label: "Բջջային կապ", to: "/tariffs/mobile" },
      { label: "Ինտերնետ և TV - ԿՈՍՄՈ", to: "/tariffs/kosmo" },
      { label: "Ինտերնետ և TV - ԿՈՄԲՈ", to: "/tariffs/combo" },
      { label: "Ֆիքսված հեռախոսակապ", to: "/tariffs/fixed" },
    ],
  },
  {
    label: "Ինտերնետ",
    to: "/internet",
    children: [
      { label: "Սմարթֆոնի համար", to: "/internet/smartphone" },
      { label: "Տան համար - ԿՈՍՄՈ", to: "/internet/home-kosmo" },
      { label: "Տան համար - ԿՈՄԲՈ", to: "/internet/home-combo" },
      { label: "Համակարգիչ/պլանշետի համար", to: "/internet/computer" },
      { label: "Team 5G", to: "/internet/5g" },
    ],
  },
  {
    label: "Ծառայություններ",
    to: "/services",
    children: [
      { label: "TeamTV", to: "/services/teamtv" },
      { label: "Վճարում և համալրում", to: "/services/payment" },
      { label: "Զվարճանք", to: "/services/entertainment" },
      { label: "Զանգեր և անվտանգություն", to: "/services/calls-security" },
      { label: "Ֆիքսված հեռախոսակապ", to: "/services/fixed" },
    ],
  },
  {
    label: "Ռոումինգ",
    to: "/roaming",
    children: [
      { label: "Ռոումինգ", to: "/roaming/roaming" },
      { label: "Միջազգային կապ", to: "/roaming/international" },
      { label: "Օգտակար տեղեկատվություն", to: "/roaming/info" },
      { label: "Ծառայություններ", to: "/roaming/services" },
    ],
  },
  {
    label: "Առցանց խանութ",
    to: "/eshop",
    children: [
      { label: "E-shop", to: "/eshop" },
      { label: "Առցանց ապառիկ", to: "/eshop/installment" },
    ],
  },
  {
    label: "Առաջարկներ",
    to: "/offers",
    children: [
      { label: "Շեյքի՛ր և Շահի՛ր", to: "/offers/shake" },
      { label: "Team Բոնուս", to: "/offers/bonus" },
      { label: "Ակցիաներ", to: "/offers/promotions" },
      { label: "MobiBattle", to: "/offers/mobibattle" },
      { label: "GeForce Games", to: "/offers/geforce" },
      { label: "Koreez", to: "/offers/koreez" },
    ],
  },
  {
    label: "Օգնություն",
    to: "/help",
    children: [
      { label: "Հաճախ տրվող հարցեր", to: "/help/faq" },
      { label: "Սարքերի կարգավորումներ", to: "/help/devices" },
      { label: "Բաժանորդային սպասարկում", to: "/help/support" },
      { label: "USSD հրահանգներ և օգտակար համարներ", to: "/help/ussd" },
    ],
  },
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
                  {link.children && (
                    <ul className="ait-header__dropdown">
                      {link.children.map((child) => (
                        <li key={child.to}>
                          <Link to={child.to}>{child.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
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
