// import {createPhotoDescriptions} from './data.js';

// const BLOG_PICTURE = document.querySelector('.pictures');

// const TEMPLATE_PICTURE = document.querySelector('#picture').content.querySelector('.picture');

// const USER_PICTURES = createPhotoDescriptions();

// const PICTURE_FRAGMENT = document.createDocumentFragment();

// USER_PICTURES.forEach(({url, likes, comments}) => {
//   const PICTURE_ELEMENT = TEMPLATE_PICTURE.cloneNode(true);
//   PICTURE_ELEMENT.querySelector('.picture__img').src = url;
//   PICTURE_ELEMENT.querySelector('.picture__likes').textContent = likes;
//   PICTURE_ELEMENT.querySelector('.picture__comments').textContent = comments.length;
//   PICTURE_FRAGMENT.appendChild(PICTURE_ELEMENT);
// });

// BLOG_PICTURE.appendChild(PICTURE_FRAGMENT);


////////////////////////////////////////////////////////////НОВОЕ НИЖЕ

//import {createPhotoDescriptions} from './data.js';

const pictureList = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

//const USER_PICTURES = createPhotoDescriptions();

const pictureFragment = document.createDocumentFragment();

const createPictures = (pictures) => {
  pictures.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureFragment.appendChild(pictureElement);
  });

  pictureList.appendChild(pictureFragment);
};

export {createPictures};
