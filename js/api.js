import { createErrorMessage } from './message.js';


const URL_GET = 'https://22.javascript.pages.academy/keksobooking/data';
const URL_SEND = 'https://22.javascript.pages.academy/keksobooking';


const getData = (onSuccsess) => {
  fetch(URL_GET)
    .then((response) => {
      if (response.ok) {
        response.json()
          .then((data) => {
            onSuccsess(data);
          })
      } else {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
    })
    .catch((error) => {
      createErrorMessage(error + '. Не удалось загрузить данные')
    })
}


const sendData = (body, onSuccess, onError) => {
  fetch(URL_SEND,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess;
      } else {
        throw new Error;
      }
    })
    .catch(() => {
      onError;
    });
};


export { getData, sendData };

