'use strict';

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addPackagesToProject([
      { name: 'broccoli-sass', target: '0.6.6' }
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
