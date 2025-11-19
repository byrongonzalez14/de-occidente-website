import { Navigate, useParams } from "react-router-dom";

import { DisclaimerSection } from "../../components/DisclaimerSection";
import { FooterSection } from "../../components/FooterSection";
import { HeaderSection } from "../../components/HeaderSection";
import { SectionHeroBanner } from "../../components/SectionHeroBanner";
import { TravelWithUsSection } from "../../components/TravelWithUsSection";
import { CooperativeAsideLinks } from "../../components/cooperative/CooperativeAsideLinks";
import { CooperativeContentSections } from "../../components/cooperative/CooperativeContentSections";
import { CooperativeSectionCarousel } from "../../components/cooperative/CooperativeSectionCarousel";
import { cooperativeDetailPages } from "../../data/cooperativePages";

export const CooperativeDetailPage = (): JSX.Element => {
  const { pageId } = useParams<{ pageId: string }>();

  const page = cooperativeDetailPages.find((detailPage) => detailPage.id === pageId);

  if (page == null) {
    return <Navigate to="/nuestra-cooperativa" replace />;
  }

  return (
    <main className="flex w-full flex-col items-stretch" data-page-id={`cooperative-${page.id}`}>
      <HeaderSection />

      <SectionHeroBanner
        title={page.title}
        subtitle={page.subtitle}
        backgroundImage={page.heroImage}
        accentImage={page.accentImage}
      />

      <div className="page-section py-16">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,1.2fr)]">
            <CooperativeContentSections sections={page.sections} />
            <div className="space-y-6 lg:sticky lg:top-24">
              <CooperativeAsideLinks currentId={page.id} />
            </div>
          </div>

          <CooperativeSectionCarousel currentId={page.id} className="pt-0" />
        </div>

        <TravelWithUsSection />
      </div>

      <FooterSection />
      <DisclaimerSection />
    </main>
  );
};
