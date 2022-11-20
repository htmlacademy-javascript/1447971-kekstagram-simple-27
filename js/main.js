import './thumbnails.js';
import './form.js';
import './scale-img.js';
import './effect-img.js';
import {
  createPictures
} from './thumbnails.js';
import {
  setFormSubmit,
  closeUploadFile
} from './form.js';
import {
  getData
} from './api.js';

getData((pictures) => {
  createPictures(pictures);
});

setFormSubmit(closeUploadFile);
