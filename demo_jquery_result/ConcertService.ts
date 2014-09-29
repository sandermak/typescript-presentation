/// <reference path="jquery.d.ts" />
module Concert {

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

    export class ConcertService {
        public getConcerts(): JQueryPromise<ConcertSummary[]> {
            return $.getJSON('data/concerts.json')
        }

        public getConcert(id: string): JQueryPromise<Concert> {
            return $.getJSON('data/concert' + id + '.json')
        }
    }
}

