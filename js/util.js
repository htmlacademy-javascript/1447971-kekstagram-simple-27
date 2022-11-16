const getRandomIntInclusive = (min, max) => {
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
};
getRandomIntInclusive(2, 5);

const getLength = (description, length) => description.length <= length;

getLength('Текстовый комментарий', 140);

const getListElements = (counter) => {
  const newArray = [];
  for (let i = 1; i <= counter; i++) {
    const newElem = i;
    newArray.push(newElem);
  }
  return newArray;
};

//даёт одно значение из массива. НЕ ЗНАЮ, КАК СДЕЛАТЬ, ЧТОБЫ НЕ ПОВТОРЯЛОСЬ ЗНАЧЕНИЕ
const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomIntInclusive};
export {getLength};
export {getListElements};
export {getRandomArrayElement};
export {isEscapeKey};
