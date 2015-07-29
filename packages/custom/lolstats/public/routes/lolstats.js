'use strict';

angular.module('mean.lolstats').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('lolstats example page', {
      url: '/lolstats/example',
      templateUrl: 'lolstats/views/index.html'
    });
  }
]);
