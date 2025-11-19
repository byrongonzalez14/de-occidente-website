interface CooperativeHighlight {
  label: string;
  description: string;
}

interface CooperativeMedia {
  imageUrl: string;
  caption?: string;
}

interface CooperativeAboutSectionProps {
  id: string;
  title: string;
  introduction: string;
  paragraphs: string[];
  highlights: CooperativeHighlight[];
  media?: CooperativeMedia;
}

export const CooperativeAboutSection = ({
  id,
  title,
  introduction,
  paragraphs,
  highlights,
  media,
}: CooperativeAboutSectionProps): JSX.Element => {
  return (
    <section id={id} className="page-section py-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
        <div className="space-y-6 text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c01e27]">Nuestra cooperativa</p>
          <h2 className="text-3xl font-semibold text-[#1c1f35]">{title}</h2>
          <p className="text-lg leading-relaxed text-slate-700">{introduction}</p>

          <div className="space-y-4">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0px_12px_30px_rgba(0,0,0,0.08)]"
              >
                <p className="text-xl font-semibold text-[#c01e27]">{highlight.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {media && (
          <figure className="relative overflow-hidden rounded-3xl shadow-[0px_24px_60px_rgba(0,0,0,0.15)]">
            <img src={media.imageUrl} alt={media.caption ?? "Equipo de la cooperativa"} className="h-full w-full object-cover" loading="lazy" />
          </figure>
        )}
      </div>
    </section>
  );
};
