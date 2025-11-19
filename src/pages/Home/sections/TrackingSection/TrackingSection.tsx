import clsx from "clsx";
import React, { useCallback, useState } from "react";

interface TrackingSectionProps {
  className?: string;
}

export const TrackingSection = ({ className }: TrackingSectionProps): JSX.Element => {
  const [trackingNumber, setTrackingNumber] = useState("");

  const buildTrackingUrl = useCallback((value: string): string => {
    const baseUrl = "https://pos.deoccidente.com/EncomiendaServlet?guia=";
    return `${baseUrl}${encodeURIComponent(value)}`;
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = trackingNumber.trim();
    if (!trimmed) {
      return;
    }

    const trackingUrl = buildTrackingUrl(trimmed);
    window.open(trackingUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className={clsx(
        "flex w-full max-w-xs flex-col gap-4 rounded-3xl border border-[#c01e27]/20 bg-white p-6 text-[#1c1f35] shadow-[0px_25px_55px_rgba(0,0,0,0.18)]",
        "sm:max-w-sm",
        className,
      )}
    >
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c01e27]">Consulta tu envío</p>
        <p className="text-sm text-slate-600">Ingresa el número de guía para rastrear el estado de tu envío.</p>
      </div>

      <label htmlFor="tracking-input" className="sr-only">
        Número de guía del envío
      </label>

      <input
        id="tracking-input"
        type="text"
        value={trackingNumber}
        onChange={(event) => setTrackingNumber(event.target.value)}
        placeholder="Indica el número de guía del envío"
        className="h-12 rounded-full border border-slate-200 px-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-[#c01e27] focus:outline-none focus:ring-2 focus:ring-[#c01e27]/20"
        aria-label="Indica el número de guía del envío"
      />

      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center rounded-full bg-[#c01e27] px-5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#a01820] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c01e27]"
      >
        Rastrear guía
      </button>
    </form>
  );
};
