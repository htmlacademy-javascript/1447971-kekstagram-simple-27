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

//Уникальное число

function createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomIntInclusive(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomIntInclusive(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const isEscapeKey = (evt) => evt.key === 'Escape';

//Показ ошибки

const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {
  getRandomIntInclusive,
  getLength,
  isEscapeKey,
  createRandomIdFromRangeGenerator,
  showAlert
};
