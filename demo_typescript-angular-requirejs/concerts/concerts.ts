/// <amd-dependency path="angular-ui-router"/>

import angular = require('angular');
import catalog = require('catalog/catalog');
import order = require('order/order');

var angular_dependencies = ['ui.router', catalog.name, order.name];

var ngModule: ng.IModule = angular.module('concerts', angular_dependencies);

ngModule.config(['$urlRouterProvider', ($urlRouterProvider) => {

  $urlRouterProvider.otherwise('/catalog');

}]

);

ngModule.run(['$rootScope', ($rootScope) => {
  $rootScope.title = "Book a concert";
}]);

angular.bootstrap(document, ['concerts']);