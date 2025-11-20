import { DisclaimerSection } from "../../components/DisclaimerSection";
import { FooterSection } from "../../components/FooterSection";
import { HeaderSection } from "../../components/HeaderSection";
import { SectionHeroBanner } from "../../components/SectionHeroBanner";
import { TravelWithUsSection } from "../../components/TravelWithUsSection";
import { ContactDirectory } from "../../components/contact/ContactDirectory";
import { ContactFormCard } from "../../components/contact/ContactFormCard";
import { ContactMainOffice } from "../../components/contact/ContactMainOffice";
import { ContactQuickCards } from "../../components/contact/ContactQuickCards";
import { contactQuickCards } from "../../data/contactInfo";

export const ContactPage = (): JSX.Element => {
  return (
    <main className="flex w-full flex-col items-stretch" data-page-id="contact">
      <HeaderSection />

      <SectionHeroBanner
        title="Contacto"
        subtitle="Diligencia nuestros canales y recibe acompañamiento oportuno para tus viajes y envíos."
        backgroundImage="/img/general/banner-rojo.png"
        accentImage={{ src: "/img/general/o-logo.svg" }}
      />

      <ContactQuickCards cards={contactQuickCards} />

      <ContactFormCard />

      <ContactMainOffice />

      <ContactDirectory />

      <TravelWithUsSection />

      <FooterSection />
      <DisclaimerSection />
    </main>
  );
};
