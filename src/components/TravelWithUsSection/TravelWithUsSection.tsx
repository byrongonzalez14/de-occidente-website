import { travelWithUsVideo } from "../../data/travelWithUsVideoPoster";

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
      icon: "/img/general/wifi-vector.svg",
      iconAlt: "Wifi vector",
      title: "Conexión a Bordo (WiFi)",
      description: {
        leading: "Mantente conectado durante todo el viaje con nuestro servicio de ",
        emphasis: "WiFi gratuito",
        trailing: ".",
      },
    },
    {
      icon: "/img/general/silla-vector.svg",
      iconAlt: "Vector reclinable",
      title: "Máxima Comodidad",
      description: {
        leading: "Disfruta de un trayecto relajante gracias a nuestras confortables ",
        emphasis: "Sillas Reclinables",
        trailing: ".",
      },
    },
    {
      icon: "/img/general/aire-vector.svg",
      iconAlt: "Vector frío",
      title: "Viaja Siempre Fresco",
      description: {
        leading: "Viaja fresco y cómodo sin importar el clima con nuestro sistema de ",
        emphasis: "Aire Acondicionado",
        trailing: ".",
      },
    },
    {
      icon: "/img/general/seguridad-vector.svg",
      iconAlt: "Vector cámara",
      title: "Viaja Seguro",
      description: {
        leading: "Tu tranquilidad es nuestra prioridad. Contamos con un ",
        emphasis: "Sistema de Vigilancia",
        trailing: " para tu protección.",
      },
    },
  ];

  const { src: videoSrc, poster: videoPoster } = travelWithUsVideo;

  return (
    <section className="page-section" aria-labelledby="travel-with-us-heading">
      <div className="mx-auto grid w-full max-w-6xl gap-12 overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-[0px_18px_45px_rgba(0,0,0,0.08)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:p-12">
        <div className="flex items-center justify-center lg:justify-start">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-4 -z-10 rounded-[32px] bg-gradient-to-br from-[#c01e27]/15 via-transparent to-[#1c1f35]/10" aria-hidden="true" />
            <div className="overflow-hidden rounded-[28px] border border-slate-200 shadow-[0px_24px_65px_rgba(15,23,42,0.18)]">
              <video
                className="block h-full w-full object-cover"
                src={videoSrc}
                poster={videoPoster}
                autoPlay
                loop
                muted
                playsInline
                controls
              >
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <header className="space-y-4">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-[#c01e27]">Beneficios</p>
            <h2 id="travel-with-us-heading" className="text-3xl font-semibold text-[#1c1f35] sm:text-4xl">
              ¿Por qué viajar con De Occidente?
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Tu experiencia es nuestra prioridad. Disfruta de una flota moderna, acompañamiento permanente y servicios a
              bordo diseñados para que cada trayecto sea seguro y confortable.
            </p>
          </header>

          <div className="grid gap-4">
            {features.map(({ icon, iconAlt, title, description }) => (
              <article
                key={title}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0px_12px_28px_rgba(15,23,42,0.08)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fef3f4] text-[#c01e27]">
                  <img src={icon} alt={iconAlt} className="h-6 w-6" />
                </span>

                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-[#1c1f35]">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    <span>{description.leading}</span>
                    <span className="font-semibold text-[#c01e27]">{description.emphasis}</span>
                    <span>{description.trailing}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
