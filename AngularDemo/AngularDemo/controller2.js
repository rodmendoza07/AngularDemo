'use strict';

angular.module('demoApp')

.controller('demoCtrl.controller2',
    ['$scope',
    function ($scope) {

        $scope.view = {
            title: 'Vista 2',
            items: [{
                    id: 1,
                    name: 'Alejandro',
                    job: 'Web developer'
                }, {
                    id: 2,
                    name: 'Marco',
                    job: 'Web developer'
                }, {
                    id: 3,
                    name: 'Fernanda',
                    job: 'Web developer half time'
                }, {
                    id: 4,
                    name: 'Angelica',
                    job: 'Documentation half time'
                }, {
                    id: 5,
                    name: 'Rodolfo',
                    job:'Web developer'
                }, {
                    id: 6,
                    name: 'Leonardo',
                    job:'Web developer'
                }]
        };
    }
    ]);