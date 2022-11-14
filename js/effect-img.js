const imagePreview = document.querySelector('.img-upload__preview img');
const form = document.querySelector('.img-upload__form');
const sliderEffect = document.querySelector('.effect-level__slider');
const sliderEffectValue = document.querySelector('.effect-level__value');

const sliderContainer = document.querySelector('.img-upload__effect-level');


const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  }
];

const EFFECT_DAFAULT = EFFECTS[0];
let chosenEffect = EFFECT_DAFAULT;

const isDefault = () => chosenEffect === EFFECT_DAFAULT;

const updateSlider = () => {
  sliderEffect.classList.remove('hidden');
  sliderContainer.style.display = 'block';
  sliderEffect.noUiSlider.updateOptions ({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max
    },
    step: chosenEffect.step,
    start: chosenEffect.max
  });
  if (isDefault()) {
    sliderEffect.classList.add('hidden');
    sliderContainer.style.display = 'none';
  }
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

const onSliderUpdate = () => {
  imagePreview.style.filter = 'none';
  imagePreview.className = '';
  sliderEffectValue.value = '';
  if (isDefault()) {
    return;
  }
  const sliderValue = sliderEffect.noUiSlider.get();
  imagePreview.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  imagePreview.classList.add(`effects__preview--${chosenEffect.name}`);
  sliderEffectValue.value = sliderValue;
};

const resetEffect = () => {
  chosenEffect = EFFECT_DAFAULT;
  updateSlider();
};

noUiSlider.create(sliderEffect, {
  range: {
    min: EFFECT_DAFAULT.min,
    max:EFFECT_DAFAULT.max
  },
  start: EFFECT_DAFAULT.max,
  step: EFFECT_DAFAULT.step,
  connect: 'lower'
});
updateSlider();

form.addEventListener('change', onFormChange);
sliderEffect.noUiSlider.on('update', onSliderUpdate);

export {resetEffect};
