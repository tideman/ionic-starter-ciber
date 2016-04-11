(function() {
    'use strict';

angular
  .module('app', [
    /**
     * Everybody has access to these.
     */
    'ionic',
    'app.core',
    'app.run',
    'app.layout',

    /**
     * Feature areas
     */
     'app.dashboard',
     'app.appload',
     'app.login',

  ]);
})(); // End Strict
