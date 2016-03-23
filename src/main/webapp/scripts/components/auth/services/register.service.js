'use strict';

angular.module('springCmApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


