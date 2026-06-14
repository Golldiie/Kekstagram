import { updateScale, resetScaleButtons } from './change-scale';
import { resetFilters } from './effects-slider';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const imageUploadInput = document.querySelector('#upload-file');
const imageUploadModal = document.querySelector('.img-upload__overlay');
const closeUploadButton = document.querySelector('.img-upload__cancel');
const imageUploadForm = document.querySelector('.img-upload__form');
const imagePreview = document.querySelector('.img-upload__preview img');
const effectsPreviews = document.querySelectorAll('.effects__preview');

const openUploadModal = function(){
  document.body.classList.add('modal-open');
  imageUploadModal.classList.remove('hidden');

  const file = imageUploadInput.files[0];

  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (!matches) {
    return;
  }

  const imageUrl = URL.createObjectURL(file);

  imagePreview.src = imageUrl;

  updateScale(100);
  effectsPreviews.forEach((effectPreview) => {
    effectPreview.style.backgroundImage = `url(${imageUrl})`;
  });
};

const closeUploadModal = function(){
  document.body.classList.remove('modal-open');
  imageUploadModal.classList.add('hidden');
  imageUploadInput.innerHTML = '';
  imagePreview.src = '';
  imageUploadForm.reset();
};

imageUploadInput.addEventListener('change', openUploadModal);

const onDocumentKeydown = (evt) => {
  if(evt.key === 'Escape' && !imageUploadModal.classList.contains('hidden')){
    evt.preventDefault();
    closeUploadModal();
  }
};

document.addEventListener('keydown', onDocumentKeydown);

closeUploadButton.addEventListener('click', () => {
  closeUploadModal();
  resetScaleButtons();
  resetFilters();
  document.removeEventListener('keydown', onDocumentKeydown);
});

export { openUploadModal, closeUploadModal };

