
const SAT_INFO = {

  // =========================
  // 🧑‍🚀 ISS
  // =========================
  "25544": {
    name: "ISS",
    image: "https://3d.staratlas.es/ISS/1366_521.jpg",
    patch: "https://3d.staratlas.es/ISS/emblem900x900.png",
    type: "Estación espacial",
    mission: "Microgravedad",
    instruments: [
      "Laboratorios científicos",
      "Cámaras de observación terrestre",
      "Experimentos biomédicos"
    ],
    capabilities: [
      "Observación humana en órbita",
      "Experimentos en microgravedad",
      "Fotografía terrestre general"
    ]
  },

  // =========================
  // 🌍 COPERNICUS - SENTINEL 1
  // =========================

  "39634": {
    name: "Sentinel-1A",
    image: "https://3d.staratlas.es/ISS/emblem900x900.png",
    patch: "https://3d.staratlas.es/Sentinel-1_patch_card_full.png",
    type: "Radar SAR",
    mission: "Copernicus - Observación radar de la Tierra",
    instruments: [
      "Radar de apertura sintética (C-band SAR)"
    ],
    capabilities: [
      "Detección de inundaciones",
      "Deformación del terreno",
      "Monitoreo de hielo marino",
      "Operación nocturna y con nubes"
    ]
  },

  "39084": {
    name: "Sentinel-1B",
    image: "https://3d.staratlas.es/Sentinel-1.jpg",
    patch: "https://3d.staratlas.es/Sentinel-2_patch.png",
    type: "Radar SAR",
    mission: "Copernicus - Observación radar de la Tierra",
    instruments: [
      "Radar de apertura sintética (C-band SAR)"
    ],
    capabilities: [
      "Refuerzo de Sentinel-1A",
      "Mayor frecuencia de revisita",
      "Monitoreo continuo global"
    ]
  },

  // =========================
  // 🌱 COPERNICUS - SENTINEL 2
  // =========================

  "42063": {
    name: "Sentinel-2B",
    image: "https://3d.staratlas.es/ISS/emblem900x900.png",
    patch: "https://3d.staratlas.es/Sentinel-2_patch.png",
    type: "Óptico multispectral",
    mission: "Copernicus - Observación óptica de la Tierra",
    instruments: [
      "Cámara multiespectral",
      "13 bandas espectrales"
    ],
    capabilities: [
      "Análisis agrícola",
      "Vegetación y salud de cultivos",
      "Urbanismo y crecimiento urbano",
      "Calidad del agua"
    ]
  },

  "29780": {
    name: "Sentinel-2A",
    image: "https://3d.staratlas.es/Sentinel-2.jpg",
    patch: "https://3d.staratlas.es/Sentinel-2_patch.png",
    type: "Óptico multispectral",
    mission: "Copernicus - Observación óptica de la Tierra",
    instruments: [
      "Cámara multiespectral",
      "13 bandas espectrales"
    ],
    capabilities: [
      "Mapeo de vegetación",
      "Agricultura de precisión",
      "Monitoreo urbano",
      "Recursos hídricos"
    ]
  },

  // =========================
  // 🌊 COPERNICUS - OCEANOS
  // =========================

  "28654": {
    name: "Sentinel-3A",
    image: "https://3d.staratlas.es/Sentinel-3.jpg",
    patch: "https://3d.staratlas.es/Sentinel-3_patch.png",
    type: "Oceanografía / Clima",
    mission: "Copernicus - Océanos y clima global",
    instruments: [
      "Altímetro radar",
      "Radiómetro óptico",
      "Sensor térmico"
    ],
    capabilities: [
      "Temperatura del océano",
      "Nivel del mar",
      "Color del océano",
      "Clima global"
    ]
  },

  // =========================
  // 🌫️ COPERNICUS - ATMOSFERA
  // =========================

  "43618": {
    name: "Sentinel-5P",
    image: "https://3d.staratlas.es/Sentinel-5P.jpg",
    patch: "https://3d.staratlas.es/Sentinel-5P_patch.png",
    type: "Monitoreo atmosférico",
    mission: "Copernicus - Calidad del aire",
    instruments: [
      "Espectrómetro TROPOMI"
    ],
    capabilities: [
      "CO2 y NO2 global",
      "Calidad del aire",
      "Contaminación urbana",
      "Ozono atmosférico"
    ]
  },

  // =========================
  // 🌦️ NOAA (NO COPERNICUS PERO LO MANTENEMOS)
  // =========================

  "25338": {
    name: "NOAA-15",
    image: "https://3d.staratlas.es/NOAA_logo.svg.png",
    patch: "https://3d.staratlas.es/NOAA_logo.svg.png",
    type: "Meteorológico",
    mission: "Clima global y predicción meteorológica",
    instruments: [
      "Radiómetro AVHRR",
      "Sensores atmosféricos",
      "Sondas meteorológicas"
    ],
    capabilities: [
      "Predicción del tiempo",
      "Seguimiento de tormentas",
      "Temperatura global",
      "Cobertura de nubes"
    ]
  },
  "38552": {
  name: "Meteosat-10",
  image: "https://3d.staratlas.es/Meteosat.jpg",
  patch: "https://3d.staratlas.es/Meteosat_patch.png",
  type: "Meteorológico geoestacionario",
  mission: "EUMETSAT - Observación meteorológica Europa",
  instruments: [
    "Imager multiespectral",
    "Sensores infrarrojos",
    "Canales visibles y térmicos"
  ],
  capabilities: [
    "Seguimiento de tormentas",
    "Nubes en tiempo real",
    "Temperatura atmosférica",
    "Fenómenos extremos (huracanes, borrascas)"
  ]
}
};
