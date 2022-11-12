import {isEscapeKey} from './util.js';

//Загрузка изображения

const form = document.querySelector('.img-upload__form');
const openUploadFileButton = form.querySelector('.img-upload__input');
const closeUploaFiledButton = form.querySelector('.img-upload__cancel');
const imgUploadOverlay = form.querySelector('.img-upload__overlay');

const onUploadFilEscKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
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
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onUploadFilEscKeyDown);
}

openUploadFileButton.addEventListener('change', () => openUploadFile());

closeUploaFiledButton.addEventListener('click', () => closeUploadFile());
