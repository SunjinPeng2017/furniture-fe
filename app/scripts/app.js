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
        .state('customer_info', {
            url: '/customer_info',
            templateUrl: 'views/personInfo/customer_info.html',
            controller: 'CustomerInfoCtrl',
            controllerAs: 'CustomerInfoCtrl'
        })
        .state('storage_info', {
            url: '/storage_info',
            templateUrl: 'views/personInfo/storage_info.html',
            controller: 'StorageInfoCtrl',
            controllerAs: 'StorageInfoCtrl'
        })
        .state('supply_info', {
            url: '/supply_info',
            templateUrl: 'views/personInfo/supply_info.html',
            controller: 'SupplyInfoCtrl',
            controllerAs: 'SupplyInfoCtrl'
        })
        .state('user_info', {
            url: '/user_info',
            templateUrl: 'views/personInfo/user_info.html',
            controller: 'UserInfoCtrl',
            controllerAs: 'UserInfoCtrl'
        })
}).run(['$rootScope', '$cookies', '$location', '$log', function ($rootScope, $cookies, $location, $log) {
}]);
