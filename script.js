/* Селект */
const element = document.querySelector('select');
const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: "",
});

/* Яндекс Карта */
ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("myMap", {
        center: [48.872185, 2.354224],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 12
    });

    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
    // myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    var placemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
        iconLayout: 'default#image',
        iconImageHref: '/location.svg',
        iconImageSize: [48, 48],
        iconImageOffset: [-20, -40]
    });

    myMap.geoObjects.add(placemark);
}
