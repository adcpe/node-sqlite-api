# Demo: SQLite API

## Contenido

1. **[Introducción](#tecnologías-usadas)**
2. **[Tecnologías usadas](#introducción)**
3. **[Despliegue](#despliegue)**
4. **[To do](#to-do)**

## Introducción

Este repositorio es una demo básica de una base de datos SQLite. Consta de back-end y front-end.

La aplicación muestra en front-end un listado de lenguajes de programación con información básica. El back-end consiste de una sola tabla `languages` donde se guarda la información.

La aplicación está desplegada en la siguiente url: https://adc.li

## Tecnologías usadas

### Deployment

- [Netlify](https://www.netlify.com/)

### Back-end

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [SQLite](https://www.sqlite.org/index.html)

### Front-end

- [React](https://reactjs.org/) / [create-react-app](https://create-react-app.dev/)
- [MUI](https://mui.com/)
- [Axios](https://axios-http.com/)

## Despliegue

1. Clonar el repositorio
2. Ejecutar los siguientes comandos para instalar las dependencias e iniciar la app

```bash
npm install
npm start
```

## To do

- [ ] Separar ambientes en el back-end: dev & prod
- [ ] Error handling en el endpoint
- [ ] Agregar botones para reordenar la lista (alfabeticamente y por año, ascendente y descendente)
- [ ] Añadir un formulario donde agregar nuevas entradas a la base de datos
