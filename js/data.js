import {getRandomIntInclusive} from './util.js';
import {getRandomArrayElement} from './util.js';
import {getListElements} from './util.js';

const DESCRIPTION_COUNT = 25;
const DESRIPTIONS = ['Красивая фотография', 'Не очень получилось', 'Можно было и получше сделать', 'Очень хороший кадр', 'Вау, вот это красота'];
const ID_ARRAY = getListElements(25);

const createPhotoDescription = () => ({
  id: getRandomArrayElement(ID_ARRAY),
  url: `photos/${getRandomArrayElement(ID_ARRAY)}.jpg`,
  description: getRandomArrayElement(DESRIPTIONS),
  likes: getRandomIntInclusive(15, 200),
  comments: getRandomIntInclusive(0, 200)
});

const createPhotoDescriptions = ()=> Array.from({
  length: DESCRIPTION_COUNT
}, createPhotoDescription);

export {createPhotoDescriptions};
