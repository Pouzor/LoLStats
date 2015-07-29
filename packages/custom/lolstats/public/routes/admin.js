'use strict';

angular.module('mean.lolstats').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('admin page', {
      url: '/lolstats/admin',
      templateUrl: 'lolstats/views/admin.html'
    });
  }
]);
