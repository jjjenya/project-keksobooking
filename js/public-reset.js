import { sendData } from './api.js';
import { formMapFilters } from './filtr.js';
import { formAdForm, formButtonReset } from './form.js';
import { showSuccessMessage } from './message.js';
import { setDefaultImages } from './photo.js';

import {
  deleteMarkers,
  getDataMap,
  markers,
  setDefaultMainMarker,
  setFormAddressFieldDefault
} from './map.js';


//   Очистка страницы
const clearPage = () => {
  formAdForm.reset();
  formMapFilters.reset();
  setDefaultMainMarker();
  setFormAddressFieldDefault();
  deleteMarkers(markers);
  setDefaultImages();
}


//    Очистка страницы при нажатии кнопки "Очистить"
const defaultButtonReset = () => {
  formButtonReset.addEventListener('click', (evt) => {
    evt.preventDefault();
    clearPage();
    getDataMap();
  });
}


//   Действия при успешной отправке формы
const sendSuccessForm = () => {

  showSuccessMessage();
  clearPage();
  getDataMap();
}


//   Отправка формы
// обработчик
const onFormSubmit = (evt) => {
  evt.preventDefault();

  sendData(
    new FormData(evt.target),
    sendSuccessForm,
  );
}

// слушатель
formAdForm.addEventListener('submit', onFormSubmit)


export { clearPage, defaultButtonReset }

