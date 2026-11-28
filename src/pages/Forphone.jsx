
import { useEffect, useRef, useState } from 'react'
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
const MEGA_DESC =
  'Օրական Ինտերնետ սմարթֆոնի համար․ մնացորդն այլևս չի զրոյանում'

const SECTIONS = [
  {
    id: 'unlimit',
    title: 'Անսահմանափակ հավելվածներ',
    subtitle: 'Քո սիրելի հավելվածներն առանց սահմանափակման',
    icon: '✦',
    cards: [
      {
        title: 'Video Unlimit',
        text: 'Միացրու և վայելիր անսահմանափակ տեսանյութերը',
        tag: 'VIDEO',
        symbol: '▶',
      },
      {
        title: 'Music Unlimit',
        text: 'Միացրու և վայելիր անսահմանափակ երաժշտությունը',
        tag: 'MUSIC',
        symbol: '♫',
      },
      {
        title: 'Social Unlimit',
        text: 'Միացրու և վայելիր անսահմանափակ սոցիալական ցանցերը',
        tag: 'SOCIAL',
        symbol: '◎',
      },
      {
        title: 'Messenger Unlimit',
        text: 'Միացրու և վայելիր անսահմանափակ մեսենջերներ',
        tag: 'CHAT',
        symbol: '⌁',
      },
    ],
  },
  {
    id: 'giga',
    title: 'Giga',
    subtitle: 'Գերարագ ինտերնետ՝ ամեն օրվա համար',
    icon: '◈',
    cards: [
      { title: 'Giga 1+1ԳԲ', text: GIGA_DESC, tag: 'GIGA', symbol: '01' },
      { title: 'Giga 2+1ԳԲ', text: GIGA_DESC, tag: 'GIGA', symbol: '02' },
      { title: 'Giga 5+1ԳԲ', text: GIGA_DESC, tag: 'GIGA', symbol: '05' },
      { title: 'Giga 10 ԳԲ', text: GIGA_DESC, tag: 'GIGA', symbol: '10' },
      { title: 'Giga 15 ԳԲ', text: GIGA_DESC, tag: 'GIGA', symbol: '15' },
    ],
  },
  {
    id: 'mega',
    title: 'Mega',
    subtitle: 'Ինտերնետ, որը միշտ քեզ հետ է',
    icon: '⚡',
    cards: [
      { title: 'Mega 300+', text: MEGA_DESC, tag: 'MEGA', symbol: '300' },
      { title: 'Mega 500+', text: MEGA_DESC, tag: 'MEGA', symbol: '500' },
      {
        title: 'Mega 300',
        text: 'Օրական Ինտերնետ սմարթֆոնի համար։',
        tag: 'MEGA',
        symbol: '300',
      },
      {
        title: 'Mega 500',
        text: 'Օրական Ինտերնետ սմարթֆոնի համար',
        tag: 'MEGA',
        symbol: '500',
      },
    ],
  },
  {
    id: '3gb',
    title: 'Փաթեթ «3ԳԲ» = 500֏',
    subtitle: 'Ավելի շատ հնարավորություններ՝ մեկ փաթեթում',
    icon: '✧',
    cards: [
      {
        title: '«3ԳԲ»',
        text: 'Ինտերնետ փաթեթ «ՍՄԱՐԹ» և «Be Free» կանխավճարային սակագնային փաթեթների…',
        tag: 'SPECIAL',
        symbol: '3GB',
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
          <path d="M20 8h8" />
          <circle cx="24" cy="38" r="1.3" fill="currentColor" />
        </svg>
      )

    case 'tv':
      return (
        <svg {...S}>
          <rect x="4" y="12" width="40" height="27" rx="4" />
          <path d="m15 12-6-7M33 12l6-7M18 44h12M24 39v5" />
        </svg>
      )

    case 'pc':
      return (
        <svg {...S}>
          <rect x="4" y="5" width="40" height="28" rx="3" />
          <path d="M19 33v7M29 33v7M13 41h22" />
        </svg>
      )

    default:
      return (
        <svg {...S}>
          <rect x="8" y="5" width="32" height="38" rx="6" />
          <text
            x="24"
            y="28"
            textAnchor="middle"
            fontSize="13"
            fontWeight="800"
            fill="currentColor"
            stroke="none"
          >
            5G
          </text>
        </svg>
      )
  }
}

function Reveal({ children, className = '', delay = 0 }) {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      element.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible')
          observer.unobserve(element)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -35px 0px' }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={elementRef}
      className={`fp-reveal ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function ForPhone() {
  const [closed, setClosed] = useState({})
  const [activeSubtab, setActiveSubtab] = useState(SUBTABS[0])

  const toggle = (id) => {
    setClosed((current) => ({
      ...current,
      [id]: !current[id],
    }))
  }

  return (
    <main className="fp">
      {/* HERO */}
      <section className="fp-hero">
        <div className="fp-hero__glow fp-hero__glow--one" />
        <div className="fp-hero__glow fp-hero__glow--two" />
        <div className="fp-hero__ring fp-hero__ring--one" />
        <div className="fp-hero__ring fp-hero__ring--two" />

        <div className="fp-hero__content">
          <div className="fp-hero__eyebrow">
            <span className="fp-live-dot" />
            TEAM TELECOM ARMENIA
          </div>

          <img
            className="fp-hero__img"
            src={heroImg}
            alt="Social, Video, Messenger, Music Unlimit"
          />
        </div>

        <div className="fp-hero__bottom-line" />
      </section>

      <div className="fp-container">
        {/* TABS */}
        <Reveal className="fp-tabs-reveal">
          <nav className="fp-tabs" aria-label="Ինտերնետ">
            {TABS.map((tab, index) => (
              <Link
                key={tab.label}
                to={tab.to}
                className={`fp-tabs__item ${
                  index === 0 ? 'is-active' : ''
                }`}
              >
                <span className="fp-tabs__icon">
                  <TabIcon name={tab.icon} />
                </span>
                <span>{tab.label}</span>
                {index === 0 && (
                  <span className="fp-tabs__active-dot" />
                )}
              </Link>
            ))}
          </nav>
        </Reveal>

        {/* BREADCRUMBS */}
        <Reveal delay={100}>
          <ul className="fp-crumbs">
            {CRUMBS.map((crumb, index) => (
              <li key={crumb.label}>
                {crumb.to ? (
                  <Link to={crumb.to}>{crumb.label}</Link>
                ) : (
                  <span className="fp-crumbs__current">
                    {crumb.label}
                  </span>
                )}
                {index < CRUMBS.length - 1 && (
                  <i aria-hidden="true">›</i>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* SUBTABS */}
        <Reveal delay={150}>
          <div className="fp-subtabs">
            {SUBTABS.map((tab) => (
              <button
                key={tab}
                type="button"
                className={
                  activeSubtab === tab ? 'is-active' : ''
                }
                onClick={() => setActiveSubtab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </Reveal>

        {/* PAGE TITLE */}
        <Reveal delay={200}>
          <div className="fp-heading">
            <div className="fp-heading__small">
              <span /> ԻՆՏԵՐՆԵՏ ՔՈ ՍՄԱՐԹՖՈՆԻ ՀԱՄԱՐ
            </div>
            <h1 className="fp-title">Սմարթֆոնի համար</h1>
            <p className="fp-heading__description">
              Ընտրիր քեզ հարմար ինտերնետ փաթեթը և մնա կապի մեջ
              ցանկացած պահի։
            </p>
          </div>
        </Reveal>

        {/* SECTIONS */}
        <div className="fp-sections">
          {SECTIONS.map((section, sectionIndex) => {
            const isClosed = !!closed[section.id]

            return (
              <Reveal
                key={section.id}
                className="fp-section-reveal"
                delay={sectionIndex * 70}
              >
                <section
                  className={`fp-section ${
                    isClosed ? 'is-collapsed' : ''
                  }`}
                >
                  <button
                    type="button"
                    className="fp-section__head"
                    aria-expanded={!isClosed}
                    onClick={() => toggle(section.id)}
                  >
                    <span className="fp-section__left">
                      <span className="fp-section__icon">
                        {section.icon}
                      </span>

                      <span className="fp-section__titles">
                        <span className="fp-section__title">
                          {section.title}
                        </span>
                        <span className="fp-section__subtitle">
                          {section.subtitle}
                        </span>
                      </span>
                    </span>

                    <span className="fp-section__right">
                      <span className="fp-section__count">
                        {section.cards.length} ՓԱԹԵԹ
                      </span>
                      <span className="fp-section__arrow">
                        <span />
                      </span>
                    </span>
                  </button>

                  <div
                    className="fp-section__content"
                    aria-hidden={isClosed}
                  >
                    {!isClosed && (
                      <div className="fp-grid">
                        {section.cards.map((card, cardIndex) => (
                          <article
                            key={card.title}
                            className="fp-card"
                            style={{
                              '--card-index': cardIndex,
                              '--card-total': section.cards.length,
                            }}
                          >
                            <div className="fp-card__top">
                              <span className="fp-card__tag">
                                {card.tag}
                              </span>
                              <span className="fp-card__number">
                                {String(cardIndex + 1).padStart(2, '0')}
                              </span>
                            </div>

                            <div className="fp-card__symbol">
                              {card.symbol}
                            </div>

                            <h3>{card.title}</h3>
                            <p>{card.text}</p>

                            <a
                              href="#"
                              className="fp-card__btn"
                              onClick={(event) => event.preventDefault()}
                            >
                              <span>Մանրամասն</span>
                              <span className="fp-card__btn-arrow">
                                →
                              </span>
                            </a>

                            <span className="fp-card__shine" />
                          </article>
                        ))}
                      </div>
                    )}
                  </div>
                </section>
              </Reveal>
            )
          })}
        </div>

        {/* NOTE */}
        <Reveal>
          <div className="fp-note">
            <span className="fp-note__icon">ⓘ</span>
            <p>
              Արխիվային սակագնային և ինտերնետ{' '}
              <a
                href="#"
                onClick={(event) => event.preventDefault()}
              >
                փաթեթներ
              </a>
            </p>
            <span className="fp-note__decoration">TEAM</span>
          </div>
        </Reveal>

        {/* FOOTER DECORATION */}
        <div className="fp-footer-decoration">
          <span />
          <span />
          <span />
        </div>
      </div>
    </main>
  )
}
