'use strict';

angular.module('mean.lolstats').factory('Champions', [ '$resource',
    function ($resource) {
        return $resource('api/champions/:eventId', {
            championId: '@_id'
        }, {
            update: { method: 'PUT' },
            count: {params: {count: true}},
            reload: {params: {reload: true}}
        });
    }
]);
