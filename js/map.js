
import { similarArray } from './main.js';
import { createCard } from './card.js';
import { setFormInactive, setFormActive } from './form.js';

const formAddressField = document.querySelector('#address');
const NUMBER_AFTER_COMMA = 5;

const defaultCoordinates = {
  LAT: 35.68950,
  LNG: 139.69171,
}

// Деактивизируем форму
setFormInactive()

// Карта
/* global L:readonly */

const map = L
  .map('map-canvas')

  .on('load', () => {
    alert('Карта инициализирована')
    setFormActive()   // активизируем форму
  })

  .setView({
    lat: defaultCoordinates.LAT,
    lng: defaultCoordinates.LNG,
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
    lat: defaultCoordinates.LAT,
    lng: defaultCoordinates.LNG,
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



similarArray.forEach(({ author, offer, location }) => {

  // Загрузка иконки маркера синего
  const pinIcon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const marker = L.marker({
    lat: location.X,
    lng: location.Y,
  },
  {
    draggable: true,
    icon: pinIcon,
  });



  marker
    .addTo(map)
    .bindPopup(
      createCard({author, offer}),
      {
        keepInView: true,
      },
    );
});
