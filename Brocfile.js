/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var app = new EmberAddon();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('bower_components/paint/paint.scss');
app.import('bower_components/modernizr/modernizr.js');
app.import('bower_components/foundation/js/foundation.js');

app.import('bower_components/fontawesome/fonts/fontawesome-webfont.ttf', {
  destDir: 'assets/fonts'
});

app.import('bower_components/fontawesome/fonts/fontawesome-webfont.woff', {
  destDir: 'assets/fonts'
});

app.import('bower_components/fontawesome/fonts/fontawesome-webfont.svg', {
  destDir: 'assets/fonts'
});

app.import('bower_components/fontawesome/fonts/fontawesome-webfont.eot', {
  destDir: 'assets/fonts'
});

app.import('bower_components/paint/images/favicon.ico', {
  destDir: 'assets/images'
});

app.import('bower_components/paint/images/logo.png', {
  destDir: 'assets/images'
});

module.exports = app.toTree();
