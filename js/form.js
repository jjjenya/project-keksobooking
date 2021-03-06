// Форма объявления


//   Сопоставление типов жилья и минимальной стоимости
const formTypesPrice = {
  'bungalow': 0,
  'flat': 1000,
  'house': 5000,
  'palace': 10000,
}

const formTypeSelect = document.querySelector('#type');
const formPrice = document.querySelector('#price');

// обязательность заполнения поля
formPrice.setAttribute('required', '');


//   Изменение значения placeholder поля "Цена за ночь" при изменении поля "Тип жилья"
formTypeSelect.addEventListener('change', function () {
  formPrice.setAttribute('placeholder', 0);
  switch (this.value) {
    case 'palace':
      formPrice.placeholder = formTypesPrice.palace;
      formPrice.min = formTypesPrice.palace;
      break;

    case 'flat':
      formPrice.placeholder = formTypesPrice.flat;
      formPrice.min = formTypesPrice.flat;
      break;

    case 'house':
      formPrice.placeholder = formTypesPrice.house;
      formPrice.min = formTypesPrice.house;
      break;

    case 'bungalow':
      formPrice.placeholder = formTypesPrice.bungalow;
      formPrice.min = formTypesPrice.bungalow;
      break;
  }
});


// если данные ввода в поле "Цена за ночь" некорректы

formPrice.addEventListener('change', function () {

  formPrice.onblur = function () {
    if ((formTypeSelect.value === 'flat') && (this.value < formTypesPrice.flat)) {
      alert('Минимальное значение -' + formTypesPrice.flat);    // информирование об ошибке
      formPrice.focus();    // возврат фокуса обратно
    } else {
      if ((formTypeSelect.value === 'bungalow') && (this.value < formTypesPrice.bungalow)) {
        alert('Минимальное значение - ' + formTypesPrice.bungalow), formTypesPrice.bungalow;
        formPrice.focus();    // возврат фокуса обратно
      } else {
        formPrice.value;
      }
    }
  }
});




// Изменение взаимозависимых полей "Время заезда и выезда"
const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');

timein.addEventListener('change', function () {
  timeout.value = timein.value;
});
timeout.addEventListener('change', function () {
  timein.value = timeout.value;
});
