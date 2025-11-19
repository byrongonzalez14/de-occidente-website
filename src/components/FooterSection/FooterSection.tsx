import { Link } from "react-router-dom";

interface ContactInfo {
  icon: string;
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
  const contactInfo: ContactInfo[] = [
    {
      icon: "/img/icons-8.svg",
      text: "Carrera 2 # 11C-14 Roldanillo (Valle)",
      type: "location",
    },
    {
      icon: "/img/vector-131.svg",
      text: "+57 (602) 229 7017",
      type: "phone",
    },
    {
      icon: "/img/vector-131.svg",
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
        { text: "Contrato Transporte Mercancía", href: "/docs/contrato-transporte-mercancia.pdf", isExternal: true },
        { text: "Contrato Transporte Pasajeros", href: "/docs/contrato-transporte-pasajeros.pdf", isExternal: true },
        { text: "Reglamento de Equipaje", href: "/nuestra-cooperativa/reglamento-de-equipaje" },
      ],
    },
  ];

  return (
    <footer className="bg-[#be1623] text-white">
      <div className="page-section flex flex-col gap-12 py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-8 lg:max-w-xs">
            <img className="h-16 w-auto" alt="Cooperativa de Occidente Logo" src="/img/frame-1.svg" />

            <address className="space-y-4 not-italic text-sm leading-relaxed">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start gap-3">
                  <img src={contact.icon} alt="" className={`mt-0.5 h-4 w-4 ${contact.type === "location" ? "shrink-0" : ""}`} aria-hidden="true" />
                  {contact.type === "phone" ? (
                    <a href={`tel:${contact.text.replace(/\s/g, "")}`} className="font-medium text-white transition hover:text-[#ffe0e3]">
                      {contact.text}
                    </a>
                  ) : (
                    <p className="font-medium text-white">{contact.text}</p>
                  )}
                </div>
              ))}
            </address>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:flex lg:flex-1 lg:justify-end lg:gap-12">
            {footerColumns.map((column) => (
              <nav key={column.title} aria-label={column.title} className="space-y-4">
                <h2 className="text-lg font-bold uppercase tracking-[0.16em]">{column.title}</h2>
                <ul className="space-y-3 text-sm font-medium">
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
          <p className="text-center sm:text-left">© {new Date().getFullYear()} Cooperativa de Occidente. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="transition hover:text-white">
              <img src="/img/instagram.svg" alt="Instagram" className="h-5 w-5" />
            </a>
            <a href="#" aria-label="TikTok" className="transition hover:text-white">
              <img src="/img/tiktok.svg" alt="TikTok" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
