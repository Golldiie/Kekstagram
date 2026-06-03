const imageUploadForm = document.querySelector('.img-upload__form');
const hashtagInput = imageUploadForm.querySelector('#hashtags');
const descriptionInput = imageUploadForm.querySelector('#description');

let hashtagErrorMessage = '';
let descriptionErrorMessage = '';

const pristine = new Pristine(imageUploadForm,{
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error-text'
});

const validateHashtags = function(value){
  const tags = value.trim().toLowerCase().split(/\s+/).filter(Boolean);

  if (!value.trim()) {
    return true;
  }

  if(tags.length > 5){
    hashtagErrorMessage = 'Нельзя больше 5 хэштегов';
    return false;
  }
  const hashtag = /^#[a-zф-яё0-9]{1,19}$/i;

  for(let i = 0; i < tags.length; i++){
    if(!hashtag.test(tags[i])){
      hashtagErrorMessage = 'Мне такие символы не нравятся!';
      return false;
    }

    if(tags.indexOf(tags[i]) !== i){
      hashtagErrorMessage = 'А где уникальность?';
      return false;
    }
  }
  return true;
};

const validateDescription = function(value){
  if(value.length > 140){
    descriptionErrorMessage = 'Мяу...Давай короче';
    return false;
  }
  return true;
};

pristine.addValidator(
  hashtagInput,
  validateHashtags,
  () => hashtagErrorMessage
);

pristine.addValidator(
  descriptionInput,
  validateDescription,
  () => descriptionErrorMessage
);

const stopEscPropagation = function(evt){
  if(evt.key === 'Escape'){
    evt.stopPropagation();
  }
};

hashtagInput.addEventListener('keydown', stopEscPropagation);
descriptionInput.addEventListener('keydown', stopEscPropagation);

const setUserFormSubmit = (onSuccess) => {
  imageUploadForm.addEventListener('submit',(evt)=>{
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      const formData = new FormData(evt.target);

      fetch('https://32.javascript.htmlacademy.pro/kekstagram',
        {
          method: 'POST',
          body: formData,
        },
      ).then(onSuccess)
        .catch((err) => {

        });
    }
  });
};

export { setUserFormSubmit };

