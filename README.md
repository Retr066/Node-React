# My Full-Stack Project

Este proyecto incluye un backend en Node.js con TypeScript y un frontend en React. A continuación se detallan las instrucciones para configurar y ejecutar ambos componentes.

## Backend

### Requisitos

- Node.js
- npm (o yarn)

### Configuración

1. **Instalar dependencias**

   Navega al directorio del backend y ejecuta:

   ```
   cd backend
   npm install
   ```

2. **Ejecutar en desarrollo**

   Para iniciar el servidor en modo desarrollo, ejecuta:

   ```
   npm run dev
   ```

   Esto ejecutará el servidor con TypeScript en modo desarrollo.

3. **Compilar para producción**

   Para compilar el código TypeScript a JavaScript, ejecuta:

   ```
   npm run build
   ```

   Esto generará los archivos compilados en el directorio `dist`.

4. **Cargar datos en la base de datos (opcional)**

   Si necesitas cargar datos en la base de datos, primero compila el código con:

   ```
   npm run build
   ```

   Luego, ejecuta el script de carga de datos con:

   ```
   node dist/loadData.js
   ```

   Nota: Puedes omitir este paso si la base de datos ya tiene los datos necesarios.

5. **Configurar variables de entorno**

Crea un archivo `.env` en el directorio del frontend con la siguiente variable de entorno:

   ```
   export PORT=
   export MONGO_USER=
   export MONGO_PASSWORD=
   export MONGO_DB=
   export VITE_API_URL=
   ```

## Frontend

### Requisitos

- Node.js
- npm (o yarn)

### Configuración

1. **Instalar dependencias**

   Navega al directorio del frontend y ejecuta:

   ```
   cd frontend
   npm install
   ```

2. **Ejecutar en desarrollo**

   Para iniciar el proyecto de React en modo desarrollo, ejecuta:

   ```
   npm run dev
   ```

   Asegúrate de configurar la variable de entorno `VITE_API_URL` para que apunte a tu backend:

   ```
   export VITE_API_URL=
   ```

## Notas

- **Estructura del Proyecto**: La estructura del proyecto está organizada en dos directorios principales: `backend` y `frontend`.
- **Variables de Entorno**: Asegúrate de definir todas las variables de entorno necesarias antes de ejecutar el frontend.

## Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).

---

Para cualquier duda o problema, no dudes en contactar al equipo de desarrollo.
