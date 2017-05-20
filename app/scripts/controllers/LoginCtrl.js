'usr strict'

angular.module('furniturefe')
    .controller('LoginCtrl', ['$rootScope', '$scope', '$location', '$cookies', '$filter', '$compile', '$timeout', function ($rootScope, $scope, $location, $cookies, $filter, $compile, $timeout) {

        /**
         * 页面初始化函数
         */
        let init = () => {
            initUnsilder();
        };
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

        let initUnsilder = () => {
            $(document).ready(() => {
                let unslider04 = $('#b04').unslider({
                        dots: true,
                    }),
                    data04 = unslider04.data('unslider');
                $('.unslider-arrow04').click(function () {
                    var fn = this.className.split(' ')[1];
                    data04[fn]();
                });
            });
        };

        /**
         * 加载初始化函数
         */
        init();
    }]);
