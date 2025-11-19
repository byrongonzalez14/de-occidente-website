import { Link, Navigate, useParams } from "react-router-dom";

import { DisclaimerSection } from "../../components/DisclaimerSection";
import { FooterSection } from "../../components/FooterSection";
import { HeaderSection } from "../../components/HeaderSection";
import { SectionHeroBanner } from "../../components/SectionHeroBanner";
import { TravelWithUsSection } from "../../components/TravelWithUsSection";
import { CooperativeAsideLinks } from "../../components/cooperative/CooperativeAsideLinks";
import { CooperativeContentSections } from "../../components/cooperative/CooperativeContentSections";
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
            <CooperativeAsideLinks currentId={page.id} />
          </div>

          {page.references.length > 0 && (
            <section className="space-y-6">
              <header className="space-y-2 text-center lg:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c01e27]">
                  También te puede interesar
                </p>
                <h2 className="text-2xl font-semibold text-[#1c1f35]">Más sobre nuestra cooperativa</h2>
                <p className="text-sm leading-relaxed text-slate-600">
                  Explora otros apartados con información corporativa y normativa.
                </p>
              </header>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {page.references.map((reference) => (
                  <Link
                    key={reference.id}
                    to={reference.to}
                    className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-[0px_18px_45px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0px_24px_60px_rgba(0,0,0,0.14)]"
                  >
                    <h3 className="text-lg font-semibold uppercase tracking-[0.18em] text-[#c01e27]">{reference.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{reference.description}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-[#c01e27]">
                      Ver detalle
                      <svg
                        className="h-3 w-3 transition-transform group-hover:translate-x-1"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      <TravelWithUsSection />

      <FooterSection />
      <DisclaimerSection />
    </main>
  );
};
