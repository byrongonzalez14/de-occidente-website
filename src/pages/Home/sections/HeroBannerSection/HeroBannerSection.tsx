import { Link } from "react-router-dom";

import { TrackingSection } from "../TrackingSection";

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section
      className="relative isolate flex min-h-[600px] w-full items-center bg-[#1c1f35]"
      aria-label="Hero banner"
    >
      <img
        className="absolute inset-0 h-full w-full object-cover"
        alt="Bus de Occidente en carretera al atardecer"
        src="/img/general/hero-banner-deOccidente.jpg"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#1c1f35]/70 via-[#1c1f35]/40 to-transparent" aria-hidden="true" />

      <div className="page-section relative z-10 flex w-full flex-col items-center justify-between gap-12 py-24 text-center lg:flex-row lg:items-center lg:text-left">
        <div className="flex w-full max-w-xl flex-col items-center gap-6 text-center sm:items-start sm:text-left lg:w-1/2">
          <h1 className="font-subt-tulo-deoccidente text-5xl font-bold leading-tight text-white">
          Transportamos tus sueños
        </h1>

          <Link
            to="/destinos-u45-desktop"
            aria-label="Conoce nuestras rutas de transporte"
            className="inline-flex items-center justify-center rounded-full bg-[#c01e27] px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white shadow-[0px_10px_25px_rgba(192,30,39,0.45)] transition hover:bg-[#a01820] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Conoce nuestras rutas
          </Link>
        </div>

        <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
          <TrackingSection className="mx-auto w-full max-w-sm sm:max-w-md lg:ml-auto lg:mr-0 lg:max-w-xs" />
        </div>
      </div>
    </section>
  );
};
