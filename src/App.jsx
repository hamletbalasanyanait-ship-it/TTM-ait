
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
import FixedPhone from "./pages/FixedPhone";
import Business from "./pages/Business";
import Conect from "./pages/Conect";
import EShop from "./pages/E-shop";
import Roming from "./pages/Roming";

const Soon = ({ title }) => (
  <h1 style={{ textAlign: "center" }}>{title}</h1>
);

export default function App() {
  const { pathname } = useLocation();

  const isLogin = pathname === "/account" || pathname === "/login";

  return (
    <div className="app">
      {!isLogin && <Header />}

      <main className="app__main">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Main pages */}
          <Route path="/business" element={<Business />} />
          <Route path="/conect" element={<Conect />} />
          <Route path="/eshop" element={<EShop />} />

          {/* Tariffs */}
          <Route path="/tariffs" element={<Mobile />} />
          <Route path="/tariffs/mobile" element={<Mobile />} />
          <Route path="/tariffs/kosmo" element={<TVCosmo />} />
          <Route path="/tariffs/combo" element={<TVCombo />} />
          <Route path="/tariffs/fixed" element={<FixedPhone />} />

          {/* Internet */}
          <Route path="/internet" element={<Internet />} />
          <Route path="/internet/smartphone" element={<ForPhone />} />
          <Route path="/internet/home-kosmo" element={<ForHome />} />
          <Route path="/internet/home-combo" element={<TVCombo />} />
          <Route path="/internet/computer" element={<Soon title="Internet for computer" />} />
          <Route path="/internet/5g" element={<Soon title="Team 5G" />} />

          {/* Services */}
          <Route path="/services" element={<Soon title="Services" />} />
          <Route path="/services/payment" element={<Soon title="Վճարում և համալրում" />} />
          <Route path="/services/entertainment" element={<Soon title="Զվարճանք" />} />
          <Route path="/services/security" element={<Soon title="Զանգեր և անվտանգություն" />} />
          <Route path="/services/fixed" element={<FixedPhone />} />
          <Route path="/services/teamtv" element={<TeamTV />} />

          {/* Other pages */}
          <Route path="/for-phone" element={<ForPhone />} />
          <Route path="/for-home" element={<ForHome />} />
          <Route path="/tv-combo" element={<TVCombo />} />
          <Route path="/tvcombo" element={<TVCombo />} />
          <Route path="/teamtv" element={<TeamTV />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/offers/geforce" element={<GeForce />} />
          <Route path="/5g" element={<Soon title="Team 5G" />} />
          <Route path="/tvcosmo" element={<TVCosmo />} />
          <Route path="/roming" element={<Roming />} />

          {/* Login */}
          <Route path="/account" element={<Login />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {!isLogin && <Footer />}
    </div>
  );
}
