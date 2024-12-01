# Torneo Deportivo - Replicas en base de datos

Este proyecto contiene los datos y scripts necesarios para gestionar un torneo deportivo en MongoDB. Aquí encontrarás la forma mas simple de manejar replicas entre 3 servidores para la mantencion y alta disponibilidad de la informacion.
## **Requisitos**
1. Tener instalado MongoDB en tu sistema.
2. Tener instalado MongoDB Shell
3. Tener instalado MongoDB Command Line Database
   
## **Pasos a tener en cuenta**
1. Crear e inicializar las instancias:
   ```bash
    mongod --port 27018 --dbpath C:/mongodb/repset/rs1 --replSet rs0 --oplogSize 128
    mongod --port 27019 --dbpath C:/mongodb/repset/rs2 --replSet rs0 --oplogSize 128
    mongod --port 27020 --dbpath C:/mongodb/repset/rs3 --replSet rs0 --oplogSize 128
   ```
2. Abrir por MongoDB SHELL las instancias:
  ```bash
    mongosh "mongodb://localhost:27018"
    mongosh "mongodb://localhost:27019"
    mongosh "mongodb://localhost:27020"
   ```
3. En el Nodo Primario desde MongoDb SHELL iniciar la replica:
   ```bash
    rs.initiate( { _id : "rs0", members: [ { _id: 0, host: "localhost:27018" }, { _id: 1, host: "localhost:27019" }, { _id: 2, host: "localhost:27020" } ] })
   ```
4. Crear la base de datos e importar las colecciones:
   ```bash
    use torneo_deportivo
   
    mongoimport --port 27018 --db torneo_deportivo --collection equipos --file C:/mongodb/torneo-deportivo/datos/equipos.json --jsonArray
    mongoimport --port 27018 --db torneo_deportivo --collection jugadores --file C:/mongodb/torneo-deportivo/datos/jugadores.json --jsonArray
    mongoimport --port 27018 --db torneo_deportivo --collection arbitros --file C:/mongodb/torneo-deportivo/datos/arbitros.json --jsonArray
    mongoimport --port 27018 --db torneo_deportivo --collection encuentros --file C:/mongodb/torneo-deportivo/datos/encuentros.json --jsonArray
    mongoimport --port 27018 --db torneo_deportivo --collection resultados --file C:/mongodb/torneo-deportivo/datos/resultados.json --jsonArray
   ```
5. Validar el status de las replicas:
   ```bash
    rs.status()
   ```
6. Insertar informacion en el nodo primario:
   ```bash
    db.arbitros.insert({nombre:"Andres Vela", experiencia:"7",partidos_arbitrados:[],'calificación':4.9})
    db.arbitros.insert({nombre:"Oscar MARTINEZ", experiencia:"8",partidos_arbitrados:["Partido 5"],'calificación':4.7})
   ```
7. En cada uno de los nodos validar que se haya replicado la informacion realizando una consulta en la coleccion modificada:
   ```bash
    db.arbitros.find()
   ```
