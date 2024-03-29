// Форма объявления

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const MAX_PRICE = 1000000;


//   Перечисление типов жилья
const PlaceTypes = {
  BUNGALOW: 'bungalow',
  FLAT: 'flat',
  HOUSE: 'house',
  PALACE: 'palace',
}


//   Типы жилья с placeholer и min значением
const PlaceTypePrice = {
  [PlaceTypes.BUNGALOW]: {
    PLACEHOLDER: '0',
    PRICE_MIN: 0,
  },
  [PlaceTypes.FLAT]: {
    PLACEHOLDER: '1000',
    PRICE_MIN: 1000,
  },
  [PlaceTypes.HOUSE]: {
    PLACEHOLDER: '5000',
    PRICE_MIN: 5000,
  },
  [PlaceTypes.PALACE]: {
    PLACEHOLDER: '10000',
    PRICE_MIN: 10000,
  },
}


const formPrice = document.querySelector('#price');
const formTypeSelect = document.querySelector('#type');
const formTimeIn = document.querySelector('#timein');
const formTimeOut = document.querySelector('#timeout');

const formTitle = document.querySelector('#title');
const formGuestSelect = document.querySelector('#capacity');
const formRoomSelect = document.querySelector('#room_number');

const formAdForm = document.querySelector('.ad-form');
const formAdFormElements = formAdForm.querySelectorAll('fieldset');

const formButtonReset = document.querySelector('.ad-form__reset');



//   Изменение значения placeholder поля "Цена за ночь, руб." при изменении поля "Тип жилья"
formTypeSelect.addEventListener('change', () => {
  formPrice.placeholder = PlaceTypePrice[formTypeSelect.value].PLACEHOLDER;
  formPrice.min = PlaceTypePrice[formTypeSelect.value].PRICE_MIN;
})

//   Изменение взаимозависимых полей "Время заезда и выезда"
formTimeIn.addEventListener('change', function () {
  formTimeOut.value = formTimeIn.value;
});
formTimeOut.addEventListener('change', function () {
  formTimeIn.value = formTimeOut.value;
});


// // Поле "Заголовок объявления"
//   обработчик
const onTitleInput  = (evt) => {
  const valueLength = evt.currentTarget.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    formTitle.setCustomValidity('Минимальная длина - ' + MIN_TITLE_LENGTH + ' симв.: осталось ещё ' + (MIN_TITLE_LENGTH - valueLength));
  } else if (valueLength > MAX_TITLE_LENGTH) {
    formTitle.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) + ' симв.');
  } else {
    formTitle.setCustomValidity('');
  }

  formTitle.reportValidity();
};

//   слушатель
formTitle.addEventListener('input', onTitleInput);



// // Поле "Цена за ночь, руб."
//   обработчик
const onPriceInput = (evt) => {
  const valuePrice = evt.currentTarget.value;

  if (valuePrice < (PlaceTypePrice[formTypeSelect.value].PRICE_MIN)) {
    formPrice.setCustomValidity('Минимальная цена ночь - ' + PlaceTypePrice[formTypeSelect.value].PRICE_MIN + ': увеличьте вводимую цену');
  } else if (valuePrice > MAX_PRICE) {
    formPrice.setCustomValidity('Максимальная цена ночь - ' + MAX_PRICE + ': уменьшите вводимую цену');
  } else {
    formPrice.setCustomValidity('');
  }

  formPrice.reportValidity();
}

//   слушатель
formPrice.addEventListener('change', onPriceInput);



// // Поле "Количество комнат", Поле "Количество мест"
const onCapacityInput = () => {
  const valueRooms = Number(formRoomSelect.value);
  const valueGuests = Number(formGuestSelect.value);

  if (valueRooms === 1 && valueGuests !== 1) {
    formGuestSelect.setCustomValidity('1 комната - для 1 гостя');
  } else if (valueRooms === 2 && (valueGuests === 3 || valueGuests === 0)) {
    formGuestSelect.setCustomValidity('2 комнаты - для 1-2 гостей');
  } else if (valueRooms === 3 && valueGuests === 0) {
    formGuestSelect.setCustomValidity('3 комнаты - для 1-3 гостей');
  } else if (valueRooms === 100 && valueGuests !== 0) {
    formGuestSelect.setCustomValidity('100 комнат - не для гостей');
  } else {
    formGuestSelect.setCustomValidity('');
  }

  formGuestSelect.reportValidity();
};

const changeRoomsSelect = () => onCapacityInput();
const changeGuestsSelect = () => onCapacityInput();
formRoomSelect.addEventListener('change', changeRoomsSelect);
formGuestSelect.addEventListener('change', changeGuestsSelect);



//   Активное состояние Формы
const setFormActive = () => {
  formAdForm.classList.remove('ad-form--disabled');
  formAdFormElements.forEach((elem) => {
    elem.removeAttribute('disabled');
  });
}


//   Неактивное состояние Формы
const setFormDeactive = () => {
  formAdForm.classList.add('ad-form--disabled');
  formAdFormElements.forEach((elem) => {
    elem.setAttribute('disabled', true);
  });
}



export { setFormActive, setFormDeactive, formButtonReset, formAdForm };
