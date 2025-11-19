export type ContactQuickCard = {
  id: string;
  title: string;
  description: string;
  action: {
    label: string;
    href: string;
  };
  icon: "phone" | "whatsapp" | "mail" | "clock";
};

export type ContactOfficeType = "terminal" | "encomiendas" | "administrativo" | "aliado";

export type ContactOffice = {
  id: string;
  name: string;
  city: string;
  type: ContactOfficeType;
  address: string;
  phone: string;
  schedule?: string;
  tags?: ("principal" | "servicio-especial")[];
  email?: string;
};

export const contactQuickCards: ContactQuickCard[] = [
  {
    id: "linea-principal",
    title: "Línea principal",
    description: "Comunícate con nuestro PBX en horario laboral y recibe acompañamiento inmediato.",
    action: { label: "Llamar ahora", href: "tel:+576022297017" },
    icon: "phone",
  },
  {
    id: "whatsapp",
    title: "WhatsApp empresarial",
    description: "Agenda envíos, conoce horarios y resuelve inquietudes por WhatsApp.",
    action: { label: "Escríbenos", href: "https://wa.me/573105551234" },
    icon: "whatsapp",
  },
  {
    id: "correo",
    title: "Correo comercial",
    description: "Solicita cotizaciones corporativas o convenios especiales con nuestro equipo.",
    action: { label: "Enviar correo", href: "mailto:servicios@deoccidente.com" },
    icon: "mail",
  },
  {
    id: "horarios",
    title: "Horarios de atención",
    description: "Lunes a viernes 7:00 a.m. - 6:00 p.m. | Sábados 8:00 a.m. - 1:00 p.m.",
    action: { label: "Ver agenda", href: "#directorio" },
    icon: "clock",
  },
];

export const mainOffice = {
  name: "Oficina Principal Roldanillo",
  address: "Carrera 2 # 11C-14, Roldanillo - Valle del Cauca",
  phone: "+57 (602) 229 7017",
  email: "direccion@deoccidente.com",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.2240380752715!2d-76.1527679!3d4.412972399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e306d2fb79949fd%3A0xa7d171e43ed3d68!2sRoldanillo%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco",
};

export const contactOffices: ContactOffice[] = [
  {
    id: "roldanillo-terminal",
    name: "Terminal Roldanillo",
    city: "Roldanillo",
    type: "terminal",
    address: "Carrera 2 # 11C-14",
    phone: "+57 (602) 229 7017",
    schedule: "Lunes a domingo 5:30 a.m. - 9:30 p.m.",
    tags: ["principal"],
  },
  {
    id: "buga-terminal",
    name: "Terminal Buga",
    city: "Buga",
    type: "terminal",
    address: "Carrera 19 # 6-45 Local 12",
    phone: "+57 (602) 237 8844",
    schedule: "Lunes a domingo 5:00 a.m. - 9:00 p.m.",
    tags: ["principal"],
  },
  {
    id: "tulua-terminal",
    name: "Terminal Tuluá",
    city: "Tuluá",
    type: "terminal",
    address: "Carrera 40 # 27-60 Local 5",
    phone: "+57 (602) 225 6678",
    schedule: "Lunes a domingo 5:00 a.m. - 8:30 p.m.",
    tags: ["principal"],
  },
  {
    id: "palmira-terminal",
    name: "Terminal Palmira",
    city: "Palmira",
    type: "terminal",
    address: "Carrera 28 # 32-15 Local 7",
    phone: "+57 (602) 275 3345",
    schedule: "Lunes a domingo 5:15 a.m. - 9:00 p.m.",
  },
  {
    id: "calarca-terminal",
    name: "Terminal Calarcá",
    city: "Calarcá",
    type: "terminal",
    address: "Carrera 21 # 40-20 Local 9",
    phone: "+57 (606) 745 8899",
    schedule: "Lunes a domingo 4:30 a.m. - 9:30 p.m.",
  },
  {
    id: "zarzal-oficina",
    name: "Oficina Zarzal",
    city: "Zarzal",
    type: "encomiendas",
    address: "Carrera 10 # 7-22",
    phone: "+57 (602) 224 5566",
    schedule: "Lunes a sábado 7:00 a.m. - 6:00 p.m.",
    tags: ["principal"],
  },
  {
    id: "cartago-encomiendas",
    name: "Encomiendas Cartago",
    city: "Cartago",
    type: "encomiendas",
    address: "Carrera 4 # 11-25",
    phone: "+57 (606) 211 3344",
    schedule: "Lunes a sábado 7:30 a.m. - 7:00 p.m.",
  },
  {
    id: "armenia-oficina",
    name: "Oficina Armenia",
    city: "Armenia",
    type: "encomiendas",
    address: "Calle 21 # 16-11",
    phone: "+57 (606) 741 2233",
    schedule: "Lunes a sábado 8:00 a.m. - 6:00 p.m.",
  },
  {
    id: "calle-26-oficina",
    name: "Oficina Cali Calle 26",
    city: "Cali",
    type: "encomiendas",
    address: "Calle 26 # 4-65",
    phone: "+57 (602) 485 9000",
    schedule: "Lunes a sábado 7:30 a.m. - 7:00 p.m.",
    tags: ["principal"],
  },
  {
    id: "oficina-administrativa",
    name: "Oficina Administrativa",
    city: "Roldanillo",
    type: "administrativo",
    address: "Carrera 2 # 11C-14 Piso 2",
    phone: "+57 (602) 229 8476",
    email: "talento@deoccidente.com",
    schedule: "Lunes a viernes 8:00 a.m. - 5:30 p.m.",
    tags: ["principal"],
  },
  {
    id: "servicio-escolar",
    name: "Coordinación Servicio Escolar",
    city: "Roldanillo",
    type: "administrativo",
    address: "Carrera 3 # 12-20",
    phone: "+57 311 556 8899",
    schedule: "Lunes a viernes 7:00 a.m. - 4:30 p.m.",
    tags: ["servicio-especial"],
  },
  {
    id: "aliado-logistica",
    name: "Aliado Logística Express",
    city: "Medellín",
    type: "aliado",
    address: "Calle 35 # 43-21",
    phone: "+57 (604) 444 8877",
    schedule: "Lunes a viernes 8:00 a.m. - 6:00 p.m.",
  },
  {
    id: "oficina-bogota",
    name: "Oficina Comercial Bogotá",
    city: "Bogotá",
    type: "aliado",
    address: "Calle 67 # 7-35 Oficina 403",
    phone: "+57 (601) 456 7788",
    schedule: "Lunes a viernes 8:00 a.m. - 5:30 p.m.",
  },
];
