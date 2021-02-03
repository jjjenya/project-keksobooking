// рандомное число

const getRandomNumber = function (min = 0, max = 0) {
  if (max <= min) {
    throw new Error('Ошибка ввода: ' + 'min=' + min + ', max=' + max + '.');
  }
  return min + Math.random() * (max + 1 - min);
}


// рандомное число целое

const getRandomInteger = function (min = 0, max = 0) {
  return Math.floor(getRandomNumber(min, max));
}



// рандомное число с плавающей точкой

const getRandomMap = function (min = 0, max = 0, numberAfterComma) {
  let resultRandom = getRandomNumber(min, max);
  return resultRandom ? resultRandom.toFixed(numberAfterComma) : '0' ;
}

getRandomNumber(1, 4);
getRandomInteger(1.1, 9.8);
getRandomMap(1.5, 7.89754, 9)
