import nouislider from '../vendor/nouislider/nouislider';

const sliderContainer = document.querySelector('.img-upload__effect-level');
const effectSlider = sliderContainer.querySelector('.effect-level__slider');
const effectValue = sliderContainer.querySelector('.effect-level__value');

const effects = document.querySelectorAll('.effects__radio');

const effectsSettings = {
  chrome:{
    rangeMin: 0,
    rangeMax: 1,
    filter: 'grayscale',
    step: 0.1,
    unit: '',
    start: 1
  },
  sepia:{
    rangeMin: 0,
    rangeMax: 1,
    filter: 'sepia',
    step: 0.1,
    unit: '',
    start: 1
  },
  marvin:{
    rangeMin: 0,
    rangeMax: 100,
    filter: 'invert',
    step: 1,
    unit: '%',
    start: 100
  },
  phobos:{
    rangeMin: 0,
    rangeMax: 3,
    filter: 'blur',
    step: 0.1,
    unit: 'px',
    start: 3
  },
  heat:{
    rangeMin: 1,
    rangeMax: 3,
    filter: 'brightness',
    step: 0.1,
    unit: '',
    start: 3
  }};


