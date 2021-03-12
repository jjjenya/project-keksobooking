// Форма объявления



const formPrice = document.querySelector('#price');
const formTypeSelect = document.querySelector('#type');
const formTimeIn = document.querySelector('#timein');
const formTimeOut = document.querySelector('#timeout');

const formTitle = document.querySelector('#title');
const formGuestNumber = document.querySelector('#capacity');
const formRoomNumber = document.querySelector('#room_number');

const minTitleLength = formTitle.getAttribute('minlength');
const maxTitleLength = formTitle.getAttribute('maxlength');

const maxPrice = formPrice.getAttribute('max');

const formAdForm = document.querySelector('.ad-form');
const formAdFormElements = formAdForm.querySelectorAll('fieldset');
const formMapFilters = document.querySelector('.map__filters');
const formMapFiltersElements = formMapFilters.querySelectorAll('.map__filter');


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
const GUEST_ROOM = {
  [ROOM.one]: [1],
  [ROOM.two]: [2, 1],
  [ROOM.three]: [3, 2, 1],
  [ROOM.hundred]: [0],
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




//   Изменение поля "Количество мест" при изменении поля "Количество комнат"

const clone = formGuestNumber.cloneNode(true);   // Клонирование динамического списка
const clonedGuestOptions = clone.getElementsByTagName('option');   //   Определение живой коллекции элементов


//   Функция для пересборки динамического списка
const rebuildDynamicSelectOptions = (select1, select2, clonedOptions) => {

  const selectedOption = select1.options[select1.selectedIndex].value;
  const source = GUEST_ROOM[selectedOption];

  // Удаление всех элементов динамического списка
  while (select2.options.length) {
    select2.remove(0);
  }

  // Перебор клонированных элементов списка
  for (let i = 0; i < clonedOptions.length; i++) {
    const option = clonedOptions[i];

    for (let j = 0; j < source.length; j++) {
      if (source[j] == option.value) {
        select2.appendChild(option.cloneNode(true));   // клонирование в динамически создаваемый список
      }
    }
  }

  // Событие change выбранного select
  const incident = document.createEvent('HTMLEvents');
  incident.event('change', { 'bubbles': true, 'cancelable': false });
  select2.dispatchEvent(incident);
};


//   Изменение комплектации поля "Количество мест" при изменении поля "Количество комнат"
formRoomNumber.addEventListener('change', () => {
  rebuildDynamicSelectOptions(formRoomNumber, formGuestNumber, clonedGuestOptions);
});



//   Валидация поля "Заголовок объявления"
formTitle.addEventListener('input', () => {
  const valueLength = formTitle.value.length;

  if (valueLength < minTitleLength) {
    formTitle.setCustomValidity('Минимальная длина - ' + minTitleLength + ' симв.: осталось ещё ' + (minTitleLength - valueLength));
  } else if (valueLength > maxTitleLength) {
    formTitle.setCustomValidity('Удалите лишние ' + (valueLength - maxTitleLength) + ' симв.');
  } else {
    formTitle.setCustomValidity('');
  }

  formTitle.reportValidity();
});


//   Валидация поля "Цена за ночь, руб."
formPrice.addEventListener('change', () => {
  const valuePrice = formPrice.value;

  if (valuePrice < (placeTypePrice[formTypeSelect.value].PRICE_MIN)) {
    formPrice.setCustomValidity('Минимальная цена ночь - ' + placeTypePrice[formTypeSelect.value].PRICE_MIN + ': увеличьте вводимую цену');
  } else if (valuePrice > maxPrice) {
    formPrice.setCustomValidity('Максимальная цена ночь - ' + maxPrice + ': уменьшите вводимую цену');
  } else {
    formPrice.setCustomValidity('');
  }

  formPrice.reportValidity();
});



//    Функция деактивации формы

const setFormInactive =() => {
  formAdForm.classList.add('ad-form--disabled');
  formAdFormElements.forEach((elem) => {
    elem.setAttribute('disabled','disabled');
  });
  formMapFilters.classList.add('map__filters--disabled');
  formMapFiltersElements.forEach((elem) => {
    elem.setAttribute('disabled','disabled');
  });
}


//    Функция активации формы
const setFormActive =() => {
  formAdForm.classList.remove('ad-form--disabled');
  formAdFormElements.forEach((elem) => {
    elem.removeAttribute('disabled','disabled');
  });
  formMapFilters.classList.remove('map__filters--disabled');
  formMapFiltersElements.forEach((elem) => {
    elem.removeAttribute('disabled','disabled');
  });
}

export { setFormInactive, setFormActive };
