const imagePreview = document.querySelector('.img-upload__preview img');
const form = document.querySelector('.img-upload__form');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const effectLevelValueElement = sliderContainer.querySelector('.effect-level__value');
const sliderEffect = sliderContainer.querySelector('.effect-level__slider');

const EFFECTS = {
  'none': {
    style: 'none',
    unit: '',
    min: 1,
    max: 100,
    start: 100,
    step: 1
  },

  'chrome': {
    style: 'grayscale',
    unit: '',
    min: 0,
    max: 1,
    start: 100,
    step: 0.1
  },

  'sepia': {
    style: 'sepia',
    unit: '',
    min: 0,
    max: 1,
    start: 1,
    step: 0.1
  },

  'marvin': {
    style: 'invert',
    unit: '%',
    min: 0,
    max: 100,
    start: 100,
    step: 1
  },

  'phobos': {
    style: 'blur',
    unit: 'px',
    min: 0,
    max: 3,
    start: 3,
    step: 0.1
  },

  'heat': {
    style: 'brightness',
    unit: '',
    min: 1,
    max: 3,
    start: 3,
    step: 0.1
  }
};

const DEFAULT_EFFECT = 'none';

let selectedEffect = EFFECTS.none;

const applyEffectClass = (effectName) => {
  const effectNames = Object.keys(EFFECTS);
  const effectClasses = effectNames.map((className) => `effects__preview--${className}`);

  imagePreview.classList.remove(...effectClasses);
  imagePreview.classList.add(`effects__preview--${effectName}`);
};

const loadEffect = (effectName) => {
  sliderEffect.classList.remove('hidden');
  //sliderContainer.style.display = 'block';
  selectedEffect = EFFECTS[effectName];

  sliderEffect.noUiSlider.updateOptions({
    range: {
      min: selectedEffect.min,
      max: selectedEffect.max
    },
    step: selectedEffect.step,
    start: selectedEffect.start
  });

  applyEffectClass(effectName);

  // if (DEFAULT_EFFECT) {
  //   sliderEffect.classList.add('hidden');
  //   sliderContainer.style.display = 'none';
  // }
};

const onEffectValueUpdate = () => {
  if (selectedEffect.style === DEFAULT_EFFECT) {
    sliderContainer.classList.add('hidden');
    //sliderContainer.style.display = 'none';
    imagePreview.style.filter = 'none';
  } else {
    sliderContainer.classList.remove('hidden');
    //sliderContainer.style.display = 'block';
    effectLevelValueElement.value = sliderEffect.noUiSlider.get();
    imagePreview.style.filter = `${selectedEffect.style}(${effectLevelValueElement.value}${selectedEffect.unit})`;
  }
};

// const resetEffect = () => {
//   selectedEffect = DEFAULT_EFFECT;
//   onEffectValueUpdate();
// };

const onTargetEffectChange = (evt) => {
  loadEffect(evt.target.value);
};

noUiSlider.create(sliderEffect, {
  range: {
    min: 1,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower'
});

onEffectValueUpdate();
form.addEventListener('change', onTargetEffectChange);
sliderEffect.noUiSlider.on('update', onEffectValueUpdate);


// const destroySlider = () => {
//   sliderEffect.noUiSlider.off('update');
//   sliderEffect.noUiSlider.destroy();

//   form.removeEventListener('change', onTargetEffectChange);
// };

//export {resetEffect};
