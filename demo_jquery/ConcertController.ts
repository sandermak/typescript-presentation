/// <reference path="ConcertService.ts" />
/// <reference path="ConcertView.ts" />

module ConcertController {
    var concertService = new Concert.ConcertService()

    $(document).ready(() => {
        concertService.getConcerts().then(data => ConcertView.renderConcerts(data))
    })

    export var selectConcert = (id: string ) => {
        concertService.getConcert(id).then(data => ConcertView.renderSelectedConcert(data))
    }
}