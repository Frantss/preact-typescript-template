# preact-typescript-template

Personal template for Preact + Typescript with all kind of additional addons.

## Includes

- [**Preact**](https://preactjs.com/guide/v10/getting-started) : small runtime with all the React capabilities
- [**Preact-CLI**](https://preactjs.com/guide/v10/getting-started#best-practices-powered-by-preact-cli): Created with all capabilities granted by 3.0
- [**TypeScript**](https://www.typescriptlang.org/docs/): because types
- [**Jest**](https://jestjs.io/docs/en/getting-started): need to run tests
- [**Webpack**](https://webpack.js.org/): for bundling
- [**Sass**](https://sass-lang.com/documentation):
  - Autoprefixer
  - Auto-generated types
- [**ESLint**](https://eslint.org/), [**Prettier**](https://prettier.io/docs/en/index.html), [**Stylelint**](https://stylelint.io/), [**lint-staged**](https://github.com/okonet/lint-staged): for a clean and consistent codebase

## CLI Commands

- `yarn install`: Installs dependencies

- `yarn dev`: Run a development, HMR server

- `yarn serve`: Run a production-like server

- `yarn build`: Production-ready build

- `yarn lint`: Check linting in typescript and scss files
- `yarn lint:fix`: Fix linting issues in typescript and scss files

- `yarn test`: Run Jest and Enzyme with
  [`enzyme-adapter-preact-pure`](https://github.com/preactjs/enzyme-adapter-preact-pure) for
  your tests
- `yarn test:watch`: Run tests in watch mode

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
