// Catálogo Oficial de Actividades Operativas Tecsur 2026
// Generado automáticamente desde Actividades operativas octubre.xlsx

// ========================================================
// CONFIGURACIÓN CENTRALIZADA DE SUPABASE (NUBE POR DEFECTO)
// ========================================================
const DEFAULT_SUPABASE_CONFIG = {
  url: window.SUPABASE_DEFAULT_URL || "https://uchaxylxjrbpduwbncva.supabase.co",
  anonKey: window.SUPABASE_DEFAULT_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjaGF4eWx4anJicGR1d2JuY3ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMxMTAwMzAsImV4cCI6MjEwODY4NjAzMH0.8nnvn0vXySLM79llvwgIEyIok-xK73ayboAKbYblseA"
};
window.DEFAULT_SUPABASE_CONFIG = DEFAULT_SUPABASE_CONFIG;

const CATALOGO_DEPARTAMENTOS = {
  "Conexiones y Reformas BT (Eder Rodríguez)": {
    "Conexiones": [
      {
        "codigo": "4",
        "categoria": "Servicios BT",
        "nombre": "Verificación de cumplimiento de requisitos - Conexiones",
        "descripcion": "Inspección de suministros a solicitud del cliente para saber la viabilidad de la instalación de una conexión (VCR)",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "23336"
      },
      {
        "codigo": "58",
        "categoria": "Servicios BT",
        "nombre": "Verificación de Cumplimiento de Requisitos - Proyectos BT",
        "descripcion": "Inspección de suministros a solicitud del cliente para saber la viabilidad de la instalación de un proyecto(VCR)",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "23336"
      },
      {
        "codigo": "5",
        "categoria": "Servicios BT",
        "nombre": "Digitación de medidores.",
        "descripcion": "Digitación de los medidores instalados.\n1 sst de digitación por cada CR LDS: 60244, 60254 y para la comercial es otra SST de digitación incluye APC y Masivas",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60244; 60254; 23336"
      },
      {
        "codigo": "514",
        "categoria": "Servicios BT",
        "nombre": "Inspección de Obras",
        "descripcion": "Inspección de puntos o suministros para confirmación de viabilidad de ejecución de los trabajos, puede ser de adecuaciones, rutinas o masivas.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60244; 60254; 23336"
      },
      {
        "codigo": "7",
        "categoria": "Servicios BT",
        "nombre": "Toma de Tiempo de Obras",
        "descripcion": "Toma de tiempo de la duración de las actividades, por rendimiento probablemente",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60350"
      },
      {
        "codigo": "2",
        "categoria": "Conexiones SPC",
        "nombre": "Conexiones de Rutina SPC",
        "descripcion": "Conexiones de suministros nuevos, es decir instalaciones puntuales del área comercial.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "23570; 23590; 23580; 23550; 23560; 23540; 23510; 23520; 23530"
      },
      {
        "codigo": "6",
        "categoria": "Conexiones Masivas",
        "nombre": "Conexiones Masivas",
        "descripcion": "Conexiones de suministros nuevos, es decir instalaciones puntuales del área comercial en el cual se debe subir sustento a la plataforma del estado debido a que son clientes beneficiarios del Fondo de Inclusión Social Energético (FISE).",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "23570; 23590; 23580; 23550; 23560; 23540; 23510; 23520; 23530"
      },
      {
        "codigo": "51",
        "categoria": "Conexiones de Proyecto",
        "nombre": "Conexiones de Rutina - Sin Maxímetro",
        "descripcion": "Instalación de suministros menores a 20kw sin maxímetro.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60244; 60254"
      },
      {
        "codigo": "60",
        "categoria": "Conexiones de Proyecto",
        "nombre": "Conexiones de Rutina - Con Maxímetro",
        "descripcion": "Instalación de suministros Mayores a 20 kw y algunos que otros suministros menores a 50 kw en la cual involucra la instalación de un maxímetro.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60244; 60254"
      },
      {
        "codigo": "61",
        "categoria": "Conexiones de Proyecto",
        "nombre": "Conexiones de Rutina - Banco de Medidores sin Maxímetro",
        "descripcion": "Llegada a una caja de distribución tipo F-1,F-2,F-3 y luego lo distribuye a los diferentes medidores independientes, usualmente instalaciones en edificios multifamiliares en la cual no incluye la instalación de un maxímetro.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60244; 60254"
      },
      {
        "codigo": "63",
        "categoria": "Conexiones de Proyecto",
        "nombre": "Conexiones de Rutina - Banco de Medidores con Maxímetro",
        "descripcion": "Llegada a una caja de distribución tipo F-1,F-2,F-3 y luego lo distribuye a los diferentes medidores independientes, usualmente instalaciones en edificios multifamiliares en la cual incluye la instalación de un maxímetro.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60244; 60254"
      },
      {
        "codigo": "352",
        "categoria": "Pérdidas",
        "nombre": "Cuadrilla multifunción y obras civiles por CNR",
        "descripcion": "Cuadrilla que realiza corte y retiro de conexiones ya sea por robo o hurto de energía eléctrica, en redes subterráneas y/o aéreas.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "23334"
      },
      {
        "codigo": "353",
        "categoria": "Pérdidas",
        "nombre": "Inspección de suministros en BT por CNR",
        "descripcion": "Inspección de Suministros por Pérdidas",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "23334"
      },
      {
        "codigo": "416",
        "categoria": "Pérdidas",
        "nombre": "Reemplazo de medidores X CNR - Cuadrilla de costo fijo",
        "descripcion": "Cambio de Medidores Convencionales por falla propia o manipulación.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "23334"
      },
      {
        "codigo": "354",
        "categoria": "Pérdidas",
        "nombre": "Focalización por CNR",
        "descripcion": "Cuadrilla de Focalización, Inspecciona las llaves de la Subestación con índices elevados de pérdidas.",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "23334"
      },
      {
        "codigo": "509",
        "categoria": "Pérdidas",
        "nombre": "Cambio de Medidor Indirecto - CNR",
        "descripcion": "Cambio de Medidores Convencionales son para poner medidores para poder mitigar las perdidas ya sean por lecturas, conexiones clandestinas o hurto, usualmente maxímetros",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "23334"
      },
      {
        "codigo": "550",
        "categoria": "Pérdidas",
        "nombre": "Cortes y reconexiones (MD/MI)",
        "descripcion": "Cuadrilla que realiza corte de conexiones por morosidad o falta de pago.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60132"
      },
      {
        "codigo": "488",
        "categoria": "Pérdidas",
        "nombre": "Normalización y lectura de Totalizadores y AP",
        "descripcion": "Lectura, reemplazo y/o normalización de totalizador y/o alumbrado público",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "23334"
      },
      {
        "codigo": "489",
        "categoria": "Pérdidas",
        "nombre": "Lectura de medición concentrada",
        "descripcion": "Lectura de medidores con medición concentrada",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "23334"
      },
      {
        "codigo": "490",
        "categoria": "Pérdidas",
        "nombre": "Lectura de maxímetros",
        "descripcion": "Lectura de Maxímetros para el cobro mensual en los recibos, se hacen usualmente el 01 y 02 de cada mes",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "23334"
      },
      {
        "codigo": "491",
        "categoria": "Pérdidas",
        "nombre": "Mantto - Telemedida",
        "descripcion": "Lectura- cuando un medidor no comunica señal celular, la cuadrilla se acerca a hacer mantenimiento (cambio de modem, chip, antena, reemplazo o reprogramación de medidor directo, indirecto y colectores)",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "23334"
      }
    ],
    "Calidad BT": [
      {
        "codigo": "390",
        "categoria": "Gabinetes RTU",
        "nombre": "Instalación de gabinetes RTU",
        "descripcion": "Es la primera parte de la instalación que se realiza para un circuito de control remoto y gabinetes RTU, incluye montaje y conexionado eléctrico. Dicha actividad es realizada por una cuadrilla de Baja Tensión y 1 supervisor TECSUR.\n\nCuadrilla conformada por 2 personas que hacen toda la instalación para un circuito de control y gabinetes RTU. Incluye montaje y conexionado eléctrico solo en BT.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60314"
      },
      {
        "codigo": "401",
        "categoria": "Medidores",
        "nombre": "Cambio de medidor por antigüedad",
        "descripcion": "Cambio de medidor por antigüedad a solicitud de LDS debido al barrido que realizan en la concesión",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60318"
      },
      {
        "codigo": "391",
        "categoria": "Medidores",
        "nombre": "Cambio de medidor Inteligente",
        "descripcion": "Cambio de medidor inteligente por antigüedad a solicitud de LDS que se realizan en las zonas lejanas de la concesión.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60318"
      },
      {
        "codigo": "392",
        "categoria": "Medidores",
        "nombre": "Cambio de medidor Indirecto",
        "descripcion": "Cambio de medidor indirecto por antigüedad a solicitud de LDS debido al barrido que realizan en la concesión",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60318"
      },
      {
        "codigo": "393",
        "categoria": "Medidores",
        "nombre": "Adecuación de Medidor",
        "descripcion": "Actividades realizadas que involucran trabajo mayor y son derivados de un cambio de medidor no realizado por alguna complicación o por un incumplimiento de técnico de una norma",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60318"
      },
      {
        "codigo": "217",
        "categoria": "Calidad AP",
        "nombre": "Calidad AP",
        "descripcion": "Reforma de BT para mejorar el alumbrado público. Son dedicadas al alumbrado público - Mejorar el AP.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60316"
      },
      {
        "codigo": "142",
        "categoria": "Calidad de Producto",
        "nombre": "Calidad de Producto",
        "descripcion": "Reforma de BT o Obra dedicadas a mejorar el nivel de tensión de la afectación o reclamo de un cliente. Mejoran la tensión de la red.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60314"
      },
      {
        "codigo": "551",
        "categoria": "Iluminancia y Luminancia",
        "nombre": "Iluminancia y Luminancia",
        "descripcion": "Actividad exclusiva de mediciones refractancia e iluminancia de las luminarias existentes",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60316"
      },
      {
        "codigo": "150",
        "categoria": "Cambio de Luminarias",
        "nombre": "Cambio de Luminarias",
        "descripcion": "Cambio de Luminaria masivas de sodio a LED",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60316"
      }
    ],
    "Reformas BT": [
      {
        "codigo": "50",
        "categoria": "Reformas BT",
        "nombre": "Conexiones con reforma BT",
        "descripcion": "Reformas necesarias para conexión de un suministro nuevo o medidor nuevo. Pero en el caso de las subterráneas deben considerar cruzada, traslado de carga o si la reforma es mayor a 10 metros.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60244; 60254"
      },
      {
        "codigo": "55",
        "categoria": "Reformas BT",
        "nombre": "Reforma de Redes (TD)",
        "descripcion": "Reforma necesaria por afectación a la red, puede ser caída de tensión o sobrecarga de subestaciones.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60244; 60254"
      },
      {
        "codigo": "62",
        "categoria": "Reformas BT",
        "nombre": "Afectaciones BT",
        "descripcion": "Reforma requerida por un tercero debido a que tiene la necesidad de que la red se modifique para que su proyecto privado no se vea afectado o se realice la ejecución del mismo sin interferencia, esto es costeado por el tercero que requiere la modificación.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60262"
      },
      {
        "codigo": "64",
        "categoria": "Puesta en Servicio - Reforma BT",
        "nombre": "Puesta en Servicio - Reforma BT",
        "descripcion": "Trabajo en el cual se realiza la conexión/enlace de un proyecto realizado a una ampliación de redes BT o ampliación de AP a solicitud de LDS.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60246"
      },
      {
        "codigo": "114",
        "categoria": "PEM",
        "nombre": "Electrificación Masiva MT",
        "descripcion": "Instalación de red de MT en una electrificación masiva",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60246"
      },
      {
        "codigo": "486",
        "categoria": "PEM",
        "nombre": "Electrificación Masiva BT",
        "descripcion": "Instalación de red de BT en una electrificación masiva",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60246"
      }
    ]
  },
  "Emergencias y Alumbrado Público (Lidia Bazán)": {
    "Emergencia y AP": [
      {
        "codigo": "513",
        "categoria": "Emergencia Reclamos",
        "nombre": "Emergencia Reclamos AP",
        "descripcion": "Atención de reclamo por falla en el Alumbrado Público.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60142"
      },
      {
        "codigo": "492",
        "categoria": "Emergencia Reclamos",
        "nombre": "Emergencia Reclamos SP",
        "descripcion": "Atención de reclamo por falta de suministro eléctrico, riesgo de vida, etc SST´s Mensuales y Quincenales asignadas por LDS. Por incidencia (INC)",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60142"
      },
      {
        "codigo": "493",
        "categoria": "Cambio de Tapas",
        "nombre": "Cambio de Tapas",
        "descripcion": "Carga enviada por LDS, una SST por volumen o de acuerdo como LDS lo programe",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60142"
      },
      {
        "codigo": "494",
        "categoria": "Catastro Puntos Apagado",
        "nombre": "Catastro Puntos Apagado",
        "descripcion": "SST x Distrito y dura 1 mes y medio; 14 SST - 2026 ( Luminarias apagadas)",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60144"
      },
      {
        "codigo": "496",
        "categoria": "Sala Base (AP)",
        "nombre": "Servicio Sala Base AP",
        "descripcion": "Mantenimiento de AP, 2 SST a diario (1 por turno y lo asigna LDS) Grúa/Inaccesible/Brazo Hidráulico",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60144"
      }
    ],
    "Emergencia Redes": [
      {
        "codigo": "1",
        "categoria": "Emergencia Redes",
        "nombre": "Emergencia Redes BT",
        "descripcion": "Atención de emergencia en las red secundaria de distribución, se asigna una SST x INC y lo realiza LDS.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60142"
      },
      {
        "codigo": "548",
        "categoria": "Emergencia Redes",
        "nombre": "Emergencia Redes MT",
        "descripcion": "Atención de emergencia en las red primaria de distribución, se asigna una SST x INC y lo asigna LDS",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60151"
      },
      {
        "codigo": "495",
        "categoria": "Emergencia Redes",
        "nombre": "Retiro de Conexión",
        "descripcion": "Derivada por Reclamos SP por condición subestándar; cada retiro es una SST distinta",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60142"
      }
    ]
  },
  "Mantenimiento Redes y Conexiones BT (Freddy Crispín)": {
    "Mantenimiento Redes BT": [
      {
        "codigo": "218",
        "categoria": "Cambio de Postes Inaccesibles",
        "nombre": "Cambio de Poste Inacc. (Cabria)",
        "descripcion": "Cambio de poste de CONCRETO realizado en zona inaccesible mediante el uso de cabria. Prioridad 3",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "220",
        "categoria": "Cambio de Postes Inaccesibles",
        "nombre": "Cambio de Poste Inacc. (Vientos)",
        "descripcion": "Cambio de poste de FIERRO o FIBRA DE VIDRIO realizado en zona inaccesible mediante el uso de vientos. Prioridad 3",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "522",
        "categoria": "Cambio de Postes Inaccesibles",
        "nombre": "Cambio de Poste Inacc. Prioritario (Cabria)",
        "descripcion": "Cambio de poste de CONCRETO realizado en zona inaccesible mediante el uso de cabria, dándole prioridad 2. (Tipo A)",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "536",
        "categoria": "Cambio de Postes Inaccesibles",
        "nombre": "Cambio de Poste Inacc. Prioritario (Vientos)",
        "descripcion": "Cambio de poste de FIERRO o FIBRA DE VIDRIO realizado en zona inaccesible mediante el uso de vientos, dándole prioridad  2.",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "523",
        "categoria": "Cambio de Postes Inaccesibles",
        "nombre": "Cambio de Poste Inacc. RT200 (Cabria)",
        "descripcion": "Cambio de poste de CONCRETO realizado en zona inaccesible mediante el uso de cabria, considerándolo como prioridad 1 debido a que es derivado de emergencia.",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "535",
        "categoria": "Cambio de Postes Inaccesibles",
        "nombre": "Cambio de Poste Inacc. RT200 (Vientos)",
        "descripcion": "Cambio de poste de CONCRETO realizado en zona inaccesible mediante el uso de vientos, considerándolo como prioridad 1 debido a que es derivado de emergencia.",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "540",
        "categoria": "Cambio de Postes Inaccesibles",
        "nombre": "Cimentación de Poste Inacc.",
        "descripcion": "Cimentación de un poste en zona inaccesible mediante el uso de Cabria (Poste de CONCRETO) /Vientos(Poste de FIERRO o FIBRA DE VIDRIO) debido a necesidad del cliente como resultado de alguna inspección, catastro o reclamo.",
        "criticidad": "ALTA",
        "involucraVolquete": true,
        "crLima": "60134"
      },
      {
        "codigo": "542",
        "categoria": "Cambio de Postes Inaccesibles",
        "nombre": "Enderezado de Poste Inacc.",
        "descripcion": "Enderezado de Poste en zona inaccesible mediante el uso de Cabria (Poste de CONCRETO) /Vientos(Poste de FIERRO o FIBRA DE VIDRIO) por necesidad del cliente como resultado de alguna inspección, catastro o reclamo.",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "538",
        "categoria": "Cambio de Postes Inaccesibles",
        "nombre": "Profundizado de Poste Inacc.",
        "descripcion": "Profundización de un poste en zona inaccesible mediante el uso de Cabria (Poste de CONCRETO) /Vientos(Poste de FIERRO o FIBRA DE VIDRIO) por necesidad del cliente como resultado de alguna inspección, catastro o reclamo.",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "211",
        "categoria": "Reforma de BT (Mantto)",
        "nombre": "Reforma Mantto - Cambio de cable de salida",
        "descripcion": "Reforma que se realiza en la salida de la subestación, se tienen cuadrillas especialistas en estos trabajos o con mejor rendimiento",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "214",
        "categoria": "Reforma de BT (Mantto)",
        "nombre": "Reforma Mantto - En el recorrido Subterráneo",
        "descripcion": "Reforma que se realiza en el recorrido subterráneo del circuito, se tienen cuadrillas especialistas en estos trabajos o con mejor rendimiento",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "209",
        "categoria": "Reforma de BT (Mantto)",
        "nombre": "Reforma Mantto - En el recorrido Aéreo",
        "descripcion": "Reforma que se realiza en el recorrido aéreo del circuito, se tienen cuadrillas especialistas en estos trabajos o con mejor rendimiento",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "515",
        "categoria": "Catastro PAT - BT",
        "nombre": "Catastro PAT - BT",
        "descripcion": "Revisión punto a punto inspeccionando el estado de los PAT en BT",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "206",
        "categoria": "Electrizamiento de Postes",
        "nombre": "Programa de medición de electrizamiento en postes",
        "descripcion": "Medición de electrizamiento en postes",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "250",
        "categoria": "Renovación PAT - BT",
        "nombre": "Renovación PAT - BT",
        "descripcion": "Rehabilitación de PAT o mantenimiento de PAT en BT",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "222",
        "categoria": "Reforma de BT (Mantto)",
        "nombre": "Cambio de caja RBT",
        "descripcion": "Cambio de cajas de reguladores de baja tensión",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "201",
        "categoria": "Reforzamiento de Postes BT",
        "nombre": "Rehabilitación de poste BT",
        "descripcion": "Trabajos en el cual se realiza enchaquetado de un poste. Considerándolo como prioridad 3.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "223",
        "categoria": "Reforzamiento de Postes BT",
        "nombre": "Rehabilitación de poste BT (C/Grúa)",
        "descripcion": "Trabajos en el cual se realiza enchaquetado de un poste en el cual también se usa grúa. Considerándolo como prioridad 3.",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "224",
        "categoria": "Reforzamiento de Postes BT",
        "nombre": "Rehabilitación de poste BT RT 200",
        "descripcion": "Trabajos en el cual se realiza enchaquetado de un poste. Considerándolo como prioridad 2.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "225",
        "categoria": "Reforzamiento de Postes BT",
        "nombre": "Rehabilitación de poste BT RT 200 (C/Grúa)",
        "descripcion": "Trabajos en el cual se realiza enchaquetado de un poste en el cual también se usa grúa. Considerándolo como prioridad 2.",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "226",
        "categoria": "Reforzamiento de Postes BT",
        "nombre": "Rehabilitación de poste BT Prioritario",
        "descripcion": "Trabajos en el cual se realiza enchaquetado de un poste. Considerándolo como prioridad 1.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "227",
        "categoria": "Reforzamiento de Postes BT",
        "nombre": "Rehabilitación de poste BT Prioritario (C/Grúa)",
        "descripcion": "Trabajos en el cual se realiza enchaquetado de un poste en el cual también se usa grúa. Considerándolo como prioridad 1.",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "228",
        "categoria": "Cambio de Postes Accesibles",
        "nombre": "Traslado de Poste Accesible",
        "descripcion": "Trabajo en el cual se requiere realizar el traslado de poste con grúa",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "229",
        "categoria": "Cambio de Postes Inaccesibles",
        "nombre": "Traslado de Poste Inaccesible",
        "descripcion": "Trabajo en el cual se requiere realizar el traslado de poste con vientos /Cabria",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "230",
        "categoria": "Cambio de Postes Accesibles",
        "nombre": "Retiro de Poste Accesible",
        "descripcion": "Trabajo en el cual se requiere realizar retiro de poste con grúa",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "231",
        "categoria": "Cambio de Postes Inaccesibles",
        "nombre": "Retiro de Poste Inaccesible",
        "descripcion": "Trabajo en el cual se requiere realizar retiro de poste con vientos/Cabria",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "204",
        "categoria": "Retenidas",
        "nombre": "Instalación, reparación o adecuación de retenidas",
        "descripcion": "Trabajos en los cuales consiste en la instalación, reparación o adecuación de retenidas",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "221",
        "categoria": "Trabajos Menores BT",
        "nombre": "Trabajos Menores",
        "descripcion": "Trabajos que involucran actividades como Instalación de rieles BT, adecuación de cajas de derivación, reparación de tubos de salida, Poda en baja tensión, mantenimiento de fotocélulas, retiro de panales de abeja, etc.",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "203",
        "categoria": "Catastro Estructuras BT",
        "nombre": "Catastro Estructuras BT",
        "descripcion": "Catastro de postes en baja tensión",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "232",
        "categoria": "Renovación de Redes BT*",
        "nombre": "Renovación de Redes BT - CONFIRMAR SI SOLO ES SUBTERRÁNEO",
        "descripcion": "Cambio casi 100% de uno o más circuitos en BT",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "233",
        "categoria": "Pastolares",
        "nombre": "Cambio de Pastorales",
        "descripcion": "Actividad enfocada al cambio de Pastorales de Fierro y Concreto en zonas costeras con alta humedad, las cuales generan mayor corrosion y aumentan el riesgo de caída de pastorales",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "219",
        "categoria": "Cambio de Postes Accesibles",
        "nombre": "Cambio de Poste Acc.",
        "descripcion": "Cambio de poste realizado en zona accesible mediante el uso de grúa. Considerándolo como prioridad 3.",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "520",
        "categoria": "Cambio de Postes Accesibles",
        "nombre": "Cambio de Poste Acc. Prioritario",
        "descripcion": "Cambio de poste Tipo A realizado en zona accesible mediante el uso de grúa. Considerándolo como prioridad 2.",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "521",
        "categoria": "Cambio de Postes Accesibles",
        "nombre": "Cambio de Poste Acc. RT 200",
        "descripcion": "Cambio de poste RT 200 realizado en zona accesible mediante el uso de grúa. Considerándolo como prioridad 1 debido a que es derivado de una atención de emergencia.",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "539",
        "categoria": "Cambio de Postes Accesibles",
        "nombre": "Cimentación (Encofrado) de Poste Acc.",
        "descripcion": "Cimentación de un poste en zona accesible mediante el uso de grúa debido a necesidad del cliente como resultado de alguna inspección, catastro o reclamo.",
        "criticidad": "ALTA",
        "involucraVolquete": true,
        "crLima": "60134"
      },
      {
        "codigo": "541",
        "categoria": "Cambio de Postes Accesibles",
        "nombre": "Enderezado de Poste Acc.",
        "descripcion": "Enderezado de Poste en zona accesible mediante el uso de grúa por necesidad del cliente como resultado de alguna inspección, catastro o reclamo.",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "537",
        "categoria": "Cambio de Postes Accesibles",
        "nombre": "Profundizado de Poste Acc.",
        "descripcion": "Profundización de un poste en zona accesible mediante el uso de grúa por necesidad del cliente como resultado de alguna inspección, catastro o reclamo.",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "215",
        "categoria": "Catastro de Llaves",
        "nombre": "Programa de catastros eléctricos en llaves BT",
        "descripcion": "Catastro de llaves eléctricas en Subestaciones.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "202",
        "categoria": "Fugas a Tierra",
        "nombre": "Programa de detección de fugas a tierra",
        "descripcion": "Reforma o reparación derivada de la identificación de falla(s) realizado por Trazado y Bobinado.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60134"
      },
      {
        "codigo": "234",
        "categoria": "Fugas a Tierra",
        "nombre": "Trazado y Bobinado de Redes en BT",
        "descripcion": "Luego de realizar el catastro de llaves se realiza la identificación de punto(s) de falla para derivación a Fugas a tierra",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60134"
      }
    ],
    "Calidad BT": [
      {
        "codigo": "547",
        "categoria": "Registradores",
        "nombre": "Instalación de equipos registradores",
        "descripcion": "Instalación de equipos registradores",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60314"
      }
    ],
    "Mantenimiento de Conexiones": [
      {
        "codigo": "415",
        "categoria": "Correctivo Menor MD",
        "nombre": "Mantto Correctivo Menor Especializado",
        "descripcion": "Correctivo o mantenimiento en caja toma F-1, f-2 o F-3; clientes con carga menor a 20 KW; Cambio de ferretería base de fusible, pasante, barra de derivación, fusibles, etc.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60132"
      },
      {
        "codigo": "409",
        "categoria": "Correctivo Menor MD",
        "nombre": "Mantto Correctivo Menor MD",
        "descripcion": "Correctivo de un suministro como cambio de ITM, Borneras, ajustes de pernos, etc. Menor a 20 KW",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60132"
      },
      {
        "codigo": "530",
        "categoria": "Correctivo Menor Mi",
        "nombre": "Mantto Correctivo Menor MI",
        "descripcion": "Correctivo de un suministro como cambio de ITM, Borneras, ajustes de pernos, etc. Mayor a 20 KW",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60133"
      },
      {
        "codigo": "405",
        "categoria": "Reemplazo de Medidores",
        "nombre": "Reemplazo de medidor Procedimiento 227",
        "descripcion": "Reemplazo de medidores por procedimiento 227 : Por antigüedad o por detección de falla en la contrastación de medidores.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60132"
      },
      {
        "codigo": "402",
        "categoria": "Reemplazo de Medidores",
        "nombre": "Reemplazo de medidores por mantenimiento, reclamo y Emergencia",
        "descripcion": "Reemplazo de medidores por mantenimiento, reclamo y Emergencia",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60132"
      },
      {
        "codigo": "235",
        "categoria": "Mantenimiento de Conexiones",
        "nombre": "Adecuación BT6",
        "descripcion": "Cambio de cajas de alimentación",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60132"
      },
      {
        "codigo": "252",
        "categoria": "Mantenimiento de Conexiones",
        "nombre": "Mantenimiento de conexiones aéreas",
        "descripcion": "Mantenimiento correctivo en conexiones aéreas",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60132"
      },
      {
        "codigo": "253",
        "categoria": "Mantenimiento de Conexiones",
        "nombre": "Mantenimiento de conexiones subterráneas",
        "descripcion": "Mantenimiento correctivo en conexiones subterráneas.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60132"
      },
      {
        "codigo": "257",
        "categoria": "Mantenimiento de Conexiones",
        "nombre": "Normalización de conexiones con compromiso de pago",
        "descripcion": "Mantenimiento correctivo mayor en una conexión por el compromiso de pago del cliente",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60132"
      },
      {
        "codigo": "531",
        "categoria": "Correctivo Mayor MI",
        "nombre": "Mantto Correctivo Mayor MI",
        "descripcion": "Mantenimiento correctivo mayor en el cual cuenta con Medición Indirecta",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60133"
      },
      {
        "codigo": "260",
        "categoria": "Adecuación de Mástiles",
        "nombre": "Inspección y Adecuación de Mástiles",
        "descripcion": "Inspección o adecuación de mástiles",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60132"
      },
      {
        "codigo": "236",
        "categoria": "Correctivo Menor MD",
        "nombre": "Mantto Correctivo Menor MD - Programas Masivos",
        "descripcion": "Programa de colegios, playas y mercados.",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60132"
      },
      {
        "codigo": "414",
        "categoria": "Mantenimiento Preventivo MD",
        "nombre": "Mantto Preventivo MD",
        "descripcion": "Limpieza, rotulado o ajuste de suministros eléctricos que tienen Medición Directa",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60132"
      },
      {
        "codigo": "410",
        "categoria": "Mantenimiento Preventivo MI",
        "nombre": "Mantto Preventivo MI",
        "descripcion": "Limpieza, rotulado o ajuste de suministros eléctricos que tienen Medición Indirecta",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60133"
      }
    ]
  },
  "Obras y Proyectos MT (Ofelia Ramos)": {
    "Obras MT": [
      {
        "codigo": "109",
        "categoria": "Reforma MT",
        "nombre": "Reforma de Redes Aéreas MT",
        "descripcion": "Ejecución de trabajos de reforma en redes aéreas de Media Tensión, puede involucrar instalación, sustitución y/o modificación de líneas eléctricas existentes, incluyendo obra civil asociada, montaje eléctrico, realización de empalmes y pruebas. Incluye la instalación de la SED en el caso el proyecto lo requiera.",
        "criticidad": "ALTA",
        "involucraVolquete": true,
        "crLima": "60244; 60246; 60252;\n60254; 60262"
      },
      {
        "codigo": "103",
        "categoria": "Reforma MT",
        "nombre": "Reforma de Redes Subterráneas MT",
        "descripcion": "Ejecución de trabajos de reforma en redes subterráneas de Media Tensión, puede involucrar instalación, sustitución y/o modificación de líneas eléctricas existentes, incluyendo obra civil asociada, montaje eléctrico, realización de empalmes y pruebas.Incluye la instalación de la SED en el caso el proyecto lo requiera.",
        "criticidad": "ALTA",
        "involucraVolquete": true,
        "crLima": "60244; 60246; 60252;\n60254; 60262"
      },
      {
        "codigo": "104",
        "categoria": "Reforma MT",
        "nombre": "Reforma de Redes Mixtas MT",
        "descripcion": "Ejecución de trabajos de reforma en redes aéreas y subterráneas de Media Tensión, puede involucrar instalación, sustitución y/o modificación de líneas eléctricas existentes, incluyendo obra civil asociada, montaje eléctrico, realización de empalmes y pruebas. Incluye la instalación de la SED en el caso el proyecto lo requiera.",
        "criticidad": "ALTA",
        "involucraVolquete": true,
        "crLima": "60244; 60246; 60252;\n60254; 60262"
      },
      {
        "codigo": "143",
        "categoria": "Reforma MT",
        "nombre": "Afectaciones Aéreas MT",
        "descripcion": "Ejecución de trabajos que se requieren a solicitud de un tercero debido a que su proyecto particular necesita que se modifique la red de Media Tensión mediante una reforma aérea, puede involucrar instalación, sustitución y/o modificación de líneas eléctricas existentes, incluyendo obra civil asociada, montaje eléctrico, realización de empalmes y pruebas. Incluye la instalación de la SED en el caso el proyecto lo requiera.",
        "criticidad": "ALTA",
        "involucraVolquete": true,
        "crLima": "60244; 60246; 60252;\n60254; 60262"
      },
      {
        "codigo": "144",
        "categoria": "Reforma MT",
        "nombre": "Afectaciones Subterráneas MT",
        "descripcion": "Ejecución de trabajos que se requieren a solicitud de un tercero debido a que su proyecto particular necesita que se modifique la red de Media Tensión mediante una reforma Subterránea, puede involucrar instalación, sustitución y/o modificación de líneas eléctricas existentes, incluyendo obra civil asociada, montaje eléctrico, realización de empalmes y pruebas. Incluye la instalación de la SED en el caso el proyecto lo requiera.",
        "criticidad": "ALTA",
        "involucraVolquete": true,
        "crLima": "60244; 60246; 60252;\n60254; 60262"
      },
      {
        "codigo": "145",
        "categoria": "Reforma MT",
        "nombre": "Afectaciones Mixtas MT",
        "descripcion": "Ejecución de trabajos que se requieren a solicitud de un tercero debido a que su proyecto particular necesita que se modifique la red de Media Tensión mediante una reforma aérea y subterránea, puede involucrar instalación, sustitución y/o modificación de líneas eléctricas existentes, incluyendo obra civil asociada, montaje eléctrico, realización de empalmes y pruebas. Incluye la instalación de la SED en el caso el proyecto lo requiera.",
        "criticidad": "ALTA",
        "involucraVolquete": true,
        "crLima": "60244; 60246; 60252;\n60254; 60262"
      },
      {
        "codigo": "Revisar",
        "categoria": "Maniobras MT",
        "nombre": "Puesta en Servicio - Reforma MT",
        "descripcion": "Pendiente Revisar",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60244; 60246; 60252;\n60254; 60262"
      },
      {
        "codigo": "146",
        "categoria": "Soterrado",
        "nombre": "Soterrado",
        "descripcion": "Trabajo en el cual las redes aéreas de MT se trasladan a subterráneas.",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60244; 60246; 60252;\n60254; 60262"
      },
      {
        "codigo": "118",
        "categoria": "Obras Civiles MT",
        "nombre": "Construcción de Buzones MT",
        "descripcion": "Construcción de cámaras de registro o buzones para redes subterráneas de Media Tensión, mediante obra civil consistente en excavación, hormigonado y adecuación estructural, destinadas al alojamiento y protección de canalizaciones eléctricas y puntos de empalme.",
        "criticidad": "ALTA",
        "involucraVolquete": true,
        "crLima": "60244; 60246; 60252;\n60254; 60262"
      },
      {
        "codigo": "116",
        "categoria": "Obras Civiles MT",
        "nombre": "Construcción SED",
        "descripcion": "Construcción, montaje y puesta en servicio de SED a nivel, aéreas o subterráneas, cabinas de distribución en Media Tensión, Podría incluir: Obras civiles, Montaje de celdas de Media Tensión, Instalación de transformadores MT/BT,Tendido y conexionado de cables de Media Tensión, Sistemas de puesta a tierra, Sistemas de protección, control y telemando, Ensayos eléctricos y puesta en servicio.",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60244; 60246; 60252;\n60254; 60262"
      },
      {
        "codigo": "112",
        "categoria": "Reforma MT",
        "nombre": "Instalación y cambio de PMI / PMS (Pr)",
        "descripcion": "Trabajo en el cual consiste solo instalación de PMI/PMS, puede involucrar actividades adicionales pequeñas.",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60244; 60246; 60252;\n60254; 60262"
      },
      {
        "codigo": "102",
        "categoria": "Maniobras MT",
        "nombre": "Cambio de transformadores en SSEE",
        "descripcion": "Trabajo en el cual consiste en el cambio de un transformador en SED a nivel, aéreas o subterráneas, puede involucrar actividades relacionadas como preparación de ferretería, modificaciones pequeñas adicionales, etc.",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60244; 60246; 60252;\n60254; 60262"
      },
      {
        "codigo": "99",
        "categoria": "Reforma MT",
        "nombre": "Conexiones de BT con reforma MT",
        "descripcion": "Conexión de un suministro en BT en la cual se requiere realizar un trabajo en MT para poder habilitar la conexión en BT.",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60244; 60246; 60252;\n60254; 60262"
      },
      {
        "codigo": "97",
        "categoria": "Telecomunicaciones",
        "nombre": "Telecomunicaciones",
        "descripcion": "",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "-"
      }
    ],
    "Calidad MT": [
      {
        "codigo": "101",
        "categoria": "Equipamiento SED",
        "nombre": "Equipamiento SED - Convencional",
        "descripcion": "Trabajo en el cual se realiza el equipamiento de una SSEE Convencional, incluye trabajos de montaje de equipos, etc.\n\nCuadrilla de Media Tensión.",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60244; 60246; 60252;\n60254; 60262"
      },
      {
        "codigo": "98",
        "categoria": "Calidad de Producto",
        "nombre": "Telemando",
        "descripcion": "Instalación de un equipo para que haya comando o control a distancia de la subestación; que involucra, el cableado final, pruebas y puesta en servicio. \n\nLa configuración final y pruebas es realizada por personal de LDS.",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60316"
      }
    ]
  },
  "Mantenimiento Redes y SSEE MT (Jesús Contreras)": {
    "Mantenimiento MT": [
      {
        "codigo": "497",
        "categoria": "Catastro PAT - MT",
        "nombre": "Catastro PAT - MT",
        "descripcion": "La configuración final y pruebas es realizada por personal de LDS.",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60124 (Zona Este); 60122 (Zona Sur)"
      },
      {
        "codigo": "498",
        "categoria": "Catastro Estructuras MT",
        "nombre": "Catastro Estructuras MT",
        "descripcion": "Revisión punto a punto inspecciónando el estado de los postes",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60122 (Zona Sur); 60124 (Zona Este)"
      },
      {
        "codigo": "510",
        "categoria": "Inspección SED",
        "nombre": "Inspección Visual de SED - CONV.",
        "descripcion": "Revisión visual e interna a SED y termovisual; toma de parámetros",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60126"
      },
      {
        "codigo": "500",
        "categoria": "Lavado",
        "nombre": "Lavado de estructuras",
        "descripcion": "Lavado de Redes Energizadas",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60124 (Zona Este); 60122 (Zona Sur); 60137 (Cañete)"
      },
      {
        "codigo": "553",
        "categoria": "Limpieza SED",
        "nombre": "Limpieza SED",
        "descripcion": "Limpieza de Subestaciones",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60126"
      },
      {
        "codigo": "501",
        "categoria": "Poda",
        "nombre": "Poda de árboles en redes",
        "descripcion": "Poda de areas verdes que tengan próximidad a las redes energizadas",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60124(Zona Este); 60122 (Zona Sur)"
      },
      {
        "codigo": "470",
        "categoria": "Reforzamiento de Postes MT",
        "nombre": "Reforzamiento de postes de MT en caliente",
        "descripcion": "Rehabilitación de poste MT con enchaquetado",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60122"
      },
      {
        "codigo": "473",
        "categoria": "Renovación PAT - MT",
        "nombre": "Renovación PAT - MT",
        "descripcion": "Rehabilitación de PAT o mantenimiento de PAT en redes MT",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60124(Zona Este); 60122 (Zona Sur)"
      },
      {
        "codigo": "468",
        "categoria": "Renovación PAT - MT",
        "nombre": "Renovación PAT - SED CONV.",
        "descripcion": "Rehabilitación de PAT o mantenimiento de PAT en SED",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60126"
      },
      {
        "codigo": "555",
        "categoria": "Sistemas Auxiliares",
        "nombre": "Mantenimiento de Sistemas Auxiliares",
        "descripcion": "Cambio de batería, estado de la configuración, gabinete de recloser, etc",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60126"
      },
      {
        "codigo": "552",
        "categoria": "Termografía MT",
        "nombre": "Termografía MT - Redes",
        "descripcion": "Medición Termográfica con cámara en redes",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60124 (Zona Este); 60122 (Zona Sur)"
      },
      {
        "codigo": "469",
        "categoria": "Trabajos Menores Redes",
        "nombre": "Trabajos Menores Redes",
        "descripcion": "Realizan trabajos de reparación de puertas de tablero de distribución, rotulación, ejecutan Puestas a tierra, reparan rejillas,etc",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60124 (Zona Este); 60122 (Zona Sur)"
      },
      {
        "codigo": "499",
        "categoria": "Trabajos Menores SED",
        "nombre": "Trabajos Menores SED CONV.",
        "descripcion": "Realizan trabajos de rotulación,  reparan rejillas, puertas, reparan iluminación interna, etc (SOLO EN SUBESTACIONES CONVENCIONALES)",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60126"
      },
      {
        "codigo": "422",
        "categoria": "Inspección DMS - MT",
        "nombre": "Inspección DMS Completa",
        "descripcion": "Recorrido de la Red verificando que se cumplan con las DMS y realizando el registro en una ficha",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60124 (Zona Este); 60122 (Zona Sur)"
      },
      {
        "codigo": "423",
        "categoria": "Calidda y Sedapal",
        "nombre": "Seguimiento de Obras - SEDAPAL y CALIDDA",
        "descripcion": "Soporte a SEDAPAL/Calidda evitando afectacion a la red de LDS",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": "60124 (Zona Este); 60122 (Zona Sur)"
      },
      {
        "codigo": "424",
        "categoria": "Maniobra de SED",
        "nombre": "Maniobra SED",
        "descripcion": "Trabajos realizado al interior de una Subestación convencional en los cuales involucra un corte de energía para realizar las actividades como: Cambio de cable de comunicación, disyuntor, seccionadores, terminales interiores, transformador, aceite en interruptores MVA o también podría ser un ajuste o limpieza de algun componente en la subestación.",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60124 (Zona Este); 60122 (Zona Sur); 60137 (Cañete)"
      },
      {
        "codigo": "425",
        "categoria": "Maniobra Redes MT",
        "nombre": "Maniobra Redes MT*",
        "descripcion": "Trabajos realizados en la redes externas a una subestación convencional, en los cuales involucra un corte de energía para realizar trabajos como cambio de estructuras, equipos, cable, conductor, ferretería o limpieza o ajuste de los mismos, incluso instalaciones adicionales de ser necesario en el caso se requiera modificación de la red por mantenimiento.",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60124 (Zona Este); 60122 (Zona Sur); 60137 (Cañete)"
      },
      {
        "codigo": "426",
        "categoria": "Maniobra Redes MT",
        "nombre": "Cambio de Poste accesible MT",
        "descripcion": "Cambio de Poste accesible MT",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60124 (Zona Este); 60122 (Zona Sur); 60137 (Cañete)"
      },
      {
        "codigo": "427",
        "categoria": "Maniobra Redes MT",
        "nombre": "Cambio de Poste Inaccesible MT",
        "descripcion": "Cambio de Poste Inaccesible MT",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": "60124 (Zona Este); 60122 (Zona Sur); 60137 (Cañete)"
      }
    ]
  },
  "Operaciones Generales": {
    "Operaciones": [
      {
        "codigo": "3 niveles como cambio de poste",
        "categoria": "Agregamos rehabilitación con priorización",
        "nombre": "",
        "descripcion": "",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": ""
      },
      {
        "codigo": "Falta consulta si  MANTTO MT lo debe considerar con Jesus o Francisco yauca",
        "categoria": "Programa Mantenimiento Correctivo - Medición Indirecta MT",
        "nombre": "",
        "descripcion": "",
        "criticidad": "ALTA",
        "involucraVolquete": false,
        "crLima": ""
      },
      {
        "codigo": "",
        "categoria": "Proyectos y mantto bt, comercial, de cerro azul hacia al sur",
        "nombre": "",
        "descripcion": "",
        "criticidad": "MEDIA/BAJA",
        "involucraVolquete": false,
        "crLima": ""
      }
    ]
  }
};

