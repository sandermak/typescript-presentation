class OrderController {
    static $inject =  ['$http']
    myvalue: string
    
    constructor(private $http: ng.IHttpService) {
      this.myvalue = 'Hi!'
    }

    click() {
      this.helperFunction();
      this.$http.get('data.json').success(
        (data) => this.myvalue = data.result
      )
    }

    private helperFunction() {
        console.log("In helper functio.")
    }

}

export = OrderController;