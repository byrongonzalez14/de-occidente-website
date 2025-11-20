import { Link } from "react-router-dom";

import destinations from "../../../../data/featuredDestinations.json";

export const DestinationsSection = (): JSX.Element => {
  return (
    <section className="page-section flex flex-col gap-8 py-12" aria-labelledby="destinations-heading">
      <header className="space-y-2 text-center">
        <h2 id="destinations-heading" className="text-3xl font-semibold text-[#1c1f35]">
          Destinos populares
        </h2>
        <p className="text-sm text-slate-600">
          Inspírate con las rutas que nuestros viajeros más eligen y planea tu próxima escapada.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {destinations.map((destination) => (
          <article
            key={destination.id}
            className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0px_15px_40px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0px_20px_50px_rgba(0,0,0,0.12)]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src={destination.image}
                alt={`Paisaje de ${destination.name}`}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="flex flex-1 flex-col gap-4 px-5 py-5">
              <header>
                <h3 className="text-xl font-semibold text-[#1c1f35]">{destination.name}</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Desde {destination.currency} {destination.price.toLocaleString("es-CO")} por trayecto.
                </p>
              </header>

              <Link
                to={`/destinos/${destination.id}`}
                className="mt-auto inline-flex items-center justify-center rounded-full bg-[#c01e27] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#a41822]"
              >
                Ver detalles de la ruta
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
