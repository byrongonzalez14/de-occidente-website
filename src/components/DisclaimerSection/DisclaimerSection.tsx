export const DisclaimerSection = (): JSX.Element => {
  const footerData = {
    logoSrc: "/img/general/logo-supertransporte.png",
    logoAlt: "Logo vigilado",
    copyright: "© 2025 Cooperativa de Transportadores de Occidente.",
    designText: "Diseño y Desarrollo por",
    designerName: "Byron González",
    designerIconBg: "/img/vector-132.svg",
    designerIconSrc: "/img/vector-133.svg",
  };

  return (
    <footer className="bg-[#343333] text-white">
      <div className="page-section flex flex-col items-center gap-4 py-4 text-center text-sm leading-relaxed sm:flex-row sm:justify-between sm:text-left">
        <img
          className="h-10 w-auto"
          alt={footerData.logoAlt}
          src={footerData.logoSrc}
        />

        <p className="max-w-xl font-medium text-white/90">
          {footerData.copyright}
        </p>

        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <p className="font-medium text-white/90">
            {footerData.designText}
            <span className="font-semibold"> {footerData.designerName}</span>
          </p>
          <span
            className="flex h-7 w-6 items-center justify-center"
            style={{ backgroundImage: `url(${footerData.designerIconBg})`, backgroundRepeat: "no-repeat", backgroundSize: "contain" }}
          >
            <img className="h-3 w-3" alt="Ícono diseñador" src={footerData.designerIconSrc} />
          </span>
        </div>
      </div>
    </footer>
  );
};
