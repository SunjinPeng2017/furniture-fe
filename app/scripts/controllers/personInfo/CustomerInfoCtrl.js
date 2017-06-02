'usr strict'

angular.module('furniturefe')
    .controller('CustomerInfoCtrl', ['$rootScope', '$scope', '$location', '$cookies', '$filter', '$compile', '$timeout', '$http', function ($rootScope, $scope, $location, $cookies, $filter, $compile, $timeout, $http) {

        $rootScope.isLogged = true;

        /**
         * 初始化从后台获取数据
         */
        let initData = () => {
            $http.get(
                apiConfigs.customer
            ).then(response => {
                $scope.customerInfo = response.data;
            });
        };

        initData();
    }]);
