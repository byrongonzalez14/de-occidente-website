import { useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";

import { cooperativeDetailPages } from "../../data/cooperativePages";

interface CooperativeSectionCarouselProps {
  currentId?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

const SCROLL_SPEED_PX_PER_MS = 0.06;

export const CooperativeSectionCarousel = ({
  currentId,
  eyebrow = "También te puede interesar",
  title = "Más sobre nuestra cooperativa",
  subtitle = "Explora otros apartados con información corporativa y normativa.",
  className,
}: CooperativeSectionCarouselProps): JSX.Element | null => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef(false);
  const animationFrameRef = useRef<number>();
  const maxScrollRef = useRef(0);
  const interactionTimeoutRef = useRef<number>();
  const directionRef = useRef<1 | -1>(1);

  const items = useMemo(
    () =>
      cooperativeDetailPages.map((page) => ({
        id: page.id,
        title: page.title,
        description:
          page.subtitle ??
          "Encuentra detalles adicionales sobre nuestros servicios y políticas.",
        to: `/nuestra-cooperativa/${page.id}`,
      })),
    [],
  );

  useEffect(() => {
    const container = containerRef.current;
    if (container == null || items.length === 0) {
      return;
    }

    const updateContentWidth = () => {
      if (containerRef.current == null) {
        return;
      }

      const scroller = containerRef.current;
      maxScrollRef.current = Math.max(scroller.scrollWidth - scroller.clientWidth, 0);
      if (scroller.scrollLeft > maxScrollRef.current) {
        scroller.scrollLeft = maxScrollRef.current;
      }
    };

    updateContentWidth();
    window.addEventListener("resize", updateContentWidth);
    container.scrollLeft = 0;

    let lastTimestamp: number | undefined;

    const step = (timestamp: number) => {
      const scroller = containerRef.current;
      if (scroller == null) {
        return;
      }

      if (lastTimestamp == null) {
        lastTimestamp = timestamp;
      }

      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      const maxScroll = maxScrollRef.current;

      if (!isInteractingRef.current && maxScroll > 0) {
        const distance = delta * SCROLL_SPEED_PX_PER_MS * directionRef.current;
        let nextPosition = scroller.scrollLeft + distance;

        if (nextPosition <= 0) {
          nextPosition = 0;
          directionRef.current = 1;
        } else if (nextPosition >= maxScroll) {
          nextPosition = maxScroll;
          directionRef.current = -1;
        }

        scroller.scrollLeft = nextPosition;
      }

      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      window.removeEventListener("resize", updateContentWidth);
      if (animationFrameRef.current != null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (interactionTimeoutRef.current != null) {
        window.clearTimeout(interactionTimeoutRef.current);
      }
    };
  }, [items.length]);

  if (items.length === 0) {
    return null;
  }

  const handleWheel: React.WheelEventHandler<HTMLDivElement> = (event) => {
    if (containerRef.current == null) {
      return;
    }

    if (maxScrollRef.current <= 0) {
      return;
    }

    event.preventDefault();
    const delta = event.deltaY !== 0 ? event.deltaY : event.deltaX;
    containerRef.current.scrollLeft = Math.min(
      Math.max(containerRef.current.scrollLeft + delta, 0),
      maxScrollRef.current,
    );

    isInteractingRef.current = true;
    if (interactionTimeoutRef.current != null) {
      window.clearTimeout(interactionTimeoutRef.current);
    }
    interactionTimeoutRef.current = window.setTimeout(() => {
      isInteractingRef.current = false;
    }, 1200);
  };

  return (
    <section className={`page-section py-16 ${className ?? ""}`}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="space-y-3 text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c01e27]">{eyebrow}</p>
          <h2 className="text-3xl font-semibold text-[#1c1f35]">{title}</h2>
          <p className="text-sm leading-relaxed text-slate-600">{subtitle}</p>
        </header>

        <div
          ref={containerRef}
          className="relative overflow-x-auto overflow-y-hidden px-6 py-3"
          aria-label="Otras secciones de la cooperativa"
          onFocus={() => {
            isInteractingRef.current = true;
          }}
          onBlur={() => {
            isInteractingRef.current = false;
          }}
          onWheel={handleWheel}
        >
          <div className="flex w-max gap-6">
            {items.map((item) => {
              const isActive = item.id === currentId;
              return (
                <Link
                  key={item.id}
                  to={item.to}
                  aria-current={isActive ? "page" : undefined}
                  className={`group flex w-72 shrink-0 flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[0px_18px_45px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0px_24px_60px_rgba(0,0,0,0.12)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#c01e27]/40 ${
                    isActive ? "ring-2 ring-[#c01e27]" : ""
                  }`}
                >
                  <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c01e27]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-[#c01e27]">
                    Ver detalle
                    <svg
                      className="h-3 w-3 transition-transform group-hover:translate-x-1"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 2L8 6L4 10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
