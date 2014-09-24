/// <amd-dependency path="angular-ui-router"/>

import angular = require('angular');
import module1ctrl = require('module1/module1controller')

var ngModule: ng.IModule = angular.module('module1', ['ui.router']);

ngModule.config([ '$stateProvider', ($stateProvider) => {
  $stateProvider.state('module1', {
    url: '/module1',
    templateUrl: 'module1/module1.html',
    controller: 'Module1Controller as mod1ctrl'
  });
}])

ngModule.controller('Module1Controller', module1ctrl)

export = ngModule