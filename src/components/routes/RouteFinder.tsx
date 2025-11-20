import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { ROUTES, type RouteRecord } from "../../data/routes";

export type RouteFinderVariant = "full" | "compact";

export type RouteFinderResultsMode = "inline" | "modal";

interface RouteFinderProps {
  variant?: RouteFinderVariant;
  defaultOrigin?: string;
  defaultDestination?: string;
  autoSearch?: boolean;
  className?: string;
  resultsMode?: RouteFinderResultsMode;
}

const DISCLAIMER_MESSAGE = "*Los horarios de despacho pueden cambiar si el cupo se completa antes de tiempo.";

const stripVariantSuffix = (value: string): string => value.replace(/\s*\([^)]*\)\s*$/, "").trim();

interface CityKey {
  full: string;
  base: string;
  hasVariant: boolean;
}

const createCityKey = (value: string): CityKey => {
  const trimmed = value.trim();
  const full = trimmed.toLowerCase();
  const baseRaw = stripVariantSuffix(trimmed);
  const base = baseRaw.toLowerCase();
  return {
    full,
    base,
    hasVariant: baseRaw.length > 0 && baseRaw !== trimmed,
  };
};

const cityKeyIsEmpty = (key: CityKey): boolean => key.full.length === 0;

const cityMatches = (candidate: CityKey, target: CityKey): boolean => {
  if (target.full.length === 0) {
    return false;
  }

  if (target.hasVariant) {
    return candidate.full === target.full;
  }

  if (candidate.full === target.full || candidate.base === target.full) {
    return true;
  }

  if (target.base.length > 0) {
    return candidate.full === target.base || candidate.base === target.base;
  }

  return false;
};

const normalizeCity = (value: string): string => createCityKey(value).full;

const STOP_DELIMITER_REGEX = /\s*[–—-]\s*/;

