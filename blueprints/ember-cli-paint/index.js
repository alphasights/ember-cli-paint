'use strict';

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addPackagesToProject([
      { name: 'liquid-fire', target: '0.15.0' }
    ]).then(function() {
      return this.addBowerPackagesToProject([
        { name: 'paint', target: '0.5.1' },
        { name: 'spinjs', target: '2.0.1' }
      ]).then(function() {
        return this.insertIntoFile('.jshintrc', '    "Spinner": true,', { after: '"predef": {\n' } );
      }.bind(this));
    }.bind(this));
 }
}
