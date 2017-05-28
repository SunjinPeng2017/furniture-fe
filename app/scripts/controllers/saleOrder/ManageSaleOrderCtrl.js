'usr strict'

angular.module('furniturefe')
    .controller('ManageSaleOrderCtrl', ['$rootScope', '$scope', '$location', '$cookies', '$filter', '$compile', '$timeout', function ($rootScope, $scope, $location, $cookies, $filter, $compile, $timeout) {

        $rootScope.isLogged = true;

        /**
         * 要初始化函数
         */
        let init = () => {
            initDateTimePicker();
        };

        /**
         * 增加 销售订单 按钮 点击事件
         */
        $scope.addSaleOrder = () => {
            $('#editRulePopupTitle').show();
            $('#editRuleButton').show();
            $('#rulePopupDiv').show();
        };

        /**
         * 初始化  DateTimePicker
         */
        let initDateTimePicker = () => {
            $('#datetimepicker').datetimepicker();
        };

        init();
    }]);
