# My Full-Stack Project

Este proyecto incluye un backend en Node.js con TypeScript y un frontend en React. A continuación se detallan las instrucciones para configurar y ejecutar ambos componentes.

## Backend

### Requisitos

- Node.js
- npm 

### Configuración

1. **Instalar dependencias**

   Navega al directorio del backend y ejecuta:

   ```bash
   cd backend
   npm install
  ```

2. **Ejecutar en desarrollo**

    Para iniciar el servidor en modo desarrollo, ejecuta:

    ```bash
    npm run dev
    ```
    Esto compilará el código TypeScript y lo ejecutará directamente.

3. **Compilar para producción:**

    Para compilar el código TypeScript a JavaScript, ejecuta:

    ```bash
    npm run dev
    ```
    Esto generará los archivos compilados en el directorio dist.

4.  **Cargar datos en la base de datos (opcional):**

    Si necesitas cargar datos en la base de datos, primero compila el código con:

    ```bash
    npm run build
    ```
    Luego, ejecuta el script de carga de datos con:

    ``bash
    node dist/loadData.js
    ```
    Nota: Puedes omitir este paso si la base de datos ya tiene los datos necesarios.




## Notas importantes

1. La carga de datos en la colección puede ser realizada de manera automatizada o manualmente utilizando herramientas gráficas y/o comandos.
2. Puedes utilizar librerias según tus criterios. 
3. Se tiene que completar todas tareas asignadas para la realizar la evaluación.
