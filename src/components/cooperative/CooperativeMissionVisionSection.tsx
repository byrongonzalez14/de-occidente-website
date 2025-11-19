interface MissionVisionCard {
  title: string;
  description?: string;
  bullets?: string[];
}

interface CooperativeMissionVisionSectionProps {
  id?: string;
  title: string;
  cards: MissionVisionCard[];
}

export const CooperativeMissionVisionSection = ({
  id,
  title,
  cards,
}: CooperativeMissionVisionSectionProps): JSX.Element => {
  return (
    <section id={id} className="page-section rounded-3xl bg-[#f8f9fb] py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c01e27]">Estrategia</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#1c1f35]">{title}</h2>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-[0px_20px_50px_rgba(0,0,0,0.08)]"
            >
              <h3 className="text-xl font-semibold text-[#c01e27] uppercase tracking-[0.18em]">{card.title}</h3>

              {card.description && (
                <p className="mt-4 text-base leading-relaxed text-slate-600">{card.description}</p>
              )}

              {card.bullets && (
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#c01e27]" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
