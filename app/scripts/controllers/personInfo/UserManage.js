'usr strict';

angular.module('furniturefe')
    .controller('UserManageCtrl', ['$rootScope', '$scope', '$location', '$cookies', '$filter', '$compile', '$timeout', function ($rootScope, $scope, $location, $cookies, $filter, $compile, $timeout) {

        $rootScope.isLogged = true;

        /**
         * 要初始化函数
         */
        let init = () => {
        };

        /**
         * 增加 销售订单 按钮 点击事件
         */
        $scope.addUser = () => {
            $('#addUserPopupTitle').show();
            $('#addUserButton').show();
            $('#rulePopupDiv').show();
        };

        /**
         * 取消 按钮 点击事件
         */
        $scope.cancelAddEdit = () => {
            $('#addUserPopupTitle').hide();
            $('#editUserPopupTitle').hide();
            $('#addUserButton').hide();
            $('#editUserButton').hide();
            $('#rulePopupDiv').hide();
        };

        /**
         *  点击 添加按钮确认 是否添加
         */
        $scope.toAddUser = () => {
            swal({
                    title: "Are you sure ?",
                    text: "确定要添加该用户吗？",
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
