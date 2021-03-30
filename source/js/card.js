const PHOTO_WIDTH = 45;
const PHOTO_HEIGHT = 40;


//   Сопоставление типов жилья с подписями
const offerTypesMap = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
}


// Получение шаблона объявления
const cardTemplate = document.querySelector('#card').content;
const cardElement = cardTemplate.querySelector('article');


// Скрытие элемента по классу
const hideElement = function (className) {
  cardElement.querySelector(className).classList.add('hidden');
}


// Формирование перечня features
const createFeatureList = function (features) {
  const fragmentElement = document.createDocumentFragment();

  for (let i = 0; i < features.length; i++) {
    const listItem = document.createElement('li');
    listItem.classList.add('popup__feature--' + features[i], 'popup__feature');
    fragmentElement.appendChild(listItem);
  }
  return fragmentElement;
}


// Формирование перечня photos
const createPhotosList = function (photos) {
  const fragmentElement = document.createDocumentFragment();

  for (let j = 0; j < photos.length; j++) {
    const imageItem = document.createElement('img');
    imageItem.classList.add('popup__photo');
    imageItem.setAttribute('src', photos[j]);
    imageItem.setAttribute('width', PHOTO_WIDTH);
    imageItem.setAttribute('height', PHOTO_HEIGHT);
    imageItem.setAttribute('alt', 'Фотография жилья');
    fragmentElement.appendChild(imageItem);
  }
  return fragmentElement;
}



//   Функция, которая принимает в себя одно объявление и заполняет одну карточку
const createCard = function (item) {
  const newCardElement = cardElement.cloneNode(true);

  // title
  if (item.offer.title) {
    newCardElement.querySelector('.popup__title').textContent = item.offer.title;
  } else {
    hideElement('.popup__title');
  }


  // address
  if (item.offer.address) {
    newCardElement.querySelector('.popup__text--address').textContent = item.offer.address;
  } else {
    hideElement('.popup__text--address');
  }


  // price
  if (item.offer.price) {
    newCardElement.querySelector('.popup__text--price').textContent = item.offer.price + ' ₽/ночь';
  } else {
    hideElement('.popup__text--price');
  }


  // type
  if (item.offer.type) {
    newCardElement.querySelector('.popup__type').textContent = offerTypesMap[item.offer.type];
  } else {
    hideElement('.popup__type');
  }


  // rooms, guests
  const rooms = item.offer.rooms;
  const guests = item.offer.guests;
  if (item.offer.rooms && item.offer.guests) {
    newCardElement.querySelector('.popup__text--capacity').textContent = rooms + (rooms === 1 ? ' комнатa для ' : ((rooms === 2 || rooms === 3 || rooms === 4) ? ' комнаты для ' : ' комнат для ')) + guests + (guests === 1 ? ' гостя' : ' гостей');
  } else {
    hideElement('.popup__text--capacity');
  }


  // checkin, checkout
  if (item.offer.time) {
    newCardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + item.offer.checkin + ' выезд до ' + item.offer.checkout;
  } else {
    hideElement('.popup__text--time');
  }


  //  features
  const featureListElement = newCardElement.querySelector('.popup__features');
  featureListElement.innerHTML = '';
  if (item.offer.features && item.offer.features.length) {
    featureListElement.appendChild(createFeatureList(item.offer.features));
  } else {
    hideElement('.popup__features');
  }


  //  photos
  const photoListElement = newCardElement.querySelector('.popup__photos');
  photoListElement.innerHTML = '';   // Очищение элемента
  if (item.offer.photos && item.offer.photos.length) {
    photoListElement.appendChild(createPhotosList(item.offer.photos));
  } else {
    hideElement('.popup__photos');
  }


  //  description
  if (item.offer.description) {
    newCardElement.querySelector('.popup__description').textContent = item.offer.description;
  } else {
    hideElement('.popup__description');
  }


  //  avatar
  if (item.offer.avatar) {
    newCardElement.querySelector('.popup__avatar').src = item.author.avatar;
  } else {
    hideElement('.popup__avatar');
  }



  //  Возврат карточки
  return (newCardElement);
}


export { createCard };
