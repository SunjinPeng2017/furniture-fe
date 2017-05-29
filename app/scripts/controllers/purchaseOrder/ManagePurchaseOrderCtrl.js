'usr strict'

angular.module('furniturefe')
    .controller('ManagePurchaseOrderCtrl', ['$rootScope', '$scope', '$location', '$cookies', '$filter', '$compile', '$timeout', function ($rootScope, $scope, $location, $cookies, $filter, $compile, $timeout) {

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
        $scope.addPurchaseOrder = () => {
            $('#addPurchaseOrderPopupTitle').show();
            $('#addPurchaseOrderButton').show();
            $('#rulePopupDiv').show();
        };

        /**
         * 取消 按钮 点击事件
         */
        $scope.cancelAddEdit = () => {
            $('#addPurchaseOrderPopupTitle').hide();
            $('#editPurchaseOrderPopupTitle').hide();
            $('#addPurchaseOrderButton').hide();
            $('#editPurchaseOrderButton').hide();
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
        $scope.toAddPurchaseOrder = () => {
            swal({
                    title: "Are you sure ?",
                    text: "确定要添加该采购订单吗？",
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
