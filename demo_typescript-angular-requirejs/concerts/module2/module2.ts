/// <amd-dependency path="angular-ui-router"/>

import angular = require('angular');
import module2ctrl = require('module2/module2controller')
import directives = require('module2/module2directives')

var ngModule: ng.IModule = angular.module('module2', ['ui.router']);

ngModule.config([ '$stateProvider', ($stateProvider) => {
  $stateProvider.state('module2', {
    url: '/module2',
    templateUrl: 'module2/module2.html',
    controller: 'Module2Controller as mod2ctrl'
  });
}])

ngModule.controller('Module2Controller', module2ctrl)
ngModule.directive('directive1', directives.directive1)
ngModule.directive('directive2', directives.directive2)

export = ngModule