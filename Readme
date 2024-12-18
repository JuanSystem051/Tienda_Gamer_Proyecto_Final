# Proyecto Final CodeMaster

Este repositorio contiene el proyecto *CodeMaster, una aplicación web diseñada para ofrecer funcionalidades específicas utilizando un backend basado en **Node.js, **Express.js* y una base de datos *PostgreSQL*. El frontend se sirve como archivos estáticos desde el servidor.

---

## Contenido del Proyecto

### Estructura de Archivos
- **index.js**: Archivo principal del servidor que gestiona la configuración de rutas, middleware y base de datos.
- **package.json**: Contiene las dependencias y scripts necesarios para ejecutar el proyecto.
- **node_modules/**: Dependencias externas necesarias para el funcionamiento del proyecto.
- **frontend/**: Carpeta con los archivos estáticos del frontend.

### Dependencias Principales

- *Express.js*: Framework para manejar el servidor.
- *Cors*: Gestión de permisos entre dominios.
- *Dotenv*: Gestión de variables de entorno.
- *Sequelize*: ORM para gestionar la conexión y operaciones con la base de datos PostgreSQL.

---

## Configuración del Entorno

### Variables de Entorno

Para que el proyecto funcione correctamente, es necesario configurar un archivo .env en la raíz del proyecto con las siguientes variables:

env
DB_HOST=localhost
DB_NAME=nombre_de_base_de_datos
DB_USER=usuario_de_base_de_datos
DB_PASSWORD=contraseña_de_base_de_datos
DB_PORT=5432
PORT=3025


### Base de Datos

1. Asegúrate de tener PostgreSQL instalado y funcionando.
2. Crea una base de datos con el nombre especificado en DB_NAME dentro del archivo .env.

---

## Instrucciones para Configuración Inicial

1. Clona este repositorio en tu máquina local:
   bash
   git clone https://github.com/usuario/Proyecto_Final_CodeMaster.git
   

2. Accede al directorio del proyecto:
   bash
   cd Proyecto_Final_CodeMaster
   

3. Instala las dependencias necesarias:
   bash
   npm install
   

4. Configura el archivo .env según las variables mencionadas previamente.

5. Ejecuta el servidor.

---

## Funcionalidades Principales

1. *Servidor Backend*:
   - Servidor Express.js configurado con CORS y soporte para solicitudes JSON.
   - Integración con Sequelize para operaciones de base de datos.
   - Ruta raíz que sirve el frontend estático.

2. *Base de Datos*:
   - Conexión a PostgreSQL mediante Sequelize.
   - Configuración flexible mediante variables de entorno.

3. *Frontend*:
   - Servido como estático desde la carpeta frontend.
   - Página principal accesible desde la ruta /.

---

## Estructura del Proyecto

plaintext
Proyecto_Final_CodeMaster/
├── frontend/
│   └── index.html          # Página principal
├── node_modules/           # Dependencias del proyecto
├── index.js                # Configuración del servidor
├── package.json            # Configuración del proyecto
└── .env                    # Variables de entorno (no incluido por defecto)
