
// Форма объявления

const formPrice = document.querySelector('#price');
const formTypeSelect = document.querySelector('#type');
const formTimeIn = document.querySelector('#timein');
const formTimeOut = document.querySelector('#timeout');

const formTitle = document.querySelector('#title');
const formGuestSelect = document.querySelector('#capacity');
const formRoomsSelect = document.querySelector('#room_number');

const formAdForm = document.querySelector('.ad-form');
const formAdFormElements = formAdForm.querySelectorAll('fieldset');

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const MAX_PRICE = 1000000;




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

//   Перечисление типов комнат
const ROOM = {
  one: 1,
  two: 2,
  three: 3,
  hundred: 100,
};


//   Типы комнат с вариантами количества мест
const ROOM_GUEST = {
  [ROOM.one]: 'для 1 гостя',
  [ROOM.two]: 'для 1-2 гостей',
  [ROOM.three]: 'для 1-3 гостей',
  [ROOM.hundred]: 'не для гостей',
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


// // Поле "Заголовок объявления"
//   обработчик
const onFormTitle = (evt) => {
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
formTitle.addEventListener('input', onFormTitle);



// // Поле "Цена за ночь, руб."
//   обработчик
const onFormPrice = (evt) => {
  const valuePrice = evt.currentTarget.value;

  if (valuePrice < (placeTypePrice[formTypeSelect.value].PRICE_MIN)) {
    formPrice.setCustomValidity('Минимальная цена ночь - ' + placeTypePrice[formTypeSelect.value].PRICE_MIN + ': увеличьте вводимую цену');
  } else if (valuePrice > MAX_PRICE) {
    formPrice.setCustomValidity('Максимальная цена ночь - ' + MAX_PRICE + ': уменьшите вводимую цену');
  } else {
    formPrice.setCustomValidity('');
  }

  formPrice.reportValidity();
}

//   слушатель
formPrice.addEventListener('change', onFormPrice);



// // Поле "Количество комнат"
const onRoomsGuests = (evt) => {
  const valueRooms = Number(evt.currentTarget.value);

  if (valueRooms === ROOM.one) {
    formGuestSelect.setCustomValidity(ROOM_GUEST[ROOM.one]);
  } else if (valueRooms === ROOM.two) {
    formGuestSelect.setCustomValidity(ROOM_GUEST[ROOM.two]);
  } else if (valueRooms === ROOM.three) {
    formGuestSelect.setCustomValidity(ROOM_GUEST[ROOM.three]);
  } else if (valueRooms === ROOM.hundred) {
    formGuestSelect.setCustomValidity(ROOM_GUEST[ROOM.hundred]);
  } else {
    formGuestSelect.setCustomValidity('');
  }

  formGuestSelect.reportValidity();
}

//   слушатель
formRoomsSelect.addEventListener('change', onRoomsGuests);



// // Поле "Количество мест"
const onGuestsRooms = (evt) => {
  const valueGuests = Number(evt.currentTarget.value);

  if (valueGuests === 0) {
    formRoomsSelect.setCustomValidity(ROOM.hundred + ' комнат');
  } else if (valueGuests === 1) {
    formRoomsSelect.setCustomValidity(ROOM.one + ' комната');
  } else if (valueGuests === 2) {
    formRoomsSelect.setCustomValidity(ROOM.one + ' комната, ' + ROOM.two + ' комнаты');
  } else if (valueGuests === 3) {
    formRoomsSelect.setCustomValidity(ROOM.one + ' комната, ' + ROOM.two + ' комнаты, ' + ROOM.three +' комнаты');
  } else {
    formRoomsSelect.setCustomValidity('');
  }

  formRoomsSelect.reportValidity();
}

//   слушатель
formGuestSelect.addEventListener('change', onGuestsRooms);


// // **********   ВАРИАНТ 2 (по полям "Количество комнат", "Количество мест") ********************
// const onGuestsRooms = (evt) => {
//   const roomsValue = Number(evt.currentTarget.value);
//   const guestsValue = Number(evt.currentTarget.value);

//   if (roomsValue === 1 && guestsValue !== 1) {
//     formGuestSelect.setCustomValidity('для 1 гостя');
//   } else if (roomsValue === 2 && (guestsValue === 3 || guestsValue === 0)) {
//     formGuestSelect.setCustomValidity('для 1-2 гостей');
//   } else if (roomsValue === 3 && guestsValue === 0) {
//     formGuestSelect.setCustomValidity('для 1-3 гостей');
//   } else if (roomsValue === 100 && guestsValue !== 0) {
//     formGuestSelect.setCustomValidity('не для гостей');
//   } else {
//     formGuestSelect.setCustomValidity('');
//   }

//   formGuestSelect.reportValidity();
// };

// //   слушатель
// formRoomsSelect.addEventListener('change', onGuestsRooms);
// formGuestSelect.addEventListener('change', onGuestsRooms);




//   Активное состояние Формы
const setFormActive = () => {
  formAdForm.classList.add('ad-form--disabled');
  formAdFormElements.forEach((elem) => {
    elem.disabled = false;
  });
}


//   Неактивное состояние Формы
const setFormDeactive = () => {
  formAdForm.classList.remove('ad-form--disabled');
  formAdFormElements.forEach((elem) => {
    elem.disabled = true;
  });
}



export { setFormActive, setFormDeactive };
