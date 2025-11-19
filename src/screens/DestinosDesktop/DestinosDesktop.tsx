import React from "react";
import { DisclaimerSection } from "../../components/DisclaimerSection";
import { FooterSection } from "../../components/FooterSection";
import { HeaderSection } from "../../components/HeaderSection";
import { PopularDestinationsSection } from "./sections/PopularDestinationsSection";
import { TravelWithUsSection } from "../../components/TravelWithUsSection";

export const DestinosDesktop = (): JSX.Element => {
  return (
    <div
      className="bg-white w-full min-w-[1440px] min-h-[2254px] flex"
      data-model-id="295:3928"
    >
      <div className="flex w-[1440px] h-[2250px] relative flex-col items-center justify-center">
        <HeaderSection />
        <section className="relative w-[1440px] h-[70px] overflow-hidden bg-[url(/img/image-5-4.png)] bg-cover bg-[50%_50%]">
          <div className="absolute w-[5.49%] h-[132.86%] top-[-16.62%] left-[84.38%]">
            <img
              className="absolute w-full h-full top-[12.51%] left-0"
              alt="Vector"
              src="/img/vector-38.svg"
            />

            <img
              className="absolute w-[34.30%] h-[34.85%] top-[30.64%] left-[34.08%]"
              alt="Vector"
              src="/img/vector-39.svg"
            />
          </div>

          <h1 className="absolute w-[48.82%] h-[58.57%] top-[20.00%] left-[10.83%] flex items-center justify-center [font-family:'Rubik',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal]">
            CONOCE NUESTRAS RUTAS
          </h1>
        </section>

        <PopularDestinationsSection />
        <TravelWithUsSection />
        <section className="flex w-[1440px] h-[317px] items-center justify-between px-[156px] py-5 relative bg-white">
          <img
            className="relative w-[458px] h-52 ml-[-4.00px] aspect-[2.25] object-cover"
            alt="Viaja con tu mascota"
            src="img/general/viaja-con-tu-mascota.png"
          />

          <img
            className="relative w-[458px] h-52 mr-[-4.00px] aspect-[2.25] object-cover"
            alt="Envios"
            src="/img/general/servicio-encomiendas.png"
          />
        </section>

        <FooterSection />
        <DisclaimerSection />
      </div>
    </div>
  );
};
