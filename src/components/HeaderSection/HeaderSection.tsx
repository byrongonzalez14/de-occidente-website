import { useState } from "react";
import { Link } from "react-router-dom";

import { cooperativeQuickLinks } from "../../data/cooperativeOverview";
import { SERVICES_OVERVIEW } from "../../data/servicesOverview";

type NavigationItem = {
  label: string;
  href: string;
  isRoute?: boolean;
  children?: { label: string; href: string }[];
};

const navigationItems: NavigationItem[] = [
  { label: "DESTINOS", href: "/destinos", isRoute: true },
  {
    label: "SERVICIOS",
    href: "/servicios",
    isRoute: true,
    children: SERVICES_OVERVIEW.map((service) => ({
      label: service.name.toUpperCase(),
      href: service.detailPath,
    })),
  },
  {
    label: "NUESTRA COOPERATIVA",
    href: "/nuestra-cooperativa",
    isRoute: true,
    children: cooperativeQuickLinks.items.map((item) => ({
      label: item.title.toUpperCase(),
      href: item.to,
    })),
  },
  { label: "CONTACTO", href: "/contacto", isRoute: true },
];

export const HeaderSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="relative z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="page-section flex items-center justify-between gap-4 py-4">
        <a href="/" className="flex items-center gap-3" aria-label="Ir a la página principal">
          <img
            className="h-12 w-auto"
            alt="Logo de Occidente"
            src="/img/rectangle-85-8.png"
            loading="lazy"
          />
        </a>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-[#c01e27] hover:text-[#c01e27] lg:hidden"
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="main-navigation-mobile"
        >
          <span className="text-xl" aria-hidden="true">
            {isMobileMenuOpen ? "×" : "≡"}
          </span>
        </button>

        <nav
          className="hidden flex-1 flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#4d4d4d] lg:flex"
          aria-label="Navegación principal"
        >
          {navigationItems.map((item) => {
            const baseClass = "transition-colors hover:text-[#e31e24]";

            if (item.children != null && item.children.length > 0) {
              return (
                <div key={item.label} className="relative group">
                  {item.isRoute ? (
                    <Link to={item.href} className={baseClass}>
                      {item.label}
                    </Link>
                  ) : (
                    <a href={item.href} className={baseClass}>
                      {item.label}
                    </a>
                  )}

                  <div className="absolute left-0 right-0 top-full h-3" aria-hidden="true" />

                  <div
                    className="pointer-events-none invisible absolute left-1/2 top-full z-50 mt-1 w-56 -translate-x-1/2 transform rounded-2xl bg-white p-2 opacity-0 shadow-[0px_25px_55px_rgba(0,0,0,0.18)] ring-1 ring-slate-200 transition duration-150 group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-focus-within:pointer-events-auto"
                  >
                    <ul className="space-y-1">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            to={child.href}
                            className="block rounded-xl px-4 py-2 text-left text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#c01e27] transition hover:bg-[#fef3f4]"
                          >
                            <span>{child.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }

            if (item.isRoute) {
              return (
                <Link key={item.href} to={item.href} className={baseClass}>
                  {item.label}
                </Link>
              );
            }

            return (
              <a key={item.href} href={item.href} className={baseClass}>
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="#" aria-label="Instagram" className="text-gray-500 transition hover:text-gray-700">
            <img src="/img/instagram.svg" alt="Instagram" className="h-6 w-6" />
          </a>
          <a href="#" aria-label="TikTok" className="text-gray-500 transition hover:text-gray-700">
            <img src="/img/tiktok.svg" alt="TikTok" className="h-6 w-6" />
          </a>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-slate-200/60 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 lg:hidden">
          <nav id="main-navigation-mobile" aria-label="Navegación principal móvil" className="page-section flex flex-col gap-6 py-6">
            <ul className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#1c1f35]">
              {navigationItems.map((item) => (
                <li key={`mobile-${item.label}`} className="space-y-2">
                  {item.isRoute ? (
                    <Link to={item.href} onClick={closeMobileMenu} className="flex items-center justify-between">
                      <span>{item.label}</span>
                      {item.children && <span className="text-xs font-normal uppercase tracking-[0.18em] text-[#c01e27]">Ver más</span>}
                    </Link>
                  ) : (
                    <a href={item.href} onClick={closeMobileMenu} className="flex items-center justify-between">
                      <span>{item.label}</span>
                      {item.children && <span className="text-xs font-normal uppercase tracking-[0.18em] text-[#c01e27]">Ver más</span>}
                    </a>
                  )}

                  {item.children != null && item.children.length > 0 && (
                    <ul className="space-y-2 pl-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#c01e27]">
                      {item.children.map((child) => (
                        <li key={`mobile-${child.href}`}>
                          <Link to={child.href} onClick={closeMobileMenu} className="block">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-slate-500 transition hover:text-[#c01e27]">
                <img src="/img/instagram.svg" alt="Instagram" className="h-6 w-6" />
              </a>
              <a href="#" aria-label="TikTok" className="text-slate-500 transition hover:text-[#c01e27]">
                <img src="/img/tiktok.svg" alt="TikTok" className="h-6 w-6" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