const GERENCIAS_LIDERAZGO = [

  {
    id: "gaf",
    titulo: "Gerencia de Administración y Finanzas",
    responsable: "Gerente de Finanzas",
    icono: "calculator",
    color: "#3B82F6",
    preguntas: [
      { id: "g1", texto: "¿Las herramientas de alto valor, maquinarias y camionetas están rotuladas, cuidadas y con inventario en orden?", tipo: "check" },
      { id: "g2", texto: "¿Se detecta desperdicio de conductor de cobre, ferretería o materiales aprovechables sin control en el frente?", tipo: "check" },
      { id: "g3", texto: "¿La cuadrilla se encuentra detenida por falta de permisos o resguardo (horas-hombre improductivas)?", tipo: "check" }
    ]
  },
  {
    id: "logistica",
    titulo: "Gerencia de Logística y Almacén",
    responsable: "Gerente de Logística",
    icono: "package",
    color: "#F59E0B",
    preguntas: [
      { id: "l1", texto: "¿Los materiales despachados por Almacén llegaron a tiempo y completos para ejecutar la jornada?", tipo: "check" },
      { id: "l2", texto: "¿Los insumos entregados cumplen las especificaciones técnicas o presentan fallas de fabricación/calidad?", tipo: "check" },
      { id: "l3", texto: "¿Cuentan con logística inversa organizada para retornar el material desmontado (chatarra/cobre) a base?", tipo: "check" }
    ]
  },
  {
    id: "comercial",
    titulo: "Gerencia Comercial",
    responsable: "Gerente Comercial",
    icono: "users",
    color: "#10B981",
    preguntas: [
      { id: "c1", texto: "¿Se comunicó con anticipación a los vecinos y comercios sobre el corte de servicio o interferencia?", tipo: "check" },
      { id: "c2", texto: "¿La obra corre riesgo de exceder la ventana programada con Luz del Sur (riesgo de penalidad SAIDI/SAIFI)?", tipo: "check" },
      { id: "c3", texto: "¿Los letreros y señalética muestran la información formal requerida por Osinergmin y LDS?", tipo: "check" }
    ]
  },
  {
    id: "pyc",
    titulo: "Gerencia de Personas y Cultura",
    responsable: "Gerente de Personas y Cultura",
    icono: "heart-handshake",
    color: "#8B5CF6",
    preguntas: [
      { id: "p1", texto: "¿El Capataz y Supervisor lideran con respeto, comunicación asertiva y buen clima hacia los ayudantes?", tipo: "check" },
      { id: "p2", texto: "¿Cuentan con punto de hidratación (agua fresca), bloqueador solar y facilidades de higiene?", tipo: "check" },
      { id: "p3", texto: "¿La cuadrilla comprendió claramente los riesgos técnicos explicados durante el IPC de 30 minutos?", tipo: "check" }
    ]
  },
  {
    id: "operaciones",
    titulo: "Gerencia de Operaciones",
    responsable: "Gerente de Operaciones",
    icono: "hard-hat",
    color: "#0052FF",
    preguntas: [
      { id: "o1", texto: "¿El avance físico real coincide con los ratios de productividad diaria esperados por Tecsur?", tipo: "check" },
      { id: "o2", texto: "¿La coordinación de maniobras con el CCO de Luz del Sur fue ágil y sin tiempos muertos de espera?", tipo: "check" },
      { id: "o3", texto: "¿El estándar de montaje civil o electromecánico cumple al 100% los planos constructivos oficiales?", tipo: "check" }
    ]
  },
  {
    id: "qhse",
    titulo: "Subgerencia de QHSE (Seguridad, Salud y Medio Ambiente)",
    responsable: "Subgerente QHSE",
    icono: "shield-alert",
    color: "#EF4444",
    preguntas: [
      { id: "s1", texto: "¿Se están aplicando rigurosamente las 5 Reglas de Oro y los candados/tarjetas de bloqueo LOTO?", tipo: "check" },
      { id: "s2", texto: "¿Los EPPs dieléctricos y arneses cuentan con inspección del mes y están en perfecto estado físico?", tipo: "check" },
      { id: "s3", texto: "¿Se realiza una correcta segregación de residuos y retiro inmediato del desmonte en vía pública?", tipo: "check" }
    ]
  },
  {
    id: "gg",
    titulo: "Gerencia General",
    responsable: "Gerente General",
    icono: "award",
    color: "#1E293B",
    preguntas: [
      { id: "gg1", texto: "¿Se vive la cultura de excelencia, respeto y seguridad que Tecsur promueve en su estrategia corporativa?", tipo: "check" },
      { id: "gg2", texto: "¿Se observan barreras o fricciones entre áreas (ej. Logística vs Operaciones) que requieran arbitraje?", tipo: "check" },
      { id: "gg3", texto: "¿La cuadrilla percibe el respaldo directo y la cercanía de la Alta Dirección?", tipo: "check" }
    ]
  }
];

