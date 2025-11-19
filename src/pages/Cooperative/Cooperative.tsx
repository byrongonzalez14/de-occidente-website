import { DisclaimerSection } from "../../components/DisclaimerSection";
import { FooterSection } from "../../components/FooterSection";
import { HeaderSection } from "../../components/HeaderSection";
import { SectionHeroBanner } from "../../components/SectionHeroBanner";
import { TravelWithUsSection } from "../../components/TravelWithUsSection";
import { CooperativeAboutSection } from "../../components/cooperative/CooperativeAboutSection";
import { CooperativeMissionVisionSection } from "../../components/cooperative/CooperativeMissionVisionSection";
import { CooperativeQuickLinks } from "../../components/cooperative/CooperativeQuickLinks";
import {
  cooperativeAbout,
  cooperativeHero,
  cooperativeMissionVisionValues,
  cooperativeQuickLinks,
} from "../../data/cooperativeOverview";

export const CooperativePage = (): JSX.Element => {
  return (
    <main className="flex w-full flex-col items-stretch" data-page-id="cooperative">
      <HeaderSection />

      <SectionHeroBanner
        title={cooperativeHero.title}
        subtitle={cooperativeHero.subtitle}
        backgroundImage={cooperativeHero.backgroundImage}
        accentImage={cooperativeHero.accentImage}
      />

      <CooperativeAboutSection
        id={cooperativeAbout.id}
        title={cooperativeAbout.title}
        introduction={cooperativeAbout.introduction}
        paragraphs={cooperativeAbout.paragraphs}
        highlights={cooperativeAbout.highlights}
        media={cooperativeAbout.media}
      />

      <CooperativeMissionVisionSection
        title={cooperativeMissionVisionValues.title}
        cards={cooperativeMissionVisionValues.cards}
      />

      <CooperativeQuickLinks
        title={cooperativeQuickLinks.title}
        description={cooperativeQuickLinks.description}
        items={cooperativeQuickLinks.items}
      />

      <TravelWithUsSection />

      <FooterSection />
      <DisclaimerSection />
    </main>
  );
};
