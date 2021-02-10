// Тестовые данные
const TITLE = [
  'Дворец 1',
  'Дворец 2',
  'Квартира 1',
  'Квартира 2',
  'Дом 1',
  'Дом 2',
  'Дом 3',
  'Бунгало 1',
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];


const GUESTS = {
  MIN: 1,
  MAX: 15,
};

const ROOMS = {
  MIN: 1,
  MAX: 5,
};

const PRICE = {
  MIN: 1000,
  MAX: 1000000,
};


//  Генерация случайного числа
const getRandomNumber = function (min = 0, max = 0) {
  if (max <= min) {
    throw new Error('Ошибка ввода: ' + 'min=' + min + ', max=' + max + '.');
  }
  return min + Math.random() * (max + 1 - min);
}

const getRandomInteger = function (min = 0, max = 0) {
  return '0' + Math.floor(getRandomNumber(min, max));
}



//   Генерация числа с плавающей точкой
const getRandomLocation = function (min = 0, max = 0, numberAfterComma) {
  let resultRandom = getRandomNumber(min, max);
  return resultRandom ? resultRandom.toFixed(numberAfterComma) : '0';
}



//  Выбор случайного элемента массива
const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
}



//   Перетасовка массива
const getMixArray = (elements) => {
  return elements.slice().sort(function () {
    return 0.5 - Math.random()
  });
}



//   Географические координаты объекта
const LOCATIONS = {
  'x': getRandomLocation(35.65000, 35.70000),
  'y': getRandomLocation(139.70000, 139.80000),
}



//   Генерация объекта с объявлением
const getАdvertising = () => {
  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomNumber(1, 8) + '.png',
    },
    offer: {
      title: getRandomInteger(TITLE), // — заголовок предложения. Придумайте самостоятельно.
      address: '${location.x}, ${location.y}', // — адрес предложения, составляется из координат по маске {{location.x}}, {{location.y}}.
      price: getRandomNumber(PRICE.min, PRICE.max), // — стоимость. Любое положительное число.
      type: getRandomArrayElement(TYPE), // — одно из четырёх фиксированных значений: palace, flat, house или bungalow
      rooms: getRandomInteger(ROOMS.min, ROOMS.max),  // — количество комнат. Любое положительное число
      guests: getRandomInteger(GUESTS.min, GUESTS.max),   // — количество гостей. Любое положительное число
      checkin: getRandomArrayElement(TIMES),   // — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00
      checkout: getRandomArrayElement(TIMES),   // — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00
      features: getMixArray(FEATURES).slice(0, getRandomInteger(1, FEATURES.length) ), //  — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
      description: 'Описание', // — описание помещения. Придумайте самостоятельно
      photos: getMixArray(PHOTOS).slice(0, getRandomInteger(1, PHOTOS.length) ),  //  — массив случайной длины из значений
    },
    location: getRandomLocation(LOCATIONS),
  }
};

getАdvertising ();
