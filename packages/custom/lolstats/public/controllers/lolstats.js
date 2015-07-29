'use strict';

/* jshint -W098 */
angular.module('mean.lolstats').controller('LolstatsController', ['$scope', 'Global', 'Lolstats',
  function($scope, Global, Lolstats) {
    $scope.global = Global;
    $scope.package = {
      name: 'lolstats'
    };
  }
]);
