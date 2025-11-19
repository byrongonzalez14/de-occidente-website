import { cooperativeDetailPages } from "./cooperativePages";
import { SERVICES_OVERVIEW } from "./servicesOverview";

export interface GlobalSearchItem {
  id: string;
  title: string;
  description: string;
  url: string;
  category: "Servicios" | "Cooperativa" | "Contacto" | "General";
}

const serviceItems: GlobalSearchItem[] = SERVICES_OVERVIEW.map((service) => ({
  id: `service-${service.id}`,
  title: service.name,
  description: service.description,
  url: service.detailPath,
  category: "Servicios",
}));

const cooperativeItems: GlobalSearchItem[] = cooperativeDetailPages.map((page) => ({
  id: `cooperative-${page.id}`,
  title: page.title,
  description:
    page.subtitle ??
    "Conoce los detalles institucionales, normativos y documentación de nuestra cooperativa.",
  url: `/nuestra-cooperativa/${page.id}`,
  category: "Cooperativa",
}));

export const GLOBAL_SEARCH_INDEX: GlobalSearchItem[] = [
  ...serviceItems,
  ...cooperativeItems,
  {
    id: "contacto",
    title: "Contacto",
    description: "Escríbenos para recibir asesoría en menos de 24 horas hábiles.",
    url: "/contacto",
    category: "Contacto",
  },
  {
    id: "destinos",
    title: "Destinos",
    description: "Consulta nuestra red de destinos en el Valle del Cauca y el eje cafetero.",
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
