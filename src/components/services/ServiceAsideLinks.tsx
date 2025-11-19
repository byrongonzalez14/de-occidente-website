import { Link } from "react-router-dom";

import { SERVICES_OVERVIEW } from "../../data/servicesOverview";

interface ServiceAsideLinksProps {
  currentId: string;
}

export const ServiceAsideLinks = ({ currentId }: ServiceAsideLinksProps): JSX.Element => {
  return (
    <aside className="rounded-3xl border border-slate-200 bg-white shadow-[0px_18px_45px_rgba(0,0,0,0.12)]">
      <header className="border-b border-slate-200 bg-[#c01e27] px-5 py-4">
        <h2 className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-white">Otros servicios</h2>
      </header>
      <ul className="divide-y divide-slate-200">
        {SERVICES_OVERVIEW.map((service) => {
          const isActive = service.id === currentId;
          return (
            <li key={service.id} className={isActive ? "bg-[#fef3f4]" : "bg-white hover:bg-slate-50 transition"}>
              <Link to={service.detailPath} className="flex items-center gap-4 px-4 py-5">
                <div className="h-16 w-16 overflow-hidden rounded-2xl">
                  <img src={service.image} alt={service.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c01e27]">{service.name}</p>
                  <p className="mt-1 text-xs text-slate-600">Descubre detalles</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
