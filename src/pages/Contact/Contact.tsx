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
        backgroundImage="/img/image-5-4.png"
        accentImage={{ src: "/img/vector-38.svg", className: "-right-8 top-1/2 h-20 -translate-y-1/2" }}
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
