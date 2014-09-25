import catalogsvc = require('catalog/catalogService')

class CatalogController {

    static $inject =  ['CatalogService', '$state']

    concerts: catalogsvc.ConcertSummary[]
    selectedConcert: catalogsvc.Concert;

    constructor(private catalogService: catalogsvc.CatalogService, private state: ng.ui.IStateService) {
        catalogService.getConcerts()
            .then(concerts => this.concerts = concerts)
    }

    selectConcert(id: string) {
        this.catalogService.getConcert(id)
            .then(concert => this.selectedConcert = concert)
    }

    book(): void {
        this.state.go('order', { concert: this.selectedConcert});
    }

}

export = CatalogController;