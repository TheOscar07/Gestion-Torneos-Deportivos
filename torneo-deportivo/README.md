# Torneo Deportivo - Base de Datos MongoDB

Este proyecto contiene los datos y scripts necesarios para gestionar un torneo deportivo en MongoDB. Aquí encontrarás dos formas de cargar las colecciones y datos en MongoDB: usando un script en Bash (`initDatabase.sh`) o mediante un script en Node.js (`insertCollections.js`).

---

## **Contenido**
- **`datos/`:** Carpeta que contiene los archivos JSON con los datos exportados de las colecciones.
- **`scripts/initDatabase.sh`:** Script en Bash para importar los datos usando `mongoimport`.
- **`scripts/insertCollections.js`:** Script en Node.js para importar los datos usando la biblioteca oficial de MongoDB.
- **`README.md`:** Documentación del proyecto.

---

## **Requisitos**
1. Tener instalado MongoDB en tu sistema.
2. Tener configurado correctamente tu entorno según la opción que elijas:
   - **Para Bash:** Asegúrate de que el comando `mongoimport` esté disponible.
   - **Para Node.js:** Instala [Node.js](https://nodejs.org/) y la biblioteca `mongodb` ejecutando:
     ```bash
     npm install mongodb
     ```

---

## **Estructura del Proyecto**
torneo-deportivo/ ├── datos/ │ ├── equipos.json # Datos de los equipos │ ├── jugadores.json # Datos de los jugadores │ ├── arbitros.json # Datos de los árbitros │ ├── encuentros.json # Datos de los encuentros deportivos │ ├── resultados.json # Resultados de los partidos ├
── scripts/ │ ├── initDatabase.sh # Script en Bash para importar los datos │ ├── insertCollections.js # Script en Node.js para insertar los datos 
├── README.md # Documentación del proyecto

---

## **Opciones para Cargar los Datos**

### **Opción 1: Usar el Script en Bash**

#### **Pasos:**
1. Navega al directorio del proyecto:
   ```bash
   cd torneo-deportivo
   ```

2. Da permisos de ejecución al script:
   ```bash
   chmod +x scripts/initDatabase.sh
   ```
3. Ejecuta el script:
   ```bash
   ./scripts/initDatabase.sh
   ```
Esto importará los datos desde los archivos JSON ubicados en la carpeta datos/ a la base de datos torneo_deportivo.

### **Opción 2: Usar el Script en Node.js
#### **Pasos:**
1. Instala las dependencias necesarias:
   ```bash
   npm install mongodb
   ```
2. Ejecuta el script:
   ```bash
   node scripts/insertCollections.js
   ```
Esto cargará los datos directamente desde objetos definidos en el código.

## **Verificar los Datos en MongoDB
### **Desde el Shell de MongoDB:
1. Inicia sesión en el shell:
   ```bash
   mongo
   ```
2. Cambia al contexto de la base de datos:
   ```javascript
   use torneo_deportivo
   ```
3. Consulta las colecciones:
   ```javascript
   db.equipos.find().pretty()
   db.jugadores.find().pretty()
   db.arbitros.find().pretty()
   db.encuentros.find().pretty()
   db.resultados.find().pretty()
   ```


## **Descripción de las Colecciones
   equipos: Información de los equipos, incluyendo entrenador y jugadores.
   jugadores: Detalles de los jugadores como posición y estadísticas.
   arbitros: Registro de árbitros con experiencia y calificaciones.
   encuentros: Programación de partidos con equipos y árbitros asignados.
   resultados: Detalles y resultados finales de los encuentros.

## **Notas Adicionales
   Este proyecto es un ejemplo inicial y puede adaptarse según las necesidades.
   Si usas un servidor remoto de MongoDB (como MongoDB Atlas), actualiza las configuraciones en los scripts para conectarte al clúster.
   Asegúrate de que el puerto 27017 (puerto por defecto de MongoDB) esté accesible.

## **Contribuciones
   Si encuentras algún error o deseas proponer mejoras, abre un issue o envía un pull request en este repositorio.

---

### **Aclaraciones:**
   1. Ahora la **estructura del proyecto** está explícitamente dentro del `README.md`.
   2. La descripción de las carpetas y archivos también incluye un breve comentario para cada uno.

