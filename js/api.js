import {showAlert} from './util.js';
import {showSuccessModal} from './success-upload.js';
import {showErrorModal} from './error-upload.js';

const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
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
    'https://27.javascript.pages.academy/kekstagram-simple', {
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
