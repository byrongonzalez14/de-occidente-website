import React from "react";
import { DisclaimerSection } from "../../components/DisclaimerSection";
import { FooterSection } from "../../components/FooterSection";
import { HeaderSection } from "../../components/HeaderSection";
import { PopularDestinationsSection } from "./sections/PopularDestinationsSection";
import { TravelWithUsSection } from "../../components/TravelWithUsSection";

export const DestinosLaAguada = (): JSX.Element => {
  const additionalImages = [
    {
      id: 1,
      src: "/img/general/viaja-con-tu-mascota.png",
      alt: "Viaja con tu mascota",
    },
    {
      id: 2,
      src: "/img/general/servicio-encomiendas.png",
      alt: "Envios",
    },
  ];

  return (
    <main
      className="bg-white w-full min-w-[1440px] min-h-[2577px] flex"
      data-model-id="295:4912"
    >
      <div className="flex w-[1440px] h-[2577px] relative flex-col items-center justify-center">
        <HeaderSection />

        <section className="relative w-[1440px] h-[150px] overflow-hidden bg-[url(/img/image-5-7.png)] bg-cover bg-[50%_50%]">
          <h1 className="absolute w-[48.82%] h-[58.57%] top-[20.00%] left-[10.83%] flex items-center justify-center [font-family:'Rubik',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal]">
            LA AGUADA
          </h1>

          <div
            className="absolute w-[10.36%] h-[117.09%] top-[-7.75%] left-[79.50%]"
            aria-hidden="true"
          >
            <img
              className="absolute w-full h-full top-[6.62%] left-0"
              alt=""
              src="/img/vector-66.svg"
            />

            <img
              className="absolute w-[34.30%] h-[34.85%] top-[30.64%] left-[34.08%]"
              alt=""
              src="/img/vector-67.svg"
            />
          </div>
        </section>

        <PopularDestinationsSection />

        <TravelWithUsSection />

        <section className="flex w-[1440px] h-[317px] items-center justify-between px-[156px] py-5 relative bg-white">
          {additionalImages.map((image) => (
            <img
              key={image.id}
              className={`relative w-[458px] h-52 aspect-[2.25] object-cover ${
                image.id === 1 ? "ml-[-4.00px]" : "mr-[-4.00px]"
              }`}
              alt={image.alt}
              src={image.src}
            />
          ))}
        </section>

        <FooterSection />

        <DisclaimerSection />
      </div>
    </main>
  );
};
