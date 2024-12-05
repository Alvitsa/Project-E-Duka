import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { womenShopping } from "src/Assets/Images/Images";
import useScrollOnMount from "src/Hooks/App/useScrollOnMount";
import FeaturedSectionFeatures from "../Home/FeaturedSection/FeaturedSectionFeatures";
import PagesHistory from "../Shared/MiniComponents/PagesHistory/PagesHistory";
import s from "./About.module.scss";
import AboutHeroSection from "./HeroSection/AboutHeroSection";
import AboutInfoCards from "./InfoCards/AboutInfoCards";
import OurMembersSection from "./OurMembersSection/OurMembersSection";

const About = () => {
  const { t } = useTranslation();

  useScrollOnMount(0);

  return (
    <>
      <Helmet>
        <title>About E-Duka</title>
        <meta name="description"
          content="Welcome to E-Duka, a revolutionary digital platform designed to empower businesses and individuals alike. Our mission is to create a seamless, accessible, and reliable e-commerce ecosystem that bridges the gap between buyers and sellers in the digital age.

At E-Duka, we understand the challenges faced by entrepreneurs, small businesses, and consumers in an increasingly digital world. Whether you’re a retailer looking to expand your reach or a consumer seeking convenience and variety, E-Duka is here to simplify your shopping experience."
        />
        <link ref="preload" as="image" type="image/webp" href={womenShopping} />
      </Helmet>

      <main className={s.aboutPage}>
        <div className="container">
          <PagesHistory history={["/", t("nav.about")]} />
        </div>

        <div className={s.container} id="about-page">
          <AboutHeroSection />
        </div>

        <div className="container">
          {/* <AboutInfoCards /> */}
          {/* <OurMembersSection /> */}
          
          <FeaturedSectionFeatures />
        </div>
      </main>
    </>
  );
};
export default About;
