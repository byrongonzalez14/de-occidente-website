import { Link } from "react-router-dom";

import { DisclaimerSection } from "../../components/DisclaimerSection";
import { FooterSection } from "../../components/FooterSection";
import { HeaderSection } from "../../components/HeaderSection";
import { SectionHeroBanner } from "../../components/SectionHeroBanner";
import { TravelWithUsSection } from "../../components/TravelWithUsSection";
import { SERVICES_OVERVIEW } from "../../data/servicesOverview";

export const Services = (): JSX.Element => {
  return (
    <main className="flex w-full flex-col items-stretch" data-page-id="services">
      <HeaderSection />

      <SectionHeroBanner
        title="Servicios de De Occidente"
        subtitle="Soluciones integrales para tus viajes, envíos y experiencias en carretera."
        backgroundImage="/img/image-5-4.png"
        accentImage={{ src: "/img/vector-38.svg", className: "-right-6 top-1/2 h-24 -translate-y-1/2" }}
      />

      <div className="mx-auto w-full max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_OVERVIEW.map((service) => (
            <article
              key={service.id}
              className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0px_18px_45px_rgba(0,0,0,0.1)] transition duration-200 hover:-translate-y-1 hover:shadow-[0px_24px_60px_rgba(0,0,0,0.15)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={`Servicio ${service.name}`}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col gap-5 px-6 py-6">
                <header className="space-y-2">
                  <h2 className="text-2xl font-semibold text-[#1c1f35]">{service.name}</h2>
                  <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
                </header>

                <ul className="space-y-2 text-sm text-slate-600">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#c01e27]" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.detailPath}
                  className="mt-auto inline-flex items-center justify-center rounded-full bg-[#c01e27] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#a41822]"
                >
                  Conoce más
                </Link>
              </div>
            </article>
          ))}
        </section>

        <TravelWithUsSection />

        <section className="rounded-3xl bg-gradient-to-r from-[#c01e27] to-[#e13c44] p-10 text-white shadow-[0px_12px_30px_rgba(0,0,0,0.25)]">
          <div className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">¿Necesitas asesoría personalizada?</h2>
              <p className="text-base leading-relaxed text-white/90">
                Nuestro equipo comercial está listo para ayudarte a planear rutas especiales, convenios empresariales o soluciones logísticas. Escríbenos y recibirás respuesta en menos de 24 horas.
              </p>
              <a
                href="mailto:servicios@deoccidente.com"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#c01e27] transition hover:bg-white/90"
              >
                Contactar asesor
              </a>
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img src="/img/photo-8.png" alt="Asesor De Occidente" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </section>
      </div>

      <FooterSection />
      <DisclaimerSection />
    </main>
  );
};
