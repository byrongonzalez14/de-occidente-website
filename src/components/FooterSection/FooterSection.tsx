import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaPhone, FaLocationDot } from "react-icons/fa6";
import type { ComponentType } from "react";
import type { IconBaseProps } from "react-icons";

interface ContactInfo {
  IconComponent: ComponentType<IconBaseProps>;
  text: string;
  type: "location" | "phone";
}

interface FooterLink {
  text: string;
  href: string;
  isExternal?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const FooterSection = (): JSX.Element => {
  const currentYear = new Date().getFullYear();
  const InstagramIcon = FaInstagram as ComponentType<IconBaseProps>;
  const FacebookIcon = FaFacebook as ComponentType<IconBaseProps>;

  const contactInfo: ContactInfo[] = [
    {
      IconComponent: FaLocationDot as ComponentType<IconBaseProps>,
      text: "Carrera 2 # 11C-14 Roldanillo (Valle)",
      type: "location",
    },
    {
      IconComponent: FaPhone as ComponentType<IconBaseProps>,
      text: "+57 (602) 229 7017",
      type: "phone",
    },
    {
      IconComponent: FaPhone as ComponentType<IconBaseProps>,
      text: "+57 (602) 229 8476",
      type: "phone",
    },
  ];

  const footerColumns: FooterColumn[] = [
    {
      title: "Nuestra Cooperativa",
      links: [
        { text: "Quiénes somos", href: "/nuestra-cooperativa#quienes-somos" },
        { text: "Misión, Visión, Valores", href: "/nuestra-cooperativa#misiones-valores" },
        { text: "Actualización RTE", href: "/nuestra-cooperativa/actualizacion-rte" },
        { text: "Políticas de Calidad", href: "/nuestra-cooperativa/politicas-de-calidad" },
        { text: "Contrato Transporte Pasajeros", href: "/nuestra-cooperativa/contrato-transporte-pasajeros" },
        { text: "Contrato Transporte Mercancía", href: "/nuestra-cooperativa/contrato-transporte-mercancia" },
      ],
    },
    {
      title: "Servicios y Contacto",
      links: [
        { text: "Contacto", href: "/contacto" },
        { text: "Encomiendas", href: "/servicios/encomiendas" },
        { text: "Viaja con tu Mascota", href: "/servicios/viaja-con-tu-mascota" },
        { text: "Consulta tu guía", href: "/servicios/encomiendas#rastreo" },
      ],
    },
    {
      title: "Documentos y Legal",
      links: [
        { text: "Contrato Transporte Mercancía", href: "/nuestra-cooperativa/contrato-transporte-mercancia" },
        { text: "Contrato Transporte Pasajeros", href: "/nuestra-cooperativa/contrato-transporte-pasajeros" },
        { text: "Reglamento de Equipaje", href: "/nuestra-cooperativa/reglamento-de-equipaje" },
      ],
    },
  ];

  return (
    <footer className="bg-[#be1623] text-white">
      <div className="page-section flex flex-col gap-12 py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-8 lg:max-w-xs">
            <div className="flex flex-col items-center gap-3">
              <img className="h-7 w-auto" alt="Cooperativa de Occidente Logo" src="/img/general/logo-deoccidente-white.svg" />

              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/deoccidenteoficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white transition hover:text-[#ffe0e3]"
                >
                  <InstagramIcon className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="https://www.facebook.com/DeOccidente"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-white transition hover:text-[#ffe0e3]"
                >
                  <FacebookIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>

            <address className="space-y-4 not-italic text-sm leading-relaxed">
              {contactInfo.map((contact, index) => {
                const Icon = contact.IconComponent;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    {contact.type === "phone" ? (
                      <a href={`tel:${contact.text.replace(/\s/g, "")}`} className="font-medium text-white transition hover:text-[#ffe0e3]">
                        {contact.text}
                      </a>
                    ) : (
                      <p className="font-medium text-white">{contact.text}</p>
                    )}
                  </div>
                );
              })}
            </address>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:flex lg:flex-1 lg:justify-end lg:gap-12">
            {footerColumns.map((column) => (
              <nav key={column.title} aria-label={column.title} className="space-y-4">
                <h2 className="text-lg font-bold uppercase tracking-[0.16em]">{column.title}</h2>
                <ul className="space-y-3 text-sm font-normal">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      {link.isExternal ? (
                        <a href={link.href} target="_blank" rel="noreferrer" className="transition hover:text-[#ffe0e3]">
                          {link.text}
                        </a>
                      ) : (
                        <Link to={link.href} className="transition hover:text-[#ffe0e3]">
                          {link.text}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 text-xs uppercase tracking-[0.24em] text-white/80 sm:flex-row">
          <p className="text-center sm:text-left">© {currentYear} Cooperativa de Occidente. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/deoccidenteoficial/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition hover:text-white"
            >
              <InstagramIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/DeOccidente"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition hover:text-white"
            >
              <FacebookIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
