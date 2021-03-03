// import { similarArray } from './main.js';

//   Сопоставление типов жилья с подписями
const offerTypesMap = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
}



// Контейнер для объявлений
const mapCanvas = document.querySelector('#map-canvas');


// Получение шаблона объявления
const cardTemplate = document.querySelector('#card').content;
const cardElement = cardTemplate.querySelector('article');


// Скрытие элемента по классу
const hideElement = function (className) {
  cardElement.querySelector(className).classList.add('hidden');
}


// функция features
const createFeatureList = function (features) {
  const fragmentElement = document.createDocumentFragment();

  for (let i = 0; i < features.length; i++) {
    const featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature--' + features[i], 'popup__feature');
    fragmentElement.appendChild(featureItem);
  }
  return fragmentElement;
}


// функция photos
const createPhotosList = function (photos) {
  const fragmentElement = document.createDocumentFragment();

  for (let j = 0; j < photos.length; j++) {
    const imageItem = document.createElement('img');
    imageItem.classList.add('popup__photo');
    imageItem.setAttribute('src', photos[j]);
    imageItem.setAttribute('width', '45');
    imageItem.setAttribute('height', '40');
    imageItem.setAttribute('alt', 'Фотография жилья');
    fragmentElement.appendChild(imageItem);
  }
  return fragmentElement;
}


//   Функция, которая принимает в себя одно объявление и заполняет одну карточку

const createCard = function (offer, author) {
  const newCardElement = cardElement.cloneNode(true);

  // title
  // проверка заполняемости данных
  const titleElement = newCardElement.querySelector('.popup__title');
  if (titleElement) {
    titleElement.textContent = offer.title;
  } else {
    hideElement('.popup__title');
  }


  newCardElement.querySelector('.popup__text--address').textContent = offer.address;
  newCardElement.querySelector('.popup__text--price').textContent = offer.price + ' ₽/ночь';
  newCardElement.querySelector('.popup__type').textContent = offerTypesMap[offer.type];

  const rooms = offer.rooms;
  const guests = offer.guests;
  newCardElement.querySelector('.popup__text--capacity').textContent = rooms + (rooms === 1 ? ' комнатa для ' : ((rooms === 2 || rooms === 3 || rooms === 4) ? ' комнаты для ' : ' комнат для ')) + guests + (guests === 1 ? ' гостя' : ' гостей');

  newCardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkin + ' выезд до ' + offer.checkout;


  //  features
  const featureListElement = newCardElement.querySelector('.popup__features');
  featureListElement.innerHTML = '';
  featureListElement.appendChild(createFeatureList(offer.features));


  //  photos
  const photoListElement = newCardElement.querySelector('.popup__photos');
  photoListElement.innerHTML = '';
  featureListElement.appendChild(createPhotosList(offer.photos));


  //  description
  newCardElement.querySelector('.popup__description').textContent = offer.description;


  //  avatar
  newCardElement.querySelector('.popup__avatar').src = author.avatar;


  //  Возврат карточки
  return (newCardElement);
}


export { createCard, mapCanvas };
