import { useMemo, useState } from "react";

import {
  ContactOffice,
  ContactOfficeType,
  contactOffices,
} from "../../data/contactInfo";

const officeTypeLabels: Record<ContactOfficeType, string> = {
  terminal: "Terminales",
  encomiendas: "Encomiendas",
  administrativo: "Administrativo",
  aliado: "Aliados",
};

const typeOrder: ContactOfficeType[] = ["terminal", "encomiendas", "administrativo", "aliado"];

const normalize = (value: string): string => value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

const matchesQuery = (office: ContactOffice, query: string): boolean => {
  const normalizedQuery = normalize(query);
  if (normalizedQuery.length === 0) return true;

  return [office.name, office.city, office.phone, office.address, office.email]
    .filter(Boolean)
    .some((field) => normalize(field!).includes(normalizedQuery));
};

const filterByTypes = (office: ContactOffice, activeTypes: Set<ContactOfficeType>): boolean => {
  if (activeTypes.size === 0) return true;
  return activeTypes.has(office.type);
};

export const ContactDirectory = (): JSX.Element => {
  const [query, setQuery] = useState("");
  const [activeTypes, setActiveTypes] = useState<Set<ContactOfficeType>>(new Set());
  const [showAll, setShowAll] = useState(false);

  const filteredOffices = useMemo(() => {
    return contactOffices.filter((office) => matchesQuery(office, query) && filterByTypes(office, activeTypes));
  }, [query, activeTypes]);

  const featuredOffices = useMemo(
    () => filteredOffices.filter((office) => office.tags?.includes("principal")),
    [filteredOffices],
  );

  const secondaryOffices = useMemo(
    () => filteredOffices.filter((office) => !office.tags?.includes("principal")),
    [filteredOffices],
  );

  const toggleType = (type: ContactOfficeType) => {
    setActiveTypes((prev) => {
      const next = new Set(prev);
      if (next.has(type)) {
        next.delete(type);
      } else {
        next.add(type);
      }
      return next;
    });
    setShowAll(true);
  };

  const resetFilters = () => {
    setQuery("");
    setActiveTypes(new Set());
    setShowAll(false);
  };

  const resultCount = filteredOffices.length;
  const isEmpty = resultCount === 0;

  return (
    <section id="directorio" className="page-section bg-[#f8f9fb] py-16" aria-labelledby="directory-heading">
      <div className="mx-auto max-w-6xl space-y-10">
        <header className="space-y-3 text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c01e27]" id="directory-heading">
            Directorio nacional
          </p>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold text-[#1c1f35]">Encuentra la oficina más cercana</h2>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
                Filtra por ciudad o tipo de servicio y descubre nuestros puntos de atención en todo el país. Empieza con las sedes principales y expande para ver el listado completo.
              </p>
            </div>

            <div className="flex flex-col gap-2 text-sm text-slate-500 lg:text-right">
              <span>
                {resultCount} oficinas encontradas
                {activeTypes.size > 0 && ` · ${activeTypes.size} filtros`}
              </span>
              {(query.length > 0 || activeTypes.size > 0 || showAll) && (
                <button type="button" onClick={resetFilters} className="self-start text-xs font-semibold uppercase tracking-[0.25em] text-[#c01e27] lg:self-end">
                  Restablecer filtros
                </button>
              )}
            </div>
          </div>
        </header>

        <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0px_24px_60px_rgba(0,0,0,0.08)]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <input
                type="search"
                value={query}
                onChange={(event) => {
                  const value = event.target.value;
                  setQuery(value);
                  if (value.trim().length > 0) {
                    setShowAll(true);
                  } else if (activeTypes.size === 0) {
                    setShowAll(false);
                  }
                }}
                placeholder="Busca por ciudad, oficina o teléfono"
                className="h-12 w-full rounded-full border border-slate-200 px-5 pr-12 text-sm text-slate-700 focus:border-[#c01e27] focus:outline-none focus:ring-2 focus:ring-[#c01e27]/20"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    if (activeTypes.size === 0) {
                      setShowAll(false);
                    }
                  }}
                  className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-slate-600"
                  aria-label="Limpiar búsqueda"
                >
                  ×
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {typeOrder.map((type) => {
                const isActive = activeTypes.has(type);
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => toggleType(type)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                      isActive
                        ? "border-[#c01e27] bg-[#c01e27] text-white hover:bg-[#a41822]"
                        : "border-slate-200 bg-white text-[#1c1f35] hover:border-[#c01e27]/60"
                    }`}
                  >
                    {officeTypeLabels[type]}
                  </button>
                );
              })}
            </div>
          </div>

          {isEmpty ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center text-sm text-slate-600">
              <p className="font-semibold text-[#1c1f35]">No encontramos oficinas con esos criterios.</p>
              <p className="mt-2">Ajusta la búsqueda o restablece los filtros para ver todo el directorio.</p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#c01e27] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#a41822]"
              >
                Restablecer filtros
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {!showAll && featuredOffices.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c01e27]">Sedes principales</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {featuredOffices.map((office) => (
                      <DirectoryCard key={office.id} office={office} highlight />
                    ))}
                  </div>
                </div>
              )}

              {(showAll || secondaryOffices.length > 0) && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1c1f35]">Listado completo</h3>
                    {!showAll && secondaryOffices.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setShowAll(true)}
                        className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c01e27]"
                      >
                        Ver más oficinas
                      </button>
                    )}
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {(showAll ? filteredOffices : secondaryOffices.slice(0, 4)).map((office) => (
                      <DirectoryCard key={office.id} office={office} />
                    ))}
                  </div>

                  {!showAll && secondaryOffices.length > 4 && (
                    <div className="flex justify-center">
                      <button
                        type="button"
                        onClick={() => setShowAll(true)}
                        className="inline-flex items-center justify-center rounded-full border border-[#c01e27] px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c01e27] transition hover:bg-[#fef3f4]"
                      >
                        Mostrar todo el directorio
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const DirectoryCard = ({ office, highlight = false }: { office: ContactOffice; highlight?: boolean }): JSX.Element => {
  const badgeLabel = officeTypeLabels[office.type];

  return (
    <article
      className={`flex h-full flex-col justify-between rounded-3xl border p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0px_18px_45px_rgba(0,0,0,0.12)] ${
        highlight ? "border-[#c01e27]/40 bg-[#fef3f4]" : "border-slate-200 bg-white"
      }`}
    >
      <header className="mb-4 space-y-2">
        <div className="flex items-center justify-between gap-3">
          <h4 className="text-base font-semibold text-[#1c1f35]">{office.name}</h4>
          <span className="rounded-full bg-[#c01e27]/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#c01e27]">
            {badgeLabel}
          </span>
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">{office.city}</p>
      </header>

      <div className="space-y-3 text-sm text-slate-600">
        <p>{office.address}</p>
        <a href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`} className="font-semibold text-[#c01e27] transition hover:text-[#a41822]">
          {office.phone}
        </a>
        {office.email && (
          <a href={`mailto:${office.email}`} className="block text-xs font-medium text-[#c01e27] transition hover:text-[#a41822]">
            {office.email}
          </a>
        )}
        {office.schedule && <p className="text-xs text-slate-500">{office.schedule}</p>}
      </div>
    </article>
  );
};
