'use strict';

angular.module('demoApp')

.controller('demoCtrl.controller1', 
    ['$scope', 
    function ($scope) {
        
        $scope.view = {
            nombre: null,
            apaterno: null,
            amaterno: null,
            title: 'Vista 1'
        };
    }
]);