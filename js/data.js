import { getRandomNumber, getRandomInteger, getRandomLocation, getRandomArrayElement, getArrayRandomLength } from './until.js';


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


const Guests = {
  MIN: 1,
  MAX: 15,
};

const Rooms = {
  MIN: 1,
  MAX: 5,
};

const Price = {
  MIN: 1000,
  MAX: 1000000,
};

const Location = {
  X: {
    MIN: 35.65000,
    MAX: 35.70000,
  },

  Y: {
    MIN: 139.70000,
    MAX: 139.80000,
  },
}

const NUMBER_AFTER_COMMA = 5;



//   Генерация координат объекта (функция)
const getRandomСoordinates = function (x, y) {
  x = Number(getRandomLocation(Location.X.MIN, Location.X.MAX, NUMBER_AFTER_COMMA));
  y = Number(getRandomLocation(Location.X.MIN, Location.Y.MAX, NUMBER_AFTER_COMMA));

  const locations = {
    X: x,
    Y: y,
  };

  return (locations);
}


//   Генерация объекта с объявлением
const getАdvertising = () => {
  const location = getRandomСoordinates();

  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomInteger(1, 8) + '.png',
    },
    offer: {
      title: getRandomArrayElement(TITLE),
      address: location.X + ', ' + location.Y,
      price: getRandomNumber(Price.MIN, Price.MAX),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomInteger(Rooms.MIN, Rooms.MAX),
      guests: getRandomInteger(Guests.MIN, Guests.MAX),
      checkin: getRandomArrayElement(TIMES),
      checkout: getRandomArrayElement(TIMES),
      features: getArrayRandomLength(FEATURES),
      description: 'Описание',
      photos: getArrayRandomLength(PHOTOS),
    },
    location: location,
  };
};


const createArrayАdvertising = function () {
  const NUMBER_АDVERTISING = 1;
  const array = [];
  for (let i = 0; i < NUMBER_АDVERTISING; i++) {
    array[i] = getАdvertising();
  }
  return (array);
}

export { createArrayАdvertising, TYPE };
