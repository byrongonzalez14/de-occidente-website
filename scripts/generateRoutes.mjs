import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const PROJECT_ROOT = resolve(process.cwd());
const ROUTES_SOURCE = resolve(PROJECT_ROOT, "src", "data", "New RutasDeOccidente - New_Rutas_Info.csv");
const DIRECTORY_SOURCE = resolve(PROJECT_ROOT, "src", "data", "New RutasDeOccidente - New_Directory.csv");
const OUTPUT_PATH = resolve(PROJECT_ROOT, "src", "data", "routes.json");

const DEFAULT_HORARIO_MESSAGE = "Comunicarse con oficina para conocer horarios.";

const sanitizeValue = (value) => {
  if (value == null) return null;
  const trimmed = String(value).trim();
  if (!trimmed || trimmed.toUpperCase() === "N/A") return null;
  return trimmed;
};

const toNumber = (value) => {
  const numeric = String(value ?? "").replace(/[^0-9]/g, "");
  if (!numeric) return null;
  return Number.parseInt(numeric, 10);
};

const splitCsvLine = (line) => {
  const result = [];
  let current = "";
  let insideQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];

    if (char === '"') {
      const nextChar = line[i + 1];
      if (insideQuotes && nextChar === '"') {
        current += '"';
        i += 1;
        continue;
      }
      insideQuotes = !insideQuotes;
      continue;
    }

    if (char === "," && !insideQuotes) {
      result.push(current);
      current = "";
      continue;
    }

    current += char;
  }

  result.push(current);
  return result;
};

const parseCsv = (content) => {
  const lines = content
    .split(/\r?\n/)
    .map((line) => line.trimEnd())
    .filter((line) => line.length > 0);

  if (lines.length === 0) {
    return [];
  }

  const headers = splitCsvLine(lines[0]);
  const rows = [];

  for (let i = 1; i < lines.length; i += 1) {
    const line = lines[i];
    const values = splitCsvLine(line);
    const row = {};

    headers.forEach((header, index) => {
      row[header] = values[index] ?? "";
    });

    rows.push(row);
  }

  return rows;
};

const stripAccents = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const parseBoolean = (value) => {
  const normalized = sanitizeValue(value);
  if (!normalized) return null;

  const upper = stripAccents(normalized).replace(/\s+/g, "").toUpperCase();
  if (["SI", "YES", "TRUE", "1"].includes(upper)) return true;
  if (["NO", "FALSE", "0"].includes(upper)) return false;
  return null;
};

const toKey = (value) => sanitizeValue(value)?.toUpperCase() ?? null;

const buildDirectoryMap = () => {
  const rawContent = readFileSync(DIRECTORY_SOURCE, "utf8");
  const rows = parseCsv(rawContent);
  const map = new Map();

  for (const row of rows) {
    const key = toKey(row.MUNICIPIO);
    if (!key) continue;

    map.set(key, {
      fijo: sanitizeValue(row.TEL_FIJO),
      celular: sanitizeValue(row.TEL_CEL),
    });
  }

  return map;
};

const buildContacts = (partial, name, directoryMap) => {
  const contact = {
    fijo: sanitizeValue(partial.fijo),
    celular: sanitizeValue(partial.celular),
  };

  const hasContact = Boolean(contact.fijo || contact.celular);
  if (hasContact) {
    return contact;
  }

  const key = toKey(name);
  const directoryMatch = key ? directoryMap.get(key) : undefined;

  if (directoryMatch) {
    return {
      fijo: directoryMatch.fijo ?? null,
      celular: directoryMatch.celular ?? null,
    };
  }

  if (key && key.includes(" (")) {
    const baseKey = key.split(" (")[0];
    const baseMatch = directoryMap.get(baseKey);
    if (baseMatch) {
      return {
        fijo: baseMatch.fijo ?? null,
        celular: baseMatch.celular ?? null,
      };
    }
  }

  return contact;
};

const directoryMap = buildDirectoryMap();
const routesContent = readFileSync(ROUTES_SOURCE, "utf8");
const routeRows = parseCsv(routesContent);

const routes = [];

for (const row of routeRows) {
  const id = Number.parseInt(row.id, 10);
  const nombreCompleto =
    sanitizeValue(row.RUTA_NOMBRE_COMPLETO ?? row.RUTA ?? row.RUTA_NOMBRE) ?? sanitizeValue(row.RUTA_COMPLETA);
  const origen = sanitizeValue(row.ORIGEN);
  const destino = sanitizeValue(row.DESTINO);

  if (!Number.isFinite(id) || !nombreCompleto || !origen || !destino) {
    continue;
  }

  const segmentName = sanitizeValue(row.SEGMENTO ?? row.SEGMENTO_NOMBRE ?? row.SEGMENTO_ALIAS);
  const esSegmentoViaValue = parseBoolean(row.ES_SEGMENTO_VIA);
  const esSegmentoVia = esSegmentoViaValue ?? Boolean(segmentName);
  const route = {
    id,
    nombre_completo: nombreCompleto,
    origen,
    destino,
    es_segmento_via: esSegmentoVia,
    precio_tiquete: toNumber(row.PRECIO_TIQUETE ?? row.PRECIO ?? row.PRECIO_IDA),
    horario_descripcion: sanitizeValue(row.HORARIO) ?? DEFAULT_HORARIO_MESSAGE,
    tiempos_estimados: {
      duracion: "Por definir",
    },
    contactos: {
      origen: buildContacts(
        { fijo: row.TEL_ORIGEN_FIJO, celular: row.TEL_ORIGEN_CEL },
        origen,
        directoryMap,
      ),
      destino: buildContacts(
        { fijo: row.TEL_DESTINO_FIJO, celular: row.TEL_DESTINO_CEL },
        destino,
        directoryMap,
      ),
    },
  };

  if (segmentName) {
    route.segmento = {
      nombre: segmentName,
      contactos: buildContacts(
        { fijo: row.TEL_SEGMENTO_FIJO, celular: row.TEL_SEGMENTO_CEL },
        segmentName,
        directoryMap,
      ),
    };
  }

  routes.push(route);
}

routes.sort((a, b) => a.id - b.id);

writeFileSync(OUTPUT_PATH, `${JSON.stringify(routes, null, 2)}\n`, "utf8");

console.log(`Generated ${routes.length} routes to ${OUTPUT_PATH}`);
