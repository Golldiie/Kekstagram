const imagePreview = document.querySelector('.img-upload__preview img');
const effects = document.querySelectorAll('.effects__radio');
const scaleValue = document.querySelector('.scale__control--value');
const minValue = 25;
const maxValue = 100;
const scaleStep = 25;
const scaleLowerButton = document.querySelector('.scale__control--smaller');
const scaleUpperButton = document.querySelector('.scale__control--bigger');

const updateScale = (value) => {
  scaleValue.value = `${value}%`;
  imagePreview.style.transform = `scale(${value / 100})`;
};

const makeSizeSmaller = function(){
  const currentValue = parseInt(scaleValue.value, 10);

  if(scaleValue.value > minValue){
    updateScale(currentValue - scaleStep);
  }
};

const makeSizeBigger = function(){
  const currentValue = parseInt(scaleValue.value, 10);

  if(scaleValue.value < maxValue){
    updateScale(currentValue + scaleStep);
  }
};

scaleLowerButton.addEventListener('click', makeSizeSmaller);
scaleUpperButton.addEventListener('click', makeSizeBigger);

export { updateScale };
