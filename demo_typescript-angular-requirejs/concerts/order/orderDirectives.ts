export var concertOrder = ['$window', ($window) => {

  return {
    restrict: 'E',
    scope : {
            artist: "=artist",
            tickets: "=tickets"
    },
    replace: true,
    templateUrl: "order/orderDetail.html",
    link: function (scope, element, attrs) {

    }
  }
  
}];