const previewImage = document.querySelector('.img-upload__preview img');

const sliderContainer = document.querySelector('.img-upload__effect-level');
const effectSlider = sliderContainer.querySelector('.effect-level__slider');
const effectValue = sliderContainer.querySelector('.effect-level__value');

const effects = document.querySelectorAll('.effects__radio');

const sliderSettings = {
  chrome:{
    min: 0,
    max: 1,
    filter: 'grayscale',
    step: 0.1,
    unit: '',
    start: 1
  },
  sepia:{
    min: 0,
    max: 1,
    filter: 'sepia',
    step: 0.1,
    unit: '',
    start: 1
  },
  marvin:{
    min: 0,
    max: 100,
    filter: 'invert',
    step: 1,
    unit: '%',
    start: 100
  },
  phobos:{
    min: 0,
    max: 3,
    filter: 'blur',
    step: 0.1,
    unit: 'px',
    start: 3
  },
  heat:{
    min: 1,
    max: 3,
    filter: 'brightness',
    step: 0.1,
    unit: '',
    start: 3
  }
};

let currentEffect = 'none';

noUiSlider.create(effectSlider, {
  start: 100,
  connect: 'lower',
  range: {
    min: 0,
    max: 100
  },
  step: 1
});

sliderContainer.style.display = 'none';
effectValue.value = '100';
previewImage.style.filter = '';

effectSlider.noUiSlider.on('update', () => {
  const value = effectSlider.noUiSlider.get();

  effectValue.value = value;

  if (currentEffect === 'none') {
    previewImage.style.filter = '';
    return;
  }

  const settings = sliderSettings[currentEffect];
  previewImage.style.filter = `${settings.filter}(${value}${settings.unit})`;
});


for(const effect of effects){
  effect.addEventListener('change', (evt) =>{
    currentEffect = evt.target.value;

    if(currentEffect === 'none'){
      sliderContainer.style.display = 'none';
      previewImage.style.filter = '';
      effectValue.value = 100;
      return;
    }
    const settings = sliderSettings[currentEffect];

    sliderContainer.style.display = '';
    effectSlider.noUiSlider.updateOptions({
      range:{
        min: settings.min,
        max: settings.max
      },
      step: settings.step,
      start: settings.start
    });

    effectSlider.noUiSlider.set(settings.start);
    previewImage.style.filter = `${settings.filter}(${settings.start}${settings.unit})`;
  });
}


