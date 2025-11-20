import { Navigate, useParams } from "react-router-dom";

import { DisclaimerSection } from "../../components/DisclaimerSection";
import { FooterSection } from "../../components/FooterSection";
import { HeaderSection } from "../../components/HeaderSection";

import { TravelWithUsSection } from "../../components/TravelWithUsSection";
import { DestinationAsideSlider } from "../../components/destinations/DestinationAsideSlider";
import { DestinationContentSections } from "../../components/destinations/DestinationContentSections";
import { DestinationHero } from "../../components/destinations/DestinationHero";
import { DestinationScheduleTable } from "../../components/destinations/DestinationScheduleTable";
import {
  DESTINATION_DETAILS_MAP,
  type DestinationDetail,
} from "../../data/destinationDetails";

const promotionalBanners = [
  {
    id: "pets",
    alt: "Viaja con tu mascota",
    src: "/img/general/viaja-con-tu-mascota.png",
  },
  {
    id: "shipping",
    alt: "Tus envíos son nuestra prioridad",
    src: "/img/general/servicio-encomiendas.png",
  },
];

export const DestinationDetailPage = (): JSX.Element => {
  const { destinationId } = useParams<{ destinationId: string }>();
  const detail: DestinationDetail | undefined = destinationId
    ? DESTINATION_DETAILS_MAP[destinationId]
    : undefined;

  if (!detail) {
    return <Navigate to="/destinos" replace />;
  }

  return (
    <main className="flex w-full flex-col items-stretch" data-page-id={`destino-${detail.id}`}>
      <HeaderSection />



      <div className="mx-auto w-full max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
        <DestinationHero
          name={detail.name}
          summary={detail.summary}
          imageSrc={detail.heroImage}
          imageAlt={detail.heroImageAlt}
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-10">
            <DestinationScheduleTable cityName={detail.name} cityId={detail.id} />

            <img
              src={detail.heroImage}
              alt={`Paisaje de ${detail.name}`}
              className="w-full rounded-3xl object-cover shadow-lg"
            />

            <DestinationContentSections sections={detail.sections} />
          </div>

          <div className="lg:sticky lg:top-24">
            <DestinationAsideSlider currentId={detail.id} />
          </div>
        </div>

        <TravelWithUsSection />

        <section
          className="page-section flex flex-col gap-6 rounded-3xl bg-white py-10 shadow-[0px_12px_30px_rgba(0,0,0,0.08)]"
          aria-label="Promociones y servicios"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {promotionalBanners.map((banner) => (
              <img
                key={banner.id}
                className="h-52 w-full rounded-2xl object-cover"
                alt={banner.alt}
                src={banner.src}
                loading="lazy"
              />
            ))}
          </div>
        </section>
      </div>

      <FooterSection />
      <DisclaimerSection />
    </main>
  );
};
