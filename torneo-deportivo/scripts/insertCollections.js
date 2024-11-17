const { MongoClient } = require('mongodb');

// URL de conexión (ajusta según tu entorno)
const uri = "mongodb://localhost:27017"; // Cambia esto si usas MongoDB Atlas o una configuración distinta
const dbName = "torneo_deportivo";

// Datos iniciales
const equipos = [
  {
    _id: "E001",
    nombre: "Tigres FC",
    entrenador: {
      id_entrenador: "EN001",
      nombre: "Carlos Pérez",
      contacto: "carlos.perez@email.com"
    },
    jugadores: [
      { id_jugador: "J001", nombre: "Luis Gómez" },
      { id_jugador: "J002", nombre: "Pedro Martínez" }
    ],
    fundado: 2010
  },
  {
    _id: "E002",
    nombre: "Águilas FC",
    entrenador: {
      id_entrenador: "EN002",
      nombre: "Juan García",
      contacto: "juan.garcia@email.com"
    },
    jugadores: [
      { id_jugador: "J003", nombre: "Carlos Rodríguez" },
      { id_jugador: "J004", nombre: "Javier Hernández" }
    ],
    fundado: 2012
  }
];

const jugadores = [
  {
    _id: "J001",
    nombre: "Luis Gómez",
    edad: 25,
    posición: "Delantero",
    equipo_id: "E001",
    estadísticas: {
      goles: 10,
      tarjetas_amarillas: 1,
      tarjetas_rojas: 0
    }
  },
  {
    _id: "J003",
    nombre: "Carlos Rodríguez",
    edad: 27,
    posición: "Portero",
    equipo_id: "E002",
    estadísticas: {
      goles: 0,
      tarjetas_amarillas: 0,
      tarjetas_rojas: 0
    }
  }
];

const arbitros = [
  {
    _id: "A001",
    nombre: "Roberto López",
    experiencia: 5,
    partidos_arbitrados: [],
    calificación: 4.8
  },
  {
    _id: "A002",
    nombre: "Luis Méndez",
    experiencia: 3,
    partidos_arbitrados: [],
    calificación: 4.5
  }
];

const encuentros = [
  {
    _id: "M001",
    fecha: "2024-11-20",
    hora: "16:00",
    equipo_local: { id_equipo: "E001", nombre: "Tigres FC" },
    equipo_visitante: { id_equipo: "E002", nombre: "Águilas FC" },
    árbitros: ["A001", "A002"],
    estado: "programado"
  }
];

const resultados = [
  {
    _id: "R001",
    id_encuentro: "M001",
    marcador: {
      equipo_local: 2,
      equipo_visitante: 1
    },
    detalles: {
      goleadores: [
        { jugador_id: "J001", minuto: 34 },
        { jugador_id: "J003", minuto: 76 }
      ],
      tarjetas: [
        { jugador_id: "J002", tipo: "amarilla", minuto: 50 }
      ]
    },
    estado_final: "victoria_local"
  }
];

// Función principal
async function insertCollections() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);

    // Insertar colecciones
    await db.collection("equipos").insertMany(equipos);
    await db.collection("jugadores").insertMany(jugadores);
    await db.collection("arbitros").insertMany(arbitros);
    await db.collection("encuentros").insertMany(encuentros);
    await db.collection("resultados").insertMany(resultados);

    console.log("¡Colecciones insertadas correctamente!");
  } catch (err) {
    console.error("Error al insertar las colecciones:", err);
  } finally {
    await client.close();
  }
}

insertCollections();
