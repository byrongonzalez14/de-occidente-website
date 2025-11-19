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
import { Link } from "react-router-dom";

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
  const coverageText = coverageItems.length > 0 ? coverageItems.join(" · ") : null;

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
              <section className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0px_18px_45px_rgba(0,0,0,0.08)]">
                <div className="relative grid gap-10 md:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)] md:items-center">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.55em] text-[#c01e27]">{extra.title}</h2>
                      <div className="mt-3 h-0.5 w-12 rounded-full bg-[#c01e27]/45" aria-hidden="true" />
                    </div>
                    {extra.description != null && (
                      <p
                        className={`max-w-2xl ${coverageText != null ? "text-lg font-medium leading-8 text-slate-800" : "text-base leading-relaxed text-slate-700"}`}
                      >
                        {coverageText ?? extra.description}
                      </p>
                    )}
                  </div>

                  {(extraHasVideo || extra.imageSrc != null) && (
                    <div className="relative mx-auto flex w-full max-w-xs justify-center md:max-w-sm">
                      <div className="relative aspect-square w-full overflow-hidden rounded-[32px] border-4 border-white shadow-[0px_25px_60px_rgba(0,0,0,0.12)]">
                        {extraHasVideo ? (
                          <video
                            src={extra.videoSrc}
                            poster={extraPoster}
                            title={extraAlt}
                            className="block h-full w-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                          />
                        ) : (
                          <img src={extra.imageSrc!} alt={extraAlt} className="block h-full w-full object-cover" loading="lazy" />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {detail.form != null && (
              <div className="space-y-8">
                <ServiceFormCard
                  id={detail.form.id}
                  title={detail.form.title}
                  placeholder={detail.form.placeholder}
                  ctaLabel={detail.form.ctaLabel}
                  helperText={detail.form.helperText}
                />

                {detail.id === "encomiendas" && (
                  <section className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0px_18px_45px_rgba(0,0,0,0.08)]">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-[#c01e27]">Documentos relacionados</p>
                        <h3 className="mt-1 text-lg font-semibold text-[#1c1f35]">Contrato de transporte de mercancía</h3>
                        <p className="mt-1 text-sm text-slate-600">Consulta las condiciones legales aplicables al servicio de encomiendas.</p>
                      </div>
                      <Link
                        to="/nuestra-cooperativa/contrato-transporte-mercancia"
                        className="inline-flex items-center justify-center rounded-full border border-[#c01e27] px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#c01e27] transition hover:bg-[#c01e27] hover:text-white"
                      >
                        Ver contrato
                      </Link>
                    </div>
                  </section>
                )}

                {detail.id === "transporte-pasajeros" && (
                  <section className="space-y-4 rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0px_18px_45px_rgba(0,0,0,0.08)]">
                    <div className="space-y-1">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-[#c01e27]">Documentación para viajeros</p>
                      <h3 className="text-lg font-semibold text-[#1c1f35]">Información legal y reglamentaria</h3>
                      <p className="text-sm text-slate-600">Revisa los documentos que garantizan la seguridad y condiciones del transporte de pasajeros.</p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <Link
                        to="/nuestra-cooperativa/reglamento-de-equipaje"
                        className="group flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-[#1c1f35] transition hover:border-[#c01e27] hover:bg-[#fff6f7]"
                      >
                        <span>Reglamento de equipaje</span>
                        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c01e27] group-hover:translate-x-1 transition">Ver</span>
                      </Link>
                      <Link
                        to="/nuestra-cooperativa/contrato-transporte-pasajeros"
                        className="group flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-[#1c1f35] transition hover:border-[#c01e27] hover:bg-[#fff6f7]"
                      >
                        <span>Contrato de transporte de pasajeros</span>
                        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c01e27] group-hover:translate-x-1 transition">Ver</span>
                      </Link>
                    </div>
                  </section>
                )}
              </div>
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
