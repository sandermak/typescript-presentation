export interface ConcertSummary {
    id: string
    artist: string
}
export interface Concert extends ConcertSummary {
    artist: string
    price: number
    imgUrl: string
    desc: string
}

export class CatalogService {

    static $inject =  ['$http']

    constructor(private $http: ng.IHttpService) {}

    getConcerts(): ng.IPromise<ConcertSummary> {
      return this.$http.get('data/concerts.json').then((response) => response.data)
    }

}