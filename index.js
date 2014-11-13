'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-paint',

  included: function(app) {
    this._super.included(app);

    app.import(path.join(app.bowerDirectory, 'paint/paint.scss'));
    app.import(path.join(app.bowerDirectory, 'modernizr/modernizr.js'));
    app.import(path.join(app.bowerDirectory, 'foundation/js/foundation.js'));
    app.import(path.join(app.bowerDirectory, 'spinjs/spin.js'));

    app.import(path.join(app.bowerDirectory, 'fontawesome/fonts/fontawesome-webfont.ttf'), {
      destDir: 'assets/fonts'
    });

    app.import(path.join(app.bowerDirectory, 'fontawesome/fonts/fontawesome-webfont.woff'), {
      destDir: 'assets/fonts'
    });

    app.import(path.join(app.bowerDirectory, 'fontawesome/fonts/fontawesome-webfont.svg'), {
      destDir: 'assets/fonts'
    });

    app.import(path.join(app.bowerDirectory, 'fontawesome/fonts/fontawesome-webfont.eot'), {
      destDir: 'assets/fonts'
    });

    app.import(path.join(app.bowerDirectory, 'paint/images/favicon.ico'), {
      destDir: 'assets/images'
    });

    app.import(path.join(app.bowerDirectory, 'paint/images/logo.png'), {
      destDir: 'assets/images'
    });
  },

   afterInstall: function() {
    return this.addBowerPackageToProject('paint', 'git://github.com/alphasights/paint.git#3c085ef958').then(function() {
      return this.addBowerPackageToProject('spinjs', '2.0.1');
    });
  }
};
