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
  let resultRandom = Math.random() * (max - min) + min;
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
  return [...new Set(data)];
}


export { getRandomNumber, getRandomInteger, getRandomLocation, getRandomArrayElement, getArrayRandomLength };
