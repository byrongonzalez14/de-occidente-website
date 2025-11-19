interface DestinationHeroProps {
  name: string;
  imageSrc: string;
  imageAlt: string;
  summary: string;
}

export const DestinationHero = ({ name, imageSrc, imageAlt, summary }: DestinationHeroProps): JSX.Element => {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl bg-[#c01e27] text-white shadow-[0px_18px_45px_rgba(0,0,0,0.2)]">
      <img src={imageSrc} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#c01e27]/85 via-[#c01e27]/80 to-[#c01e27]/65" aria-hidden="true" />

      <div className="relative flex flex-col gap-6 px-6 py-12 sm:px-10 md:flex-row md:items-end md:justify-between md:gap-12 lg:px-14">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">Destino</p>
          <h1 className="text-4xl font-bold uppercase tracking-tight drop-shadow sm:text-5xl lg:text-6xl">{name}</h1>
        </div>
        <p className="max-w-xl text-base leading-relaxed text-white/90 sm:text-lg md:text-right">{summary}</p>
      </div>
    </section>
  );
};
