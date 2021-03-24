import { showSuccessMessage, showErrorMessage } from './message.js';
import { formMapFilters } from './filtr.js';
import { formAdForm, formButtonReset } from './form.js';
import { sendData } from './api.js';



import {
  deleteMarkers,
  markers,
  setDefaultMainMarker,
  setFormAddressFieldDefault
} from './map.js';



//    Очистка страницы при нажатии кнопки "Очистить"
formButtonReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  formAdForm.reset();
  formMapFilters.reset();
  setDefaultMainMarker();
  setFormAddressFieldDefault();
  deleteMarkers(markers);
});


//   При успешной отправке формы
const sendSuccessForm = () => {
  showSuccessMessage();
  // onClearPage();
}


//   Отправка формы
// обработчик
const onFormSubmit = (evt) => {
  evt.preventDefault();

  sendData(
    new FormData(evt.target),
    sendSuccessForm(),
    showErrorMessage(),
  );
}


// слушатель
formAdForm.addEventListener('submit', (evt) => onFormSubmit(evt))
