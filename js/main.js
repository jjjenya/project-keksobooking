// рандомное число

const getRandomNumber = function (min = 0, max = 0) {
  if (max <= min) {
    throw new Error('Ошибка ввода: ' + 'min=' + min + ', max=' + max + '.');
  }
  return min + Math.random() * (max + 1 - min);
}

alert(getRandomNumber(1, 4));


// рандомное число целое

const getRandomInteger = function (min = 0, max = 0) {
  let resultInteger = Math.floor(getRandomNumber(min, max));
  return resultInteger;
}

alert(getRandomInteger(1.1, 9.8));


// рандомное число с плавающей точкой

const getRandomMap = function (min = 0, max = 0, numberAfterComma) {
  let resultRandom = getRandomNumber(min, max);
  if (resultRandom != null) {
    // if ((Object.keys(resultRandom).length !== 0) && (max>=min)) {
    if ((min >= 0) && (max >= min)) {
      let resultMap = resultRandom.toFixed(numberAfterComma);
      return resultMap;
    }
    throw new Error('Ошибка ввода: ' + 'min=' + min + ', max=' + max + ' numberAfterComma=' + numberAfterComma + '.');
  }
  throw new Error('Ошибка значения resultRandom: ' + resultRandom + ' - пустое значение.');
}

alert(getRandomMap(1.5, 7.89754, 9.5));
