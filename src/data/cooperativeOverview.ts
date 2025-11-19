export const cooperativeHero = {
  title: "Nuestra Cooperativa",
  subtitle:
    "Construimos experiencias de movilidad y logística que conectan al Valle del Cauca con el resto del país, siempre con vocación de servicio y cercanía humana.",
  backgroundImage: "/img/image-5-4.png",
  accentImage: {
    src: "/img/vector-38.svg",
    className: "-right-8 top-1/2 h-20 -translate-y-1/2",
  },
  cta: {
    label: "Conoce nuestra historia",
    to: "#quienes-somos",
  },
};

export const cooperativeAbout = {
  id: "quienes-somos",
  title: "¿Quiénes somos?",
  introduction:
    "Somos una cooperativa de transporte que, desde hace más de cuatro décadas, acompaña los viajes y envíos de miles de personas en la región. Gestionamos servicios de pasajeros, encomiendas y soluciones logísticas con un enfoque humano, cercano y responsable.",
  paragraphs: [
    "Nacimos de la unión de conductores y empresarios que decidieron crear una alternativa sólida para movilizar personas y mercancías entre los municipios del norte del Valle. Hoy mantenemos ese espíritu cooperativo, apoyándonos en procesos modernos y en un equipo comprometido con la seguridad y el bienestar de nuestros usuarios.",
    "Trabajamos bajo principios de transparencia, innovación y desarrollo sostenible. Creemos en el poder de la conectividad regional y en la importancia de generar oportunidades para las comunidades con las que interactuamos día a día.",
  ],
  highlights: [
    { label: "+45 años", description: "de experiencia conectando el Eje Cafetero y el Valle del Cauca" },
    { label: "+15 municipios", description: "con rutas diarias de transporte de pasajeros" },
    { label: "Cobertura nacional", description: "en envíos y logística con aliados certificados" },
  ],
  media: {
    imageUrl: "/img/general/personal-deoccidente.png",
    caption: "Nuestro equipo en la base operativa de Roldanillo, Valle del Cauca.",
  },
};

export const cooperativeMissionVisionValues = {
  title: "Misión, Visión y Valores",
  cards: [
    {
      title: "Misión",
      description:
        "Ofrecer soluciones de transporte y logística confiables, seguras y humanas que aporten al desarrollo económico y social de nuestras comunidades cooperadas.",
    },
    {
      title: "Visión",
      description:
        "Ser la cooperativa líder en movilidad integral del occidente colombiano, reconocida por la excelencia operativa y el compromiso con la sostenibilidad.",
    },
    {
      title: "Valores",
      bullets: [
        "Servicio con calidez y respeto",
        "Trabajo colaborativo y solidario",
        "Transparencia en cada operación",
        "Innovación centrada en las personas",
      ],
    },
    {
      title: "Nuestros pilares",
      description:
        "Seguridad, puntualidad, acompañamiento cercano y responsabilidad social son la base de nuestras decisiones estratégicas.",
    },
  ],
};

export const cooperativeQuickLinks = {
  title: "Transparencia y documentación",
  description:
    "Consulta la información corporativa y documentos normativos que respaldan nuestra operación.",
  items: [
    {
      id: "actualizacion-rte",
      title: "Actualización RTE",
      description: "Descarga las certificaciones y documentos vigentes del Registro de Transporte Empresarial.",
      to: "/nuestra-cooperativa/actualizacion-rte",
    },
    {
      id: "politicas-de-calidad",
      title: "Políticas de Calidad",
      description: "Conoce nuestros compromisos con la mejora continua, la seguridad y el servicio al usuario.",
      to: "/nuestra-cooperativa/politicas-de-calidad",
    },
    {
      id: "reglamento-de-equipaje",
      title: "Reglamento de Equipaje",
      description: "Revisa lineamientos y buenas prácticas para el manejo de equipaje de mano y en bodega.",
      to: "/nuestra-cooperativa/reglamento-de-equipaje",
    },
  ],
};
