type FeatureDescription = {
  leading: string;
  emphasis: string;
  trailing: string;
};

interface Feature {
  icon: string;
  iconAlt: string;
  title: string;
  description: FeatureDescription;
  overlayIcon?: {
    src: string;
    alt: string;
  };
}

export const TravelWithUsSection = (): JSX.Element => {
  const features: Feature[] = [
    {
      icon: "/img/wifi-vector-8.svg",
      iconAlt: "Wifi vector",
      title: "Conexión a Bordo (WiFi)",
      description: {
        leading: "Mantente conectado durante todo el viaje con nuestro servicio de ",
        emphasis: "WiFi gratuito",
        trailing: ".",
      },
    },
    {
      icon: "/img/vector-129.svg",
      iconAlt: "Vector reclinable",
      title: "Máxima Comodidad",
      description: {
        leading: "Disfruta de un trayecto relajante gracias a nuestras confortables ",
        emphasis: "Sillas Reclinables",
        trailing: ".",
      },
      overlayIcon: {
        src: "/img/vector-128.svg",
        alt: "Detalle de reclinación",
      },
    },
    {
      icon: "/img/vector-frio-8.svg",
      iconAlt: "Vector frío",
      title: "Viaja Siempre Fresco",
      description: {
        leading: "Viaja fresco y cómodo sin importar el clima con nuestro sistema de ",
        emphasis: "Aire Acondicionado",
        trailing: ".",
      },
    },
    {
      icon: "/img/vector-camara-8.svg",
      iconAlt: "Vector cámara",
      title: "Viaja Seguro",
      description: {
        leading: "Tu tranquilidad es nuestra prioridad. Contamos con un ",
        emphasis: "Sistema de Vigilancia",
        trailing: " para tu protección.",
      },
    },
  ];

  return (
    <section
      className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-[0px_12px_30px_rgba(0,0,0,0.25)]"
      aria-labelledby="travel-with-us-heading"
    >
      <img
        src="/img/photo.png"
        alt="Bus de De Occidente"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-slate-900/70" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-6 py-16 sm:px-10 lg:px-16">
        <header className="text-center">
          <h2 id="travel-with-us-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Por qué viajar con De Occidente?
          </h2>
          <p className="mt-4 text-base text-slate-200">
            Tu experiencia es nuestra prioridad. Estos son algunos de los beneficios que disfrutas cuando viajas con
            nosotros.
          </p>
        </header>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {features.map(({ icon, iconAlt, title, description, overlayIcon }) => (
            <article key={title} className="flex items-start gap-5 rounded-2xl bg-white/10 p-6 backdrop-blur">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30">
                <img src={icon} alt={iconAlt} className="h-7 w-7" />
                {overlayIcon && (
                  <img
                    src={overlayIcon.src}
                    alt={overlayIcon.alt}
                    className="absolute bottom-1 right-1 h-4 w-4"
                  />
                )}
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                <p className="text-sm leading-6 text-slate-100">
                  <span>{description.leading}</span>
                  <span className="font-semibold text-white">{description.emphasis}</span>
                  <span>{description.trailing}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
