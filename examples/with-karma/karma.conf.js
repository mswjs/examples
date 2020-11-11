'use strict'

module.exports = function (config) {
  config.set({
    basePath: './test',
    frameworks: ['mocha', 'chai'],
    files: ['*.js'],
    proxies: {
      '/mockServiceWorker.js': '/base/mockServiceWorker.js',
    },
    exclude: [],
    preprocessors: {
      '*.js': ['webpack'],
    },
    webpack: {
      mode: 'development',
    },
    reporters: ['mocha'],
    plugins: [
      'karma-chai',
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-webpack',
    ],
    port: 9876,
    colors: true,
    browsers: ['chrome_ci'],
    customLaunchers: {
      chrome_ci: {
        base: 'ChromeHeadless',
        flags: ['--headless', '--no-sandbox'],
      },
    },
    singleRun: true,
  })
}
