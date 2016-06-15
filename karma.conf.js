var path = require('path');
var webpack = require('webpack');

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
      'src/test/*.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/test/*.js': ['webpack', 'sourcemap'],
      'src/scripts/*.js': ['coverage']
    },

    webpack: {
      module: {
        loaders: [
          {
            test: /\.js$/,
            include: [
              path.resolve(__dirname, 'src/scripts'),
              path.resolve(__dirname, 'src/test')
            ],
            loader: 'babel'
          },
          {
            test: /\.css$/,
            include: path.resolve(__dirname, 'src'),
            loader: "style!css"
          },
          {
            test: /\.json$/,
            include: path.resolve(__dirname, 'src'),
            loader: 'json'
          }
        ],
        postLoaders: [
          {
            test: /\.js$/,
            include: path.resolve(__dirname, 'src/scripts'),
            loader: 'istanbul-instrumenter'
          }
        ]
      },
      devtool: 'inline-source-map'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    coverageReporter: {
      dir: 'reports/coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' }
      ],
      instrumenterOptions: {
        istanbul: { noCompact: true }
      }
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'ChromeCanary'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

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

    // Add to coveralls
    configuration.reporters.push('coveralls');
    configuration.coverageReporter.reporters.push({ type: 'lcov', subdir: 'report-lcov' });

    configuration.autoWatch = false;
    configuration.singleRun = true;
  }

  config.set(configuration);
};
