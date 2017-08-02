'use strict';

let basePath = "http://localhost:8080/v1.0/";//本机使用

//let basePath = "http://localhost:8080/v1.0/"; //服务器使用

let apiConfigs = {

    /**  */
    /** 用户管理相关接口 */
    user: basePath + "user",

    /**  Echarts 数据接口*/
    eCharts: basePath + "EChartsData",

    /**  客户信息管理接口*/
    customer: basePath + "customer",

    /**  管理销售订单的相关接口 */
    saleOrder: basePath + "saleOrder",
    saleOrders: basePath + "saleOrders",
};
