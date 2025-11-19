import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import { GLOBAL_SEARCH_INDEX, type GlobalSearchItem } from "../data/globalSearchIndex";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const filterItems = (query: string, items: GlobalSearchItem[]): GlobalSearchItem[] => {
  const normalized = query.trim().toLowerCase();
  if (normalized.length === 0) {
    return items.slice(0, 6);
  }

  return items.filter((item) => {
    const haystack = `${item.title} ${item.description}`.toLowerCase();
    return haystack.includes(normalized);
  });
};

export const SearchModal = ({ isOpen, onClose }: SearchModalProps): JSX.Element | null => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => filterItems(query, GLOBAL_SEARCH_INDEX), [query]);

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.classList.add("overflow-hidden");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-[120] flex items-start justify-center bg-slate-900/60 backdrop-blur-sm px-4 pt-20 pb-8 sm:pt-28">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white p-6 shadow-[0px_30px_80px_rgba(15,23,42,0.25)]">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:text-[#c01e27]"
          aria-label="Cerrar búsqueda"
        >
          ×
        </button>

        <div className="space-y-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="global-search" className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c01e27]">
              Buscar en el sitio
            </label>
            <input
              ref={inputRef}
              id="global-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Escribe palabras clave: encomiendas, contrato, destinos..."
              className="h-12 rounded-full border border-slate-200 px-6 text-sm text-slate-700 shadow-sm focus:border-[#c01e27] focus:outline-none focus:ring-2 focus:ring-[#c01e27]/20"
            />
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              {query.trim().length > 0 ? `Coincidencias (${results.length})` : "Sugerencias"}
            </p>

            {results.length === 0 ? (
              <p className="rounded-2xl border border-dashed border-slate-200 px-6 py-5 text-sm text-slate-500">
                No encontramos resultados para "{query}". Intenta con otros términos.
              </p>
            ) : (
              <ul className="max-h-80 space-y-3 overflow-y-auto">
                {results.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.url}
                      onClick={onClose}
                      className="block rounded-2xl border border-slate-200 bg-white px-5 py-4 transition hover:border-[#c01e27] hover:bg-[#fff6f7]"
                    >
                      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#c01e27]">
                        {item.category}
                      </span>
                      <p className="mt-2 text-base font-semibold text-[#1c1f35]">{item.title}</p>
                      <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};
