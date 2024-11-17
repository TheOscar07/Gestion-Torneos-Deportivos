#!/bin/bash

echo "Iniciando la importación de datos en MongoDB..."

# Definir la base de datos
DB_NAME="torneo_deportivo"

# Importar las colecciones
mongoimport --db $DB_NAME --collection equipos --file datos/equipos.json --jsonArray
mongoimport --db $DB_NAME --collection jugadores --file datos/jugadores.json --jsonArray
mongoimport --db $DB_NAME --collection arbitros --file datos/arbitros.json --jsonArray
mongoimport --db $DB_NAME --collection encuentros --file datos/encuentros.json --jsonArray
mongoimport --db $DB_NAME --collection resultados --file datos/resultados.json --jsonArray

echo "¡Importación completada exitosamente!"
