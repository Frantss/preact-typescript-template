import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import { resolve } from 'path';

export default {
  /**
   * Function that mutates the original webpack config.
   * Supports asynchronous changes when a promise is returned (or it's an async function).
   *
   * @param {object} config - original webpack config.
   * @param {object} env - options passed to the CLI.
   * @param {WebpackConfigHelpers} helpers - object with useful helpers for working with the webpack config.
   * @param {object} options - this is mainly relevant for plugins (will always be empty in the config), default to an empty object
   **/

  webpack(config, env, helpers, options) {
    config.module.rules[4].include = [
      ...config.module.rules[4].include,
      env.source('layouts'),
    ];

    config.module.rules[5].exclude = [
      ...config.module.rules[5].exclude,
      env.source('layouts'),
    ];

    config.module.rules[4].use.splice(1, 0, {
      loader: '@teamsupercell/typings-for-css-modules-loader',
      options: {
        formatter: 'prettier',
      },
    });

    // Add TsconfigPathsPlugin for webpack
    // This allows webpack to resolve your imports whose location depends
    // on the `baseUrl` and `paths` fields of your `tsconfig.json`
    // https://github.com/dividab/tsconfig-paths-webpack-plugin#tsconfig-paths-webpack-plugin
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin(),
    ];

    config.resolve.alias = {
      ...config.resolve.alias,
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
      'preact-cli-entrypoint': resolve(process.cwd(), 'src', 'index'),
    };
  },
};
