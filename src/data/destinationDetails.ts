export interface DestinationScheduleRow {
  route: string;
  departure: string;
  arrival: string;
  frequency: string;
}

export interface DestinationContentSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface DestinationDetail {
  id: string;
  name: string;
  heroImage: string;
  heroImageAlt: string;
  summary: string;
  schedule: DestinationScheduleRow[];
  sections: DestinationContentSection[];
}

export const DESTINATION_DETAILS: DestinationDetail[] = [
  {
    id: "armenia",
    name: "Armenia",
    heroImage: "/img/headers-destinos/armenia.jpg",
    heroImageAlt: "Paisaje cafetero de Armenia",
    summary:
      "Capital del Quindío y punto de partida hacia el Paisaje Cultural Cafetero. Una ciudad amable, rodeada de montañas verdes, cafetales y experiencias gastronómicas únicas.",
    schedule: [
      { route: "Tuluá", departure: "04:30", arrival: "08:15", frequency: "Cada 30 min" },
      { route: "Buga", departure: "07:00", arrival: "10:30", frequency: "Cada hora" },
      { route: "Zarzal", departure: "09:45", arrival: "12:20", frequency: "Cada 60 min" },
      { route: "Cartago", departure: "13:30", arrival: "16:05", frequency: "Cada 30 min" },
    ],
    sections: [
      {
        title: "¿Qué hay para hacer en Armenia?",
        paragraphs: [
          "Recorre el Parque de la Vida y disfruta de la frescura de la naturaleza a pocos minutos del centro. Explora el Museo del Oro Quimbaya, una joya arquitectónica con grandes relatos históricos. A pocos kilómetros encontrarás fincas cafeteras que abren sus puertas para vivir la experiencia de la cosecha y preparación del mejor café del mundo.",
        ],
      },
      {
        title: "Imperdibles",
        bullets: [
          "Parque Nacional del Café",
          "Recorrido por el Jardín Botánico del Quindío",
          "Feria Artesanal de la Plaza de Bolívar",
          "Mirador de La Secreta",
        ],
        paragraphs: [
          "Completa el plan con una agenda gastronómica: macana, pandebonos, bebidas de café de autor y fusión de sabores de la región.",
        ],
      },
      {
        title: "Tips para tu viaje",
        bullets: [
          "Reserva tus tours cafeteros con anticipación, tienen cupo limitado.",
          "Lleva ropa ligera y bloqueador, el clima es templado pero cambia rápido.",
          "Pregunta por la tarjeta de transporte público para desplazarte fácilmente.",
        ],
        paragraphs: [
          "Nuestros conductores te dejarán cerca de los principales hoteles y terminales. Consulta con el equipo de taquilla si necesitas orientación adicional.",
        ],
      },
    ],
  },
  {
    id: "bolivar",
    name: "Bolívar",
    heroImage: "/img/headers-destinos/bolivar.jpg",
    heroImageAlt: "Plaza principal de Bolívar, Valle del Cauca",
    summary:
      "Bolívar es naturaleza y tradición. El municipio conserva casas coloniales, templos emblemáticos y miradores perfectos para ver atardeceres sobre el cañón del río Cauca.",
    schedule: [
      { route: "Tuluá", departure: "05:15", arrival: "06:40", frequency: "Cada 45 min" },
      { route: "La Unión", departure: "07:30", arrival: "08:20", frequency: "Cada 60 min" },
      { route: "Roldanillo", departure: "11:00", arrival: "12:10", frequency: "Cada 45 min" },
      { route: "Cartago", departure: "14:20", arrival: "15:30", frequency: "Cada hora" },
    ],
    sections: [
      {
        title: "Plan perfecto en Bolívar",
        paragraphs: [
          "Visita el Santuario del Señor de los Milagros y camina por el parque principal donde las palmeras centenarias acompañan la arquitectura colonial. A pocos minutos está el mirador de La Melva, un punto panorámico con vista 360 del valle.",
        ],
      },
      {
        title: "Imperdibles",
        bullets: [
          "Ruta gastronómica de postres tradicionales",
          "Sendero ecológico Alto de la Cruz",
          "Paseo por el río Cauca y zona de balnearios",
          "Túnel de guadua en la vía a Nariño",
        ],
        paragraphs: [
          "Si te gusta el turismo de aventura, pregunta por los vuelos en parapente que se realizan en la vereda Primavera. Excelente plan para dejarte llevar por el viento.",
        ],
      },
      {
        title: "Tips del viajero",
        bullets: [
          "Lleva una chaqueta ligera, las noches pueden ser frescas.",
          "Recorre el pueblo a pie o en bicicleta; distancias cortas y seguras.",
          "Compra artesanías de guadua hechas a mano por artesanos locales.",
        ],
        paragraphs: [
          "Bolívar está conectado con el resto de municipios del norte del Valle. Consulta las rutas combinadas si deseas continuar hacia Roldanillo o Zarzal.",
        ],
      },
    ],
  },
  {
    id: "buga",
    name: "Buga",
    heroImage: "/img/headers-destinos/buga.jpg",
    heroImageAlt: "Basílica del Señor de los Milagros en Buga",
    summary:
      "Una ciudad ícono del turismo religioso y cultural en Colombia. La Basílica del Señor de los Milagros recibe a miles de peregrinos cada año y su centro histórico guarda secretos coloniales.",
    schedule: [
      { route: "Cali", departure: "04:45", arrival: "06:15", frequency: "Cada 20 min" },
      { route: "Tuluá", departure: "07:10", arrival: "07:55", frequency: "Cada 20 min" },
      { route: "Armenia", departure: "10:30", arrival: "13:40", frequency: "Cada 90 min" },
      { route: "Pereira", departure: "15:00", arrival: "18:15", frequency: "Cada 120 min" },
    ],
    sections: [
      {
        title: "¿Qué hacer en Buga?",
        paragraphs: [
          "Haz una caminata por el centro histórico, visita la Basílica, el Museo del Milagroso y la Casa de la Cultura. Cerca encuentras cafeterías y heladerías tradicionales. Para cerrar el día, el Malecón del Río Guadalajara es perfecto para atardeceres.",
        ],
      },
      {
        title: "Imperdibles",
        bullets: [
          "Tour guiado por la Basílica del Señor de los Milagros",
          "Ruta de dulces bugueños en la Calle de los Postres",
          "Paseo ecológico por el Lago Calima (a 45 minutos)",
          "Recorrido en bicicleta por el corredor verde",
        ],
        paragraphs: [
          "Buga también es historia viva: explora la arquitectura republicana y conversa con los artesanos sobre las tradiciones de la región.",
        ],
      },
      {
        title: "Tips prácticos",
        bullets: [
          "Viaja temprano los fines de semana para evitar congestión.",
          "Si vas al Lago Calima lleva chaqueta corta viento, la brisa es fuerte.",
          "No olvides probar la avena bugueña y el desamargado.",
        ],
        paragraphs: [
          "En la terminal tienes taquillas y puntos de información turística para ampliar tu recorrido por el centro y corregimientos cercanos.",
        ],
      },
    ],
  },
  {
    id: "cali",
    name: "Cali",
    heroImage: "/img/headers-destinos/cali.jpg",
    heroImageAlt: "Puente Ortiz en Cali",
    summary:
      "Capital mundial de la salsa, gastronomía diversa y clima tropical. Cali vibra con festivales, ciclovías nocturnas y una agenda cultural que no descansa.",
    schedule: [
      { route: "Tuluá", departure: "04:15", arrival: "06:20", frequency: "Cada 20 min" },
      { route: "Buga", departure: "05:30", arrival: "06:45", frequency: "Cada 30 min" },
      { route: "Palmira", departure: "07:00", arrival: "07:45", frequency: "Cada 15 min" },
      { route: "Zarzal", departure: "12:10", arrival: "14:20", frequency: "Cada 60 min" },
    ],
    sections: [
      {
        title: "Plan urbano en Cali",
        paragraphs: [
          "Inicia en el Boulevard del Río, cruza el Puente Ortiz y visita la Iglesia La Ermita. Sube al cerro de Las Tres Cruces o al Cristo Rey para ver la ciudad desde las alturas. Por la noche, déjate llevar por la salsa en la Avenida Sexta o en Jovita.",
        ],
      },
      {
        title: "Imperdibles",
        bullets: [
          "Museo de la Salsa Jairo Varela",
          "Parque del Perro y barrio San Antonio",
          "Zoológico de Cali y Río Pance",
          "Mercado gastronómico Alameda",
        ],
        paragraphs: [
          "Cali se vive en bicicleta: aprovecha la red de ciclovías y los recorridos nocturnos guiados para descubrir murales y grafitis.",
        ],
      },
      {
        title: "Tips para tu viaje",
        bullets: [
          "Usa ropa fresca y bloqueador. El clima puede superar los 30°C.",
          "Adquiere la tarjeta MIO si vas a usar el sistema de transporte integrado.",
          "Pregunta por eventos culturales: siempre hay festivales, ferias o conciertos.",
        ],
        paragraphs: [
          "Nuestros buses te dejan en puntos estratégicos del norte y centro de la ciudad. Si te diriges al aeropuerto, pregunta por la ruta directa al Alfonso Bonilla Aragón.",
        ],
      },
    ],
  },
  {
    id: "cartago",
    name: "Cartago",
    heroImage: "/img/headers-destinos/cartago.jpg",
    heroImageAlt: "Parque principal de Cartago",
    summary:
      "Cartago es tradición cafetera y patrimonio musical. Es la puerta norte del Valle del Cauca y conexión directa con Risaralda y Quindío.",
    schedule: [
      { route: "Armenia", departure: "05:00", arrival: "06:40", frequency: "Cada 40 min" },
      { route: "Pereira", departure: "06:20", arrival: "07:10", frequency: "Cada 25 min" },
      { route: "Roldanillo", departure: "09:15", arrival: "10:00", frequency: "Cada 50 min" },
      { route: "Zarzal", departure: "12:45", arrival: "13:25", frequency: "Cada 30 min" },
    ],
    sections: [
      {
        title: "Plan para recorrer Cartago",
        paragraphs: [
          "Camina por el Parque de Bolívar y visita el Museo Casa del Virrey, joya arquitectónica colonial. Cerca encontrarás cafés de especialidad y tiendas de artesanías en bejuco y guadua.",
        ],
      },
      {
        title: "Imperdibles",
        bullets: [
          "Museo del Bordado",
          "Ruta de iglesias republicanas",
          "Tour gastronómico de aborrajados y solteritas",
          "Corredor verde sobre el río La Vieja",
        ],
        paragraphs: [
          "La ciudad es conocida como la \"Ciudad Musical\" del Valle. Consulta la programación de la Banda Departamental y del Festival Pedro Morales Pino.",
        ],
      },
      {
        title: "Tips para tu viaje",
        bullets: [
          "Lleva sombrero o sombrilla: el clima puede ser cálido a mediodía.",
          "Aprovecha la cercanía con Pereira y Armenia para hacer un triángulo turístico.",
          "Si buscas artesanías, visita la Plaza de Mercado y compra directo a los artesanos.",
        ],
        paragraphs: [
          "Desde Cartago puedes conectar con municipios del norte del Valle y Risaralda. Pregunta en taquilla por las rutas combinadas con Zarzal, Ansermanuevo o La Unión.",
        ],
      },
    ],
  },
  {
    id: "el-dovio",
    name: "El Dovio",
    heroImage: "/img/headers-destinos/el-dovio.jpg",
    heroImageAlt: "Montañas de El Dovio",
    summary:
      "Ríos cristalinos, cascadas y rutas de aventura. El Dovio es la entrada al Parque Nacional Las Hermosas y territorio de turismo de naturaleza.",
    schedule: [
      { route: "Roldanillo", departure: "06:00", arrival: "06:45", frequency: "Cada 45 min" },
      { route: "Zarzal", departure: "08:15", arrival: "09:10", frequency: "Cada 60 min" },
      { route: "Cartago", departure: "12:00", arrival: "13:20", frequency: "Cada 90 min" },
      { route: "La Unión", departure: "15:30", arrival: "16:15", frequency: "Cada 45 min" },
    ],
    sections: [
      {
        title: "Planes ecoturísticos",
        paragraphs: [
          "Visita la cascada de Los Chorros y el charco del Tabor, ideales para nadar. Recorre senderos que conectan con Miravalles y disfruta de la gastronomía campesina.",
        ],
        bullets: [
          "Mirador Alto de la Bandera",
          "Reserva Forestal Las Nieves",
          "Túneles naturales en la vereda Primavera",
        ],
      },
      {
        title: "Tips",
        bullets: [
          "Lleva calzado para caminatas y ropa de cambio.",
          "Pregunta por guías locales certificados.",
          "Respeta las áreas protegidas y lleva tus residuos de regreso.",
        ],
        paragraphs: [
          "Consulta en la terminal sobre los horarios de regreso. Algunas rutas operan con cupos limitados en temporada baja.",
        ],
      },
    ],
  },
  {
    id: "el-naranjal",
    name: "El Naranjal",
    heroImage: "/img/headers-destinos/el-naranjal.jpg",
    heroImageAlt: "Paisaje rural de El Naranjal",
    summary:
      "Corregimiento de naturaleza exuberante, famoso por sus cultivos de cítricos y experiencias de turismo rural comunitario.",
    schedule: [
      { route: "La Unión", departure: "05:45", arrival: "06:30", frequency: "Cada 50 min" },
      { route: "Cartago", departure: "08:30", arrival: "09:20", frequency: "Cada 60 min" },
      { route: "Zarzal", departure: "11:45", arrival: "12:30", frequency: "Cada 80 min" },
      { route: "Tuluá", departure: "15:10", arrival: "16:40", frequency: "Cada 120 min" },
    ],
    sections: [
      {
        title: "Experiencias rurales",
        paragraphs: [
          "Recorre fincas naranjeras y aprende sobre la cosecha y producción de jugos artesanales. Disfruta de caminatas interpretativas por el bosque de niebla y báñate en el río La Honda.",
        ],
      },
      {
        title: "Imperdibles",
        bullets: [
          "Ruta de trapiches paneleros",
          "Mirador El Alto del Gallo",
          "Festival del Azahar (septiembre)",
        ],
        paragraphs: [
          "Acompaña tu visita con jugos frescos y platos hechos con cítricos cosechados en la zona.",
        ],
      },
      {
        title: "Tips",
        bullets: [
          "Lleva efectivo; algunos comercios no aceptan tarjetas.",
          "Respeta los protocolos de bioseguridad en fincas productivas.",
          "Llega antes de las 5:00 p. m. para tomar el último bus de regreso.",
        ],
        paragraphs: [
          "Organiza tu visita con apoyo de los anfitriones rurales y confirma los horarios de autobús directamente en taquilla.",
        ],
      },
    ],
  },
  {
    id: "la-aguada",
    name: "La Aguada",
    heroImage: "/img/headers-destinos/la-aguada.jpg",
    heroImageAlt: "Mirador en La Aguada",
    summary:
      "Pequeño pueblo rodeado de montañas y cafetales. Clima fresco, calles empedradas y gastronomía tradicional.",
    schedule: [
      { route: "Roldanillo", departure: "06:40", arrival: "07:25", frequency: "Cada 45 min" },
      { route: "Zarzal", departure: "09:10", arrival: "10:05", frequency: "Cada 60 min" },
      { route: "Buga", departure: "12:50", arrival: "14:40", frequency: "Cada 120 min" },
      { route: "Cali", departure: "16:15", arrival: "18:30", frequency: "Cada 120 min" },
    ],
    sections: [
      {
        title: "Plan recomendado",
        paragraphs: [
          "Visita el parque principal y conversa con los caficultores locales sobre la producción de cafés especiales. Recorre la vereda La Primavera para encontrar miradores naturales.",
        ],
      },
      {
        title: "Imperdibles",
        bullets: [
          "Sendero Alto de la Cruz",
          "Fábrica artesanal de bocadillo",
          "Río La Vieja y pozos naturales",
        ],
        paragraphs: [
          "Pregunta por los paquetes guiados que combinan caminatas con catas de café de la región.",
        ],
      },
      {
        title: "Tips",
        bullets: [
          "Lleva abrigo ligero para la noche.",
          "Pregunta en la parroquia por las misas y festividades patronales.",
          "Consume productos locales y apoya la economía campesina.",
        ],
        paragraphs: [
          "Aprovecha para comprar productos frescos en la plaza de mercado antes de regresar.",
        ],
      },
    ],
  },
  {
    id: "la-tulia",
    name: "La Tulia",
    heroImage: "/img/headers-destinos/la-tulia.jpg",
    heroImageAlt: "Vista aérea de La Tulia",
    summary:
      "Conocida por sus cultivos de plátano y café, La Tulia es un destino ideal para desconectarse y disfrutar de la vida rural.",
    schedule: [
      { route: "Tuluá", departure: "05:30", arrival: "06:15", frequency: "Cada 30 min" },
      { route: "Roldanillo", departure: "08:20", arrival: "09:40", frequency: "Cada 90 min" },
      { route: "Cartago", departure: "11:40", arrival: "13:00", frequency: "Cada 120 min" },
      { route: "Zarzal", departure: "15:30", arrival: "16:45", frequency: "Cada 90 min" },
    ],
    sections: [
      {
        title: "Experiencias",
        paragraphs: [
          "Descubre la producción agroecológica, recorre la vereda La Rivera y prueba el café recién tostado. Los atardeceres se disfrutan mejor desde el mirador Alto Bonito.",
        ],
      },
      {
        title: "Tips",
        bullets: [
          "Lleva cámara fotográfica: los paisajes son espectaculares.",
          "Pregunta por las rutas de motocarro si quieres moverte entre veredas.",
          "Respeta los horarios de cosecha y sigue las recomendaciones de los guías.",
        ],
        paragraphs: [
          "Disfruta una taza de café con vista a los cultivos y conversa con los productores sobre sus procesos.",
        ],
      },
    ],
  },
  {
    id: "la-union",
    name: "La Unión",
    heroImage: "/img/headers-destinos/la-union.jpg",
    heroImageAlt: "Paisaje de viñedos en La Unión",
    summary:
      "Municipio vitivinícola del Valle del Cauca. Sus viñedos, clima y gastronomía hacen de La Unión un destino sorprendente.",
    schedule: [
      { route: "Roldanillo", departure: "04:50", arrival: "05:40", frequency: "Cada 40 min" },
      { route: "Zarzal", departure: "07:30", arrival: "08:10", frequency: "Cada 25 min" },
      { route: "Cartago", departure: "10:20", arrival: "11:05", frequency: "Cada 40 min" },
      { route: "Cali", departure: "14:00", arrival: "16:30", frequency: "Cada 120 min" },
    ],
    sections: [
      {
        title: "Viñedos y sabor",
        paragraphs: [
          "Visita los viñedos de la región para conocer la producción de vino y jugos de uva. Camina por el parque principal y prueba la gastronomía típica en las fondas tradicionales.",
        ],
      },
      {
        title: "Imperdibles",
        bullets: [
          "Festival de la Uva (enero)",
          "Parque temático La Uva",
          "Río Barragán",
        ],
        paragraphs: [
          "Complementa tu plan con catas de vino artesanal y paseos en bicicleta por los viñedos.",
        ],
      },
      {
        title: "Tips",
        bullets: [
          "Reserva tu visita a viñedos con anticipación.",
          "Lleva gorra y protector solar para los recorridos a campo abierto.",
          "Si viajas en familia, pregunta por los planes pedagógicos en granjas integrales.",
        ],
        paragraphs: [
          "Consulta en la terminal por convenios turísticos que incluyen transporte hacia los viñedos y regreso el mismo día.",
        ],
      },
    ],
  },
  {
    id: "pereira",
    name: "Pereira",
    heroImage: "/img/headers-destinos/pereira.jpg",
    heroImageAlt: "Viaducto César Gaviria Trujillo en Pereira",
    summary:
      "Capital de Risaralda, moderna y dinámica. Pereira combina rutas de café, gastronomía universal y experiencias de bienestar.",
    schedule: [
      { route: "Cartago", departure: "05:15", arrival: "05:55", frequency: "Cada 20 min" },
      { route: "Armenia", departure: "06:40", arrival: "08:10", frequency: "Cada 40 min" },
      { route: "Roldanillo", departure: "11:00", arrival: "12:40", frequency: "Cada 120 min" },
      { route: "Cali", departure: "15:20", arrival: "18:10", frequency: "Cada 120 min" },
    ],
    sections: [
      {
        title: "Qué hacer",
        paragraphs: [
          "Visita el Bioparque Ukumarí, camina por el corredor de la 14 y disfruta de los cafés de especialidad. Para desconectarte, sube al Santuario de la Virgen de Fátima o recorre el viaducto en bici.",
        ],
      },
      {
        title: "Imperdibles",
        bullets: [
          "Termales de Santa Rosa (30 min)",
          "Mirador de Altagracia",
          "Plaza de Bolívar y el Bolívar Desnudo",
        ],
        paragraphs: [
          "Termina el día en la zona rosa de Circunvalar con gastronomía internacional y buena música.",
        ],
      },
      {
        title: "Tips",
        bullets: [
          "Adquiere la tarjeta Megabús para el transporte integrado.",
          "Lleva chaqueta ligera; las noches pueden ser frías.",
          "Pregunta por los recorridos de café en Combia y Arabia.",
        ],
        paragraphs: [
          "Pregunta por los puntos de información turística ubicados en el centro para ampliar tu itinerario en Risaralda.",
        ],
      },
    ],
  },
  {
    id: "roldanillo",
    name: "Roldanillo",
    heroImage: "/img/headers-destinos/roldanillo.jpg",
    heroImageAlt: "Centro histórico de Roldanillo",
    summary:
      "Capital mundial del parapente y hogar del artista maestro Omar Rayo. Roldanillo mezcla arte, deporte y gastronomía campesina.",
    schedule: [
      { route: "Zarzal", departure: "05:30", arrival: "06:10", frequency: "Cada 25 min" },
      { route: "La Unión", departure: "08:00", arrival: "08:40", frequency: "Cada 30 min" },
      { route: "Cartago", departure: "10:45", arrival: "11:30", frequency: "Cada 40 min" },
      { route: "Cali", departure: "14:30", arrival: "16:50", frequency: "Cada 120 min" },
    ],
    sections: [
      {
        title: "Imperdibles",
        bullets: [
          "Museo Rayo",
          "Vuelos en parapente en el cerro Buena Vista",
          "Festival de cometas",
          "Ruta de cafés especiales",
        ],
        paragraphs: [
          "Recorre las galerías del centro y disfruta de la gastronomía típica: aborrajados, rellenas y jugos de lulo bien fríos.",
        ],
      },
      {
        title: "Tips",
        bullets: [
          "Reserva con escuela certificada si vas a volar en parapente.",
          "Lleva protector solar y gafas: el sol es intenso en los miradores.",
          "Visita la plaza de mercado para comprar artesanías hechas con bejuco.",
        ],
      },
    ],
  },
  {
    id: "santa-rita",
    name: "Santa Rita",
    heroImage: "/img/headers-destinos/santa-rita.jpg",
    heroImageAlt: "Paisaje rural de Santa Rita",
    summary:
      "Corregimiento de clima templado con cascadas y rutas ecológicas. Ideal para un plan de naturaleza cerca de Tuluá.",
    schedule: [
      { route: "Tuluá", departure: "06:10", arrival: "07:00", frequency: "Cada 30 min" },
      { route: "Buga", departure: "08:40", arrival: "09:30", frequency: "Cada 60 min" },
      { route: "Zarzal", departure: "12:50", arrival: "14:20", frequency: "Cada 120 min" },
      { route: "Cartago", departure: "16:00", arrival: "17:40", frequency: "Cada 120 min" },
    ],
    sections: [
      {
        title: "Planes",
        paragraphs: [
          "Explora los charcos La Esmeralda y El Edén. Organiza un picnic en familia y degusta los productos lácteos de la región.",
        ],
      },
      {
        title: "Tips",
        bullets: [
          "Lleva ropa cómoda y sandalias para el río.",
          "Contrata guías locales para rutas largas.",
          "Respeta la fauna y flora; es un territorio protegido.",
        ],
      },
    ],
  },
  {
    id: "tulua",
    name: "Tuluá",
    heroImage: "/img/headers-destinos/tulua.jpg",
    heroImageAlt: "Centro de Tuluá",
    summary:
      "Ciudad jardín del Valle del Cauca. Comercio activo, parques y gastronomía tradicional la convierten en un destino imperdible.",
    schedule: [
      { route: "Cali", departure: "04:00", arrival: "06:00", frequency: "Cada 20 min" },
      { route: "Buga", departure: "05:10", arrival: "05:50", frequency: "Cada 20 min" },
      { route: "Armenia", departure: "09:30", arrival: "12:30", frequency: "Cada 90 min" },
      { route: "Pereira", departure: "14:30", arrival: "17:00", frequency: "Cada 120 min" },
    ],
    sections: [
      {
        title: "¿Qué hacer?",
        paragraphs: [
          "Recorre el Parque Bolívar, visita el Jardín Botánico Juan María Céspedes y disfruta de los dulces típicos en la galería.",
        ],
      },
      {
        title: "Imperdibles",
        bullets: [
          "Parque lineal Juan María Céspedes",
          "Ruta gastronómica de cholados y champús",
          "Feria de Tuluá (junio)",
        ],
      },
      {
        title: "Tips",
        bullets: [
          "Viaja en la mañana para disfrutar el día entero.",
          "Si vas a la feria, compra tus entradas con tiempo.",
          "Pregunta por el transporte urbano hacia La Marina y Monteloro.",
        ],
      },
    ],
  },
  {
    id: "zarzal",
    name: "Zarzal",
    heroImage: "/img/headers-destinos/zarzal.jpg",
    heroImageAlt: "Campo abierto en Zarzal",
    summary:
      "Municipio dulce del Valle, conocido por su producción de caña y trapiches. Paisajes rurales y gastronomía auténtica.",
    schedule: [
      { route: "Cartago", departure: "05:20", arrival: "05:55", frequency: "Cada 20 min" },
      { route: "Roldanillo", departure: "07:00", arrival: "07:40", frequency: "Cada 30 min" },
      { route: "La Unión", departure: "09:30", arrival: "10:00", frequency: "Cada 25 min" },
      { route: "Cali", departure: "13:15", arrival: "15:35", frequency: "Cada 120 min" },
    ],
    sections: [
      {
        title: "Imperdibles",
        bullets: [
          "Trapiches del Ingenio La Carmelita",
          "Mirador Alto de la Cruz",
          "Festival del Guarapo",
        ],
        paragraphs: [
          "Anímate a vivir la experiencia llanera con cabalgatas y sabores campesinos.",
        ],
      },
      {
        title: "Tips",
        bullets: [
          "Lleva hidratación, el clima es cálido y soleado.",
          "Visita las fincas paneleras con guía autorizado.",
          "Consulta los horarios de regreso: los últimos buses salen cerca de las 20:00.",
        ],
      },
    ],
  },
];

export const DESTINATION_DETAILS_MAP = DESTINATION_DETAILS.reduce<Record<string, DestinationDetail>>((acc, detail) => {
  acc[detail.id] = detail;
  return acc;
}, {});
