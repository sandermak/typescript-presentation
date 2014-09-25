/// <amd-dependency path="angular-ui-router"/>

import angular = require('angular');
import orderctrl = require('order/orderController')
import directives = require('order/orderDirectives')

var ngModule: ng.IModule = angular.module('order', ['ui.router']);

ngModule.config([ '$stateProvider', ($stateProvider) => {
  $stateProvider.state('order', {
    url: '/order',
    templateUrl: 'order/order.html',
    controller: 'OrderController as ctrl'
  });
}])

ngModule.controller('OrderController', orderctrl)
ngModule.directive('concertOrder', directives.concertOrder)

export = ngModule