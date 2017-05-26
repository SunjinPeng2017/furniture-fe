'use strict';

angular.module('furniturefe')
    .controller('MainCtrl', ['$rootScope', '$scope', '$location', '$cookies', '$filter', '$compile', '$timeout', function ($rootScope, $scope, $location, $cookies, $filter, $compile, $timeout) {

        $rootScope.isLogged = true;

        /**
         * 配置左边导航栏
         */
        let active = () => {
            let url = $location.path().replace('/', '');
            $('.item-menu').find('li').removeClass('active');
            $('.ul-menu').find('li').removeClass('item-active');
            $('a[ui-sref="' + url + '"]').parent().addClass('active');
            $('a[ui-sref="' + url + '"]').parent().parent().parent().addClass('item-active');
        };

        let loadIndex = () => {
            let str = '<div class="menu" ng-show="isLogged">';
            str += '<ul class="ul-menu">';
            str += '<li class="li-item item-active">';
            str += '<img src="images/main/icon_eye.png" class="icon-menu">';
            str += '<img src="images/main/icon_eye_enter.png" class="icon-menu">';
            str += '<p class="menu-title2" onclick="mainPage(this)">系统主页</p>';
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

        /**
         *  Echarts
         */
        let setEchart = () => {
            let category = [];
            let dottedBase = +new Date();
            let lineData = [];
            let barData = [];

            for (let i = 0; i < 10; i++) {
                let date = new Date(dottedBase += 1000 * 3600 * 24);
                category.push([
                    date.getFullYear(),
                    date.getMonth() + 1,
                    date.getDate()
                ].join('-'));
                let b = Math.random() * 200;
                let d = Math.random() * 200;
                barData.push(b);
                lineData.push(d + b);
            }

            let option1 = {
                backgroundColor: '#0f375f',
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                        label: {
                            show: true,
                            backgroundColor: '#333'
                        }
                    }
                },
                legend: {
                    data: ['line', 'bar'],
                    textStyle: {
                        color: '#ccc'
                    }
                },
                xAxis: {
                    data: category,
                    axisLine: {
                        lineStyle: {
                            color: '#ccc'
                        }
                    }
                },
                yAxis: {
                    splitLine: {show: false},
                    axisLine: {
                        lineStyle: {
                            color: '#ccc'
                        }
                    }
                },
                series: [{
                    name: 'line',
                    type: 'line',
                    smooth: true,
                    showAllSymbol: true,
                    symbol: 'emptyCircle',
                    symbolSize: 15,
                    data: lineData
                }, {
                    name: 'bar',
                    type: 'bar',
                    barWidth: 10,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 5,
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#14c8d4'},
                                    {offset: 1, color: '#43eec6'}
                                ]
                            )
                        }
                    },
                    data: barData
                }, {
                    name: 'line',
                    type: 'bar',
                    barGap: '-100%',
                    barWidth: 10,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: 'rgba(20,200,212,0.5)'},
                                    {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                                    {offset: 1, color: 'rgba(20,200,212,0)'}
                                ]
                            )
                        }
                    },
                    z: -12,
                    data: lineData
                }, {
                    name: 'dotted',
                    type: 'pictorialBar',
                    symbol: 'rect',
                    itemStyle: {
                        normal: {
                            color: '#0f375f'
                        }
                    },
                    symbolRepeat: true,
                    symbolSize: [12, 4],
                    symbolMargin: 1,
                    z: -10,
                    data: lineData
                }]
            };

            let option2 = {
                backgroundColor: '#394056',
                title: {
                    text: '订单数',
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: 16,
                        color: '#F1F1F3'
                    },
                    left: '6%'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        lineStyle: {
                            color: '#57617B'
                        }
                    }
                },
                legend: {
                    icon: 'rect',
                    itemWidth: 14,
                    itemHeight: 5,
                    itemGap: 13,
                    data: ['总订单数', '已处理', '未处理'],
                    right: '4%',
                    textStyle: {
                        fontSize: 12,
                        color: '#F1F1F3'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    axisLine: {
                        lineStyle: {
                            color: '#57617B'
                        }
                    },
                    data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
                }],
                yAxis: [{
                    type: 'value',
                    name: '单位（%）',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#57617B'
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            fontSize: 14
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#57617B'
                        }
                    }
                }],
                series: [{
                    name: '总订单数',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(137, 189, 27, 0.3)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(137, 189, 27, 0)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgb(137,189,27)',
                            borderColor: 'rgba(137,189,2,0.27)',
                            borderWidth: 12

                        }
                    },
                    data: [220, 182, 191, 134, 150, 167, 123, 189, 240, 198, 165, 156]
                }, {
                    name: '已处理',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(0, 136, 212, 0.3)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(0, 136, 212, 0)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgb(0,136,212)',
                            borderColor: 'rgba(0,136,212,0.2)',
                            borderWidth: 12

                        }
                    },
                    data: [0, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
                }, {
                    name: '未处理',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(219, 50, 51, 0.3)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(219, 50, 51, 0)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        }
                    },
                    itemStyle: {
                        normal: {

                            color: 'rgb(219,50,51)',
                            borderColor: 'rgba(219,50,51,0.2)',
                            borderWidth: 12
                        }
                    },
                    data: [0, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
                },]
            };

            let myChart1 = echarts.init(document.getElementById('echart1'));
            let myChart2 = echarts.init(document.getElementById('echart2'));

            myChart1.setOption(option1);
            myChart2.setOption(option2);
        };

        /**
         * 设置初始化加载函数
         */
        let init = () => {
            active();
            loadIndex();
            setEchart();
        };

        init();
    }]);

