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


// Создание элемента
const createElements = function (element) {
  const fragmentElement = document.createDocumentFragment();

  for (let i = 0; i < element.length; i++) {
    const elements = document.createElement(element[i]);
    fragmentElement.appendChild(elements);
  }
  return fragmentElement;
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
  newCardElement.querySelector('.popup__text--capacity').textContent = add.offer.rooms + ' комнаты для ' + add.offer.guests + ' гостей';
  newCardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + add.offer.checkin + ' выезд до ' + add.offer.checkout;


  //  features
  const featureListElement = newCardElement.querySelector('.popup__features');
  featureListElement.innerHTML = '';   // Очищение элемента
  const features = add.offer.features;
  featureListElement.appendChild(createElements(features));


  // //  photo
  // const photoListElement = newCardElement.querySelector('.popup__photos');
  // photoListElement.innerHTML = '';   // Очищение элемента
  // const photos = add.offer.photos;
  // photoListElement.appendChild(createElements(photos));


  //  description
  newCardElement.querySelector('.popup__description').textContent = add.offer.description;


  //  avatar
  newCardElement.querySelector('.popup__avatar').src = add.author.avatar;


  //  Возврат карточки
  return (newCardElement);
}


export { createCard, mapCanvas };
