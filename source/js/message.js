import { isEscEvent } from  './util.js';


const SHOW_TIME = 10000;


const mainElement = document.querySelector('main')
const successMessageTemplate = document.querySelector('#success').content;
const successMessageElement = successMessageTemplate.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content;
const errorMessageElement = errorMessageTemplate.querySelector('.error');



//   Показ ошибки, если не удалось получить данные с сервера:
const createErrorMessage = (message) => {
  const errorMessageElement = document.querySelector('#server-error').content.querySelector('.server-error').cloneNode(true);
  const errorReasonElement = document.createElement('p');
  errorReasonElement.classList.add('server-error__message')
  errorReasonElement.textContent = message;
  errorMessageElement.appendChild(errorReasonElement);
  document.body.appendChild(errorMessageElement);

  setTimeout(() => {
    errorMessageElement.remove();
  }, SHOW_TIME);
}



/************ отправка формы ***********/

// Закрытие сообщения об успешной отправке
const onSuccessMessageClick = () => {
  successMessageElement.remove();
  document.removeEventListener('keydown', onSuccessMessageKeydown);
  document.removeEventListener('click', onSuccessMessageClick);
}

// Закрытие сообщения об успешной отправке при нажатии Esc
const onSuccessMessageKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    onSuccessMessageClick();
  }
}

// Закрытие сообщения об ошибке отправки формы
const onErrorMessageClick = () => {
  errorMessageElement.remove();
  document.removeEventListener('keydown', onErrorMessageKeydown);
  document.removeEventListener('click', onErrorMessageClick);
}

// Закрытие сообщения об ошибке отправки при нажатии Esc
const onErrorMessageKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    onErrorMessageClick();
  }
}

// Показ сообщения после успешной отправки
const showSuccessMessage = () => {
  mainElement.appendChild(successMessageElement);
  document.addEventListener('keydown', onSuccessMessageKeydown);
  document.addEventListener('click', onSuccessMessageClick);
}

// Показ сообщения об ошибке отправки
const showErrorMessage = () => {
  mainElement.appendChild(errorMessageElement);
  document.addEventListener('keydown', onErrorMessageKeydown);
  document.addEventListener('click', onErrorMessageClick);
}




export { createErrorMessage, showSuccessMessage, showErrorMessage };
