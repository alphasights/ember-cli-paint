'use strict';

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'paint', target: '0.3.0' },
      { name: 'spinjs', target: '2.0.1' }
    ]).then(function() {
      return this.insertIntoFile('.jshintrc', '    "Spinner": true,', { after: '"predef": {\n' } );
    }.bind(this));
 }
}
