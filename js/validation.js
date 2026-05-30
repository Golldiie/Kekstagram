const imageUploadForm = document.querySelector('.img-upload__form');
const hashtagInput = imageUploadForm.querySelector('#hashtags');
const descriptionInput = imageUploadForm.querySelector('#description');

const pristine = new Pristine(imageUploadForm,{
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error-text'
});

const validateHashtags = function(value){
  const tags = value.trim().split(/\s+/).filter(Boolean);

  if(tags.length > 5){
    return false;
  }
  const hashtag = /^#[a-zф-яё0-9]{1,19}$/i;

  for(let i = 0; i < tags.length; i++){
    if(!hashtag.test(tags[i])){
      return false;
    }

    if(tags.indexOf(tags[i]) !== i){
      return false;
    }
  }
  return true;
};

pristine.addValidator(
  hashtagInput,
  validateHashtags,
  'от 1 до 20 буковок (без спецсимволов, пробелов, эмодзи)'
);

const validateDescription = function(value){
  return value.length <= 140;
};

pristine.addValidator(
  descriptionInput,
  validateDescription,
  'до 140 буковок!'
);

const stopEscPropagation = function(evt){
  if(evt.key === 'Escape'){
    evt.stopPropagation();
  }
};

hashtagInput.addEventListener('keydown', stopEscPropagation);
descriptionInput.addEventListener('keydown', stopEscPropagation);

imageUploadForm.addEventListener('submit',(evt)=>{
  evt.preventDefault();
  pristine.validate();
});
