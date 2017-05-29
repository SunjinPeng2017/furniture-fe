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
            $('#addSaleOrderButton').show();
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

        /**
         *  点击 添加按钮确认 是否添加
         */
        $scope.toAddSaleOrder = () => {
            swal({
                    title: "Are you sure ?",
                    text: "确定要添加该订单吗？",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "确认",
                    cancelButtonText: "取消",
                    closeOnConfirm: false,
                    closeOnCancel: false
                },
                function (isConfirm) {
                    if (isConfirm) {
                        $scope.cancelAddEdit();
                        swal("成功!", "", "success");
                    } else {
                        swal("失败！", "", "error");
                    }
                });
        };

        init();
    }]);
