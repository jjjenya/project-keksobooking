import { createMessage, createErrorMessage } from './message.js';
import { sendData } from './api.js';

const formAdForm = document.querySelector('.ad-form');


const formSubmit = (onSucces) => {
  formAdForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSucces(createMessage()),
      () => createErrorMessage('Не удалось отправить форму. Попробуйте ещё раз'),
      new FormData(evt.target),
    );
  });
};

const formReset = () => {
  formAdForm.reset();
  // mapReset();
};

formSubmit(formReset);

const buttonReset = document.querySelector('.ad-form__reset');
buttonReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  formAdForm.reset();
});
