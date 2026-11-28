import { Hero, Advantages, Terms, Plans, Steps, JoinCta } from "../components/smsinfo";
import "../components/smsinfo/smsinfo.css";

// Header and Footer are rendered globally in App.jsx, so they are not repeated here.
export default function SmsInfo() {
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
