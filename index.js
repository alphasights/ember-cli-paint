'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-paint',

  included: function(app) {
    this._super.included(app);

    app.import(path.join(app.bowerDirectory, 'modernizr/modernizr.js'));
    app.import(path.join(app.bowerDirectory, 'spinjs/spin.js'));
  }
};
