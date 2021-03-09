// Форма объявления



const formTitle = document.querySelector('#title');
const formPrice = document.querySelector('#price');
const formTypeSelect = document.querySelector('#type');
const formTimeIn = document.querySelector('#timein');
const formTimeOut = document.querySelector('#timeout');
const formAvatar = document.querySelector('#avatar');
const formFotoPlace = document.querySelector('#images');
const formGuestNumber = document.querySelector('#capacity');



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



//   обязательность заполнения полей "Заголовок объявления", "Цена за ночь, руб."
formTitle.setAttribute('required', '');
formPrice.setAttribute('required', '');


//   установление границ значений: "Заголовок объявления" - min, max; "Цена за ночь, руб." - max
formTitle.setAttribute('minlength', 30);
formTitle.setAttribute('maxlength', 100);
formPrice.setAttribute('max', 1000000);


//   изменение type для поля "Ваша фотография (для карты)", "Фотография жилья"
formAvatar.setAttribute('type', 'image');
formFotoPlace.setAttribute('type', 'image');


//   поправка selected в соответствии с ТЗ
formTypeSelect.options[1].removeAttribute('selected');
formTypeSelect.options[2].setAttribute('selected', '');


formGuestNumber.options[0].removeAttribute('selected');
formGuestNumber.options[2].setAttribute('selected', '');



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
