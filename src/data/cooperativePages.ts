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
  subsections?: {
    id: string;
    title: string;
    paragraphs?: string[];
    bullets?: string[];
    image?: { src: string; alt: string; caption?: string };
    afterBullets?: string[];
  }[];
};

export type CooperativeDetailPage = {
  id: string;
  title: string;
  subtitle?: string;
  // heroImage removed
  accentImage?: { src: string; className?: string };
  sections: CooperativeSection[];
  references: CooperativeReference[];
};

export const cooperativeDetailPages: CooperativeDetailPage[] = [
  {
    id: "actualizacion-rte",
    title: "Actualización RTE",
    subtitle: "Accede a los documentos actualizados del Registro de Transporte Empresarial.",
    accentImage: { src: "/img/general/o-logo.svg" },
    sections: [
      {
        id: "introduccion",
        heading: "Documentos vigentes",
        description:
          "Ponemos a tu disposición los soportes más recientes de nuestra operación para que puedas consultarlos y descargarlos cuando los necesites.",
        documents: [
          { label: "Información General", fileName: "informacion-general.pdf" },
          { label: "RUT Coop. Transp.De Occidente", fileName: "rut-coop-trans-de-occidente.pdf" },
          { label: "Certificado De Existencia Y Representación Legal", fileName: "certificado-de-existencia-y-representacion-legal.pdf" },
          { label: "Informe de Gestión", fileName: "informe-de-gestion.pdf" },
          { label: "Estados Financieros y Notas a diciembre de 2024", fileName: "estados-financieros-y-notas-a-diciembre-de-2024.pdf" },
          { label: "Acta Asamblea", fileName: "acta-asamblea.pdf" },
          { label: "Certificado Cumplimiento Num 13 Par 2 Art 364-5 E.T", fileName: "certificado-cumplimiento-num-13-par-2-art-364-5-e-t.pdf" },
          { label: "Certificado Antecedentes Judiciales Directivos", fileName: "certificado-antecedentes-judiciales-directivos.pdf" },
          { label: "Certificado Remuneración Directivos", fileName: "certificado-remuneracion-directivos.pdf" },
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
    accentImage: { src: "/img/general/o-logo.svg" },
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
          "Estamos comprometidos con la calidad y la innovación, para el mejoramiento continuo de nuestros procesos atreves del desarrollo y crecimiento del talento humano, así como en la participación y apoyo en proyectos que contribuyan al crecimiento de la región y el cumplimiento de los requisitos legales aplicables a la actividad del transporte de pasajeros",
          "Versión: 03",
          "Fecha de Vigencia: 5 Agosto de 202",
        ],
      },
      {
        id: "seguridad-salud",
        heading: "Política de Seguridad y Salud en el Trabajo – Ambiente",
        paragraphs: [
          "La gerencia de la Cooperativa de Transportadores de Occidente se compromete a proporcionar ambientes laborales seguros y sanos en cada una de las actividades que realiza, a identificar, evaluar, valorar los peligros y riesgos; cumplir con la normatividad legal vigente en materia de riesgos laborales, así como a fomentar la participación y consulta de los trabajadores y sus representantes en el sistema de gestión de seguridad y salud en el trabajo",
        ],
      },
      {
        id: "seguridad-vial",
        heading: "Política De Seguridad vial",
        paragraphs: [
          "Somos una empresa de transporte intermunicipal de pasajeros por carretera y encomiendas a nivel nacional, estamos comprometidos con la seguridad, la prevención y el control de nuestros procesos; a través de la mejora continua en la selección, formación y capacitación de nuestro personal administrativo y operativo, manteniendo un parte automotor en buen estado y brindando garantías de respuesta suficiente ante cualquier reclamación.",
        ],
      },
      {
        id: "gestion-riesgo",
        heading: "Política Del riesgo",
        paragraphs: [
          "Transportes De Occidente establece, los siguientes compromisos con la Gestión del Riesgo:",
        ],
        bullets: [
          "Mantener una actitud pro activa frente la Creación de valor en el desarrollo de la actividad",
          "Tratar explícitamente los eventos de incertidumbre que afecten los propósitos organizacionales de la cooperativa",
          "Promover los principios de la gestión de riesgo en todos los niveles de la Cooperativa",
          "Adoptar un modelo de gestión de riesgo que le permita a la cooperativa ser preventiva en la gestión de sus amenazas y debilidades",
          "Mejorar la confianza en los grupos de interés, el aprendizaje organizacional",
        ],
      },
      {
        id: "politica-informacion",
        heading: "Política De la información",
        paragraphs: [
          "La Cooperativa de Transportadores de Occidente, garantiza de forma integral la protección y el ejercicio del derecho fundamental de Habeas Data de todos los titulares de la información de carácter personal, de la cual sea responsable o encargada de su tratamiento, asimismo garantizará en todo momento los derechos fundamentales a la intimidad, el buen nombre y la privacidad de las personas.",
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
    accentImage: { src: "/img/general/o-logo.svg" },
    sections: [
      {
        id: "memorando",
        heading: "Reglamento de equipaje",
        paragraphs: [
          "Roldanillo, junio 05 de 2023.",
          "Señores",
          "SUPERTRANSPORTE",
          "Atte.: Margaret Yarim Furnieles Chipagra.",
          "Directora de Prevención, Promoción y Atención a Usuarios del Sector Transporte.",
          "ASUNTO:                  Respuesta requerimiento No. 20239200308781",
          "Cordial saludo,",
          "JORGE HUMBERTO MAYORGA SANCHEZ, identificado con la cedula de ciudadanía No. 6239886, actuando en nombre y representación legal de la COOPERATIVA DE TRANSPORTADORES DE OCCIDENTE, Nit. 891900312-8, me permito dar respuesta dentro de los términos de ley y los plazos establecidos al requerimiento No. 20239200308781, por consiguiente me permito expresar:",
        ],
        subsections: [
          {
            id: "equipaje-mano",
            title: "Equipaje de Mano",
            paragraphs: [
              "Un equipaje de Mano es una unidad con un peso mayor a 0kg hasta 8kg con unas dimensiones que no superan los 50cm x 20cm x30cm, (alto * ancho * largo), (30.000cm3), incluyendo ruedas y manijas, el cual debe ubicarse dentro de la cabina del vehículo.",
              "Características:",
            ],
            bullets: [
              "Los cigarrillos electrónicos, baterías de litio sueltas y cargadores portátiles externos (power bank) siempre deben ir en el equipaje de mano, está prohibido transportarlos en el equipaje de bodega.",
              "Computadoras, electrodomésticos, equipo fotográfico, equipo médico, celulares, dispositivos de almacenamiento de datos (como MP3, memorias USB, discos externos, entre otros), tabletas digitales, consolas de videojuegos, agendas digitales y cualquier otro equipo electrónico incluyendo software o componentes, televisores, radios o elementos similares.",
              "Pieles, dinero, joyas, metales preciosos, entre otros.",
              "Antigüedades, obras de arte, libros, fotografías, documentos, títulos valores, vajillas, cerámicas.",
              "Productos perecederos, medicinas, artículos para el cuidado de bebés, muestras, artículos para uso comercial, artículos únicos e irremplazables.",
            ],
            afterBullets: [
              "Cuando tu equipaje de mano no cumpla con las dimensiones, el peso o la cantidad de piezas permitidas para ir en la cabina, será registrado como equipaje de bodega y podrá tener un cargo adicional.",
              "Si tu equipaje de mano supera las condiciones de equipaje de bodega (sobrepeso, sobredimensión o cantidad de piezas permitidas), será registrado como equipaje adicional.",
            ],
            image: {
              src: "/img/general/equipage-mano.jpg",
              alt: "Guía visual sobre dimensiones del equipaje de mano",
            },
          },
          {
            id: "equipaje-bodega",
            title: "Equipaje de Bodega",
            paragraphs: [
              "Un equipaje de Bodega es una o maximo dos unidades donde la sumatoria de su peso sea mayor a 8kg hasta 25kg con unas dimensiones que no superan los a+b+c cm,  (alto + ancho + largo) (158 centímetros lineales), incluyendo ruedas y manijas, el cual debe ubicarse en la bodega del vehiculo.",
              "Caracteristicas:",
            ],
            bullets: [
              "El equipaje de bodega solo debe llevar objetos de uso personal como ropa, elementos aseo.",
              "No debe llevar aparatos electronicos, ni objetos de valor como joyas, titulos valores, metales preciosos.",
              "No llevar líquidos ni alimentos en el equipaje de bodega",
              "No llevar material explosivo y infalamable que ponga en riesgo la vida de los pasajeros, ni nada que este expresamente prohibido en la ley.",
            ],
            image: {
              src: "/img/general/equipaje-bodega.jpg",
              alt: "Guía visual sobre dimensiones del equipaje de bodega",
            },
          },
          {
            id: "equipaje-adicional",
            title: "Equipaje Adicional o Exceso de Equipaje",
            paragraphs: [
              "Equipaje de Adicional, es mayor a dos unidades o donde la sumatoria del peso sea mayor a 25kg y unas dimensiones que superen los 158cm lineales, (incluyendo ruedas y manijas), el cual debe ubicarse en la bodega del vehiculo.",
              "Tarifas de equipaje adicional:",
            ],
            bullets: [
              "Adicional mayor a 26kg hasta 40kg (COP$10.000) o 159cm lineales hasta170cm lineales.",
              "Adicional mayor a 41kg hasta 60kg (COP$13.000) o 171cm lineales hasta180cm lineales.",
            ],
          },
          {
            id: "nota",
            title: "Nota",
            paragraphs: [
              "El pasajero podrá llevar como equipaje, máximo hasta 60 kilogramos en unidades que no superen los 25 kilogramos cada una, si el pasajero supera este cantidad debe aforar como carga su equipaje.",
              "El pasajero es responsable de entregar el equipaje de bodega en la puerta del vehículo y allí mismo será devuelto por el conductor.",
              "Todo equipaje está sujeto a revisión de las autoridades cuando así lo faculte la ley aplicable. Cooperativa de Transportadores de Occidente no se hace responsable por los daños, destrucción, pérdida, demora, denegación de transportar, confiscación de propiedad u otras afectaciones que resulten de las inspecciones realizadas por las autoridades.",
              "De antemano agradezco por la atención prestada.",
              "De usted,",
              "Jorge Humberto Mayorga Sánchez.",
              "Gerente General.",
            ],
          },
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
      {
        id: "contrato-transporte-pasajeros",
        title: "Contrato Transporte Pasajeros",
        description: "Revisa las condiciones legales para el transporte de viajeros.",
        to: "/nuestra-cooperativa/contrato-transporte-pasajeros",
      },
      {
        id: "contrato-transporte-mercancia",
        title: "Contrato Transporte Mercancía",
        description: "Consulta obligaciones y responsabilidades de envíos.",
        to: "/nuestra-cooperativa/contrato-transporte-mercancia",
      },
    ],
  },
  {
    id: "contrato-transporte-pasajeros",
    title: "Contrato transporte pasajeros",
    subtitle: "Conoce las cláusulas y obligaciones aplicables al servicio de pasajeros.",
    accentImage: { src: "/img/general/o-logo.svg" },
    sections: [
      {
        id: "contrato-pasajeros",
        heading: "Contrato transporte de pasajeros",
        paragraphs: [
          "Del 24 de octubre de 2024.",
          "La Empresa se compromete a transportar al Cliente y su equipaje en la fecha, origen y destino indicado en el tiquete según el nivel de servicio, y el Pasajero Cliente se obliga a cumplir con los reglamentos y condiciones de seguridad establecidos por la Empresa y por la normatividad del transporte (Ley 769/02 Código Nacional de Transito y Transporte   decreto 410 de 1971, Código de Comercio y Decreto 1079 del 26 de mayo de 2015), así como con las siguientes cláusulas:",
        ],
        subsections: [
          {
            id: "clausulas-generales",
            title: "Cláusulas y condiciones",
            bullets: [
              "La empresa podrá tomar vías alternas en caso fortuito o de fuerza mayor, previendo siempre el cumplimiento del contrato de transporte (Art. 992 C. Cio.).",
              "La Empresa no transportará a personas que profieran expresiones injuriosas o groseras, promuevan riñas o causen molestias a los demás pasajeros; el conductor detendrá la marcha y dará aviso a la autoridad policiva más cercana para que obligue al perturbador a abandonar el vehículo (Art. 92 Ley 769/2002). El pasajero que sea sorprendido fumando será obligado a abandonar el vehículo (Art. 132 Ley 769/2002).",
              "No deben llevarse objetos que puedan atentar contra la integridad física de los usuarios ni animales, salvo perros lazarillos conforme al artículo 87 de la Ley 769/2002, así como ayudas vivas reguladas en el artículo 2.2.7.4. del Decreto 1079 de 2015 y los requisitos del artículo 2.2.7.8.1 y 2.2.7.8.2 del mismo decreto.",
              "No se admitirá el transporte de armas, municiones, explosivos, tóxicos, inflamables, corrosivos, estupefacientes radiactivos, combustibles no autorizados u objetos de prohibido comercio en el país (Art. 131 Ley 769/2002); la violación por parte del pasajero o conductor será de su exclusiva responsabilidad sin perjuicio de acciones legales.",
              "Los niños mayores de cinco (5) años ocupan puesto.",
              "El conductor puede recoger o dejar pasajeros en los sitios permitidos (Art. 91 Ley 769/2002).",
              "Si el Pasajero Cliente desiste de viajar debe informar con 20 minutos de anticipación para recibir la devolución establecida en el Art. 1002 C. Cio. o reprogramar su viaje entregando tiquete abierto o bono de viaje válido por un (1) año y ajustado a la tarifa vigente al momento de redimirlo, siempre que el desistimiento se informe antes del despacho.",
              "En tiquetes de ida y regreso o pasajes pagados por anticipado, el cliente debe acercarse a la taquilla a confirmar su tiquete antes de abordar el vehículo, respetando su turno en fila.",
              "Toda mascota debe viajar con una persona responsable y ser transportada dentro de un guacal.",
              "Todo menor de edad debe viajar con su madre, padre o tutor previa confirmación de parentesco mediante registro civil o documento que acredite la custodia.",
              "Todo menor de edad que viaje solo o con persona diferente a sus padres o tutor debe contar con autorización escrita de su representante.",
              "Esta oficina puede contar con cámaras de video y las personas pueden estar siendo grabadas por motivos de seguridad de los pasajeros.",
            ],
          },
          {
            id: "referente-equipaje",
            title: "Referente al equipaje",
            paragraphs: [
              "Equipaje de Mano es una unidad con un peso mayor a 0kg hasta 8kg con unas dimensiones que no superan los 50x20x30 cm (alto, ancho, largo), (30.000cm3), incluyendo ruedas y manijas, el cual debe ubicarse en la cabina del vehículo (ver reglamento equipaje en www.deoccidente.com).",
              "Equipaje de Bodega es una o máximo dos unidades donde la sumatoria de su peso sea mayor a 8kg hasta 25 kg con unas dimensiones que no superan los a+b+c cm (alto, ancho, largo) (158 centímetros lineales), incluyendo ruedas y manijas, el cual debe ubicarse en la bodega del vehículo (ver reglamento equipaje en www.deoccidente.com).",
              "Equipaje Adicional es mayor a dos unidades o donde la sumatoria del peso sea mayor a 25kg y unas dimensiones que superen los 158 cm lineales, incluyendo ruedas y manijas, el cual debe ubicarse en la bodega del vehículo (ver reglamento equipaje en www.deoccidente.com).",
              "El pasajero es responsable de los objetos de su propiedad que no hayan sido entregados en custodia de la empresa, y también de objetos que deban llevarse en equipaje de mano tales como: equipos electrónicos y/o artículos de lujo, títulos valores o cualquier mercancía distinta a prendas de vestir y artículos básicos de uso personal (Art. 1003 numeral 4 C. Cio.).",
              "Para reclamar el equipaje, el pasajero deberá presentar la ficha de identificación de equipaje cuyo número debe coincidir con la etiqueta adherida al equipaje; si no presenta la ficha, la empresa retendrá el equipaje hasta que se pruebe la identidad del propietario.",
              "En caso de pérdida de un equipaje entregado en custodia, la cooperativa responderá por el valor declarado por el cliente al iniciar el servicio y, en su defecto, hasta por el ochenta por ciento (80%) del valor debidamente probado por el cliente (Art. 1031 C. Cio.).",
              "La Empresa no se hará responsable de pérdida o avería de equipaje no reclamado dentro de los cinco (5) días siguientes al arribo a su destino.",
            ],
          },
        ],
      },
    ],
    references: [
      {
        id: "actualizacion-rte",
        title: "Actualización RTE",
        description: "Documentos institucionales y certificaciones vigentes.",
        to: "/nuestra-cooperativa/actualizacion-rte",
      },
      {
        id: "reglamento-de-equipaje",
        title: "Reglamento de Equipaje",
        description: "Consulta límites, responsabilidades y formatos de equipaje.",
        to: "/nuestra-cooperativa/reglamento-de-equipaje",
      },
      {
        id: "contrato-transporte-mercancia",
        title: "Contrato Transporte Mercancía",
        description: "Cláusulas aplicables a envíos y encomiendas.",
        to: "/nuestra-cooperativa/contrato-transporte-mercancia",
      },
    ],
  },
  {
    id: "contrato-transporte-mercancia",
    title: "Contrato transporte mercancía",
    subtitle: "Condiciones y responsabilidades para envíos y encomiendas.",
    accentImage: { src: "/img/general/o-logo.svg" },
    sections: [
      {
        id: "contrato-mercancia",
        heading: "Contrato transporte de mercancía",
        paragraphs: [
          "La Empresa se compromete a transportar la mercancía conservando las mismas condiciones físicas en que fue entregada, cumpliendo con los tiempos pactados con el cliente.",
          "El remitente deberá suministrar la información necesaria para el envío de la mercancía según los reglamentos internos de la cooperativa, además de entregarla debidamente embalada y rotulada conforme a las exigencias propias de su naturaleza (Art. 1013 C. Cio.).",
        ],
      },
      {
        id: "subsecciones",
        heading: "Detalles del servicio",
        subsections: [
          {
            id: "obligaciones-remitente",
            title: "Obligaciones del remitente",
            paragraphs: [
              "El remitente deberá facilitar la inspección del contenido del paquete por el funcionario de la cooperativa debidamente identificado; en caso de no permitir la inspección, el contenido será responsabilidad exclusiva del remitente y no se responderá por faltantes, averías u otros contenidos.",
              "La Cooperativa no se hace responsable del retraso en el tiempo de entrega de la mercancía cuando sea originado por factores externos o de fuerza mayor.",
            ],
          },
          {
            id: "entrega-recepcion",
            title: "Entrega y recepción",
            paragraphs: [
              "Para entregar la mercancía al destinatario, este debe cumplir los requisitos establecidos por la cooperativa; de lo contrario, se comunicará al remitente y la mercancía será enviada nuevamente a la bodega origen.",
              "Una vez recibida la mercancía por parte del destinatario, esta debe revisarse internamente en presencia del funcionario de la cooperativa, constatando su estado; de lo contrario no se aceptarán reclamaciones.",
              "En caso de pérdida o daño de la cosa transportada, el monto de la indemnización a cargo del transportador corresponde al valor declarado por el remitente para la mercancía afectada, de acuerdo con el Art. 1031 C. Cio.",
              "Para el caso de daños en equipos electrónicos, la empresa solo responde por daños a causa de golpes, abolladuras, rupturas o rayones identificables a simple vista.",
            ],
          },
          {
            id: "restricciones",
            title: "Restricciones y responsabilidades",
            paragraphs: [
              "No se admite el transporte de armas, municiones, explosivos, tóxicos, inflamables, corrosivos, estupefacientes, radiactivos, combustibles no autorizados u objetos de prohibido comercio en el país (Art. 131 Ley 769/2002); la violación por parte del remitente, conductor o despachador será de su exclusiva responsabilidad sin perjuicio de acciones legales.",
              "La empresa no se hace responsable por las mercancías no reclamadas que permanezcan en bodega por más de tres meses.",
              "Las pruebas de entrega se archivan por un tiempo no mayor a un año.",
              "La empresa no se hace responsable en caso de incautación de la mercancía por parte de las autoridades competentes.",
            ],
          },
        ],
      },
    ],
    references: [
      {
        id: "actualizacion-rte",
        title: "Actualización RTE",
        description: "Documentación y soportes empresariales vigentes.",
        to: "/nuestra-cooperativa/actualizacion-rte",
      },
      {
        id: "contrato-transporte-pasajeros",
        title: "Contrato Transporte Pasajeros",
        description: "Cláusulas aplicables al traslado de viajeros.",
        to: "/nuestra-cooperativa/contrato-transporte-pasajeros",
      },
      {
        id: "reglamento-de-equipaje",
        title: "Reglamento de Equipaje",
        description: "Lineamientos para el manejo de equipaje de pasajeros.",
        to: "/nuestra-cooperativa/reglamento-de-equipaje",
      },
    ],
  },
];
