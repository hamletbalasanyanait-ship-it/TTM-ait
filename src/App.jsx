
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import Business from "./pages/Business";
import Conect from "./pages/Conect";
import EShop from "./pages/E-shop";
import ForHome from "./pages/Forhome";
import ForPhone from "./pages/Forphone";
import Internet from "./pages/Internet";
import Mobile from "./pages/Mobile";
import TVCombo from "./pages/TVCombo";
import FixedPhone from "./pages/FixedPhone";
import Login from "./pages/Login";
import GeForce from "./pages/GeForce";

import "./App.css";

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
          <Route path="/business" element={<Business />} />
          <Route path="/eshop" element={<EShop />} />

          {/* Tariffs */}
          <Route path="/tariffs" element={<Mobile />} />
          <Route path="/tariffs/mobile" element={<Mobile />} />
          <Route path="/tariffs/kosmo" element={<ForHome />} />
          <Route path="/tariffs/combo" element={<TVCombo />} />
          <Route path="/tariffs/fixed" element={<FixedPhone />} />

          {/* Internet */}
          <Route path="/internet" element={<Internet />} />
          <Route path="/internet/smartphone" element={<ForPhone />} />
          <Route path="/internet/home-kosmo" element={<ForHome />} />
          <Route path="/internet/home-combo" element={<TVCombo />} />
          <Route path="/internet/computer" element={<Conect />} />
          <Route path="/internet/5g" element={<Soon title="Team 5G" />} />

          {/* Other pages */}
          <Route path="/for-phone" element={<ForPhone />} />
          <Route path="/for-home" element={<ForHome />} />
          <Route path="/tv-combo" element={<TVCombo />} />
          <Route path="/tvcombo" element={<TVCombo />} />
          <Route path="/conect" element={<Conect />} />
          <Route path="/5g" element={<Soon title="Team 5G" />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/offers/geforce" element={<GeForce />} />

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
