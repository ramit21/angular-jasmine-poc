module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/components/**/*.js',
      'app/view*/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],  //Chrome|PhantomJS

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-coverage',
            'karma-junit-reporter'
            ],

    //generating coverage report        
    preprocessors : {
     'app/**/*.js': 'coverage'
    },
    reporters : ['progress','coverage'],
    coverageReporter : {
      type : 'html',
      dir : 'coverage/'
    },

  });
};
