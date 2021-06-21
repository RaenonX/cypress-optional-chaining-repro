const webpackPreprocessor = require('@cypress/webpack-preprocessor')

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on) => {
  on('file:preprocessor', webpackPreprocessor({
    webpackOptions: {
      module: {
        rules: [
          {
            test: /\.ts$/,
            use: 'ts-loader'
          }
        ]
      }
    }
  }))
}
