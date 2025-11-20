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
        backgroundImage="/img/general/banner-rojo.png"
        accentImage={{ src: "/img/general/o-logo.svg" }}
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

        <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-50 px-6 py-6 shadow-sm sm:px-12 lg:px-20 lg:py-8">
          {/* Decorative background element */}
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-slate-200/50 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Recorremos las <span className="text-[#c01e27]">vías</span> contigo
                </h2>
                <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">
                  Cada kilómetro cuenta una historia. Viaja con la tranquilidad de saber que nuestra experiencia y compromiso te acompañan en todo el Valle del Cauca.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/destinos"
                  className="inline-flex items-center justify-center rounded-full bg-[#c01e27] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#c01e27]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#a41822] hover:shadow-xl"
                >
                  Ver destinos
                </Link>
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-bold text-slate-700 transition duration-300 hover:border-slate-300 hover:bg-slate-50"
                >
                  Contáctanos
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/img/general/deOccidente-bus.png"
                  alt="Bus de la cooperativa De Occidente en carretera"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient overlay for better text contrast if needed, or just aesthetic */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <FooterSection />
      <DisclaimerSection />
    </main>
  );
};
