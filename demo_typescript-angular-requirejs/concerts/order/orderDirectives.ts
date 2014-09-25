export var concertOrder = ['$window', ($window) => {

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