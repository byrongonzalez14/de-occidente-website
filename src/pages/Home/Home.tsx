import { DestinationsSection } from "./sections/DestinationsSection";
import { DisclaimerSection } from "../../components/DisclaimerSection";
import { FooterSection } from "../../components/FooterSection";
import { HeaderSection } from "../../components/HeaderSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { TravelWithUsSection } from "../../components/TravelWithUsSection";
import { RouteFinder } from "../../components/routes/RouteFinder";

export const Home = (): JSX.Element => {
  const bannerImages = [
    {
      id: 1,
      alt: "Viaja con tu mascota",
      src: "/img/general/viaja-con-tu-mascota.png",
    },
    {
      id: 2,
      alt: "Envios",
      src: "/img/general/servicio-encomiendas.png",
    },
  ];

  return (
    <main className="flex w-full flex-col items-stretch" data-model-id="295:3206">
      <HeaderSection />
      <HeroBannerSection />
      <div className="mx-auto mt-[30px] max-w-7xl space-y-8 px-4 sm:px-6 lg:-mt-[86px] lg:px-8">
        <RouteFinder variant="compact" className="mx-auto w-full max-w-5xl" resultsMode="modal" />
        <DestinationsSection />
        <TravelWithUsSection />
        <section
          className="page-section flex flex-col gap-6 rounded-3xl bg-white py-10 shadow-[0px_12px_30px_rgba(0,0,0,0.08)]"
          aria-label="Servicios adicionales"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {bannerImages.map((banner) => (
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
