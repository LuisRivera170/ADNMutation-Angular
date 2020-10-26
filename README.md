# ADNMutation-Angular
Aplicación cliente en Angular para la gestión de mutación ADN

## Requisitos para ejecución de aplicación
- Node
- npm
- Angular CLI

## Pasos para despliegue en local
1. Descargar repositorio
2. Descomprimir archivo
3. Ingresar por terminal a la carpeta contenedora del proyecto
4. Ejecutar el siguiente comando para instalar las dependencias del proyecto

```
npm install
```

5. Ejecutar el siguiente comando para ejecutar el proyecto

```
ng serve -o
```

## Despliegue en la nube
Para el despliegue en la nube se utilizó el servicio de Firebase Hosting siguiendo los pasos que se describen a continuación

## Preparación del proyecto para despliegue

1.	Ingresar al archivo config.ts ubicado en la ruta src/app y modificar la constante URL_BACKEND con la ruta base del servicio API
2.	Acceder por terminal a la carpeta base del proyecto y ejecutar el siguiente comando para compilar el proyecto para producción.

```
ng build --prod
```

3.	Acceder a la carpeta dist/nombre_del_proyecto generada mediante el punto anterior
4.	Crear una carpeta llamada “public” y copiar todo el contenido de la carpeta base a esta

## Configuración de Firebase Hosting para despliegue

Para los siguientes puntos es necesario instalar la herramienta “firebase-tools” mediante el siguiente comando npm

```
npm install -g firebase-tools
```

Tambien es necesario estar autenticado en firebase con esta herramienta, esto se puede realizar mediante el comando `firebase login`, para este punto es necesario contar con una cuenta google

1.	Ingresar a la carpeta `dist/nombre_del_proyecto` mediante terminal
2.	Inicializar Firebase en el proyecto mediante el comando `firebase init` eligiendo las siguientes opciones:
- CLI features – **Hosting: Configure and deploy Firebase Hosting sites**
- Create a new project
- Please specify a unique project id: **Se ingresa el nombre de nuestro proyecto**
- What would you like to call your project? **Se reingresa el nombre de nuestro proyecto**
- What do you want to use as your public directory? **Se especifica la carpeta *public* generada en el punto 4 del apartado anterior**
- Configure as a single-page app: **Yes**
- Set up automatic builds and deploys with GitHub? **No**
- File `public/index.html` already exists. Overwrite? **No**
3.	Agregar el proyecto a Firebase mediante el comando ` firebase use --add` ingresando las siguientes opciones
- Which project do you want to add? **Se ingresa el nombre de nuestro proyecto**
- What alias do you want to use for this project? **Se ingresa el nombre de nuestro proyecto**

4.	Por ultimo se hace el despliegue del sitio mediante el comando `firebase deploy`

Este último paso retornara la url del sitio desplegado, por ejemplo:

Hosting URL: https://{nombre_del_proyecto}.web.app


