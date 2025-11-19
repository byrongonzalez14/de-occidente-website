import { FormEvent } from "react";

interface ServiceFormCardProps {
  id: string;
  title: string;
  placeholder: string;
  ctaLabel: string;
  helperText?: string;
}

export const ServiceFormCard = ({ id, title, placeholder, ctaLabel, helperText }: ServiceFormCardProps): JSX.Element => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section id={id} className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0px_15px_40px_rgba(0,0,0,0.08)]">
      <h2 className="text-2xl font-semibold text-[#1c1f35]">{title}</h2>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 md:flex-row">
        <input
          type="text"
          name="serviceInput"
          placeholder={placeholder}
          className="h-12 w-full rounded-full border border-slate-200 px-6 text-sm text-slate-700 shadow-inner focus:border-[#c01e27] focus:outline-none focus:ring-2 focus:ring-[#c01e27]/20"
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
