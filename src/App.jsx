import { Routes, Route, useLocation } from "react-router-dom";
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
          <Route path="/business" element={<Business />} />
          <Route path="/conect" element={<Conect />} />
          <Route path="/eshop" element={<EShop />} />
          <Route path="/for-home" element={<ForHome />} />
          <Route path="/for-phone" element={<ForPhone />} />
          <Route path="/account" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Home />} />
          
<Route path="/internet/smartphone" element={<ForPhone />} />
        </Routes>
      </main>

      {!isLogin && <Footer />}
    </div>
  );
}