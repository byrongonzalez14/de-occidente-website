export interface ServiceOverview {
  id: string;
  name: string;
  description: string;
  bullets: string[];
  image: string;
  detailPath: string;
}

export const SERVICES_OVERVIEW: ServiceOverview[] = [
  {
    id: "encomiendas",
    name: "Encomiendas",
    description:
      "Envía documentos y paquetes de manera segura a toda nuestra red de destinos. Seguimiento en tiempo real y asistencia personalizada en cada despacho.",
    bullets: [
      "Cobertura regional con entregas hasta en 48 horas",
      "Empaque y manipulación cuidadosa",
      "Soporte telefónico y en terminales"
    ],
    image: "/img/general/servicio-encomiendas.png",
    detailPath: "/servicios/encomiendas",
  },
  {
    id: "mascotas",
    name: "Viaja con tu mascota",
    description:
      "Nos encargamos de que toda la familia llegue cómoda y segura. Ofrecemos bodegas ventiladas, guacales acondicionados y acompañamiento durante el viaje.",
    bullets: [
      "Guacales homologados y desinfectados",
      "Asistencia del equipo en terminal",
      "Cumplimiento de normativa vigente"
    ],
    image: "/img/general/viaja-con-tu-mascota.png",
    detailPath: "/servicios/viaja-con-tu-mascota",
  },
  {
    id: "pasajeros",
    name: "Transporte de pasajeros",
    description:
      "Conecta con el corazón del Valle del Cauca y eje cafetero. Flota moderna, rutas diarias y servicios a bordo para un viaje confortable.",
    bullets: [
      "Salidas diarias a más de 15 destinos",
      "Sillas reclinables y aire acondicionado",
      "Compra de tiquetes online y en terminal"
    ],
    image: "/img/general/pasajeros.png",
    detailPath: "/servicios/transporte-pasajeros",
  },
];
