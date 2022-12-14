import {
  showAlert
} from './util.js';

const DATA_SERVER_TO_GET = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const DATA_SERVER_TO_SEND = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = (onSuccess) => {
  fetch(DATA_SERVER_TO_GET)
    .then((response) => response.json())
    .then((pictures) => {
      onSuccess(pictures);
    })
    .catch(() => {
      showAlert('Не удалось загрузить данные! Попробуйте ещё раз!');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    DATA_SERVER_TO_SEND, {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {
  getData,
  sendData
};
