import { cooperativeDetailPages } from "./cooperativePages";
import { SERVICE_DETAILS } from "./serviceDetails";
import { DESTINATION_DETAILS } from "./destinationDetails";

export interface GlobalSearchItem {
  id: string;
  title: string;
  description: string;
  content?: string; // New field for deep search
  url: string;
  category: "Servicios" | "Cooperativa" | "Contacto" | "General";
}

// Helper to join strings safely
const joinContent = (...parts: (string | string[] | undefined | null)[]): string => {
  return parts
    .flat()
    .filter((part): part is string => typeof part === "string" && part.length > 0)
    .join(" ");
};

const serviceItems: GlobalSearchItem[] = SERVICE_DETAILS.map((service) => ({
  id: `service-${service.id}`,
  title: service.name,
  description: service.intro,
  content: joinContent(
    service.intro,
    service.body,
    service.highlights,
    service.process.map((p) => `${p.title} ${p.description}`),
    service.extra?.title,
    service.extra?.description
  ),
  url: `/servicios/${service.id}`,
  category: "Servicios",
}));

const destinationItems: GlobalSearchItem[] = DESTINATION_DETAILS.map((dest) => ({
  id: `dest-${dest.id}`,
  title: dest.name,
  description: dest.summary,
  content: joinContent(
    dest.summary,
    dest.sections.map((s) => joinContent(s.title, s.paragraphs, s.bullets))
  ),
  url: `/destinos/${dest.id}`,
  category: "General",
}));

const cooperativeItems: GlobalSearchItem[] = cooperativeDetailPages.map((page) => ({
  id: `cooperative-${page.id}`,
  title: page.title,
  description:
    page.subtitle ??
    "Conoce los detalles institucionales, normativos y documentación de nuestra cooperativa.",
  content: joinContent(
    page.subtitle,
    page.sections.map((s) =>
      joinContent(
        s.heading,
        s.description,
        s.paragraphs,
        s.bullets,
        s.subsections?.map((sub) =>
          joinContent(sub.title, sub.paragraphs, sub.bullets)
        )
      )
    )
  ),
  url: `/nuestra-cooperativa/${page.id}`,
  category: "Cooperativa",
}));

export const GLOBAL_SEARCH_INDEX: GlobalSearchItem[] = [
  ...serviceItems,
  ...destinationItems,
  ...cooperativeItems,
  {
    id: "contacto",
    title: "Contacto",
    description: "Escríbenos para recibir asesoría en menos de 24 horas hábiles.",
    content: "teléfono dirección correo electrónico pqr peticiones quejas reclamos",
    url: "/contacto",
    category: "Contacto",
  },
  {
    id: "destinos",
    title: "Destinos",
    description: "Consulta nuestra red de destinos en el Valle del Cauca y el eje cafetero.",
    content: "mapa rutas horarios precios pasajes tiquetes",
    url: "/destinos",
    category: "General",
  },
  {
    id: "home",
    title: "Inicio",
    description: "Página principal con una vista general de nuestros servicios y novedades.",
    url: "/",
    category: "General",
  },
];
