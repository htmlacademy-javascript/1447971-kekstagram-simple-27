//import {createPhotoDescriptions} from './data.js';
import './thumbnails.js';
import './form.js';
import './scale-img.js';
import './effect-img.js';
import {createPictures} from './thumbnails.js';

//createPhotoDescriptions();

// const createLoader = (onSuccess, onError) => () => fetch(
//   'https://27.javascript.pages.academy/kekstagram-simple/data',
//   {
//     method: 'GET',
//     credentials: 'same-origin',
//   },
// )
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }

//     throw new Error(`${response.status} ${response.statusText}`);
//   })
//   .then((data) => {
//     onSuccess(data);
//   })
//   .catch((err) => {
//     onError(err);
//   });

// const loadAnimals = createLoader(console.log, console.error);

// loadAnimals();

fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => response.json())
  .then((pictures) => {
    createPictures(pictures);
  });