const dedupeStops = (stops: string[]): string[] => {
  const seen = new Set<string>();

  return stops.filter((stop) => {
    const key = normalizeCity(stop);
    if (!key || seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
};

const getRouteStops = (route: RouteRecord): string[] => {
  const parts = route.nombre_completo
    .split(STOP_DELIMITER_REGEX)
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length >= 2) {
    return dedupeStops(parts);
  }

  return dedupeStops([route.origen, route.destino]);
};

const addOptionToMap = (map: Map<string, string>, value: string | null | undefined): void => {
  if (value == null) return;
  const trimmed = value.trim();
  if (trimmed.length === 0) return;
  const normalized = createCityKey(trimmed).full;
  if (!normalized) return;
  if (!map.has(normalized)) {
    map.set(normalized, trimmed);
  }
};

const sortOptions = (values: string[]): string[] => values.sort((a, b) => a.localeCompare(b, "es"));

const buildRouteOptions = (): { originOptions: string[]; destinationOptions: string[] } => {
  const originMap = new Map<string, string>();
  const destinationMap = new Map<string, string>();

  ROUTES.forEach((route) => {
    addOptionToMap(originMap, route.origen);
    addOptionToMap(destinationMap, route.destino);

    const stops = getRouteStops(route);
    stops.forEach((stop, index) => {
      if (index === 0) return;
      addOptionToMap(destinationMap, stop);
    });

    if (route.segmento?.nombre) {
      addOptionToMap(destinationMap, route.segmento.nombre);
    }
  });

  return {
    originOptions: sortOptions(Array.from(originMap.values())),
    destinationOptions: sortOptions(Array.from(destinationMap.values())),
  };
};

const { originOptions: ROUTE_ORIGIN_OPTIONS, destinationOptions: ROUTE_DESTINATION_OPTIONS } = buildRouteOptions();

const filterRoutes = (origin: string, destination: string): RouteRecord[] => {
  const originKey = createCityKey(origin);
  const destinationKey = createCityKey(destination);
  const hasOrigin = !cityKeyIsEmpty(originKey);
  const hasDestination = !cityKeyIsEmpty(destinationKey);

  return ROUTES.filter((route) => {
    const stops = getRouteStops(route);
    if (stops.length === 0) {
      return false;
    }

    const stopKeys = stops.map(createCityKey);

    if (hasOrigin) {
      const originIndices = stopKeys
        .map((stopKey, index) => (cityMatches(stopKey, originKey) ? index : -1))
        .filter((index) => index !== -1);

      if (originIndices.length === 0) {
        return false;
      }

      if (hasDestination) {
        return originIndices.some((originIndex) =>
          stopKeys.some((stopKey, index) => index > originIndex && cityMatches(stopKey, destinationKey)),
        );
      }

      return originIndices.some((originIndex) => originIndex < stopKeys.length - 1);
    }

    if (hasDestination) {
      const destinationIndex = stopKeys.findIndex((stopKey) => cityMatches(stopKey, destinationKey));
      return destinationIndex > 0;
    }

    return true;
  });
};

const ResultsInline = ({ results }: { results: RouteRecord[] }): JSX.Element => {
  if (results.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-200 bg-white px-6 py-10 text-center text-sm text-slate-600 shadow-[0px_12px_30px_rgba(0,0,0,0.05)]">
        <p className="text-base font-semibold text-[#1c1f35]">No encontramos una ruta con los criterios seleccionados.</p>
        <p className="mt-2">Prueba cambiando el origen o destino, o comunícate con nuestras oficinas para una asesoría personalizada.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4" aria-live="polite">
      {results.map((route) => (
        <RouteResultCard key={route.id} route={route} />
      ))}
    </div>
  );
};

interface DropdownFieldProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  isCompact: boolean;
}

const DropdownField = ({ id, label, placeholder, value, options, onChange, isCompact }: DropdownFieldProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const listboxId = `${id}-listbox`;
  const selectionFromListRef = useRef(false);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      if (selectionFromListRef.current) {
        selectionFromListRef.current = false;
        return;
      }

      const normalizedInput = inputValue.trim().toLowerCase();
      if (normalizedInput.length === 0) {
        if (value !== "") onChange("");
        setInputValue("");
        return;
      }

      const exactMatch = options.find((option) => option.toLowerCase() === normalizedInput);
      if (exactMatch) {
        if (exactMatch !== value) {
          onChange(exactMatch);
        }
        setInputValue(exactMatch);
      } else {
        setInputValue(value);
      }
      setActiveIndex(-1);
    }
  }, [isOpen, inputValue, onChange, options, value]);

  const filteredOptions = options.filter((option) => option.toLowerCase().includes(inputValue.trim().toLowerCase()));

  const handleToggle = () => {
    setIsOpen((previous) => {
      const next = !previous;
      if (next) {
        if (filteredOptions.length > 0) {
          setActiveIndex(0);
        } else {
          setActiveIndex(-1);
        }
        window.setTimeout(() => {
          inputRef.current?.focus();
        }, 0);
      }
      return next;
    });
  };

  const handleSelectOption = (option: string) => {
    selectionFromListRef.current = true;
    onChange(option);
    setInputValue(option);
    setIsOpen(false);
    setActiveIndex(-1);
    window.setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleInputFocus = () => {
    setIsOpen(true);
    if (filteredOptions.length > 0) {
      setActiveIndex(0);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setIsOpen(true);
    if (newValue.trim().length === 0) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(0);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        return;
      }
      if (filteredOptions.length === 0) return;
      setActiveIndex((previous) => {
        const next = previous + 1;
        if (next >= filteredOptions.length) return 0;
        return next;
      });
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!isOpen || filteredOptions.length === 0) return;
      setActiveIndex((previous) => {
        if (previous <= 0) return filteredOptions.length - 1;
        return previous - 1;
      });
      return;
    }

    if (event.key === "Enter") {
      const hasActive = activeIndex >= 0 && activeIndex < filteredOptions.length;
      if (isOpen && hasActive) {
        event.preventDefault();
        handleSelectOption(filteredOptions[activeIndex]);
      } else {
        const normalizedInput = inputValue.trim().toLowerCase();
        const exactMatch = options.find((option) => option.toLowerCase() === normalizedInput);
        if (exactMatch) {
          event.preventDefault();
          handleSelectOption(exactMatch);
        }
      }
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      setIsOpen(false);
    }
  };

  return (
    <div className="relative flex flex-col gap-1.5" ref={containerRef}>
      <label htmlFor={id} className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#c01e27]">
        {label}
      </label>
      <div className="relative z-30">
        <input
          ref={inputRef}
          id={id}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-activedescendant={isOpen && activeIndex >= 0 ? `${id}-option-${activeIndex}` : undefined}
          value={inputValue}
          placeholder={placeholder}
          onFocus={handleInputFocus}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={`w-full rounded-full border border-slate-200 bg-white pr-12 text-sm text-slate-700 placeholder:text-slate-400 focus:border-[#c01e27] focus:outline-none focus:ring-2 focus:ring-[#c01e27]/20 ${isCompact ? "h-11 px-4" : "h-12 px-5"
            }`}
        />
        <button
          type="button"
          aria-label={isOpen ? "Cerrar lista" : "Abrir lista"}
          onClick={handleToggle}
          className="absolute inset-y-0 right-3 flex items-center text-base text-slate-400 transition hover:text-[#c01e27]"
        >
          <span className={isOpen ? "rotate-180 transition-transform" : "transition-transform"}>▾</span>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 z-[100] mt-2 max-h-60 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_20px_45px_rgba(0,0,0,0.16)]">
            {filteredOptions.length > 0 ? (
              <ul
                role="listbox"
                id={listboxId}
                aria-labelledby={id}
                className="max-h-60 overflow-y-auto py-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-200/80"
              >
                {filteredOptions.map((option, optionIndex) => {
                  const isActive = optionIndex === activeIndex;
                  const isSelected = option === value;
                  return (
                    <li key={`${id}-option-${option}`} role="option" id={`${id}-option-${optionIndex}`} aria-selected={isSelected}>
                      <button
                        type="button"
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => handleSelectOption(option)}
                        className={`flex w-full items-center justify-between px-4 py-2 text-sm transition ${isActive
                            ? "bg-[#fef3f4] font-semibold text-[#c01e27]"
                            : "text-slate-600 hover:bg-slate-100 hover:text-[#1c1f35]"
                          }`}
                      >
                        <span>{option}</span>
                        {isSelected && <span className="text-xs text-[#c01e27]">Seleccionado</span>}
                      </button>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="px-4 py-3 text-sm text-slate-500">No se encontraron coincidencias.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export const RouteFinder = ({
  variant = "full",
  defaultOrigin,
  defaultDestination,
  autoSearch = false,
  className,
  resultsMode = "inline",
}: RouteFinderProps): JSX.Element => {
  const [origin, setOrigin] = useState(defaultOrigin ?? "");
  const [destination, setDestination] = useState(defaultDestination ?? "");
  const [hasSearched, setHasSearched] = useState(autoSearch && ((defaultOrigin ?? "").trim().length > 0 || (defaultDestination ?? "").trim().length > 0));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalCloseButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalOverlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setOrigin(defaultOrigin ?? "");
    if (autoSearch && (defaultOrigin ?? "").trim().length > 0) {
      setHasSearched(true);
    }
  }, [defaultOrigin]);

  useEffect(() => {
    setDestination(defaultDestination ?? "");
    if (autoSearch && (defaultDestination ?? "").trim().length > 0) {
      setHasSearched(true);
    }
  }, [defaultDestination]);

  useEffect(() => {
    if (!autoSearch) {
      setHasSearched(false);
    }
  }, [autoSearch]);

  const results = useMemo(() => {
    if (!hasSearched) return [];
    return filterRoutes(origin, destination);
  }, [origin, destination, hasSearched]);

  const isCompact = variant === "compact";
  const isModalMode = resultsMode === "modal";

  const sectionClassName = [
    className,
    isCompact ? "space-y-2" : "page-section py-10 lg:py-12"
  ]
    .filter(Boolean)
    .join(" ");

  useEffect(() => {
    if (!isModalMode) return;

    if (hasSearched) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [hasSearched, isModalMode]);

  useEffect(() => {
    if (!isModalMode) return;

    if (isModalOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          event.preventDefault();
          handleCloseModal();
        }
      };

      window.addEventListener("keydown", onKeyDown);

      const timeoutId = window.setTimeout(() => {
        modalCloseButtonRef.current?.focus();
      }, 150);

      return () => {
        window.clearTimeout(timeoutId);
        window.removeEventListener("keydown", onKeyDown);
        document.body.style.overflow = previousOverflow;
      };
    }

    document.body.style.overflow = "";
    return undefined;
  }, [isModalMode, isModalOpen]);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setHasSearched(false);
  }, []);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === modalOverlayRef.current) {
      handleCloseModal();
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasSearched(true);
  };

  return (
    <section className={sectionClassName} aria-labelledby="route-finder-heading">
      <div
        className={
          isCompact
            ? "relative z-30 flex flex-col gap-4 rounded-3xl border border-[#c01e27]/15 bg-white/95 p-5 shadow-[0px_22px_55px_rgba(0,0,0,0.16)] backdrop-blur"
            : "relative z-30 mx-auto flex max-w-5xl flex-col gap-6 rounded-3xl border border-slate-200 bg-white px-8 py-6 shadow-[0px_18px_45px_rgba(0,0,0,0.08)]"
        }
      >
        <header className={isCompact ? "space-y-2 text-left" : "space-y-3 text-center"}>
          <h3 id="route-finder-heading" className={`font-semibold text-[#1c1f35] ${isCompact ? "text-2xl" : "text-3xl"}`}>
            Encuentra tu próximo destino
          </h3>
          {!isCompact && (
            <p className="mx-auto max-w-4xl text-xs leading-relaxed text-slate-600 md:text-sm md:leading-snug md:whitespace-nowrap">
              Selecciona la ciudad de origen y destino para conocer horarios, tarifas y la información de contacto de nuestras
              oficinas.
            </p>
          )}
        </header>

        <form
          onSubmit={handleFormSubmit}
          className={
            isCompact
              ? "mt-5 grid gap-3 sm:grid-cols-[repeat(3,minmax(0,1fr))]"
              : "mt-3 grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]"
          }
        >
          <DropdownField
            id="route-origin"
            label="Origen"
            placeholder="Selecciona ciudad de origen"
            value={origin}
            options={ROUTE_ORIGIN_OPTIONS}
            onChange={setOrigin}
            isCompact={isCompact}
          />

          <DropdownField
            id="route-destination"
            label="Destino"
            placeholder="Selecciona ciudad de destino"
            value={destination}
            options={ROUTE_DESTINATION_OPTIONS}
            onChange={setDestination}
            isCompact={isCompact}
          />

          <div className="flex items-end">
            <button
              type="submit"
              className={
                isCompact
                  ? "inline-flex h-11 w-full items-center justify-center rounded-full bg-[#c01e27] px-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#a41822] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c01e27]"
                  : "inline-flex h-12 w-full items-center justify-center rounded-full bg-[#c01e27] px-6 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#a41822] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c01e27]"
              }
            >
              Buscar
            </button>
          </div>
        </form>
      </div>

      {!isModalMode && hasSearched && (
        <div className={isCompact ? "space-y-4" : "mx-auto mt-10 max-w-5xl space-y-6"} aria-live="polite">
          <ResultsInline results={results} />
        </div>
      )}

      {isModalMode && isModalOpen && (
        <div
          ref={modalOverlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="route-finder-results-heading"
          onMouseDown={handleOverlayClick}
        >
          <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col gap-6 overflow-hidden rounded-3xl bg-white p-6 shadow-[0px_25px_70px_rgba(0,0,0,0.25)]">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c01e27]" id="route-finder-results-heading">
                  Resultados de la búsqueda
                </p>
                <h2 className="text-2xl font-semibold text-[#1c1f35]">Estas son las rutas disponibles</h2>
              </div>
              <button
                ref={modalCloseButtonRef}
                type="button"
                onClick={handleCloseModal}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c01e27]"
                aria-label="Cerrar resultados"
              >
                <span aria-hidden="true" className="text-lg">
                  ×
                </span>
              </button>
            </div>

            <div className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-200/80 -mr-2 grow space-y-4 overflow-y-auto pr-2">
              <ResultsInline results={results} />
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleCloseModal}
                className="inline-flex items-center justify-center rounded-full bg-[#c01e27] px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#a41822] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c01e27]"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const currencyFormatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

const RouteResultCard = ({ route }: { route: RouteRecord }): JSX.Element => {
  const title = route.es_segmento_via ? route.nombre_completo : `${route.origen} → ${route.destino}`;
  const durationLabel = route.tiempos_estimados?.duracion ?? "Por definir";
  const priceLabel =
    typeof route.precio_tiquete === "number"
      ? currencyFormatter.format(route.precio_tiquete)
      : "Por definir";
  const contactSections: Array<{
    key: string;
    title: string;
    fijo: string | null;
    celular: string | null;
  }> = [
      {
        key: "origin",
        title: `Contactos en ${route.origen}`,
        fijo: route.contactos.origen.fijo,
        celular: route.contactos.origen.celular,
      },
    ];

  const segmento = route.segmento;
  const hasSegmentContact = Boolean(segmento && (segmento.contactos.fijo || segmento.contactos.celular));

  if (hasSegmentContact && segmento) {
    contactSections.push({
      key: "segment",
      title: `Contactos en ${segmento.nombre}`,
      fijo: segmento.contactos.fijo ?? null,
      celular: segmento.contactos.celular ?? null,
    });
  }

  contactSections.push({
    key: "destination",
    title: `Contactos en ${route.destino}`,
    fijo: route.contactos.destino.fijo,
    celular: route.contactos.destino.celular,
  });

  const gridColumnsClass =
    contactSections.length === 3 ? "md:grid-cols-3" : contactSections.length === 2 ? "md:grid-cols-2" : "md:grid-cols-1";

  return (
    <article className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0px_18px_45px_rgba(0,0,0,0.08)]">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c01e27]">Ruta</p>
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            <h4 className="text-2xl font-semibold text-[#1c1f35]">{title}</h4>
            <p className="text-sm font-medium text-slate-600">Tiempo de viaje: {durationLabel}</p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Precio del tiquete</p>
            <p className="text-2xl font-semibold text-[#1c1f35]">{priceLabel}</p>
          </div>
        </div>
      </header>

      <div className="rounded-2xl bg-[#fef3f4] px-5 py-4 text-sm text-[#1c1f35]">
        {route.horario_descripcion}
      </div>

      <div className={`grid gap-6 ${gridColumnsClass}`}>
        {contactSections.map((section) => (
          <ContactSection
            key={section.key}
            title={section.title}
            fijo={section.fijo}
            celular={section.celular}
          />
        ))}
      </div>

      <footer>
        <p className="text-xs italic text-slate-500">{DISCLAIMER_MESSAGE}</p>
      </footer>
    </article>
  );
};

const isSingleDialable = (value: string): boolean => {
  const trimmed = value.trim();
  if (trimmed.includes("–") || trimmed.includes(",")) return false;
  return /^[+\d\s()\-]+$/.test(trimmed);
};

const normalizeTelHref = (value: string): string => {
  const digits = value.replace(/[^\d+]/g, "");
  return `tel:${digits}`;
};

const ContactLine = ({ label, value }: { label: string; value: string | null }): JSX.Element => {
  const baseLabelClass = "text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500";
  const baseValueClass = "text-sm font-semibold text-[#c01e27]";

  if (!value) {
    return (
      <div className="space-y-1">
        <p className={baseLabelClass}>{label}</p>
        <p className="text-sm text-slate-500">No disponible</p>
      </div>
    );
  }

  const trimmed = value.trim();
  const canLink = isSingleDialable(trimmed);

  if (canLink) {
    return (
      <div className="space-y-1">
        <p className={baseLabelClass}>{label}</p>
        <a
          href={normalizeTelHref(trimmed)}
          className="block text-sm font-semibold text-[#c01e27] transition hover:text-[#a41822]"
        >
          {trimmed}
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      <p className={baseLabelClass}>{label}</p>
      <p className={baseValueClass}>{trimmed}</p>
    </div>
  );
};

const ContactSection = ({
  title,
  fijo,
  celular,
}: {
  title: string;
  fijo: string | null;
  celular: string | null;
}): JSX.Element => {
  return (
    <section className="rounded-2xl border border-slate-200 p-5">
      <h5 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c01e27]">{title}</h5>
      <div className="mt-3 space-y-4">
        <ContactLine label="Teléfono fijo" value={fijo} />
        <ContactLine label="Celular" value={celular} />
      </div>
    </section>
  );
};
