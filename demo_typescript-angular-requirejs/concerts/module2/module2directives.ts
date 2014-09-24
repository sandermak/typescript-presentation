export var directive1 = ['$window', ($window) => {

  return {
    restrict: 'E',
    scope : {
            value: "=value"
    },
    replace: false,
    link: function (scope, element, attrs) {
      element.text('Value in directive1: ' + scope.value)
    }
  }
  
}];

export var directive2 = ['$window', ($window) => {

  return {
    restrict: 'E',
    scope : {
            value: "=value"
    },
    replace: false,
    link: function (scope, element, attrs) {
      element.text('Value in directive2: ' + scope.value)
    }
  }
  
}];