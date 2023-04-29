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
        iconImageHref: '/img/location.svg',
        iconImageSize: [48, 48],
        iconImageOffset: [-20, -40]
    });

    myMap.geoObjects.add(placemark);
}

/* InputMask */
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);

/* Валидация */
let validation = new JustValidate('#form', {
    errorLabelStyle: {
        color: '#FF5C00'
    }
})

validation
    .addField("#name", [
        {
            rule: 'required',
            errorMessage: 'Вы не ввели имя'
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Минимум 2 символа'
        },
        {
            rule: 'maxLength',
            value: 20,
            errorMessage: 'Максимум 20 символа'
        },
    ])
    .addField("#email", [
        {
            rule: 'required',
            errorMessage: 'Вы не ввели e-mail'
        },
        {
            rule: 'email',
            errorMessage: 'Ошибка в e-mail'
        },
    ])
    .addField("#phone", [
        {
            validator: (value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Boolean(Number(phone) && phone.length === 10)
            },
            errorMessage: 'Вы не ввели телефон'
        }
    ]);

/* Тултип */
tippy('[data-tippy-content]', {
    maxWidth: 163
});