export const DisclaimerSection = (): JSX.Element => {
  const footerData = {
    logoSrc: "/img/general/logo-supertransporte.png",
    logoAlt: "Logo vigilado",
    copyright: "© 2025 Cooperativa de Transportadores de Occidente.",
    designText: "Diseño y Desarrollo por",
    designerName: "Byron González",
    designerIconBg: "/img/general/bg-logo.svg",
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
          </p>
          <a
            href="https://byrongonzalez.com.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-white transition hover:opacity-80"
            aria-label="Visitar sitio web de Byron González"
          >
            <span>{footerData.designerName}</span>
            <span
              className="flex h-7 w-6 items-center justify-center"
              style={{ backgroundImage: `url(${footerData.designerIconBg})`, backgroundRepeat: "no-repeat", backgroundSize: "contain" }}
            >
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};
