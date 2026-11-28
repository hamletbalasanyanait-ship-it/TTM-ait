
import { Routes, Route } from "react-router-dom";

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
import FixedPhone from "./pages/FixedPhone";
import TVCombo from "./pages/TVCombo";

import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />

      <main className="app__main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/conect" element={<Conect />} />
          <Route path="/eshop" element={<EShop />} />
          <Route path="/for-home" element={<ForHome />} />
          <Route path="/for-phone" element={<ForPhone />} />
          <Route path="/internet" element={<Internet />} />
          <Route path="/tariffs" element={<Mobile />} />
          <Route path="/tariffs/mobile" element={<Mobile />} />
          <Route path="/tariffs/combo" element={<TVCombo />} />
          <Route path="/tariffs/fixed" element={<FixedPhone />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/fixed-phone" element={<FixedPhone />} />
          <Route path="/tv-combo" element={<TVCombo />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
