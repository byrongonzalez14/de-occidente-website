import rawRoutes from "./routes.json";

export interface RouteContact {
  fijo: string | null;
  celular: string | null;
}

export interface RouteTimeEstimate {
  duracion: string;
}

export interface RouteSegment {
  nombre: string;
  contactos: RouteContact;
}

export interface RouteRecord {
  id: number;
  nombre_completo: string;
  origen: string;
  destino: string;
  es_segmento_via: boolean;
  precio_tiquete: number | null;
  horario_descripcion: string;
  tiempos_estimados: RouteTimeEstimate;
  contactos: {
    origen: RouteContact;
    destino: RouteContact;
  };
  segmento?: RouteSegment;
}

type RawRoute = RouteRecord & {
  segmento?: {
    nombre?: string | null;
    contactos?: {
      fijo?: string | null;
      celular?: string | null;
    } | null;
  } | null;
};

const sanitizeContactValue = (value: string | null | undefined): string | null => {
  if (!value) return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.toUpperCase() === "N/A") {
    return null;
  }
  return trimmed;
};

const sanitizeDuration = (value: string | null | undefined): string => {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : "Por definir";
};

const sanitizeRoute = (route: RawRoute): RouteRecord => {
  const segmentName = route.segmento?.nombre?.trim();
  const segmento = segmentName
    ? {
        nombre: segmentName,
        contactos: {
          fijo: sanitizeContactValue(route.segmento?.contactos?.fijo),
          celular: sanitizeContactValue(route.segmento?.contactos?.celular),
        },
      }
    : undefined;

  return {
    ...route,
    segmento,
    precio_tiquete: Number.isFinite(route.precio_tiquete) ? route.precio_tiquete : null,
    horario_descripcion: route.horario_descripcion?.trim() ?? "",
    tiempos_estimados: {
      duracion: sanitizeDuration(route.tiempos_estimados?.duracion),
    },
    contactos: {
      origen: {
        fijo: sanitizeContactValue(route.contactos.origen.fijo),
        celular: sanitizeContactValue(route.contactos.origen.celular),
      },
      destino: {
        fijo: sanitizeContactValue(route.contactos.destino?.fijo),
        celular: sanitizeContactValue(route.contactos.destino?.celular),
      },
    },
  };
};

const rawData = rawRoutes as RawRoute[];

export const ROUTES: RouteRecord[] = rawData.map(sanitizeRoute);

const uniqueCities = new Set<string>();
ROUTES.forEach((route) => {
  if (route.origen.trim().length > 0) uniqueCities.add(route.origen.trim());
  if (route.destino.trim().length > 0) uniqueCities.add(route.destino.trim());
});

export const ROUTE_CITIES = Array.from(uniqueCities).sort((a, b) => a.localeCompare(b, "es"));
