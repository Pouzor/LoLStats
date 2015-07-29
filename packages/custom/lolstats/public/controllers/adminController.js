'use strict';

/* jshint -W098 */
angular.module('mean.lolstats').controller('adminController', ['$scope', 'Global', 'Champions',
    function ($scope, Global, Champions) {
        $scope.global = Global;
        $scope.package = {
            name: 'lolstats'
        };

        Champions.query(function (champions) {
            $scope.champions = champions;
        });


        $scope.reloadChampions = function () {
            Champions.reload(function (champions) {
                Champions.query(function (champions) {
                    $scope.champions = champions;
                });

            });
        }

    }
]);
