interface ServiceHighlightsProps {
  items: string[];
}

export const ServiceHighlights = ({ items }: ServiceHighlightsProps): JSX.Element => {
  return (
    <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0px_15px_40px_rgba(0,0,0,0.08)]">
      <h2 className="text-2xl font-semibold text-[#c01e27]">Beneficios destacados</h2>
      <ul className="mt-6 space-y-4 text-base text-slate-700">
        {items.map((item, index) => (
          <li key={`${item}-${index}`} className="flex items-start gap-3">
            <span className="mt-1.5 inline-flex h-3 w-3 flex-shrink-0 rounded-full bg-[#c01e27]" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
