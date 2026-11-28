import { useEffect } from "react";
import { Hero, Advantages, Terms, Plans, Steps, JoinCta } from "../components/smsinfo";
import "../components/smsinfo/smsinfo.css";

// Header and Footer are rendered globally in App.jsx, so they are not repeated here.
export default function SmsInfo() {
  // same tab title as the original page
  useEffect(() => {
    window.scrollTo(0, 0);
    const previous = document.title;
    document.title = "SMS-ինֆո | Team";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="sms">
      <Hero />
      <Advantages />
      <Terms />
      <Plans />
      <Steps />
      <JoinCta />
    </div>
  );
}
