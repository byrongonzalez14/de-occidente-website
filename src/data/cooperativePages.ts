export type CooperativeReference = {
  id: string;
  title: string;
  description: string;
  to: string;
};

export type CooperativeSection = {
  id: string;
  heading: string;
  description?: string;
  paragraphs?: string[];
  bullets?: string[];
  documents?: { label: string; fileName: string; url?: string }[];
  video?: { src: string; title: string };
};

export type CooperativeDetailPage = {
  id: string;
  title: string;
  subtitle?: string;
  heroImage: string;
  accentImage?: { src: string; className?: string };
  sections: CooperativeSection[];
  references: CooperativeReference[];
};

export const cooperativeDetailPages: CooperativeDetailPage[] = [
  {
    id: "actualizacion-rte",
    title: "Actualización RTE",
    subtitle: "Accede a los documentos actualizados del Registro de Transporte Empresarial.",
    heroImage: "/img/hero-rte.jpg",
    sections: [
      {
        id: "introduccion",
        heading: "Documentos vigentes",
        description:
          "Ponemos a tu disposición los soportes más recientes de nuestra operación para que puedas consultarlos y descargarlos cuando los necesites.",
        documents: [
          { label: "Información general", fileName: "informacion-general.pdf" },
          { label: "RUT Cooperativa de Transportadores de Occidente", fileName: "rut-coop-transp-occidente.pdf" },
          { label: "Certificado de Existencia y Representación Legal", fileName: "certificado-existencia.pdf" },
          { label: "Póliza de Responsabilidad Civil", fileName: "poliza-rc.pdf" },
          { label: "Tarjeta de operación flota", fileName: "tarjeta-operacion-flota.pdf" },
        ],
      },
    ],
    references: [
      {
        id: "politicas-de-calidad",
        title: "Políticas de Calidad",
        description: "Nuestros compromisos con la mejora continua y el servicio seguro.",
        to: "/nuestra-cooperativa/politicas-de-calidad",
      },
      {
        id: "reglamento-de-equipaje",
        title: "Reglamento de Equipaje",
        description: "Conoce los lineamientos para viajar con tus pertenencias con tranquilidad.",
        to: "/nuestra-cooperativa/reglamento-de-equipaje",
      },
    ],
  },
  {
    id: "politicas-de-calidad",
    title: "Políticas de Calidad",
    subtitle: "Estamos comprometidos con la calidad, la seguridad y el bienestar de nuestros usuarios.",
    heroImage: "/img/hero-calidad.jpg",
    sections: [
      {
        id: "video",
        heading: "Nuestra promesa",
        description: "Te invitamos a conocer en este video cómo trabajamos día a día por la excelencia operativa.",
        video: {
          src: "https://www.youtube.com/embed/8Z9H-4example",
          title: "Política de Calidad - Cooperativa de Occidente",
        },
      },
      {
        id: "politica-calidad",
        heading: "Política de Calidad",
        paragraphs: [
          "Garantizamos el cumplimiento de los estándares de seguridad, puntualidad y confort en cada servicio que prestamos.",
          "Promovemos la capacitación continua de nuestro talento humano y fortalecemos nuestros procesos con herramientas tecnológicas para brindar experiencias memorables.",
        ],
      },
      {
        id: "seguridad-salud",
        heading: "Seguridad y salud en el trabajo",
        paragraphs: [
          "Fomentamos ambientes laborales seguros, saludables y respetuosos. Implementamos protocolos de prevención, atención y mitigación de riesgos para colaboradores, conductores y usuarios.",
          "Trabajamos con indicadores de seguimiento para asegurar el cumplimiento de las normas vigentes y la mejora continua de nuestros procesos.",
        ],
        bullets: [
          "Plan anual de bienestar y autocuidado.",
          "Evaluación periódica de riesgos operacionales.",
          "Programas de capacitación para conducción segura.",
        ],
      },
    ],
    references: [
      {
        id: "actualizacion-rte",
        title: "Actualización RTE",
        description: "Consulta los documentos oficiales y certificaciones de la cooperativa.",
        to: "/nuestra-cooperativa/actualizacion-rte",
      },
      {
        id: "reglamento-de-equipaje",
        title: "Reglamento de Equipaje",
        description: "Recomendaciones y políticas para el manejo de equipaje.",
        to: "/nuestra-cooperativa/reglamento-de-equipaje",
      },
    ],
  },
  {
    id: "reglamento-de-equipaje",
    title: "Reglamento de Equipaje",
    subtitle: "Viaja con tranquilidad siguiendo estas recomendaciones y lineamientos.",
    heroImage: "/img/hero-equipaje.jpg",
    sections: [
      {
        id: "general",
        heading: "Lineamientos generales",
        paragraphs: [
          "El pasajero podrá transportar sin costo un equipaje de bodega y un equipaje de mano, siempre que cumplan con las dimensiones y pesos establecidos. Cualquier exceso será transportado sujeto a disponibilidad e implicará cargos adicionales definidos por la cooperativa.",
          "Para garantizar la comodidad y seguridad de todos, el equipaje de mano debe ubicarse en los compartimentos superiores o debajo del asiento sin bloquear pasillos ni salidas de emergencia. El personal de taquilla podrá solicitar el despacho en bodega de equipajes que no cumplan con esta condición.",
          "Recomendamos embalar correctamente tus pertenencias, utilizar candados de seguridad y marcar cada pieza con tus datos de contacto para facilitar su identificación durante el viaje.",
        ],
        bullets: [
          "Equipaje de mano: hasta 10 kg, dimensiones máximas 55 x 40 x 25 cm.",
          "Bolso adicional personal (cartera o morral pequeño) permitido siempre que pueda ubicarse bajo el asiento.",
          "Equipaje en bodega incluido: hasta 23 kg (50 lb) por pasajero, volumen máximo de 158 cm lineales (suma de alto + largo + ancho).",
          "Piezas adicionales o con sobrepeso deberán declararse y pagar el recargo correspondiente antes del abordaje.",
        ],
      },
      {
        id: "articulos-restringidos",
        heading: "Artículos restringidos",
        bullets: [
          "Sustancias inflamables, corrosivas o explosivas.",
          "Armas de fuego y municiones sin documentación legal.",
          "Animales vivos sin las autorizaciones y jaulas reglamentarias.",
        ],
        paragraphs: [
          "Los objetos de valor deben viajar siempre con el pasajero. La cooperativa no se hace responsable por dinero en efectivo, joyas o equipos electrónicos dejados en bodega.",
        ],
      },
      {
        id: "recomendaciones",
        heading: "Recomendaciones para un viaje seguro",
        bullets: [
          "Identifica tu equipaje con nombre y número de contacto.",
          "Llega con al menos 30 minutos de anticipación para registrar tus pertenencias.",
          "Conserva los tiquetes de equipaje entregados por nuestro personal.",
          "Verifica que el embalaje de mercancías frágiles o perecederas sea adecuado para el trayecto.",
          "Informa al personal de taquilla sobre equipajes con contenido especial (equipos médicos, instrumentos, mascotas registradas).",
        ],
      },
    ],
    references: [
      {
        id: "actualizacion-rte",
        title: "Actualización RTE",
        description: "Encuentra certificados y documentos oficiales vigentes.",
        to: "/nuestra-cooperativa/actualizacion-rte",
      },
      {
        id: "politicas-de-calidad",
        title: "Políticas de Calidad",
        description: "Conoce cómo garantizamos servicios seguros y confiables.",
        to: "/nuestra-cooperativa/politicas-de-calidad",
      },
    ],
  },
];
