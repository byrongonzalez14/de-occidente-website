export interface ServiceDetail {
  id: string;
  name: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  body: string[];
  highlights: string[];
  process: {
    title: string;
    description: string;
  }[];
  cta?: {
    label: string;
    href: string;
  };
  extra?: {
    title: string;
    description: string;
    imageSrc?: string;
    imageAlt?: string;
    videoSrc?: string;
    videoPoster?: string;
  };
  form?: {
    id: string;
    title: string;
    placeholder: string;
    ctaLabel: string;
    helperText?: string;
  };
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: "encomiendas",
    name: "Encomiendas",
    heroImage: "/img/general/servicio-encomiendas.png",
    heroImageAlt: "Servicio de encomiendas De Occidente",
    intro:
      "Acércate a nuestro punto de despacho más cercano y envía tu mercancía a nuestros destinos; llegará el mismo día de despacho a nuestra oficina aliada más próxima.",
    body: [
      "Si deseas conocer el estado de tu envío, por favor introduce el número de guía en nuestro sistema de rastreo. Nuestro equipo está disponible para acompañarte durante todo el proceso, desde la recepción hasta la entrega final.",
      "Trabajamos con empaques seguros y bodegas ventiladas para garantizar que cada paquete llegue en óptimas condiciones. Nuestros colaboradores te brindarán recomendaciones de embalaje y documentación cuando lo necesites."
    ],
    highlights: [
      "Cobertura regional en el Valle del Cauca y Eje Cafetero",
      "Entrega exprés de documentos y paquetes prioritarios",
      "Seguimiento en línea y confirmación de entrega"
    ],
    process: [
      { title: "Prepara tu paquete", description: "Verifica peso, dimensiones y embálalo de forma segura." },
      { title: "Regístralo", description: "Acércate a nuestras taquillas o agenda la recolección telefónica." },
      { title: "Rastrea", description: "Consulta el estado con tu número de guía en cualquier momento." },
      { title: "Recibe confirmación", description: "Te notificamos cuando la encomienda llega a su destino." }
    ],
    cta: {
      label: "Rastrear guía",
      href: "#rastreo",
    },
    extra: {
      title: "Cobertura",
      description:
        "Roldanillo · Cali · Armenia · La Tulia · La Unión · Santa Rita · Buga · Pereira · Cartago · Bolívar · El Naranjal · La Aguada · Ricaurte · Zarzal · El Dovio · Buga · Tuluá",
      videoSrc: "/img/general/clip-encomiendas.mp4",
      videoPoster: "/img/general/servicio-encomiendas.png",
      imageAlt: "Tus envíos son nuestra prioridad",
    },
    form: {
      id: "rastreo",
      title: "Consulta tu envío",
      placeholder: "Ingresa el número de guía",
      ctaLabel: "Rastrear guía",
      helperText: "Recuerda tener a la mano el código entregado en taquilla.",
    },
  },
  {
    id: "viaja-con-tu-mascota",
    name: "Viaja con tu mascota",
    heroImage: "/img/general/viaja-con-tu-mascota.png",
    heroImageAlt: "Mascota viajando con De Occidente",
    intro:
      "En De Occidente transportamos a toda la familia así que puedes viajar con tu mascota en nuestros vehículos, teniendo en cuenta la siguiente información.",
    body: [
      "Asegúrate que tu mascota pueda viajar cómodamente en un guacal de 25 x 40 cm, en nuestras bodegas, las cuales están perfectamente adecuadas y ventiladas para su comodidad.",
      "Comunícate con la oficina de tu ciudad mínimo dos horas de anterioridad para que nuestros colaboradores puedan asignarte uno de ellos.",
      "Ten presente que la comodidad de nuestros #ViajerosDeOccidente es prioridad, así como la ley. Si tu mascota no cabe en el guacal, es necesario llegar a un acuerdo con nuestro conductor y, si ningún pasajero tiene problemas de alergias o le incomoda, la mascota puede viajar en el pasillo."
    ],
    highlights: [
      "Guacales desinfectados y ventilados",
      "Acompañamiento del equipo de taquilla",
      "Cumplimiento de la Ley 769 de 2002"
    ],
    process: [
      { title: "Agenda tu viaje", description: "Llámanos o visítanos mínimo dos horas antes de la salida." },
      { title: "Prepara a tu mascota", description: "Usa un guacal homologado e incluye mantas y juguetes." },
      { title: "Registro en terminal", description: "Firma el acta de transporte y recibe nuestras indicaciones." },
      { title: "Viaja tranquilo", description: "Supervisamos el traslado y te avisamos en las paradas programadas." }
    ],
    cta: {
      label: "Busca una ruta",
      href: "/destinos",
    },
    extra: undefined
  },
  {
    id: "transporte-pasajeros",
    name: "Transporte de pasajeros",
    heroImage: "/img/general/pasajeros.png",
    heroImageAlt: "Pasajeros abordando un bus de De Occidente",
    intro:
      "Conecta con el corazón del Valle del Cauca y el Eje Cafetero gracias a nuestra red de rutas diarias. Flota moderna, conductores certificados y atención al pasajero 24/7.",
    body: [
      "Disponemos de salidas programadas cada día a más de 15 destinos, con opciones directas y rutas con paradas intermedias. Todas nuestras unidades cuentan con sillas reclinables, aire acondicionado y WiFi a bordo.",
      "Compra tus tiquetes en terminal, vía telefónica o a través de nuestros aliados digitales. Nuestro equipo te orienta sobre equipaje, descuentos y programas corporativos."
    ],
    highlights: [
      "Salidas puntuales con monitoreo en tiempo real",
      "Programas especiales para empresas y colegios",
      "Descuentos para estudiantes y adultos mayores"
    ],
    process: [
      { title: "Planea", description: "Elige tu destino y consulta los horarios disponibles." },
      { title: "Compra", description: "Reserva en línea o en taquilla y recibe tu código digital." },
      { title: "Embarca", description: "Presenta tu documento y aborda con 20 minutos de antelación." },
      { title: "Disfruta", description: "Relájate con nuestros servicios a bordo y llega a tiempo." }
    ],
    cta: {
      label: "Compra tu tiquete",
      href: "/destinos",
    }
  }
];

export const SERVICE_DETAILS_MAP = SERVICE_DETAILS.reduce<Record<string, ServiceDetail>>((acc, detail) => {
  acc[detail.id] = detail;
  return acc;
}, {});
