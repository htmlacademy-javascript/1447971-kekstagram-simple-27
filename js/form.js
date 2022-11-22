import {
  isEscapeKey
} from './util.js';
import {
  resetScale
} from './scale-img.js';
import {
  resetEffect
} from './effect-img.js';
import {
  sendData
} from './api.js';
import {
  showErrorModal
} from './error-upload.js';

//Загрузка изображения

const form = document.querySelector('.img-upload__form');
const openUploadFileButton = form.querySelector('.img-upload__input');
const closeUploaFiledButton = form.querySelector('.img-upload__cancel');
const imgUploadOverlay = form.querySelector('.img-upload__overlay');
const commentField = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

const isTextFocused = () => document.activeElement === commentField;

const onUploadFilEscKeyDown = (evt) => {
  if (isEscapeKey(evt) && !isTextFocused()) {
    evt.preventDefault();
    closeUploadFile();
    document.removeEventListener('keydown', onUploadFilEscKeyDown);
  }
};

function openUploadFile() {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onUploadFilEscKeyDown);
}

function closeUploadFile() {
  form.reset();
  resetScale();
  resetEffect();
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onUploadFilEscKeyDown);
}

openUploadFileButton.addEventListener('change', () => openUploadFile());

closeUploaFiledButton.addEventListener('click', () => closeUploadFile());

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};

const setFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    blockSubmitButton();

    sendData(
      () => onSuccess(unblockSubmitButton()),
      () => showErrorModal(unblockSubmitButton(), document.removeEventListener('keydown', onUploadFilEscKeyDown)),
      new FormData(evt.target),
    );
  });
};

export {
  setFormSubmit
};

export {
  openUploadFile,
  closeUploadFile
};
