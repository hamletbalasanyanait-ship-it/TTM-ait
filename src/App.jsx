<<<<<<< HEAD
import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./pages/Home";
import Mobile from "./pages/Mobile";
import Internet from "./pages/Internet";
import Login from "./pages/Login";
import GeForce from "./pages/GeForce";
import ForPhone from "./pages/Forphone";
import ForHome from "./pages/Forhome";
import TVCombo from "./pages/TVCombo";
import TVCosmo from "./pages/TVCosmo";
import TeamTV from "./pages/TeamTV";

const Soon = ({ title }) => (
  <h1 style={{ textAlign: "center" }}>{title}</h1>
);
=======
import { Routes, Route, useLocation, Form } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Business from "./pages/Business";
import Conect from "./pages/Conect";
import EShop from "./pages/E-shop";
import ForHome from "./pages/Forhome";
import ForPhone from "./pages/Forphone";
import Login from "./pages/Login";
import "./App.css";
import TVCosmo from "./pages/TVCosmo";
import Roming from "./pages/Roming";
>>>>>>> aa4189b (fix imports)

export default function App() {
  const { pathname } = useLocation();
  // the login page has its own logo + footer, so hide the global ones there
  const isLogin = pathname === "/account" || pathname === "/login";

  return (
    <div className="app">
      {!isLogin && <Header />}

      <main className="app__main">
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< HEAD
          <Route path="/business" element={<Soon title="Business" />} />
          <Route path="/eshop" element={<Soon title="E-Shop" />} />

          {/* TeamTV */}
          <Route path="/teamtv" element={<TeamTV />} />
          <Route path="/services/teamtv" element={<TeamTV />} />

          {/* Tariffs */}
          <Route path="/tariffs" element={<Mobile />} />
          <Route path="/tariffs/mobile" element={<Mobile />} />
          <Route path="/tariffs/kosmo" element={<TVCosmo />} />
          <Route path="/tariffs/combo" element={<TVCombo />} />
          <Route path="/tariffs/fixed" element={<Soon title="Fixed phone" />} />

          {/* Internet */}
          <Route path="/internet" element={<Internet />} />
          <Route path="/internet/smartphone" element={<ForPhone />} />
          <Route path="/internet/home-kosmo" element={<ForHome />} />
          <Route path="/internet/home-combo" element={<TVCombo />} />
          <Route path="/internet/computer" element={<Soon title="Internet for computer" />} />
          <Route path="/internet/5g" element={<Soon title="Team 5G" />} />

          {/* Services (placeholders until pages exist) */}
          <Route path="/services" element={<Soon title="Services" />} />
          <Route path="/services/payment" element={<Soon title="Վճարում և համալրում" />} />
          <Route path="/services/entertainment" element={<Soon title="Զվարճանք" />} />
          <Route path="/services/security" element={<Soon title="Զանգեր և անվտանգություն" />} />
          <Route path="/services/fixed" element={<Soon title="Ֆիքսված հեռախոսակապ" />} />

          {/* Other pages */}
          <Route path="/for-phone" element={<ForPhone />} />
          <Route path="/for-home" element={<ForHome />} />
          <Route path="/tv-combo" element={<TVCombo />} />
          <Route path="/tvcombo" element={<TVCombo />} />
          <Route path="/5g" element={<Soon title="Team 5G" />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/offers/geforce" element={<GeForce />} />

          {/* Login */}
=======
          <Route path="/business" element={<Business />} />
          <Route path="/conect" element={<Conect />} />
          <Route path="/eshop" element={<EShop />} />
          <Route path="/for-home" element={<ForHome />} />
          <Route path="/for-phone" element={<ForPhone />} />
>>>>>>> aa4189b (fix imports)
          <Route path="/account" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tvcosmo" element={<TVCosmo />} />
          <Route path="/roming" element={<Roming />} />
          <Route path="*" element={<Home />} />
          

<Route path="/internet/smartphone" element={<ForPhone />} />
        </Routes>
      </main>

      {!isLogin && <Footer />}
    </div>
  );
}