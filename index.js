'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-paint',

  included: function(app) {
    this._super.included(app);

    app.import(path.join(app.bowerDirectory, 'paint/styles/paint.scss'));
    app.import(path.join(app.bowerDirectory, 'modernizr/modernizr.js'));
    app.import(path.join(app.bowerDirectory, 'spinjs/spin.js'));

    app.import(path.join(app.bowerDirectory, 'fontawesome/fonts/fontawesome-webfont.ttf'), {
      destDir: 'assets/fonts'
    });

    app.import(path.join(app.bowerDirectory, 'fontawesome/fonts/fontawesome-webfont.woff'), {
      destDir: 'assets/fonts'
    });

    app.import(path.join(app.bowerDirectory, 'fontawesome/fonts/fontawesome-webfont.woff2'), {
      destDir: 'assets/fonts'
    });

    app.import(path.join(app.bowerDirectory, 'fontawesome/fonts/fontawesome-webfont.svg'), {
      destDir: 'assets/fonts'
    });

    app.import(path.join(app.bowerDirectory, 'fontawesome/fonts/fontawesome-webfont.eot'), {
      destDir: 'assets/fonts'
    });
  }
};
