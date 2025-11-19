import { useMemo, useState } from "react";

import { ROUTES, type RouteRecord } from "../../data/routes";

interface DestinationScheduleTableProps {
  cityName: string;
  cityId: string;
}

const DEFAULT_VISIBLE_COUNT = 4;
const STOP_DELIMITER_REGEX = /\s*[–—-]\s*/;

const currencyFormatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

const normalizeCity = (value: string): string =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[-_/]+/g, " ")
    .trim()
    .toLowerCase();

const formatRouteName = (value: string): string => {
  const segments = value
    .split(STOP_DELIMITER_REGEX)
    .map((segment) => segment.trim())
    .filter(Boolean);

  if (segments.length >= 2) {
    return segments.join(" → ");
  }

  return value.trim();
};

const matchesCity = (candidate: string, normalizedCity: string, normalizedCityId: string): boolean => {
  if (!candidate) return false;
  const candidateNormalized = normalizeCity(candidate);
  return candidateNormalized === normalizedCity || candidateNormalized === normalizedCityId;
};

const dedupeByFullName = (routes: RouteRecord[]): RouteRecord[] => {
  const seen = new Set<string>();
  return routes.filter((route) => {
    if (seen.has(route.nombre_completo)) {
      return false;
    }
    seen.add(route.nombre_completo);
    return true;
  });
};

export const DestinationScheduleTable = ({ cityName, cityId }: DestinationScheduleTableProps): JSX.Element => {
  const normalizedCityName = normalizeCity(cityName ?? "");
  const normalizedCityId = normalizeCity(cityId ?? "");

  const matchingRoutes = useMemo(() => {
    if (!normalizedCityName && !normalizedCityId) {
      return [];
    }

    const filtered = ROUTES.filter((route) =>
      matchesCity(route.origen, normalizedCityName, normalizedCityId) ||
      matchesCity(route.destino, normalizedCityName, normalizedCityId),
    );

    const prioritized = filtered.sort((a, b) => {
      const aStartsInCity = matchesCity(a.origen, normalizedCityName, normalizedCityId) ? 0 : 1;
      const bStartsInCity = matchesCity(b.origen, normalizedCityName, normalizedCityId) ? 0 : 1;

      if (aStartsInCity !== bStartsInCity) {
        return aStartsInCity - bStartsInCity;
      }

      return a.nombre_completo.localeCompare(b.nombre_completo, "es", { sensitivity: "base" });
    });

    return dedupeByFullName(prioritized);
  }, [normalizedCityId, normalizedCityName]);

  const [showAll, setShowAll] = useState(false);

  const visibleRoutes = showAll ? matchingRoutes : matchingRoutes.slice(0, DEFAULT_VISIBLE_COUNT);
  const hasMoreRoutes = matchingRoutes.length > DEFAULT_VISIBLE_COUNT;

  if (matchingRoutes.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-200 bg-white px-6 py-10 text-center text-sm text-slate-600 shadow-[0px_12px_30px_rgba(0,0,0,0.05)]">
        <p className="text-base font-semibold text-[#1c1f35]">Estamos actualizando las rutas para este destino.</p>
        <p className="mt-2">Por favor consulta con nuestras taquillas para confirmar horarios y precios vigentes.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3 rounded-3xl border border-[#c01e27]/20 bg-white p-5 shadow-[0px_14px_32px_rgba(0,0,0,0.08)]">
      <header className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-base font-semibold text-[#1c1f35]">
          {matchingRoutes.length} ruta{matchingRoutes.length === 1 ? "" : "s"} hacia o desde {cityName}
        </h3>
        <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Precios sujetos a cambios sin previo aviso.</p>
      </header>

      <div className="overflow-hidden rounded-2xl border border-[#c01e27]/12">
        <table className="w-full border-collapse text-left">
          <thead className="bg-[#fef3f4] text-[11px] uppercase tracking-[0.18em] text-[#c01e27]">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">Ruta</th>
              <th scope="col" className="px-4 py-3 font-semibold text-right">Precio del tiquete</th>
            </tr>
          </thead>
          <tbody>
            {visibleRoutes.map((route, index) => {
              const priceLabel =
                typeof route.precio_tiquete === "number"
                  ? currencyFormatter.format(route.precio_tiquete)
                  : "Por definir";

              const rowClassName = index % 2 === 0 ? "bg-white" : "bg-[#fef3f4]/60";

              return (
                <tr key={route.id} className={`${rowClassName} text-sm text-[#1c1f35]`}> 
                  <td className="px-4 py-3 font-semibold">{formatRouteName(route.nombre_completo)}</td>
                  <td className="px-4 py-3 text-right font-semibold">
                    <span className="text-xs uppercase tracking-[0.18em] text-slate-500 sm:hidden">Precio del tiquete:&nbsp;</span>
                    <span className="text-base text-[#1c1f35]">{priceLabel}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {hasMoreRoutes && (
        <div className="text-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-[#c01e27] px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#c01e27] transition hover:bg-[#c01e27] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c01e27]"
          >
            {showAll ? "Ver menos" : "Ver más"}
          </button>
        </div>
      )}
    </div>
  );
};
