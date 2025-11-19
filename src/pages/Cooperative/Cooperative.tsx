import { DisclaimerSection } from "../../components/DisclaimerSection";
import { FooterSection } from "../../components/FooterSection";
import { HeaderSection } from "../../components/HeaderSection";
import { SectionHeroBanner } from "../../components/SectionHeroBanner";
import { TravelWithUsSection } from "../../components/TravelWithUsSection";
import { CooperativeAboutSection } from "../../components/cooperative/CooperativeAboutSection";
import { CooperativeMissionVisionSection } from "../../components/cooperative/CooperativeMissionVisionSection";
import { CooperativeSectionCarousel } from "../../components/cooperative/CooperativeSectionCarousel";
import {
  cooperativeAbout,
  cooperativeHero,
  cooperativeMissionVisionValues,
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
        id="misiones-valores"
        title={cooperativeMissionVisionValues.title}
        cards={cooperativeMissionVisionValues.cards}
      />

      <CooperativeSectionCarousel className="pt-8 pb-20" />

      <TravelWithUsSection />

      <FooterSection />
      <DisclaimerSection />
    </main>
  );
};
