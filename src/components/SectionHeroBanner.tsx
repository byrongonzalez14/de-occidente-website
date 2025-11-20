interface SectionHeroBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  accentImage?: {
    src: string;
    alt?: string;
    className?: string;
  };
}

export const SectionHeroBanner = ({
  title,
  subtitle,
  backgroundImage,
  accentImage,
}: SectionHeroBannerProps): JSX.Element => {
  return (
    <section className="relative isolate overflow-hidden bg-[#c01e27] text-white">
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-90"
          aria-hidden="true"
        />
      )}
      <div className="absolute inset-0 bg-[#c01e27]/90" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        {accentImage && (
          <img
            src={accentImage.src}
            alt={accentImage.alt ?? ""}
            className={`absolute right-0 top-0 hidden h-full md:block ${accentImage.className ?? ""}`}
            aria-hidden={accentImage.alt == null}
          />
        )}

        <h1 className="text-xl font-bold uppercase tracking-normal sm:text-3xl md:text-4xl">
          {title}
        </h1>
        {subtitle && <p className="text-xs font-medium text-white/90 sm:text-sm md:text-base">{subtitle}</p>}
      </div>
    </section>
  );
};
