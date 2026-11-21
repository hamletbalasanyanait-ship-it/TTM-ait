import "../../public/components/anhatner/anhatner-himnakan/AnhatnerHimnakan.css";
import Hero from "../../public/components/anhatner/anhatner-himnakan/hero/Hero.jsx";
import Categories from "../../public/components/anhatner/anhatner-himnakan/categories/Categories.jsx";
import JoinBanner from "../../public/components/anhatner/anhatner-himnakan/join-banner/JoinBanner.jsx";
import News from "../../public/components/anhatner/anhatner-himnakan/news/News.jsx";
import MyTeamApp from "../../public/components/anhatner/anhatner-himnakan/my-team-app/MyTeamApp.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <JoinBanner />
      <News />
      <MyTeamApp />
    </>
  );
}