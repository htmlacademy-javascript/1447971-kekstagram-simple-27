//Функцию взяла с сайта https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
  min = Math.ceil(Math.min(min, max));
  max = Math.floor(Math.max(min, max));
  if (typeof min !== 'number' || typeof max !== 'number' || min < 0 || max < 0) {
    return NaN;
  }
  if (min > max) {
    const maxValue = min;
    min = max;
    max = maxValue;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive(2, 5);

//Функция для проверки максимальной длины строки

function getLength(description, length) {
  return description.length <= length;
}

getLength('Текстовый комментарий', 140);


//массив случайной длины из значений, значения не повторяются
function getListElements(counter) {
  const newArray = [];
  for (let i = 1; i <= counter; i++) {
    const newElem = i;
    newArray.push(newElem);
  }
  return newArray;
}


//адрес картинки

function getUrl(array) {
  let url = '';
  const rand = Math.floor(Math.random() * array.length);
  url = `photos/${array[rand]}.jpg`;
  return url;
}

//даёт одно значение из массива. НЕ ЗНАЮ, КАК СДЕЛАТЬ, ЧТОБЫ НЕ ПОВТОРЯЛОСЬ ЗНАЧЕНИЕ
const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

const DESCRIPTION_COUNT = 25;

const ID_ARRAY = getListElements(25);

const createPhotoDescription = () => ({
  id: getRandomArrayElement(ID_ARRAY),
  url: getUrl(ID_ARRAY),
  description: 'Красивая фотография',
  likes: getRandomIntInclusive(15, 200),
  comments: getRandomIntInclusive(0, 200)
});

createPhotoDescription();

//Сохраняла код ниже (Array.from...) в константу PHOTO_DESCRIPTION, но ESlint всё время ругается,
//что она не используется, но если её вывести в консоль, снова начинает ругаться
Array.from({
  length: DESCRIPTION_COUNT
}, createPhotoDescription);
