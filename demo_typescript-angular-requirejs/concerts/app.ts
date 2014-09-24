/// <amd-dependency path="angular-ui-router"/>

import angular = require('angular');
import module1 = require('module1/module1');
import module2 = require('module2/module2');

var angular_dependencies = ['ui.router', module1.name, module2.name];

var ngModule: ng.IModule = angular.module('app', angular_dependencies);

ngModule.config(['$stateProvider', ($stateProvider) => {
  $stateProvider.state("root", {
    url: "/",
    template: '<p>At root page</p>'
  })
}]

);

ngModule.run(['$rootScope', ($rootScope) => {
  $rootScope.title = "My title";
}]);

angular.bootstrap(document, ['app']);