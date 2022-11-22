import {
  showAlert
} from './util.js';
import {
  showSuccessModal
} from './success-upload.js';
import {
  showErrorModal
} from './error-upload.js';

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
        showSuccessModal();
      } else {
        onFail(showErrorModal());
      }
    })
    .catch(() => {
      onFail(showErrorModal());
    });
};

export {
  getData,
  sendData
};
