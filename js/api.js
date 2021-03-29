import {
  createErrorMessage,
  showErrorMessage
} from './message.js';


const URL_GET = 'https://22.javascript.pages.academy/keksobooking/data';
const URL_SEND = 'https://22.javascript.pages.academy/keksobooking';



//   Запрос данных с сервера
const getData = (onSuccsess) => {
  fetch(URL_GET)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
    })
    .then((objects) => onSuccsess(objects))
    .catch((error) => {
      createErrorMessage(error + '. Не удалось загрузить данные')
    })
}


//   Отправка данных на сервер
const sendData = (body, onSuccess) => {
  fetch(URL_SEND,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
    })

    .catch(() => {
      showErrorMessage()
    });
};


export { getData, sendData };
