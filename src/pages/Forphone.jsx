import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroImg from './heroImage.js'
import './Forphone.css'

const TABS = [
  { label: 'Սմարթֆոնի համար', to: '/for-phone', icon: 'phone' },
  { label: 'Տան համար - ԿՈՍՄՈ', to: '/for-home', icon: 'tv' },
  { label: 'Տան համար - ԿՈՄԲՈ', to: '/tvcombo', icon: 'tv' },
  { label: 'Համակարգչի/պլանշետի համար', to: '/conect', icon: 'pc' },
  { label: 'Team 5G', to: '/5g', icon: '5g' },
]

const CRUMBS = [
  { label: 'Գլխավոր', to: '/' },
  { label: 'Անհատներին', to: '/' },
  { label: 'Ինտերնետ', to: '/internet' },
  { label: 'Սմարթֆոնի համար' },
]

const SUBTABS = ['Կանխավճարային', 'Հետվճարային']

const GIGA_DESC = 'Գերարագ ինտերնետ փաթեթ սմարթֆոնի համար'
const MEGA_DESC = 'Օրական Ինտերնետ սմարթֆոնի համար․ մնացորդն այլևս չի զրոյանում'

const SECTIONS = [
  {
    id: 'unlimit',
    title: 'Անսահմանափակ հավելվածներ',
    cards: [
      { title: 'Video Unlimit', text: 'Միացրու և վայելիր անսահմանափակ տեսանյութերը' },
      { title: 'Music Unlimit', text: 'Միացրու և վայելիր անսահմանափակ երաժշտությունը' },
      { title: 'Social Unlimit', text: 'Միացրու և վայելիր անսահմանափակ սոցիալական ցանցերը' },
      { title: 'Messenger Unlimit', text: 'Միացրու և վայելիր անսահմանափակ մեսենջերներ' },
    ],
  },
  {
    id: 'giga',
    title: 'Giga',
    cards: [
      { title: 'Giga 1+1ԳԲ', text: GIGA_DESC },
      { title: 'Giga 2+1ԳԲ', text: GIGA_DESC },
      { title: 'Giga 5+1ԳԲ', text: GIGA_DESC },
      { title: 'Giga 10 ԳԲ', text: GIGA_DESC },
      { title: 'Giga 15 ԳԲ', text: GIGA_DESC },
    ],
  },
  {
    id: 'mega',
    title: 'Mega',
    cards: [
      { title: 'Mega 300+', text: MEGA_DESC },
      { title: 'Mega 500+', text: MEGA_DESC },
      { title: 'Mega 300', text: 'Օրական Ինտերնետ սմարթֆոնի համար։' },
      { title: 'Mega 500', text: 'Օրական Ինտերնետ սմարթֆոնի համար' },
    ],
  },
  {
    id: '3gb',
    title: 'Փաթեթ «3ԳԲ» = 500֏',
    cards: [
      {
        title: '«3ԳԲ»',
        text: 'Ինտերնետ փաթեթ «ՍՄԱՐԹ» և «Be Free» կանխավճարային սակագնային փաթեթների…',
      },
    ],
  },
]

const S = {
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

function TabIcon({ name }) {
  switch (name) {
    case 'phone':
      return (
        <svg {...S}>
          <rect x="14" y="3" width="20" height="42" rx="4" />
          <circle cx="24" cy="38" r="1.3" fill="currentColor" />
        </svg>
      )
    case 'tv':
      return (
        <svg {...S}>
          <rect x="4" y="14" width="30" height="22" rx="3" />
          <path d="m13 14-5-8M22 14l5-8" />
          <rect x="26" y="26" width="18" height="13" rx="2" fill="#fff" />
        </svg>
      )
    case 'pc':
      return (
        <svg {...S}>
          <rect x="4" y="5" width="30" height="24" rx="3" />
          <path d="M19 29v8M12 38h14" />
          <rect x="30" y="16" width="13" height="24" rx="3" fill="#fff" />
        </svg>
      )
    default:
      return (
        <svg {...S}>
          <rect x="12" y="3" width="24" height="42" rx="4" />
          <text x="24" y="31" textAnchor="middle" fontSize="15" fontWeight="700" fill="currentColor" stroke="none">5G</text>
        </svg>
      )
  }
}

export default function ForPhone() {
  const [closed, setClosed] = useState({})
  const toggle = (id) => setClosed((c) => ({ ...c, [id]: !c[id] }))

  return (
    <div className="fp">
      {/* HERO */}
      <section className="fp-hero">
        <img className="fp-hero__img" src={heroImg} alt="Social, Video, Messenger, Music Unlimit" />
      </section>

      <div className="fp-container">
        {/* TABS */}
        <nav className="fp-tabs" aria-label="Ինտերնետ">
          {TABS.map((t, i) => (
            <Link key={t.label} to={t.to} className={`fp-tabs__item ${i === 0 ? 'is-active' : ''}`}>
              <TabIcon name={t.icon} />
              <span>{t.label}</span>
            </Link>
          ))}
        </nav>

        {/* CRUMBS */}
        <ul className="fp-crumbs">
          {CRUMBS.map((c, i) => (
            <li key={c.label}>
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span>{c.label}</span>}
              {i < CRUMBS.length - 1 && <i aria-hidden="true">›</i>}
            </li>
          ))}
        </ul>

        {/* SUBTABS */}
        <div className="fp-subtabs">
          {SUBTABS.map((s, i) => (
            <button key={s} type="button" className={i === 0 ? 'is-active' : ''}>
              {s}
            </button>
          ))}
        </div>

        {/* HEAD */}
        <h1 className="fp-title">Սմարթֆոնի համար</h1>

        {/* SECTIONS */}
        {SECTIONS.map((sec) => {
          const isClosed = !!closed[sec.id]
          return (
            <section key={sec.id} className="fp-section">
              <button
                type="button"
                className="fp-section__head"
                aria-expanded={!isClosed}
                onClick={() => toggle(sec.id)}
              >
                <h2>{sec.title}</h2>
                <span className={`fp-section__arrow ${isClosed ? 'is-closed' : ''}`} />
              </button>

              {!isClosed && (
                <div className="fp-grid">
                  {sec.cards.map((card) => (
                    <article key={card.title} className="fp-card">
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                      <a href="#" className="fp-card__btn">Մանրամասն</a>
                    </article>
                  ))}
                </div>
              )}
            </section>
          )
        })}

        {/* NOTE */}
        <p className="fp-note">
          Արխիվային սակագնային և ինտերնետ <a href="#">փաթեթներ</a>
        </p>
      </div>
    </div>
  )
}