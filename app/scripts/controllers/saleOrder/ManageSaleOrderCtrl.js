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
            $('#addSaleOrderPopupTitle').show();
            $('#editSaleOrderButton').show();
            $('#rulePopupDiv').show();
        };

        /**
         * 取消 按钮 点击事件
         */
        $scope.cancelAddEdit = () => {
            $('#addSaleOrderPopupTitle').hide();
            $('#editSaleOrderPopupTitle').hide();
            $('#addSaleOrderButton').hide();
            $('#editSaleOrderButton').hide();
            $('#rulePopupDiv').hide();
        };

        /**
         * 初始化  DateTimePicker
         */
        let initDateTimePicker = () => {
            $('#datetimepicker').datetimepicker();
        };

        init();
    }]);
