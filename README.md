# Test Chiper Front end

Este es un test de Chiper que consta de desarrollar un software que tiene como contexto:

- Las bicicletas robadas son un problema típico en Berlín. La Policía quiere ser más eficiente en la resolución de casos de bicicletas robadas. Decidieron crear un software que pueda automatizar sus procesos: el software que va a desarrollar tiene una serie de items a tener encuenta.

 I want to see a list of reported bike thefts for the Berlin area.
 I want to see the first 10 bike theft cases, with the ability to - paginate (10 cases per page).
 I want to see a total number of bike theft cases.
 For each reported bike theft I want to see:
 Case title
 Case description
 Date of the theft
 Date of when the case was reported
 Location of the theft
 Picture of the bike, if available
 I want to filter reported bike thefts by partial case title.
 I want to filter reported bike thefts by date range.
 I want to see a loading state until the list is available.
 I want to see an error state if the list is unavailable.
 I want to see an empty state if there are no results.


## Información

Datos tecnicos:
- React
- Typescript
- CSSinJS - styled component (flexbox - grid)
- Test (coverage > 80%) con jest => react testing library
- Axios para peticiones a la API
- CI/CD => Github Actions & Github Page
- Responsive dispositivos mobiles, tables/ipad/ pc medianos y grandes

El proyecto esta configurado con Github Action y Github page, cada vez que se haga un push o un PR hacia la rama Main, se correra el proceso de Build & Deploy
la URL es:[https://chespisan.github.io/chiper-challenger/](https://chespisan.github.io/chiper-challenger/)


## Versiones Lib

- Node - 16.14.0
- ReactJS - 17.0.2

## Client

### `npm start`

Correrá el servidor [http://localhost:3000/chiper-challenger](http://localhost:3000/chiper-challenger)

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.

### `npm run test`

Ejecuta las pruebas unitarias

### `npm run test:coverage`

Ejecuta todas las pruebas y devuelve un reporte de la cobertura

