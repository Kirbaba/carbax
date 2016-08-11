$(document).ready(function () {

    /*slider for market single proposal*/
    $(window).load(function () {
        $('.market-slider__single').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            slideshow: false
        });
    });
    /*close slider for market single proposal*/

    /*market yandex map*/
    if ($('#marketMap').length > 0) {//проверяет наличие блока на странице
        ymaps.ready(function () {

            var myMap = new ymaps.Map('marketMap', {
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
    }
    ;
    /*close market yandex map*/

    /*business yandex map*/
    if ($('#businessMap').length > 0) {//проверяет наличие блока на странице
        ymaps.ready(function () {
            var myMap = new ymaps.Map('businessMap', {
                center: [56.948048, 24.107018],
                zoom: 6
            });
            myMap.controls.add('smallZoomControl');
            myMap.controls.add('searchControl');
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: myajax.img + 'img/marker.png',
                balloonContent: 'Это красивая метка'
            }, {});

            myMap.geoObjects.add(myPlacemark);
        });
    }
    ;
    /*close business yandex map*/

    /*market tabs*/
    $('.page__tabs_target').click(function (event) {
        $('.page__tabs_target').removeClass('active');//при клике на нужный элемент удаляем у соседних класс 'active'
        $(this).addClass('active'); //и добавляем класс 'active' элементу, по которому кликнули
        event.preventDefault();//отменяем действие браузера по умолчанию для тега 'a',
        var target = ($(this).data('tab'));//создаем переменную 'target' которая содержит значение атрибута 'data-tab'

        $('.page__tabcontent').hide();//страница с контентом спрятана по умолчанию
        $("." + target).show();//отображаем страницу при клике на соответсвующую вкладку с соответсвующим значением 'data-tab',
    });
    /*close market tabs*/
});