const GERENCIAS_ROLES = GERENCIAS_LIDERAZGO;

const SUBCONTRATAS_HOMOLOGADAS = [
  "Personal Propio Tecsur",
  "ALIHCOM BUILD SAC",
  "ALVIMAR",
  "CAMPOS LATAM",
  "CONSORCIO CARTER RENSA",
  "ENCOSSA SAC",
  "EOS",
  "GRUCOIN S.A.C.",
  "GRUPO ACUARIUS",
  "GRUPO ENERGIA",
  "KIMSA",
  "NATURAL GAS COMPANY",
  "PRODUCSA"
];

const AREAS_RESOLUTORAS = [
  "Almacén Central / Compras",
  "SSOMA / Subgerencia QHSE",
  "Operaciones y Despacho (CCO)",
  "Logística y Flota",
  "Personas y Cultura / Capacitación",
  "Mantenimiento de Equipos y Herramientas",
  "Gestión de Contratistas",
  "Comercial / Atención al Cliente"
];

const USUARIOS_GERENCIA = {
  "gg": {
    id: "gg",
    nombre: "Gerente General",
    gerencia: "Gerencia General",
    clave: "GG@tecsur2026",
    claveCorta: "2026",
    icono: "award",
    color: "#1E293B"
  },
  "operaciones": {
    id: "operaciones",
    nombre: "Gerente de Operaciones",
    gerencia: "Gerencia de Operaciones",
    clave: "OPS@tecsur2026",
    claveCorta: "2026",
    icono: "hard-hat",
    color: "#0052FF"
  },
  "gaf": {
    id: "gaf",
    nombre: "Gerente de Administración y Finanzas",
    gerencia: "Gerencia de Administración y Finanzas",
    clave: "GAF@tecsur2026",
    claveCorta: "2026",
    icono: "calculator",
    color: "#3B82F6"
  },
  "comercial": {
    id: "comercial",
    nombre: "Gerente Comercial",
    gerencia: "Gerencia Comercial",
    clave: "COM@tecsur2026",
    claveCorta: "2026",
    icono: "users",
    color: "#10B981"
  },
  "logistica": {
    id: "logistica",
    nombre: "Gerente de Logística",
    gerencia: "Gerencia de Logística y Almacén",
    clave: "LOG@tecsur2026",
    claveCorta: "2026",
    icono: "package",
    color: "#F59E0B"
  },
  "pyc": {
    id: "pyc",
    nombre: "Gerente de Personas y Cultura",
    gerencia: "Gerencia de Personas y Cultura",
    clave: "PYC@tecsur2026",
    claveCorta: "2026",
    icono: "heart-handshake",
    color: "#8B5CF6"
  },
  "qhse": {
    id: "qhse",
    nombre: "Subgerente de QHSE",
    gerencia: "Subgerencia de Seguridad, Salud y Medio Ambiente (QHSE)",
    clave: "QHSE@tecsur2026",
    claveCorta: "2026",
    icono: "shield-alert",
    color: "#EF4444"
  }
};

// Exponer en window para funcionamiento universal (tanto file:/// como servidor http://)
if (typeof window !== 'undefined') {
  window.CATALOGO_DEPARTAMENTOS = CATALOGO_DEPARTAMENTOS;
  window.GERENCIAS_ROLES = GERENCIAS_ROLES;
  window.GERENCIAS_LIDERAZGO = GERENCIAS_LIDERAZGO;
  window.SUBCONTRATAS_HOMOLOGADAS = SUBCONTRATAS_HOMOLOGADAS;
  window.AREAS_RESOLUTORAS = AREAS_RESOLUTORAS;
  window.USUARIOS_GERENCIA = USUARIOS_GERENCIA;
}
