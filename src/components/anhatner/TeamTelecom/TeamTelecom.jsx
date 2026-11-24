
import React, { useState } from "react";
import "./TeamTelecom.css";

const tariffs = [
  { name: "Be Free Unlimit", plans: [
    { internet: "∞ ԳԲ", minutes: "300", sms: "30", price: "3,500" },
    { internet: "∞ ԳԲ", minutes: "3,000", sms: "60", price: "5,000" },
    { internet: "∞ ԳԲ", minutes: "5,000", sms: "110", price: "8,000" },
  ]},
  { name: "Be Free", plans: [
    { internet: "10 ԳԲ", minutes: "300", sms: "30", price: "2,500" },
    { internet: "20 ԳԲ", minutes: "1,000", sms: "50", price: "3,500" },
  ]},
  { name: "Be Free Մարզային", plans: [
    { internet: "15 ԳԲ", minutes: "500", sms: "30", price: "3,000" },
  ]},
  { name: "Be Free ԿՈՄԲՈ/ԿՈՄԲՈ-ի համար", plans: [
    { internet: "20 ԳԲ", minutes: "1,000", sms: "50", price: "4,000" },
  ]},
];

const services = [
  { icon: "▯", title: "Բջջային կապ" },
  { icon: "▣", title: "Ինտերնետ և TV - ԿՈՄԲՈ" },
  { icon: "▣", title: "Ինտերնետ և TV - ԿՈՄԲՈ" },
  { icon: "♧", title: "Ֆիքսված հեռախոսակապ" },
];

function TeamTelecom() {
  const [activeService, setActiveService] = useState(0);
  const [activeTab, setActiveTab] = useState("Հետվճարային");
  const [activeTariff, setActiveTariff] = useState(0);

  return (
    <main className="telecom-page">

      {/* HERO BANNER */}
      <section className="promo-banner" id="home">
        <div className="banner-sky"></div>
        <div className="banner-hill hill-one"></div>
        <div className="banner-hill hill-two"></div>
        <div className="banner-grass"></div>

        <div className="banner-lamp">⌒</div>
        <div className="banner-sofa">
          <div className="sofa-person">♟</div>
          <div className="sofa-cushion"></div>
        </div>

        <div className="banner-content">
          <h1>Բի Ֆրի</h1>
          <p>ԴՈՒ ԵՍ ԸՆՏՐՈՒՄ ՔՈ ԱԶԱՏՈՒԹՅՈՒՆԸ</p>
          <div className="banner-offer">
            <strong>3 500</strong>
            <span>անսահմանափակ<br />հնարավորություններ</span>
            <b>∞</b>
          </div>
        </div>
      </section>

      {/* SERVICE SELECTOR */}
      <section className="service-selector">
        {services.map((service, index) => (
          <button
            key={index}
            className={activeService === index ? "service-item active" : "service-item"}
            onClick={() => setActiveService(index)}
          >
            <span className="service-icon">{service.icon}</span>
            <strong>{service.title}</strong>
          </button>
        ))}
      </section>

      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <a href="#home">Գլխավոր</a> ›
        <a href="#home">Սակագներ</a> ›
        <a href="#tariffs">Սակագներ</a> ›
        <span>Բջջային կապ</span>
      </div>

      {/* TABS */}
      <div className="tariff-tabs">
        <button
          className={activeTab === "Կանխավճարային" ? "tab-active" : ""}
          onClick={() => setActiveTab("Կանխավճարային")}
        >
          Կանխավճարային
        </button>
        <button
          className={activeTab === "Հետվճարային" ? "tab-active" : ""}
          onClick={() => setActiveTab("Հետվճարային")}
        >
          Հետվճարային
        </button>
      </div>

      {/* TARIFF CONTENT */}
      <section className="tariff-layout" id="tariffs">

        <aside className="tariff-sidebar">
          <h3>Ընտրիր քո փաթեթը</h3>
          {tariffs.map((tariff, index) => (
            <button
              key={tariff.name}
              onClick={() => setActiveTariff(index)}
              className={activeTariff === index ? "sidebar-active" : ""}
            >
              {tariff.name}
              {activeTariff === index && <span>›</span>}
            </button>
          ))}
        </aside>

        <div className="tariff-content">
          {tariffs.map((tariff, index) => (
            <div className="tariff-group" key={tariff.name}>
              <button
                className="tariff-heading"
                onClick={() => setActiveTariff(activeTariff === index ? -1 : index)}
              >
                <h2>{tariff.name}</h2>
                <span>{activeTariff === index ? "⌃" : "⌄"}</span>
              </button>

              {activeTariff === index && (
                <div className="tariff-details">
                  <p className="tariff-subtitle">{tariff.name}</p>

                  {tariff.plans.map((plan, i) => (
                    <div className="tariff-row" key={i}>
                      <div className="unlimited-icon">∞<small>◉</small></div>
                      <div className="tariff-value">
                        <strong>{plan.minutes}</strong>
                        <small>րոպե</small>
                      </div>
                      <div className="tariff-value">
                        <strong>{plan.sms}</strong>
                        <small> SMS</small>
                      </div>
                      <div className="tariff-value">
                        <strong>{plan.price}</strong>
                        <small> դր. / ամիս</small>
                      </div>
                      <a
                        href="https://www.telecomarmenia.am/"
                        target="_blank"
                        rel="noreferrer"
                        className="subscribe-button"
                      >
                        Մանրամասներ
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <p className="tariff-info">
            Սակագնային պլանների և ինտերնետի
            <a href="https://www.telecomarmenia.am/"> պայմանները</a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default TeamTelecom;
