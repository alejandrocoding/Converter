# ConverterTest

Hope you enjoy this project as much as I did during the creation of it.

The library is within the `src` folder, named as `converter`. It is decoupled of the project, so in case of upload it to npm, it should be easy to do.


To create new Unit of length to convert and be converted to, the steps to create `Miles` would be:

1. Add Mile into the UnitEnum found in `converter/entities/enums`

2. Add the model with the needed data in `converter/entities/models/` following the same structure (extending the IUnit interface...)

3. Add the entity within the switch statement in the UnitFactory found in `converter/factories`


That would be enough from the library perspective. From the Web App, follow these steps:

1. Add Mile into the method `restoreOptions()` in a way that return the previous array of entities plus the new one, for instance `[new Yard(), new Meter(), new Inch(), new Mile()]`. The file is found in `src/app/calculation/calculation.component.ts`.

* Remember during the process to update the index.ts files to keep the same approach

That's it! :)

Made by `Alejandro Lora`.

## Development server

Run `npm start` or `ng serve` for a dev server. 

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

Use the `-prod` flag for a production build.

## Running Unit Tests

The test files included only belong to Converter Library.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Documentation

To see the documentation, open the index.html file located within the documentation folder at the root level.

A server is not needed to launch it.

Thanks to Compodoc for this nice tool [Compodoc](https://github.com/compodoc/compodoc).