const createMessage = () => {
  const main = document.querySelector('main');
  const template = document.querySelector('#success')
    .content;

  const message = template.cloneNode(true);
  main.body.appendChild(message);
}


const createErrorMessage = (message) => {
  const popup = document.createElement('div');

  popup.textContent = message;
  popup.classList.add('error__getdata');

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 5000)
};


export { createMessage, createErrorMessage };






