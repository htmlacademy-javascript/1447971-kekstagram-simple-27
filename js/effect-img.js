const imagePreview = document.querySelector('.img-upload__preview img');
const form = document.querySelector('.img-upload__form');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const effectLevelValueElement = sliderContainer.querySelector('.effect-level__value');
const sliderEffect = sliderContainer.querySelector('.effect-level__slider');

const EFFECTS = {
  'none': {
    style: 'none',
    unit: '',
    options: {
      range: {
        min: 1,
        max: 100,
      },
      start: 100,
      step: 1
    }
  },

  'chrome': {
    style: 'grayscale',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1
    }
  },

  'sepia': {
    style: 'sepia',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1
    }
  },

  'marvin': {
    style: 'invert',
    unit: '%',
    options: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1
    }
  },

  'phobos': {
    style: 'blur',
    unit: 'px',
    options: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1
    }
  },

  'heat': {
    style: 'brightness',
    unit: '',
    options: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1
    }
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
  selectedEffect = EFFECTS[effectName];

  sliderEffect.noUiSlider.updateOptions(selectedEffect.options);

  applyEffectClass(effectName);
};

const onEffectValueUpdate = () => {
  if (selectedEffect.style === DEFAULT_EFFECT) {
    sliderContainer.classList.add('hidden');

    imagePreview.style.filter = '';
  } else {
    sliderContainer.classList.remove('hidden');

    effectLevelValueElement.value = sliderEffect.noUiSlider.get();
    imagePreview.style.filter = `${selectedEffect.style}(${effectLevelValueElement.value}${selectedEffect.unit})`;
  }
};

const onTargetEffectChange = (evt) => {
  loadEffect(evt.target.value);
};

const createSlider = () => {
  noUiSlider.create(sliderEffect, {
    range: {
      min: 1,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower'
  });

  loadEffect(DEFAULT_EFFECT);

  sliderEffect.noUiSlider.on('update', onEffectValueUpdate);
  form.addEventListener('change', onTargetEffectChange);
};

const destroySlider = () => {
  sliderEffect.noUiSlider.off('update');
  sliderEffect.noUiSlider.destroy();

  form.removeEventListener('change', onTargetEffectChange);
};

export {createSlider, destroySlider};
