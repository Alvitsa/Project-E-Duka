import { useTranslation } from "react-i18next";
import s from "./ContactCardInfo.module.scss";
import ContactInfo from "./ContactInfo";

const ContactInfoCard = () => {
  const { t } = useTranslation();
  const contactInfo = "contactPage.contactInfoCard";
  const phoneSectionTitle = t(`${contactInfo}.phoneSection.title`);
  const weAreAvailableTrans = t(`${contactInfo}.phoneSection.weAreAvailable`);
  const phoneTrans = t(`${contactInfo}.phoneSection.phoneNumber`);

  const emailSectionTitle = t(`${contactInfo}.emailSection.title`);
  const fillOutTrans = t(`${contactInfo}.emailSection.fillOut`);
  const customersEmailTrans = t(`${contactInfo}.emailSection.customersEmail`);
  const supportEmailTrans = t(`${contactInfo}.emailSection.supportEmail`);

  return (
    <section className={s.contactInfo}>
      <ContactInfo iconName="phone" title={phoneSectionTitle}>
        <p>{weAreAvailableTrans}</p>
        <p>
          {phoneTrans + ": "}
          <a href="tel:+254782138730">+254782138730</a>
        </p>
      </ContactInfo>

      <div className={s.horizontalLine} />

      <ContactInfo iconName="email2" title={emailSectionTitle}>
        <p>{fillOutTrans}</p>
        <p>
          {customersEmailTrans + ": "}
          <a href="mailto:customer@eduka.com">customer@eduka.com</a>
        </p>

        <p>
          {supportEmailTrans + ": "}
          <a href="mailto:support@eduka.com">support@eduka.com</a>
        </p>
      </ContactInfo>
    </section>
  );
};

export default ContactInfoCard;
