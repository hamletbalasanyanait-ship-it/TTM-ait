import "./Hero.css";

export default function Hero() {
  return (
    <section className="sms-hero" id="top">
      <div className="sms-hero__rings" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="sms-wrap sms-hero__inner">
        <div className="sms-hero__text">
          <h1>SMS-ինֆո</h1>
          <p>
            Պահպանեք մշտական կապ առկա հաճախորդների հետ, ինչպես նաև՝ ներգրավեք
            նորերին։ Ստացեք արդյունավետ և ճկուն հաղորդակցման միջոց: Այս ամենը
            արագ և պարզ տեղադրման և օգտագործման հնարավորություններով։
          </p>
        </div>

        <div className="sms-hero__art" aria-hidden="true">
          <div className="sms-phone">
            <span className="sms-phone__notch" />
            <div className="sms-phone__screen">
              <p className="sms-msg sms-msg--in">Team: Ձեր պատվերը պատրաստ է։</p>
              <p className="sms-msg sms-msg--in">Team: -20% զեղչ մինչև ամսվա վերջ։</p>
              <p className="sms-msg sms-msg--out">Շնորհակալություն</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
