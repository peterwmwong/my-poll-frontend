basePath = '..';

// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
  REQUIRE,
  REQUIRE_ADAPTER,

  {pattern: 'vendor/**/*.js', included: false},
  {pattern: 'src/**/*.js', included: false},
  {pattern: 'specs/**/*.js', included: false},

  'spec-runner/spec-modules-config.js',
  {pattern: 'spec-runner/**/*', included: false}
];

preprocessors = {};

// list of files to exclude
exclude = [
    'src/main.js'
];