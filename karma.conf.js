// Karma configuration
// Generated on Tue Mar 29 2016 10:51:31 GMT+0200 (Vest-Europa (sommertid))
module.exports = function(config) {

  var configuration =
  {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'src/test/css-challenge.Test.js',
      'src/test/input.Test.js',
      'src/test/view.Test.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/test/css-challenge.Test.js': ['webpack'],
      'src/test/input.Test.js': ['webpack'],
      'src/test/view.Test.js': ['webpack'],
      'src/scripts/*.js': ['coverage']
    },

    webpack: {
      module: {
        postLoaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'istanbul-instrumenter'
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
          },
          {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: "style!css"
          },
          {
            test: /\.json$/,
            exclude: /node_modules/,
            loader: 'json'
          }
        ]
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage', 'coveralls'],

    coverageReporter: {
      type: 'lcov',
      dir: 'report'
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'ChromeCanary'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    }
  };

  if(process.env.TRAVIS){
    configuration.browsers = ['Chrome_travis_ci'];
  }

  config.set(configuration);
};
