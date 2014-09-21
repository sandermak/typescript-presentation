/// <reference path="ConcertController.ts" />

module ConcertView {
    export var renderConcerts = (concerts: Concert.ConcertSummary[]) => {
        concerts.forEach((concert: Concert.ConcertSummary) => {
            var concertNode = $('<li id="' + concert.id + '">' + concert.artist + '</li>')
            concertNode.on('click', (event: JQueryEventObject) => {
                var id = event.delegateTarget.getAttribute('id')
                ConcertController.selectConcert(id)
            })
            $('#concerts').append(concertNode)
        })
    }

    export var renderSelectedConcert = (concert: Concert.Concert) => {
        var concertDetails = $('.concerttemplate').clone()
        concertDetails.removeClass('concerttemplate')
        $('img', concertDetails).attr('src', concert.imgUrl);
        $('.price', concertDetails).text(concert.price);
        $('.desc', concertDetails).text(concert.desc);
        $('#selectedconcert').children().remove();
        $('#selectedconcert').append(concertDetails);
    }
}