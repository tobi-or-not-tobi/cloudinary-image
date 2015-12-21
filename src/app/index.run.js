(function() {
  'use strict';

  angular
    .module('cloudinaryImage')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
