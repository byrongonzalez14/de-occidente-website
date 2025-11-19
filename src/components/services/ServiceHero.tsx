interface ServiceHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  summary: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export const ServiceHero = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  summary,
  ctaLabel,
  ctaHref,
}: ServiceHeroProps): JSX.Element => {
  return (
    <section className="grid gap-8 rounded-3xl bg-white/90 p-8 shadow-[0px_18px_45px_rgba(0,0,0,0.08)] backdrop-blur lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c01e27]">{subtitle}</p>
        <h1 className="text-3xl font-bold text-[#1c1f35] sm:text-4xl lg:text-5xl">{title}</h1>
        <p className="text-base leading-relaxed text-slate-600 sm:text-lg">{summary}</p>
        {ctaHref && ctaLabel && (
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-full bg-[#c01e27] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#a41822]"
          >
            {ctaLabel}
          </a>
        )}
      </div>

      <div className="overflow-hidden rounded-3xl">
        <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover" loading="lazy" />
      </div>
    </section>
  );
};
