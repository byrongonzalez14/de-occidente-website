import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import destinations from "../../data/destinations.json";

interface DestinationAsideSliderProps {
  currentId?: string;
  autoScrollIntervalMs?: number;
}

const ITEM_HEIGHT = 128;

export const DestinationAsideSlider = ({
  currentId,
  autoScrollIntervalMs = 5000,
}: DestinationAsideSliderProps): JSX.Element => {
  const { pathname } = useLocation();
  const listRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(() => {
    const initialIndex = destinations.findIndex((item) => `/destinos/${item.id}` === pathname);
    return initialIndex >= 0 ? initialIndex : 0;
  });

  const visibleDestinations = useMemo(() => destinations, []);

  useEffect(() => {
    const currentIndex = visibleDestinations.findIndex((item) => item.id === currentId);
    if (currentId && currentIndex !== -1) {
      setActiveIndex(currentIndex);
      return;
    }

    const pathnameIndex = visibleDestinations.findIndex((item) => `/destinos/${item.id}` === pathname);
    if (pathnameIndex !== -1) {
      setActiveIndex(pathnameIndex);
    }
  }, [currentId, pathname, visibleDestinations]);

  useEffect(() => {
    if (!listRef.current) return;
    const top = activeIndex * ITEM_HEIGHT;
    listRef.current.scrollTo({ top, behavior: "smooth" });
  }, [activeIndex]);

  useEffect(() => {
    const listLength = visibleDestinations.length;
    if (listLength <= 1) return;
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % listLength);
    }, autoScrollIntervalMs);
    return () => window.clearInterval(interval);
  }, [visibleDestinations.length, autoScrollIntervalMs]);

  return (
    <aside className="relative w-full max-w-xs overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0px_18px_45px_rgba(0,0,0,0.12)]">
      <header className="border-b border-slate-200 bg-[#c01e27] px-5 py-4">
        <h2 className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-white">
          Rutas relacionadas
        </h2>
      </header>

      <div ref={listRef} className="max-h-[512px] overflow-y-hidden">
        <ul className="flex flex-col">
          {visibleDestinations.map((destination, index) => {
            const isActive = index === activeIndex;
            return (
              <li key={destination.id} className="border-b border-slate-100 last:border-none">
                <Link
                  to={`/destinos/${destination.id}`}
                  className={`flex items-center gap-4 px-5 py-4 transition-colors ${
                    isActive ? "bg-[#fef3f4]" : "bg-white hover:bg-slate-50"
                  }`}
                  style={{ height: ITEM_HEIGHT }}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <div className="h-20 w-20 overflow-hidden rounded-2xl">
                    <img
                      src={destination.image}
                      alt={`Paisaje de ${destination.name}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c01e27]">
                      {destination.name}
                    </span>
                    <p className="mt-1 text-sm text-slate-600">
                      Desde {destination.currency} {destination.price.toLocaleString("es-CO")}.
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
