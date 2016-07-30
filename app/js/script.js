$(document).ready(function () {
   /*slider for market single proposal*/
    $(window).load(function() {
        $('.market-slider__single').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            slideshow: false
        });
    });
   /*close slider for market single proposal*/
   /*yandex map*/
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [55.425471, 38.264108],
                zoom: 13,
                controls: []
            }, {
                searchControlProvider: 'none'
            }),
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: myajax.img + 'img/marker.png',
                balloonContent: 'Это красивая метка'
            }, {});

        myMap.geoObjects.add(myPlacemark);
    });
   /*close yandex map*/
});