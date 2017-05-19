'usr strict'

angular.module('furniturefe')
    .controller('LoginCtrl', ['$rootScope', '$scope', '$location', '$cookies', '$filter', '$compile', '$timeout', function ($rootScope, $scope, $location, $cookies, $filter, $compile, $timeout) {

        //是否打开动画
        $scope.isLogging = false;

        /**
         *  延时登录3秒 打开动画
         */
        $scope.userLogin = () => {
            $scope.isLogging = true;
            $timeout(() => {
                $location.url('main');
                $scope.isLogging = false;
            }, 2000);
        };
    }]);
