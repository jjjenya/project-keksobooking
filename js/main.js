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
const getRandomLocation = function (min = 0, max = 0, numberAfterComma) {
  let resultRandom = getRandomNumber(min, max);
  return resultRandom ? resultRandom.toFixed(numberAfterComma) : '0';
}



//  Генерация случайного элемента массива
const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
}


// //   Генерация случайного индекса массива
// const getRandomIndexElement = (elements) => {
//   return getRandomInteger(0, elements.length - 1);
// }



//  Массив случайной длины
const getArrayRandomLength = function (elements) {
  const data = [];
  for (let i = 0; i <= getRandomInteger(0, elements.length - 1); i++) {
    let value = getRandomArrayElement(elements);
    data.push(value);
  }
  return new Set(data);
}



//   Генерация координат объекта
//   ВАРИАНТ # 1
// const Locations = {
//   x: getRandomLocation(Location.x.min, Location.x.max, 5),
//   y: getRandomLocation(Location.y.min, Location.y.max, 5),
// }



//   Генерация координат объекта (функция)
//   ВАРИАНТ # 2
const getRandomСoordinates = function (x, y) {
  x = Number(getRandomLocation(Location.x.min, Location.x.max, 5));
  y = Number(getRandomLocation(Location.y.min, Location.y.max, 5));

  const Locations = {
    x: x,
    y: y,
  };

  return (Locations);
}





//   Генерация объекта с объявлением
const getАdvertising = () => {
  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomInteger(1, 8) + '.png',
    },
    offer: {
      title: getRandomInteger(TITLE), // — заголовок предложения. Придумайте самостоятельно.
      // address: Object.keys(getRandomСoordinates())[0] + ', ' +  Object.keys(getRandomСoordinates())[1], //Locations.x + ', ' + Locations.y, // — адрес предложения, составляется из координат по маске {{location.x}}, {{location.y}}.
      // address: Object.keys(getRandomСoordinates())[0] + ', ' +  Object.keys(getRandomСoordinates())[1], //Locations.x + ', ' + Locations.y, // — адрес предложения, составляется из координат по маске {{location.x}}, {{location.y}}.
      address: getRandomLocation(Location.x.min, Location.x.max, 5)  + ', ' + getRandomLocation(Location.y.min, Location.y.max, 5),

      price: getRandomNumber(Price.min, Price.max), // — стоимость. Любое положительное число.
      type: getRandomArrayElement(TYPE), // — одно из четырёх фиксированных значений: palace, flat, house или bungalow
      rooms: getRandomInteger(Rooms.min, Rooms.max),  // — количество комнат. Любое положительное число
      guests: getRandomInteger(Guests.min, Guests.max),   // — количество гостей. Любое положительное число
      checkin: getRandomArrayElement(TIMES),   // — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00
      checkout: getRandomArrayElement(TIMES),   // — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00
      features: getArrayRandomLength(FEATURES),
      description: 'Описание', // — описание помещения. Придумайте самостоятельно
      photos: getArrayRandomLength(PHOTOS),
    },
    location: getRandomСoordinates(),
  };
};

getАdvertising()
