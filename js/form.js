// Форма объявления



const formPrice = document.querySelector('#price');
const formTypeSelect = document.querySelector('#type');
const formTimeIn = document.querySelector('#timein');
const formTimeOut = document.querySelector('#timeout');



//   Перечисление типов жилья
const placeTypes = {
  BUNGALOW: 'bungalow',
  FLAT: 'flat',
  HOUSE: 'house',
  PALACE: 'palace',
}


//   Типы жилья с placeholer и min значением
const placeTypePrice = {
  [placeTypes.BUNGALOW]: {
    PLACEHOLDER: '0',
    PRICE_MIN: 0,
  },
  [placeTypes.FLAT]: {
    PLACEHOLDER: '1000',
    PRICE_MIN: 1000,
  },
  [placeTypes.HOUSE]: {
    PLACEHOLDER: '5000',
    PRICE_MIN: 5000,
  },
  [placeTypes.PALACE]: {
    PLACEHOLDER: '10000',
    PRICE_MIN: 10000,
  },
}


//   Изменение значения placeholder поля "Цена за ночь, руб." при изменении поля "Тип жилья"
formTypeSelect.addEventListener('change', () => {
  formPrice.placeholder = placeTypePrice[formTypeSelect.value].PLACEHOLDER;
  formPrice.min = placeTypePrice[formTypeSelect.value].PRICE_MIN;
})

//   Изменение взаимозависимых полей "Время заезда и выезда"
formTimeIn.addEventListener('change', function () {
  formTimeOut.value = formTimeIn.value;
});
formTimeOut.addEventListener('change', function () {
  formTimeIn.value = formTimeOut.value;
});
