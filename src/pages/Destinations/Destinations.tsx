import { Link } from "react-router-dom";

import destinations from "../../data/destinations.json";
import { DisclaimerSection } from "../../components/DisclaimerSection";
import { FooterSection } from "../../components/FooterSection";
import { HeaderSection } from "../../components/HeaderSection";

import { RouteFinder } from "../../components/routes/RouteFinder";
import { TravelWithUsSection } from "../../components/TravelWithUsSection";

const promotionalBanners = [
  {
    id: "pets",
    alt: "Viaja con tu mascota",
    src: "/img/general/viaja-con-tu-mascota.png",
  },
  {
    id: "shipping",
    alt: "Tus envíos son nuestra prioridad",
    src: "/img/general/servicio-encomiendas.png",
  },
];

export const Destinations = (): JSX.Element => {
  return (
    <main className="flex w-full flex-col items-stretch" data-page-id="destinations">
      <HeaderSection />



      <section className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <RouteFinder resultsMode="modal" />

        <div className="space-y-8">
          <header className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#c01e27] sm:text-4xl">¡Tu próximo viaje comienza aquí!</h2>
            <p className="mt-3 text-base text-slate-600">
              Explora nuestra red de destinos que conectan el corazón del Valle del Cauca y el eje cafetero. Selecciona una
              ruta para conocer los horarios y servicios disponibles.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <article
                key={destination.id}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0px_15px_40px_rgba(0,0,0,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0px_20px_45px_rgba(0,0,0,0.12)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={destination.image}
                    alt={`Paisaje de ${destination.name}`}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-4 px-6 pb-6 pt-5">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">{destination.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Desde {destination.currency} {destination.price.toLocaleString("es-CO")} por trayecto.
                    </p>
                  </div>

                  <Link
                    to={`/destinos/${destination.id}`}
                    className="mt-auto inline-flex items-center justify-center rounded-full bg-[#c01e27] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#a41822]"
                  >
                    Ver detalles de la ruta
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl space-y-12 px-4 pb-16 sm:px-6 lg:px-8">
        <TravelWithUsSection />

        <section
          className="page-section flex flex-col gap-6 rounded-3xl bg-white py-10 shadow-[0px_12px_30px_rgba(0,0,0,0.08)]"
          aria-label="Promociones y servicios"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {promotionalBanners.map((banner) => (
              <img
                key={banner.id}
                className="h-52 w-full rounded-2xl object-cover"
                alt={banner.alt}
                src={banner.src}
                loading="lazy"
              />
            ))}
          </div>
        </section>
      </div>

      <FooterSection />
      <DisclaimerSection />
    </main>
  );
};
