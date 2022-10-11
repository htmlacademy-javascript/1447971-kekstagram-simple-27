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
