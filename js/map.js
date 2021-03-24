
import { setFormActive, setFormDeactive } from './form.js';
import { setFiltersActive, setFiltersDeactive } from './filtr.js';


import { createCard } from './card.js';


const formAddressField = document.querySelector('#address');

const NUMBER_AFTER_COMMA = 5;


//   Координаты по умолчанию - Токио
const DefaultCoordinates = {
  LAT: 35.68950,
  LNG: 139.69171,
}


//   Заполнение поля "Адрес (координаты)"
const setFormAddressField = function (lat, lng) {
  formAddressField.value = lat + ',' + lng;
}


//   Иконка маркера красного
const MAIN_PIN_ICON = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});


//   Иконка маркера синего
const PIN_ICON = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

// Заполнения поля "Адрес (координаты)" по умолчанию координатами центра Токио
const setFormAddressFieldDefault = () => {
  setFormAddressField(DefaultCoordinates.LAT, DefaultCoordinates.LNG);
}

//   Активное состояние Страницы
const activatePage = () => {
  setFormActive();
  setFiltersActive();
  setFormAddressFieldDefault();
}


//    Неактивное состояние страницы
const deactivatePage = () => {
  setFormDeactive();
  setFiltersDeactive();
}





// // Карта
/* global L:readonly */

const map = L.map('map-canvas');

const initMap = () => {
  map.on('load', () => {
    activatePage();
  })

  map.setView({
    lat: DefaultCoordinates.LAT,
    lng: DefaultCoordinates.LNG,
  }, 10);


  //   Создание слоя карты
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
}



//   Расположение маркера красного
const mainPinMarker = L.marker(
  {
    lat: DefaultCoordinates.LAT,
    lng: DefaultCoordinates.LNG,
  },
  {
    draggable: true,
    icon: MAIN_PIN_ICON,
  },
);
mainPinMarker.addTo(map);


// Заполнение поля "Адрес (координаты)" новыми координатами после окончания передвижения пользователем маркера
mainPinMarker.on('moveend', (evt) => {
  setFormAddressField(evt.target.getLatLng().lat.toFixed(NUMBER_AFTER_COMMA), evt.target.getLatLng().lng.toFixed(NUMBER_AFTER_COMMA));
});



// Создание меток
const markers = [];
const createMarkers = (data) => {

  data.forEach((object) => {
    const marker = L.marker(
      {
        lat: object.location.lat,
        lng: object.location.lng,
      },
      {
        draggable: true,
        icon: PIN_ICON,
      });

    marker
      .addTo(map)
      .bindPopup(
        createCard(object),
        {
          keepInView: true,
        },
      );

    markers.push(marker);

  });
}



// Расположение маркера красного по умолчанию после отправки/сброса формы
const setDefaultMainMarker = () => {
  mainPinMarker.setLatLng([DefaultCoordinates.LAT, DefaultCoordinates.LNG]);
}


// Удаление меток
const deleteMarkers = (markers) => {
  for (let i = 0; i < markers.length; i++) {
    markers[i]
      .remove();
  }
}


export { deactivatePage, initMap, createMarkers, activatePage, setFormAddressFieldDefault, setDefaultMainMarker, deleteMarkers, markers };

