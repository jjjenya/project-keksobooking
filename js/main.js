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
  min: 1,
  max: 15,
};

const Rooms = {
  min: 1,
  max: 5,
};

const Price = {
  min: 1000,
  max: 1000000,
};

const Location = {
  x: {
    min: 35.65000,
    max: 35.70000,
  },

  y: {
    min: 139.70000,
    max: 139.80000,
  },
}

const NUMBER_AFTER_COMMA = 5;




//  Генерация случайного числа
const getRandomNumber = function (min = 0, max = 0) {
  if (max <= min) {
    throw new Error('Ошибка ввода: ' + 'min=' + min + ', max=' + max + '.');
  }
  return min + Math.random() * (max + 1 - min);
}

const getRandomInteger = function (min = 0, max = 0) {
  return Math.floor(getRandomNumber(min, max));
}



//   Генерация числа с плавающей точкой
const getRandomLocation = function (min = 0, max = 0, NUMBER_AFTER_COMMA) {
  let resultRandom = getRandomNumber(min, max);
  return resultRandom ? resultRandom.toFixed(NUMBER_AFTER_COMMA) : '0';
}



//  Генерация случайного элемента массива
const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
}




//  Массив случайной длины
const getArrayRandomLength = function (elements) {
  const data = [];
  for (let i = 0; i <= getRandomInteger(0, elements.length - 1); i++) {
    let value = getRandomArrayElement(elements);
    data.push(value);
  }
  return new Set(data);
}



//   Генерация координат объекта (функция)
const getRandomСoordinates = function (x, y) {
  x = Number(getRandomLocation(Location.x.min, Location.x.max, NUMBER_AFTER_COMMA));
  y = Number(getRandomLocation(Location.y.min, Location.y.max, NUMBER_AFTER_COMMA));

  const Locations = {
    x: x,
    y: y,
  };

  return (Locations);
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
      address: location.x + ', ' + location.y,
      price: getRandomNumber(Price.min, Price.max),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomInteger(Rooms.min, Rooms.max),
      guests: getRandomInteger(Guests.min, Guests.max),
      checkin: getRandomArrayElement(TIMES),
      checkout: getRandomArrayElement(TIMES),
      features: getArrayRandomLength(FEATURES),
      description: 'Описание',
      photos: getArrayRandomLength(PHOTOS),
    },
    location: location,
  };
};

getАdvertising();
