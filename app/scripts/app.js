'use strict'

angular.module('furniturefe', [
    'ngResource',
    'ngCookies',
    'ui.router',
]).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/login');
    $urlRouterProvider.when('', '/');
    $locationProvider.hashPrefix('');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'login'
        })
        .state('main', {
            url: '/main',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
}).run(['$rootScope', '$cookies', '$location', '$log', function ($rootScope, $cookies, $location, $log) {
}]);
