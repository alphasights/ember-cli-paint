'use strict';

module.export = {
  afterInstall: function() {
   return this.addBowerPackageToProject([
     { name: 'paint', target: 'git://github.com/alphasights/paint.git#3c085ef958' },
     { name: 'spinjs', target: '2.0.1' }
   ])
 }
}
