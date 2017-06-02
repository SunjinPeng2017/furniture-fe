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

        /**
         * 点击查找按钮
         */
        $scope.searchSaleOrder = () => {
            $('#rulePopupDiv2').show();
            $http.get(
                apiConfigs.saleOrder, {
                    params: {
                        saleNumber: $scope.saleOrderNumber
                    }
                }
            ).then(response => {
                $scope.searchData = response.data;
            });
        };

        /**
         * 查找页面中的取消按钮
         */
        $scope.cancelButton = () => {
            $('#rulePopupDiv2').hide();
        };

        /**
         * 点击删除按钮
         */
        $scope.deleteSaleOrder = item => {
            swal({
                    title: "Are you sure ?",
                    text: "确定要删除该订单吗？",
                    type: "warning",
                    showCancelButton: true,
                    closeOnConfirm: false,
                    confirmButtonText: "确认",
                    cancelButtonText: "取消",
                    confirmButtonColor: "#DD6B55"
                },
                function () {
                    $http.delete(
                        apiConfigs.saleOrder,
                        {
                            params: {
                                id: item.id
                            }
                        }
                    ).then(response => {
                        swal("成功!", "", "success");
                        getSaleOrders();
                    }, response => {
                        swal("失败！", "", "error");
                    });
                });
        };

        /**
         * 点击编辑按钮
         */
        $scope.editSaleOrder = item => {
            $('#rulePopupDiv').show();
            $('#editSaleOrderPopupTitle').show();
            $('#editSaleOrderButton').show();

            $scope.saleNumber = item.saleNumber;
            $("#dateTime2").val(item.saleDate);
            $('#orderState option:selected').val(item.orderState);
            $scope.customerName = item.customerName;
            $scope.address = item.address;
            $scope.totalMoney = item.totalMoney;
            $scope.remark = item.remark;
            $scope.id = item.id;
        };

        /**
         * 点击确定编辑按钮
         */
        $scope.doEditAutoAlertRule = () => {
            let data = {
                saleNumber: $scope.saleNumber,
                saleDate: $("#dateTime2").val(),
                orderState: $('#orderState option:selected').val(),
                customerName: $scope.customerName,
                address: $scope.address,
                totalMoney: $scope.totalMoney,
                remark: $scope.remark,
                id: $scope.id
            };
            swal({
                    title: "Are you sure ?",
                    text: "确定要修改该订单吗？",
                    type: "warning",
                    showCancelButton: true,
                    closeOnConfirm: false,
                    confirmButtonText: "确认",
                    cancelButtonText: "取消",
                    confirmButtonColor: "#DD6B55"
                },
                function () {
                    $http.put(
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
        init();
    }]);
