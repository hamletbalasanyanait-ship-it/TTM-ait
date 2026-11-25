import Hero from "../components/business/Hero";
import Tariffs from "../components/business/Tariffs";
import Services from "../components/business/Services";
import JoinForm from "../components/business/JoinForm";
import VirtualPbx from "../components/business/VirtualPbx";
import "../components/business/business.css";

// Header and Footer are rendered globally in App.jsx, so they are not repeated here.
export default function Business() {
  return (
    <div className="biz">
      <Hero />
      <Tariffs />
      <Services />
      <JoinForm />
      <VirtualPbx />
    </div>
  );
}
