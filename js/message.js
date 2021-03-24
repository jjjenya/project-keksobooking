
const mainElement = document.querySelector('main')
const successMessageTemplate = document.querySelector('#success').content;
const successMessageElement = successMessageTemplate.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content;
const errorMessageElement = errorMessageTemplate.querySelector('.error');


const SHOW_TIME = 10000;


// const isEscEvent = (evt) => {
//   return evt.key === ('Escape' || 'Esc');
// };



const createErrorMessage = (message) => {
  const alertContainer = document.createElement('div');

  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '28px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;
  alertContainer.classList.add('error__getdata');

  document.body.appendChild(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, SHOW_TIME)
};



// Показ сообщения после успешной отправки формы
const showSuccessMessage = () => {
  mainElement.appendChild(successMessageElement);
  // будет закрытие;

}


// Показ сообщения после неудачной отправки формы
const showErrorMessage = () => {
  mainElement.appendChild(errorMessageElement);
  // будет закрытие;

}




export { createErrorMessage, showSuccessMessage, showErrorMessage };


