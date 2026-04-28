module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [],
    exclude: [],
    preprocessors: {},
    webpackMiddleware: false,
    coverageIframeReporter: {},
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-dev-shm-usage',
          '--disable-gpu',
          '--disable-translate',
          '--disable-extensions'
        ]
      }
    },
    singleRun: true,
    restartOnFileChange: false
  });
};
