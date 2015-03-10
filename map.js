/**
 * Created by dmitry on 14.02.15.
 */
var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.76, 37.64], // Москва
        zoom: 11,
        //controls: ['zoomControl']
        controls: []
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('dblclick');
    myMap.behaviors.disable('drag');

    myMap.geoObjects
        .add(new ymaps.Placemark([55.663518, 37.482994], {
            balloonContentHeader: "Мастерская &laquoЮго-Западная&raquo"}, {
            iconLayout: 'default#image',
            iconImageHref: "./img/pin2.png", // картинка иконки
            iconImageSize: [51, 77], // размеры картинки
            iconImageOffset: [-25, -77] // смещение картинки
        }))
        .add(new ymaps.Placemark([55.807706, 37.650138], {
            balloonContentHeader: "Мастерская &laquoАлексеевская&raquo"}, {
            iconLayout: 'default#image',
            iconImageHref: "./img/pin2.png", // картинка иконки
            iconImageSize: [51, 77], // размеры картинки
            iconImageOffset: [-25, -77] // смещение картинки
        }))
        .add(new ymaps.Placemark([55.800485, 37.714099], {
            balloonContentHeader: "Мастерская &laquoСокольники&raquo"}, {
            iconLayout: 'default#image',
            iconImageHref: "./img/pin2.png", // картинка иконки
            iconImageSize: [51, 77], // размеры картинки
            iconImageOffset: [-25, -77] // смещение картинки
        }))
        .add(new ymaps.Placemark([55.805094, 37.585304], {
            balloonContentHeader: "Наш офис",
            balloonContentBody: "Телефон: +7 499 638-30-73<br>e-mail: info@bright-fish.ru"}, {
            iconLayout: 'default#image',
            iconImageHref: "./img/pin2.png", // картинка иконки
            iconImageSize: [51, 77], // размеры картинки
            iconImageOffset: [-25, -77] // смещение картинки
        }))
        .add(new ymaps.Placemark([55.723993, 37.696231], {
            balloonContentHeader: "Мастерская &laquoВолгоградский Проспект&raquo"}, {
            iconLayout: 'default#image',
            iconImageHref: "./img/pin2.png", // картинка иконки
            iconImageSize: [51, 77], // размеры картинки
            iconImageOffset: [-25, -77] // смещение картинки
        }));

    document.getElementById('destroyButton').onclick = function () {
        // Для уничтожения используется метод destroy.
        myMap.destroy();
    };

}
