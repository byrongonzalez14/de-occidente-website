import { FormEvent, useCallback, useState } from "react";

interface ServiceFormCardProps {
  id: string;
  title: string;
  placeholder: string;
  ctaLabel: string;
  helperText?: string;
}

export const ServiceFormCard = ({ id, title, placeholder, ctaLabel, helperText }: ServiceFormCardProps): JSX.Element => {
  const [trackingNumber, setTrackingNumber] = useState("");

  const buildTrackingUrl = useCallback((value: string): string => {
    const baseUrl = "https://pos.deoccidente.com/EncomiendaServlet?guia=";
    return `${baseUrl}${encodeURIComponent(value)}`;
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = trackingNumber.trim();
    if (!trimmed) {
      return;
    }

    const trackingUrl = buildTrackingUrl(trimmed);
    window.open(trackingUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id={id} className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0px_15px_40px_rgba(0,0,0,0.08)]">
      <h2 className="text-2xl font-semibold text-[#1c1f35]">{title}</h2>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 md:flex-row" role="search">
        <label htmlFor={`${id}-tracking`} className="sr-only">
          Número de guía del envío
        </label>
        <input
          type="text"
          name="serviceInput"
          id={`${id}-tracking`}
          value={trackingNumber}
          onChange={(event) => setTrackingNumber(event.target.value)}
          placeholder={placeholder}
          className="h-12 w-full rounded-full border border-slate-200 px-6 text-sm text-slate-700 shadow-inner placeholder:text-slate-400 focus:border-[#c01e27] focus:outline-none focus:ring-2 focus:ring-[#c01e27]/20"
          aria-label="Indica el número de guía del envío"
        />
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center rounded-full bg-[#c01e27] px-6 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#a41822]"
        >
          {ctaLabel}
        </button>
      </form>
      {helperText != null && helperText.trim().length > 0 && (
        <p className="mt-3 text-xs text-slate-500">{helperText}</p>
      )}
    </section>
  );
};
