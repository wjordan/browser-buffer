module.exports = function(config) {
  config.set({
    files:['test/**/*.js'],
    preprocessors: { 'test/**/*.js': [ 'browserify' ] },
    frameworks: ['mocha', 'browserify'],
    browsers: ['Firefox', 'PhantomJS'],
    browserify: {
      plugin: [ 'tsify' ],
      builtins: ['assert', '_process']
    }
  });
};
