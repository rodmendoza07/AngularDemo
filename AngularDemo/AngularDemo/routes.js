'use strict';

angular.module('demoApp')

.config(['$routeProvider', function ($routeProvider) {
    var routes = $routeProvider

    .when('/pagina1', {
        templateUrl: './view1.html',
        controller: 'demoCtrl.controller1'
    })

    .when('/pagina2', {
        templateUrl: './view2.html',
        controller: 'demoCtrl.controller2'
    })

    .otherwise({
        redirectTo: '/pagina1'
    })

}]);