const imageUploadForm = document.querySelector('.img-upload__form');
const sendFormButton = document.querySelector('.img-upload__submit');
const pristine = new Pristine(imageUploadForm,{
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error-text'
});

pristine.addValidator(imageUploadForm.querySelector('#hashtags'));

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

imageUploadForm.addEventListener('submit',(evt)=>{
  evt.preventDefault();
  pristine.validate();
});
