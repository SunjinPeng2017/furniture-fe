'usr strict'

angular.module('furniturefe')
    .controller('ManageSaleOrderCtrl', ['$rootScope', '$scope', '$location', '$cookies', '$filter', '$compile', '$timeout', '$http', function ($rootScope, $scope, $location, $cookies, $filter, $compile, $timeout, $http) {

        $rootScope.isLogged = true;

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

            let data = {
                saleNumber: $scope.saleNumber,
                saleDate: $("#dateTime2").val(),
                orderState: $('#orderState option:selected').val(),
                customerName: $scope.customerName,
                address: $scope.address,
                totalMoney: $scope.totalMoney,
                remark: $scope.remark
            };
            swal({
                    title: "Are you sure ?",
                    text: "确定要添加该订单吗？",
                    type: "warning",
                    showCancelButton: true,
                    closeOnConfirm: false,
                    confirmButtonText: "确认",
                    cancelButtonText: "取消",
                    confirmButtonColor: "#DD6B55"
                },
                function () {
                    $http.post(
                        apiConfigs.saleOrder,
                        data
                    ).then(response => {
                        $scope.cancelAddEdit();
                        swal("成功!", "", "success");
                        getSaleOrders();
                    }, response => {
                        swal("失败！", "", "error");
                    });
                });
            $scope.saleNumber = '';
            $scope.customerName = '';
            $scope.address = '';
            $scope.totalMoney = '';
            $scope.remark = '';
        };

        let getSaleOrders = () => {
            $http.get(
                apiConfigs.saleOrders
            ).then(response => {
                $scope.saleOrders = response.data;
            });
        };

        /**
         * 要初始化函数
         */
        let init = () => {
            initDateTimePicker();
            getSaleOrders();
        };

        init();
    }]);
