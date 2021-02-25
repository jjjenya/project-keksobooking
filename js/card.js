import { getАdvertisingS, TYPE } from './data.js';


// Контейнер для объявлений
const mapCanvas = document.querySelector('#map-canvas');


// Получение шаблона объявления
const cardTemplate = document.querySelector('#card').content;
const cardElement = cardTemplate.querySelector('article');


// Создание карточки объявления
const cardFragment = document.createDocumentFragment();



const featureListElement = cardElement.querySelector('.popup__features');
const photoListElement = cardElement.querySelector('.popup__photos');



// Сопоставление типов жилья с подписями
const translateType = function () {
  const RETYPE = [];

  for (let i = 0; i < TYPE.length; i++) {
    if (TYPE[i] === 'palace') {
      RETYPE[i] = ' Дворец';
    }
    if (TYPE[i] === 'flat') {
      RETYPE[i] = ' Квартира';
    }
    if (TYPE[i] === 'house') {
      RETYPE[i] = ' Дом';
    }
    if (TYPE[i] === 'bungalow') {
      RETYPE[i] = ' Бунгало';
    }
  }

  return (RETYPE);
}




//   Task
const similarCard = getАdvertisingS();
similarCard.forEach((add) => {
  const newCardElement = cardElement.cloneNode(true);
  let span = document.createElement('span');
  span.innerHTML = '<span> ₽/ночь</span>';

  newCardElement.querySelector('.popup__title').textContent = add.offer.title;
  newCardElement.querySelector('.popup__text--address').textContent = add.offer.address;
  newCardElement.querySelector('.popup__text--price').textContent = add.offer.price;
  newCardElement.querySelector('.popup__text--price').append(span);
  newCardElement.querySelector('.popup__type').textContent = translateType(add.offer.type);
  newCardElement.querySelector('.popup__text--capacity').textContent = add.offer.rooms + ' комнаты для ' + add.offer.guests + ' гостей';
  newCardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + add.offer.checkin + ' выезд до ' + add.offer.checkout;
  featureListElement;
  newCardElement.querySelector('.popup__description').textContent = add.offer.description;
  photoListElement;
  newCardElement.querySelector('.popup__avatar').src = add.author.avatar;
  cardFragment.appendChild(newCardElement);
});



// Вставка сформированной карточки
mapCanvas.appendChild(cardFragment);
