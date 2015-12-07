// Karma configuration
// Generated on Thu Dec 03 2015 14:30:35 GMT+0100 (Central European Standard Time)

module.exports = function(config) {
  config.set({

    jshintPreprocessor: {
      jshintrc: './.jshintrc'
    },

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine-jquery', 'jasmine'],


    // list of files / patterns to load in the browser
    files: [
        // dependancies
        {pattern: 'node_modules/angular/angular.min.js', watched: false},
        {pattern: 'node_modules/angular-route/angular-route.js', watched: false},
        {pattern: 'node_modules/angular-mocks/angular-mocks.js', watched: false},
        {pattern: 'node_modules/jquery/dist/jquery.js', watched: false},

        // files to test
        {pattern: 'index.html', watched: true},
        {pattern: 'spec/*.js', watched: true},
        {pattern: 'js/*.js', watched: true},
        {pattern: 'js/**/*.js', watched: true}
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'spec/app.spec.js': ['jshint'],
        'js/*.js': ['jshint'],
        'js/**/*.js': ['jshint']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'html'],


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
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
