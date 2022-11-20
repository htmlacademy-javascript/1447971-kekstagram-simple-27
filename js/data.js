import {
  getRandomIntInclusive
} from './util.js';
import {
  createRandomIdFromRangeGenerator
} from './util.js';

const DESCRIPTION_COUNT = 25;

const generatePhotoId = createRandomIdFromRangeGenerator(1, DESCRIPTION_COUNT);
const generatePhotoURL = createRandomIdFromRangeGenerator(1, DESCRIPTION_COUNT);
const generatePhoDescription = createRandomIdFromRangeGenerator(1, DESCRIPTION_COUNT);

const createPhotoDescription = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoURL()}.jpg`,
  description: generatePhoDescription(),
  likes: getRandomIntInclusive(15, 200),
  comments: getRandomIntInclusive(0, 200)
});

const createPhotoDescriptions = () => Array.from({
  length: DESCRIPTION_COUNT
}, createPhotoDescription);

export {
  createPhotoDescriptions
};
