import { similarArray } from './main.js';

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



//   Функция, которая принимает в себя одно объявление и заполняет одну карточку
const createCard = function (add = similarArray[0]) {
  const newCardElement = cardElement.cloneNode(true);

  // title
  // проверка заполняемости данных
  const titleElement = newCardElement.querySelector('.popup__title');
  if (titleElement) {
    titleElement.textContent = add.offer.title;
  } else {
    hideElement('.popup__title');
  }


  newCardElement.querySelector('.popup__text--address').textContent = add.offer.address;
  newCardElement.querySelector('.popup__text--price').textContent = add.offer.price + ' ₽/ночь';
  newCardElement.querySelector('.popup__type').textContent = offerTypesMap[add.offer.type];

  const rooms = add.offer.rooms;
  const guests = add.offer.guests;
  newCardElement.querySelector('.popup__text--capacity').textContent = rooms + (rooms === 1 ? ' комнатa для ' : ((rooms === 2 || rooms === 3 || rooms === 4) ? ' комнаты для ' : ' комнат для ')) + guests + (guests === 1 ? ' гостя' : ' гостей');

  newCardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + add.offer.checkin + ' выезд до ' + add.offer.checkout;


  //  features
  const featureListElement = newCardElement.querySelector('.popup__features');
  featureListElement.innerHTML = '';   // Очищение элемента
  for (let i = 0; i < add.offer.features.length; i++) {
    const featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature--' + add.offer.features[i], 'popup__feature');
    featureListElement.appendChild(featureItem);
  }


  //  photos
  const photoListElement = newCardElement.querySelector('.popup__photos');
  photoListElement.innerHTML = '';
  for (let j = 0; j < add.offer.photos.length; j++) {
    const imageItem = document.createElement('img');
    imageItem.classList.add('popup__photo');
    imageItem.setAttribute('src', add.offer.photos[j]);
    imageItem.setAttribute('width', '45');
    imageItem.setAttribute('height', '40');
    imageItem.setAttribute('alt', 'Фотография жилья');
    photoListElement.appendChild(imageItem);
  }


  //  description
  newCardElement.querySelector('.popup__description').textContent = add.offer.description;


  //  avatar
  newCardElement.querySelector('.popup__avatar').src = add.author.avatar;


  //  Возврат карточки
  return (newCardElement);
}


export { createCard, mapCanvas };
