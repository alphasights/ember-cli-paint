'use strict';

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addPackagesToProject([
      { name: 'liquid-fire', target: '0.17.1' },
      { name: 'ember-rl-dropdown', target: 'git+https://git@github.com/alphasights/ember-rl-dropdown.git' },
      { name: 'ember-cli-tooltipster', target: '0.0.6' },
      { name: 'broccoli-sass', target: '0.4.0' },
      { name: 'ember-scrollable', target: '0.1.0' }
    ]).then(function() {
      return this.addBowerPackagesToProject([
        { name: 'paint', target: '0.7.22' },
        { name: 'spinjs', target: '2.0.1' },
        { name: 'tooltipster', target: '3.3.0' },
        { name: 'trackpad-scroll-emulator', target: '1.0.8' }
      ]).then(function() {
        return this.insertIntoFile('.jshintrc', '    "Spinner",', { after: '"predef": [\n' } );
      }.bind(this));
    }.bind(this));
 }
}
