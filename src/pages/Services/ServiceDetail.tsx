import { Navigate, useParams } from "react-router-dom";

import { DisclaimerSection } from "../../components/DisclaimerSection";
import { FooterSection } from "../../components/FooterSection";
import { HeaderSection } from "../../components/HeaderSection";
import { SectionHeroBanner } from "../../components/SectionHeroBanner";
import { TravelWithUsSection } from "../../components/TravelWithUsSection";
import { ServiceAsideLinks } from "../../components/services/ServiceAsideLinks";
import { ServiceFormCard } from "../../components/services/ServiceFormCard";
import { ServiceHero } from "../../components/services/ServiceHero";
import { ServiceHighlights } from "../../components/services/ServiceHighlights";
import { ServiceProcessTimeline } from "../../components/services/ServiceProcessTimeline";
import { SERVICE_DETAILS_MAP } from "../../data/serviceDetails";

export const ServiceDetailPage = (): JSX.Element => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const detail = serviceId ? SERVICE_DETAILS_MAP[serviceId] : undefined;

  if (detail == null) {
    return <Navigate to="/servicios" replace />;
  }

  const extra = detail.extra;
  const coverageItems =
    extra?.description
      ?.split("·")
      .map((item) => item.trim())
      .filter((item) => item.length > 0) ?? [];
  const extraHasVideo = extra?.videoSrc != null;
  const extraPoster = extra?.videoPoster ?? extra?.imageSrc;
  const extraAlt = extra?.imageAlt ?? extra?.title;

  return (
    <main className="flex w-full flex-col items-stretch" data-page-id={`servicio-${detail.id}`}>
      <HeaderSection />

      <SectionHeroBanner
        title={detail.name.toUpperCase()}
        backgroundImage="/img/image-5-4.png"
        accentImage={{ src: "/img/vector-38.svg", className: "-right-6 top-1/2 h-24 -translate-y-1/2" }}
      />

      <div className="mx-auto w-full max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-10">
            <ServiceHero
              title={detail.name}
              subtitle="Servicio De Occidente"
              imageSrc={detail.heroImage}
              imageAlt={detail.heroImageAlt}
              summary={detail.intro}
              ctaHref={detail.cta?.href}
              ctaLabel={detail.cta?.label}
            />

            <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0px_15px_40px_rgba(0,0,0,0.08)]">
              {detail.body.map((paragraph, index) => (
                <p key={index} className={`text-base leading-relaxed text-slate-700 ${index > 0 ? "mt-4" : ""}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <ServiceHighlights items={detail.highlights} />

            <ServiceProcessTimeline steps={detail.process} />

            {extra != null && (
              <section className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-br from-[#fff5f5] via-white to-white p-8 shadow-[0px_18px_45px_rgba(0,0,0,0.08)]">
                <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-[#ffe0e2] opacity-50 blur-3xl" aria-hidden="true" />
                <div className="absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-[#fbe3e5] opacity-60 blur-3xl" aria-hidden="true" />

                <div className="relative grid gap-10 md:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)] md:items-center">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#c01e27] shadow-sm ring-1 ring-[#c01e27]/10">
                      <span aria-hidden="true">⭑</span>
                      <span>{extra.title}</span>
                    </div>
                    <p className="text-base leading-relaxed text-slate-700">{extra.description}</p>
                    {coverageItems.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {coverageItems.map((city) => (
                          <span
                            key={city}
                            className="rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-[#c01e27] shadow-sm ring-1 ring-[#c01e27]/10"
                          >
                            {city}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {(extraHasVideo || extra.imageSrc != null) && (
                    <div className="relative mx-auto flex w-full max-w-xs justify-center md:max-w-sm">
                      <div
                        className="absolute inset-y-6 -left-8 -right-8 rounded-[40px] bg-gradient-to-b from-[#c01e27]/35 via-transparent to-transparent blur-3xl"
                        aria-hidden="true"
                      />
                      <div className="relative w-full overflow-hidden rounded-[32px] border-4 border-white shadow-[0px_25px_60px_rgba(192,30,39,0.25)]">
                        {extraHasVideo ? (
                          <video
                            src={extra.videoSrc}
                            poster={extraPoster}
                            title={extraAlt}
                            className="block aspect-[9/16] w-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                          />
                        ) : (
                          <img src={extra.imageSrc!} alt={extraAlt} className="block aspect-[9/16] w-full object-cover" loading="lazy" />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {detail.form != null && (
              <ServiceFormCard
                id={detail.form.id}
                title={detail.form.title}
                placeholder={detail.form.placeholder}
                ctaLabel={detail.form.ctaLabel}
                helperText={detail.form.helperText}
              />
            )}
          </div>

          <div className="space-y-6 lg:sticky lg:top-24">
            <ServiceAsideLinks currentId={detail.id} />
          </div>
        </div>

        <TravelWithUsSection />
      </div>

      <FooterSection />
      <DisclaimerSection />
    </main>
  );
};
