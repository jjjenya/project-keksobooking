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


//   Функция, которая принимает в себя одно объявление и заполняет одну карточку
const createCard = function (add) {
  const newCardElement = cardElement.cloneNode(true);


  // Создание карточки объявления
  const cardFragment = document.createDocumentFragment();


  // title
  // проверка заполняемости данных и скрытие блока в карточке при их отсутствии
  const titleElement = cardElement.querySelector('.popup__title');
  if (add.offer.title.length === 0) {
    titleElement.remove();
  } else {
    newCardElement.querySelector('.popup__title').textContent = add.offer.title;
  }


  newCardElement.querySelector('.popup__text--address').textContent = add.offer.address;
  newCardElement.querySelector('.popup__text--price').textContent = add.offer.price + ' ₽/ночь';
  newCardElement.querySelector('.popup__type').textContent = offerTypesMap[add.offer.type];
  newCardElement.querySelector('.popup__text--capacity').textContent = add.offer.rooms + ' комнаты для ' + add.offer.guests + ' гостей';
  newCardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + add.offer.checkin + ' выезд до ' + add.offer.checkout;


  //  feature
  const featureListElement = newCardElement.querySelector('.popup__features');
  featureListElement.innerHTML = '';   // Очищаем элемент

  const createFeatures = function (add) {
    const fragmentFeature = document.createFragment(add);

    for (let i = 0; i < add.offer.features.length; i++) {
      const featureElement = document.createElement(add.offer.features[i]);
      fragmentFeature.appendChild(featureElement);
    }
    return fragmentFeature;
  }

  featureListElement.appendChild(createFeatures);


  //  photo
  const photoListElement = cardElement.querySelector('.popup__photos');
  featureListElement.innerHTML = '';   // Очищаем элемент

  const createPhotos = function (add) {
    const fragmentPhoto = document.createFragment(add);

    for (let i = 0; i < add.offer.features.length; i++) {
      const featureElement = document.createElement(add.offer.photos[i]);
      fragmentPhoto.appendChild(featureElement);
    }
    return fragmentPhoto;
  }

  photoListElement.appendChild(createPhotos);


  /*
      featureList.innerHTML = '';
      for (var i = 0; i < ad.offer.features.length; i++) {
        var featureElement = '<li class="feature feature--' + ad.offer.features[i] + '"></li>';
        featureList.insertAdjacentHTML('afterbegin', featureElement);
      }
  */


  //  description
  newCardElement.querySelector('.popup__description').textContent = add.offer.description;


  //  avatar
  newCardElement.querySelector('.popup__avatar').src = add.author.avatar;



  //  Заполнение карточки данными
  cardFragment.appendChild(newCardElement);

  //  Возврат карточки
  return (newCardElement);
}

// Вставка сформированной карточки
mapCanvas.appendChild(createCard);
