/// <amd-dependency path="angular-ui-router"/>

import angular = require('angular');
import catalogctrl = require('catalog/catalogController')
import catalogsvc = require('catalog/catalogService')

var ngModule: ng.IModule = angular.module('catalog', ['ui.router']);

ngModule.config([ '$stateProvider', ($stateProvider) => {
  $stateProvider.state('catalog', {
    url: '/catalog',
    templateUrl: 'catalog/catalog.html',
    controller: 'CatalogController as ctrl'
  });
}])

ngModule.controller('CatalogController', catalogctrl);
ngModule.service('CatalogService', catalogsvc.CatalogService);

export = ngModule