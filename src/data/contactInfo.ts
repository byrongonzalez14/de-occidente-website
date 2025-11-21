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
    id: "gerencia",
    name: "Gerencia",
    city: "Roldanillo",
    type: "administrativo",
    address: "Carrera 2 # 11C-14 Roldanillo (Valle)",
    phone: "+57 (602) 229 7017 / +57 (602) 229 8476",
    tags: ["principal"],
  },
  {
    id: "armenia",
    name: "Armenia",
    city: "Armenia",
    type: "terminal",
    address: "Terminal de Transporte Local 51",
    phone: "+57 321 772 0147",
  },
  {
    id: "andalucia",
    name: "Andalucía",
    city: "Andalucía",
    type: "encomiendas",
    address: "Carrera 5 #10-79",
    phone: "+57 321 525 2796",
  },
  {
    id: "bolivar",
    name: "Bolívar",
    city: "Bolívar",
    type: "encomiendas",
    address: "Carrera 5 #4-25",
    phone: "+57 322 657 5197",
  },
  {
    id: "buga",
    name: "Buga",
    city: "Buga",
    type: "terminal",
    address: "Terminal de Transporte Local 44",
    phone: "+57 (602) 237 3995 / +57 321 772 8904",
    tags: ["principal"],
  },
  {
    id: "bugalagrande",
    name: "Bugalagrande",
    city: "Bugalagrande",
    type: "encomiendas",
    address: "Cra 1 # 2-206",
    phone: "+57 310 463 8595",
  },
  {
    id: "cali-tiquetes",
    name: "Cali Tiquetes",
    city: "Cali",
    type: "terminal",
    address: "Terminal de Transporte P2 Local 201",
    phone: "+57 (602) 661 8809 / +57 310 830 9710",
    tags: ["principal"],
  },
  {
    id: "cali-encomiendas",
    name: "Cali Encomiendas",
    city: "Cali",
    type: "encomiendas",
    address: "Terminal de Transporte P2 Local 306",
    phone: "+57 (602) 661 1850 / +57 311 377 8175",
    tags: ["principal"],
  },
  {
    id: "cartago-almendros",
    name: "Cartago Almendros",
    city: "Cartago",
    type: "encomiendas",
    address: "Diagonal 3 #2A-40",
    phone: "+57 321 779 5909",
  },
  {
    id: "cerritos-control",
    name: "Cerritos Control",
    city: "Cerritos",
    type: "terminal",
    address: "Terminal de Transporte",
    phone: "+57 315 424 0676",
  },
  {
    id: "la-paila",
    name: "La Paila",
    city: "La Paila",
    type: "encomiendas",
    address: "Cra 1 Cl. 10 El Trapiche",
    phone: "+57 321 775 9133",
  },
  {
    id: "la-union",
    name: "La Unión",
    city: "La Unión",
    type: "encomiendas",
    address: "Cl. 14 # 12-58",
    phone: "+57 314 621 9248",
  },
  {
    id: "obando",
    name: "Obando",
    city: "Obando",
    type: "encomiendas",
    address: "Cra. 5 # 4-26",
    phone: "+57 311 376 3332",
  },
  {
    id: "pereira-oficina",
    name: "Pereira oficina",
    city: "Pereira",
    type: "terminal",
    address: "Terminal de Transporte P1 Local 127",
    phone: "+57 (606) 321 2919 / +57 317 750 4145",
    tags: ["principal"],
  },
  {
    id: "pereira-encomiendas",
    name: "Pereira Encomiendas",
    city: "Pereira",
    type: "encomiendas",
    address: "Terminal de Transporte P1 Local 105",
    phone: "+57 (606) 321 2919 / +57 321 774 2848",
    tags: ["principal"],
  },
  {
    id: "roldanillo",
    name: "Roldanillo",
    city: "Roldanillo",
    type: "encomiendas",
    address: "Carrera 8 # 6-70",
    phone: "+57 (602) 229 9550 / +57 320 665 5698",
    tags: ["principal"],
  },
  {
    id: "rozo-control",
    name: "Rozo Control (El Estanquillo)",
    city: "El Rozo",
    type: "terminal",
    address: "Terminal de Transporte",
    phone: "+57 316 881 7885",
  },
  {
    id: "tulua",
    name: "Tuluá",
    city: "Tuluá",
    type: "terminal",
    address: "Terminal de Transporte P1 local 3",
    phone: "+57 318 578 1413",
  },
  {
    id: "tulua-encomiendas",
    name: "Tuluá Encomiendas",
    city: "Tuluá",
    type: "encomiendas",
    address: "Terminal de Transporte P1 Local 27",
    phone: "+57 321 778 1505",
  },
  {
    id: "zarzal",
    name: "Zarzal",
    city: "Zarzal",
    type: "encomiendas",
    address: "Control de Transporte local 2 y 3",
    phone: "+57 (602) 225 5227 / +57 321 779 0471",
  },
];
