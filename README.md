# preact-typescript-template

My personal template for Preact + Typescript with extra addons.

## Installation

```shell
npx preact-cli create Frantss/preact-typescript-template <project-name>
```

### Options

Preact-CLI options:

```shell
  --name        The application name.
  --cwd         A directory to use instead of $PWD.
  --force       Force option to create the directory for the new app  [boolean] [default: false]
  --yarn        Installs dependencies with yarn.                      [boolean] [default: false]
  --git         Initialize version control using git.                 [boolean] [default: false]
  --install     Installs dependencies.                                [boolean] [default: true]
```

## Includes

- [**Preact**](https://preactjs.com/guide/v10/getting-started): Small runtime with all the React capabilities
- [**Preact-CLI**](https://preactjs.com/guide/v10/getting-started#best-practices-powered-by-preact-cli): Created with all capabilities granted by 3.0
- [**TypeScript**](https://www.typescriptlang.org/docs/): You need types
- [**Jest**](https://jestjs.io/docs/en/getting-started): Don't forget to write tests
  - [**Preact Testing Library**](https://preactjs.com/guide/v10/preact-testing-library): Great library to test all of your components and hooks
- [**Cypress**](https://www.cypress.io/): For end-to-end tests
- [**Webpack**](https://webpack.js.org/): For bundling and other great features
- [**Sass**](https://sass-lang.com/documentation):
  - Autoprefixer
  - Modules
  - Auto-generated types
- Linting: For a clean and consistent codebase
  - [**ESLint**](https://eslint.org/)
  - [**Prettier**](https://prettier.io/docs/en/index.html)
  - [**Stylelint**](https://stylelint.io/)
  - [**lint-staged**](https://github.com/okonet/lint-staged)

## Commands

- `yarn install`: Installs dependencies

- `yarn dev`: Run a development, HMR server

- `yarn serve`: Run a production-like server

- `yarn build`: Production-ready build

- `yarn lint`: Check linting in typescript and scss files
- `yarn lint:fix`: Fix linting issues in typescript and scss files

- `yarn test`: Run tests
- `yarn test:watch`: Run tests in watch mode
- `yarn test:coverage`: Run tests in coverage mode
- `yarn test:e2e`: Run all cypress tests

For detailed explanation on how things work, checkout the [Preact-CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
