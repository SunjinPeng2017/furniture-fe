'usr strict'

angular.module('furniturefe')
    .controller('LoginCtrl', ['$rootScope', '$scope', '$location', '$cookies', '$filter', '$compile', '$timeout', '$http', function ($rootScope, $scope, $location, $cookies, $filter, $compile, $timeout, $http) {

        /**
         * 页面初始化函数
         */
        let init = () => {
            initUnsilder();
            initDateTimePicker();
        };
        //是否打开动画
        $scope.isLogging = false;
        $rootScope.isLogged = false;

        $scope.loginResult = null;

        /**
         *  延时登录3秒 打开动画
         */
        $scope.userLogin = () => {
            if ($scope.name == null || $scope.password == null) {
                swal("错误！", "请检查你的用户或密码是否为空!", "error");
                return;
            }
            $scope.isLogging = true;
            $timeout(() => {
                $http.get(apiConfigs.user, {
                    params: {
                        name: $scope.name,
                        password: $scope.password
                    }
                }).then(response => {
                    $scope.loginResult = response.data;
                });
                console.log($scope.loginResult);
                if ($scope.loginResult) {
                    $location.url('main');
                    $scope.isLogging = false;
                } else {
                    $scope.isLogging = false;
                    swal("登录失败！", "请检查你的用户名和密码是否正确!", "error")
                }
            }, 2000);
        };

        /**
         * 轮播图插件初始化
         */
        let initUnsilder = () => {
            $(document).ready(() => {
                let unslider04 = $('#b04').unslider({
                        dots: true,
                    }),
                    data04 = unslider04.data('unslider');
                $('.unslider-arrow04').click(function () {
                    let fn = this.className.split(' ')[1];
                    data04[fn]();
                });
            });
        };

        /**
         * 增加 销售订单 按钮 点击事件
         */
        $scope.userRegister = () => {
            $('#rulePopupDiv').show();
        };

        /**
         * 取消 按钮 点击事件
         */
        $scope.cancelAddEdit = () => {
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
        $scope.toRegister = () => {

            $scope.name = '';
            $scope.password = '';
            $scope.sex = '';
            $scope.phoneNumber = '';
            $scope.address = '';

            let data = {
                name: $scope.name,
                password: $scope.password,
                sex: $scope.sex,
                phoneNumber: $scope.phoneNumber,
                address: $scope.address,
                permission: "普通用户",
                registerTime: $("#datetime").val(),
            };
            console.log(data);
            swal({
                    title: "Are you sure ?",
                    text: "确定注册吗？",
                    type: "warning",
                    showCancelButton: true,
                    closeOnConfirm: false,
                    confirmButtonText: "确认",
                    cancelButtonText: "取消",
                    confirmButtonColor: "#DD6B55"
                },
                function () {
                    $http.post(
                        apiConfigs.user,
                        data
                    ).then(response => {
                        $scope.cancelAddEdit();
                        swal("成功!", "", "success");
                    }, response => {
                        swal("失败！", "", "error");
                    });
                });
        };

        /**
         * 加载初始化函数
         */
        init();
    }]);
