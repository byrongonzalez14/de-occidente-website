interface ServiceProcessTimelineProps {
  steps: {
    title: string;
    description: string;
  }[];
}

export const ServiceProcessTimeline = ({ steps }: ServiceProcessTimelineProps): JSX.Element => {
  return (
    <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0px_15px_40px_rgba(0,0,0,0.08)]">
      <h2 className="text-2xl font-semibold text-[#c01e27]">Cómo funciona</h2>
      <ol className="mt-6 grid gap-6 sm:grid-cols-2">
        {steps.map((step, index) => (
          <li key={`${step.title}-${index}`} className="flex items-start gap-4">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#c01e27] text-lg font-bold text-white">
              {index + 1}
            </span>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-[#1c1f35]">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
