'use strict'

angular.module('furniturefe')
    .controller('MainCtrl', ['$rootScope', '$scope', '$location', '$cookies', '$filter', '$compile', function ($rootScope, $scope, $location, $cookies, $filter, $compile) {

        $scope.isLogin = true;

        let active = () => {
            let url = $location.path().replace('/', '');
            $('.item-menu').find('li').removeClass('active');
            $('.ul-menu').find('li').removeClass('item-active');
            $('a[ui-sref="' + url + '"]').parent().addClass('active');
            $('a[ui-sref="' + url + '"]').parent().parent().parent().addClass('item-active');
        };

        //加载页面
        let loadIndex = () => {
            //加载页面
            let str = '<div class="menu" ng-show="isLogin">';
            str += '<ul class="ul-menu">';
            str += '<li class="li-item item-active">';
            str += '<img src="images/main/icon_eye.png" class="icon-menu">';
            str += '<img src="images/main/icon_eye_enter.png" class="icon-menu">';
            str += '<p class="menu-title" onclick="createCss(this)">慧眼识客</p>';
            str += '<ul class="item-menu">';
            str += '<li class="active"><a ui-sref="custom_heat" >客流分布热力图</a></li>';
            str += '<li><a ui-sref="custom_history" >历史客流分析</a></li>';
            str += '<li><a ui-sref="hot_area" >热点区域分析</a></li>';
            str += '<li><a ui-sref="time_area" >热点时段分析</a></li>';
            str += '<li><a ui-sref="hot_search" >热点搜索分析</a></li>';
            str += '<li><a ui-sref="personal_index" >用户画像分析</a></li>';
            str += '<li><a ui-sref="crowd_source" >人群来源分析</a></li>';
            str += '</ul>';
            str += '</li>';
            str += '<li class="li-item">';
            str += '<img src="images/main/icon_privilege.png" class="icon-menu">';
            str += '<img src="images/main/icon_privilege_enter.png" class="icon-menu">';
            str += '<p class="menu-title"  onclick="createCss(this)">优惠提单</p>';
            str += '<ul class="item-menu">';
            str += '<li><a ui-sref="coupon_create" >制作优惠券</a></li>';
            str += '<li><a ui-sref="coupon_manager" >优惠券管理</a></li>';
            str += '<li><a ui-sref="coupon_history" >发布和投放历史</a></li>';
            str += '</ul>';
            str += '</li>';
            str += '<li class="li-item">';
            str += '<img src="images/main/icon_hour_glass.png" class="icon-menu">';
            str += '<img src="images/main/icon_hour_glass_enter.png" class="icon-menu">';
            str += '<p class="menu-title"  onclick="createCss(this)">资金管理</p>';
            str += '<ul class="item-menu">';
            str += '<li><a ui-sref="shopSettlement" >资金结算</a></li>';
            str += '</ul>';
            str += '</li>';
            str += '<li class="li-item">';
            str += '<img src="images/main/icon_sinan.png" class="icon-menu">';
            str += '<img src="images/main/icon_sinan_enter.png" class="icon-menu">';
            str += '<p class="menu-title"  onclick="createCss(this)">经营司南</p>';
            str += '<ul class="item-menu">';
            str += '<li><a ui-sref="business_analyze" >营收分析</a></li>';
            str += '<li><a ui-sref="consumingHistory" >消费历史</a></li>';
            str += '</ul>';
            str += '</li>';
            str += '<li class="li-item">';
            str += '<img src="images/main/icon_license.png" class="icon-menu">';
            str += '<img src="images/main/icon_license_enter.png" class="icon-menu">';
            str += '<p class="menu-title"  onclick="createCss(this)">门店管理</p>';
            str += '<ul class="item-menu">';
            str += '<!--<li><a ui-sref="/">分店管理</a></li>-->';
            str += '<li><a ui-sref="store_manager" >门店管理</a></li>';
            str += '</ul>';
            str += '</li>';
            str += '<li class="li-item">';
            str += '<img src="images/main/icon_customized_services.png" class="icon-menu">';
            str += '<img src="images/main/icon_customized_services_enter.png" class="icon-menu">';
            str += '<p class="menu-title"  onclick="createCss(this)">推广管理</p>';
            str += '<ul class="item-menu">';
            str += '<li><a ui-sref="promotion_manager" >推广管理</a></li>';
            str += '</ul>';
            str += '</li>';
            str += '<li class="li-item">';
            str += '<img src="images/main/icon_manage.png" class="icon-menu">';
            str += '<img src="images/main/icon_manage_enter.png" class="icon-menu">';
            str += '<p class="menu-title"  onclick="createCss(this)">系统设置</p>';
            str += '<ul class="item-menu">';
            str += '<li><a ui-sref="sys_personal" >个人中心</a></li>';
            str += '<li><a ui-sref="sys_otherInfo" >其他信息</a></li>';
            str += '<li><a ui-sref="sys_salesclerk" >用户管理</a></li>';
            str += '</ul>';
            str += '</li>';
            str += '</ul>';
            str += '</div>';
            str = $compile(str)($scope);//添加点击事件
            $('#main').html(str);
            $('.box-top-right').show();
        };

        $(window).resize(() => {          //当浏览器大小变化时
            $('.menu').height(($(window).height() - 80) + "px")
        });

        let createCss = (my) => {
            $('.ul-menu').find('li').removeClass('item-active');
            $(my).parent().addClass('item-active');
        };

        let init = () => {
            active();
            loadIndex();
        };

        init();
    }]);

