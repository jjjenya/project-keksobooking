
const formAdForm = document.querySelector('.ad-form');
const formMapFilters = document.querySelector('.map__filters');
const formAddressField = document.querySelector('#address');
const formAdFormFieldset = formAdForm.getElementsByTagName('fieldset');

const NUMBER_AFTER_COMMA = 5;


//    Добавление класса 'ad-form--disabled' в форму заполнения информации об объявлении '.ad-form'
formAdForm.classList.add('ad-form--disabled');



//    Блокировка с помощью атрибута 'disabled' всех интерактивных элементов формы '.ad-form'
formAdFormFieldset.forEach(function (fieldset) {
  fieldset.setAttribute('disabled', 'disabled');
});

/********* ВАРИАНТ 2 *************
for (let i = 0; i < formAdFormFieldset.length; i++) {
  formAdFormFieldset[i] = formAdFormFieldset[i].setAttribute('disabled', '');
}
*/



//    Блокировка формы с фильтрами '.map__filters' и ее интерактивных элементов
formMapFilters.classList.add('map__filters--disabled');
formMapFilters.setAttribute('disabled', 'disabled');


/********* ВАРИАНТ 2 *************
const formMapFiltersFieldset = formAdForm.getElementsByTagName('fieldset');
formMapFiltersFieldset.setAttribute('disabled', '');

const formMapFiltersSelect = formAdForm.getElementsByTagName('select');
formMapFiltersSelect.setAttribute('disabled', '');
*/



// Карта
/* global L:readonly */

const map = L.map('map-canvas')

  // возврат активного состояния формы при загрузке карты
  .on('load', () => {
    formAdForm.classList.remove('ad-form--disabled');
    formAdFormFieldset.forEach(function (fieldset) {
      fieldset.removeAttribute('disabled');
      formMapFilters.classList.remove('map__filters--disabled');
      formMapFilters.removeAttribute('disabled');
    });
  })

  .setView({
    lat: 35.6895000,
    lng: 139.6917100,
  }, 10);


//   Создание слоя карты
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


//   Загрузка иконки маркера красного
const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});


//   Расположение маркера красного
const mainPinMarker = L.marker(
  {
    lat: 35.6895000,
    lng: 139.6917100,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
mainPinMarker.addTo(map);


//   Заполнения поля "Адрес (координаты)" по умолчанию - центр Токио
formAddressField.value = mainPinMarker.getLatLng().lat.toFixed(NUMBER_AFTER_COMMA) + ', ' + mainPinMarker.getLatLng().lng.toFixed(NUMBER_AFTER_COMMA);


//   Заполнение поля "Адрес (координаты)" новыми координатами после окончания передвижения пользователем маркера
mainPinMarker.on('moveend', (evt) => {
  formAddressField.value = evt.target.getLatLng().lat.toFixed(NUMBER_AFTER_COMMA) + ', ' + evt.target.getLatLng().lng.toFixed(NUMBER_AFTER_COMMA);
});
