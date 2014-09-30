class OrderController {
    static $inject =  ['$stateParams']
    artist: string
    tickets: number

    constructor(private $stateParams: ng.ui.IStateParamsService) {
        console.log($stateParams)
        this.artist = $stateParams['artist']
        this.tickets = parseInt($stateParams['tickets'])
        console.log("tickets", this.tickets)
    }

}

export = OrderController;