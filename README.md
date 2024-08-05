# APP-POKEDEX

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="150" alt="Nest Logo" /></a>
    <a href="http://typeorm.io/">
    <img src="https://github.com/typeorm/typeorm/raw/master/resources/logo_big.png" width="300" height="200">
  </a>
  <a href="https://www.sqlite.org/">
  <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/sqlite_logo_icon_169724.png" alt="SQLite" border="0" width="250" height="250">
  </a>
<img src="https://camo.githubusercontent.com/39791c3e4c4387b8b913628a8f258768ea3a4a71fc815ced2219f81c22c71f6a/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313636323133303535392f6e6578746a732f49636f6e5f6c696768745f6261636b67726f756e642e706e67" height="200" data-canonical-src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png"">
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Installation Pokedex

```bash
Se debe hacer la instalacion de las dependencias en ambas carpetas.
$app-pokedex/api npm install
$app-pokedex/pokedex npm install
```

## Running the app Pokedex

```bash
# development
$ npm run dev
```

## Running the API

```bash
# development
Se deben seguir los siguientes paso para levantar la API
```

## Comandos the API

```bash
$ 1. npm run db:create #Para creacion de la base de datos.
$ 2. npm run migration:generate -- src/db/migrations/<nombre-migration> #Para realizar la migracion.
$ 3. npm run migration:run #Para aplicar la migracion.
$ 4. npm run seed:run #Para realizar el populate de los datos.
$ 5. npm run start:dev
```
## EndPoints

```bash
GET: http://localhost:4000/api/pokemon (Obtenemos todos los Pokemones)
GET: http://localhost:4000/api/pokemon/:id (Obtenemos Pokemones por su ID)
GET: http://localhost:4000/api/pokemon/battle/:pokemon1Id/:pokemon2Id (Inicia la batalla)
POST: http://localhost:4000/api/api/battles (Guarda el registro de resultado de la batalla)
GET: http://localhost:4000/api/api/battles (Obtenemos los resultados de las batallas)
```

## Instrucciones APP

```bash
Una vez que tenemos andando ambas APP, vamos a la direccion http://localhost:3000/
Hacemos click en boton ELIGE TU POKEMON, para seleccionarlos aleatoriamente.
Hacemos click en boton INICIAR BATLLA, para comenzar la batalla.

```

