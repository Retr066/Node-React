# Prueba de backend en NodeJS

La primer parte de la prueba tiene como objetivo evaluar tus conocimientos y competencias con la tecnologíad NodeJs y Mongodb.

## Descripción de la tarea

La siguiente tarea consiste en cargar y almacenar los datos de un archivo en una base de datos local con Mongodb y permitir consumir la información almacenada, para lograr estos tienes que: 

1.  **Cargar los datos a 'Articles':** Utilizar el archivo proporcionado para obtener los datos y guardarlos en una colección en la base de base de datos local.

2.  **Exponer los datos de obtenidos:** Implementar un endpoint que permita obtener los datos de la colección 'Articles'.

## Requisitos

1. Utilizar **MongoDB** como base de datos para esta aplicación.
2. Crear una aplicación de NodeJS con Express.
3. Cargar los datos del archivo `data.json` en una colección llamada `/articles` en la base de datos.
3. El endpoint de la API debe llamarse `/articles` y responder en **formato JSON**.

## Criterios de evaluación

Tu entrega será evaluada en función de los siguientes criterios:

1.  **Funcionalidad:** ¿Se pueden recuperar los datos a través del endpoint de la API?
2.  **Calidad de Código y Estructura:** ¿El código está bien estructurado, es legible y sigue las convenciones de NodeJS?. 
3.  **Manejo de Errores:** ¿Se gestionan los errores y los registros están implementados correctamente?
3.  **Manejo de la base de datos:** ¿Se logro administrar la base de datos y los datos obtenidos fueron cargado del archivo `data.json`?
4.  **Bonificaciones:** Se considerarán funcionalidades adicionales o mejoras más allá de los requisitos básicos.

# Prueba de frontend en Flutter

La segunda parte de la prueba tiene como objetivo evaluar tus capacidades y habilidades en flutter.

## Descripción de la tarea
La siguiente tarea consiste en crear una aplicación en Flutter que consuma el endpoint `/articles` proporcionado por la API de NodeJS con Express que creaste en el tarea anterior, para lograr eso tienes que: 

1.  **Consumir endpoint '/articles':** Desarrollar una aplicación en Flutter que se consuma al endpoint `/articles` de la API de NodeJS con Express.
2.  **Recuperar y mostrar los datos del endpoint:** Implementar interfaces de usuarios que muestre los datos.

## Requisitos

Asegúrate de cumplir con los siguientes requisitos al desarrollar la aplicación en Flutter. 

1. La aplicación debe ser capaz de realizar solicitudes HTTP al endpoint `/articles` de la API de NodeJS con Express.
2. Utilizar el método adecuado en Flutter para realizar llamadas a la API.
4. Se debe de crear una vista donde se debe listar los datos obtenidos, puedes ver el [diseño acá](https://www.figma.com/design/QsD5eTs7WIiM9XiMsOcD3C/Design-Flutter---Node?node-id=0-1&t=KExMC347nPlzJF5B-1) .
5. Al darle click a un item de la lista se tiene que redireccionar al Url del campo llamado `url`. 

## Criterios de evaluación

Tu entrega será evaluada en base a los siguientes criterios:

1.  **Funcionalidad:** ¿La aplicación de Flutter se conecta con éxito al endpoint `/articles` de la API de NodeJS con Express y muestra los datos obtenidos?
2.  **Interfaz de Usuario:** ¿La interfaz de usuario es amigable y presenta los datos de manera clara y legible según el diseño?
3.  **Manejo de Datos:** ¿La aplicación en Flutter maneja los datos de manera efectiva, sin errores ni inconsistencias?
4.  **Calidad de Código y Estructura:** ¿El código está organizado, sigue las mejores prácticas de Flutter y es fácil de entender?
5.  **Manejo de Errores:** ¿La aplicación maneja adecuadamente los errores en caso de problemas de conectividad o de datos faltantes?
6.  **Bono:** Se considerarán funcionalidades adicionales o mejoras más allá de los requisitos básicos.

## Entrega

Una vez que hayas completado las tareas, sube tu codigo a un repositorio de GitHub con su documentación para su debida evaluación.

## Notas importantes

1. La carga de datos en la colección puede ser realizada de manera automatizada o manualmente utilizando herramientas gráficas y/o comandos.
2. Puedes utilizar librerias según tus criterios. 
3. Se tiene que completar todas tareas asignadas para la realizar la evaluación.