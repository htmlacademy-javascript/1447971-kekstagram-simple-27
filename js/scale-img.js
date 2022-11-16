const smallScaleButton = document.querySelector('.scale__control--smaller');
const bigScaleButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

const MIN_SCALE = 25;
const MAX_SCALE = 100;
const STEP_SCALE = 25;
const DEFAULT_SCALE = 100;

const scalePhoto = (value = DEFAULT_SCALE) => {
  imagePreview.style.transform = `scale(${value / 100})`;
  scaleValue.value = `${value}%`;
};

const onSmallScaleButtonClick = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let smallerValue = currentValue - STEP_SCALE;
  if (smallerValue < MIN_SCALE) {
    smallerValue = MIN_SCALE;
  }
  scalePhoto(smallerValue);
};

const onBigScaleButtonClick = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let biggerValue = currentValue + STEP_SCALE;
  if (biggerValue > MAX_SCALE) {
    biggerValue = MAX_SCALE;
  }
  scalePhoto(biggerValue);
};

const resetScale = () => {
  scalePhoto();
};

smallScaleButton.addEventListener('click', onSmallScaleButtonClick);
bigScaleButton.addEventListener('click', onBigScaleButtonClick);

export {resetScale};
