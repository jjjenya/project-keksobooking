// ******************* ЗАДАНИЕ № 1 *******************************************************
const MIN=10;
const MAX=20;

const getRandom = function (MIN = Math.ceil(MIN), MAX = Math.floor(MAX)) {
  if (MAX <= MIN) {
    throw new Error('Ошибка ввода');
  } else {
    return Math.floor(MIN + Math.random() * (MAX + 1 - MIN));
  }
}

alert('целое число из диапазона от ' + MIN + ' до ' + MAX + ': ' + getRandom(MIN,MAX) );



// ******************* ЗАДАНИЕ № 2 *******************************************************

const MIN_II = 10;
const MAX_II = 20;
const NUMBER_AFTER_COMMA = 5;

const getRandomMap = function (MIN_II, MAX_II, NUMBER_AFTER_COMMA) {
  if ((MIN_II >= 0) && (MAX_II > MIN_II) && (Number.isInteger(NUMBER_AFTER_COMMA))) {
    return Math.floor((Math.random() * (MAX_II - MIN_II) + MIN_II) * Math.pow(10,NUMBER_AFTER_COMMA)) / Math.pow(10,NUMBER_AFTER_COMMA);
  } else {
    throw new Error('Ошибка ввода');
  }
}

alert('число с плавающей точкой из диапазона от ' + MIN_II + ' до ' + MAX_II + ' с указанным количеством знаков после запятой (' + NUMBER_AFTER_COMMA + '): ' + getRandomMap(MIN_II, MAX_II, NUMBER_AFTER_COMMA));
