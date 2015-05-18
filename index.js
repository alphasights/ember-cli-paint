'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-paint',

  included: function(app) {
    this._super.included(app);

    app.import(path.join(app.bowerDirectory, 'paint/paint.scss'));
    app.import(path.join(app.bowerDirectory, 'modernizr/modernizr.js'));
    app.import(path.join(app.bowerDirectory, 'foundation/js/foundation/foundation.js'));
    app.import(path.join(app.bowerDirectory, 'foundation/js/foundation/foundation.dropdown.js'));
    app.import(path.join(app.bowerDirectory, 'foundation/js/foundation/foundation.tooltip.js'));
    app.import(path.join(app.bowerDirectory, 'spinjs/spin.js'));
    app.import('vendor/trackpad-scroll-emulator/jquery.trackpad-scroll-emulator.js');
    app.import('vendor/trackpad-scroll-emulator/trackpad-scroll-emulator.css');

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

    app.import(path.join(app.bowerDirectory, 'paint/images/favicon.ico'), {
      destDir: 'assets/images'
    });

    app.import(path.join(app.bowerDirectory, 'paint/images/logo.png'), {
      destDir: 'assets/images'
    });
  }
};
