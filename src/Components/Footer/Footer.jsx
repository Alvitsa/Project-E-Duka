import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CopyRightsText from "./CopyRightsText/CopyRightsText";
import CustomEmailInput from "./CustomEmailInput/CustomEmailInput";
import s from "./Footer.module.scss";
import DownloadAppInfo from "./WebsiteSocialMedia/DownloadAppInfo";

const Footer = () => {
  const { t } = useTranslation();
  const section = "footer.section";

  return (
    <footer className={s.footer}>
      <div className="container">
        <section className={s.sections}>
          <section className={s.section1}>
            <b>
              <Link to="/">E-Duka</Link>
            </b>
            <span>{t(`${section}1.subscribe`)}</span>
            <p>{t(`${section}1.getOffer`)}</p>

            <CustomEmailInput />
          </section>

          <section className={s.section2}>
            <b>{t(`${section}2.support`)}</b>

            <ul>
              <li>We are here for you contact us</li>
              <li>
                <a href="mailto:exclusive@gmail.com">e-duka@gmail.com</a>
              </li>
              <li>
                <a href="tel:+88015-88888-9999">+254 782 138 730</a>
              </li>
            </ul>
          </section>

          <section className={s.section3}>
            <b>{t(`${section}3.account`)}</b>

            <ul>
              <li>
                <Link to="/profile">{t(`${section}3.myAccount`)}</Link>
              </li>
              <li>
                <Link to="/signup">{t(`${section}3.loginRegister`)}</Link>
              </li>
              <li>
                <Link to="/cart">{t(`${section}3.cart`)}</Link>
              </li>
              <li>
                <Link to="/wishlist">{t(`${section}3.wishlist`)}</Link>
              </li>
              <li>
                <Link to="/products">{t(`${section}3.shop`)}</Link>
              </li>
            </ul>
          </section>

          <section className={s.section4}>
            <b>{t(`${section}4.quickLink`)}</b>

            <ul>
              <li>
                <Link to="/privacy">{t(`${section}4.privacyPolicy`)}</Link>
              </li>
              <li>
                <Link to="/terms">{t(`${section}4.termsOfUse`)}</Link>
              </li>
              <li>
                <Link to="/faq">{t(`${section}4.faq`)}</Link>
              </li>
              <li>
                <Link to="/contact">{t(`${section}4.contact`)}</Link>
              </li>
            </ul>
          </section>

          <section className={s.section5}>
            <DownloadAppInfo />
          </section>
        </section>
        <section className="crt">
        <CopyRightsText />
        </section>
      </div>

     
    </footer>
  );
};
export default Footer;
