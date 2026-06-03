import { renderPictures } from './thumbnails';
import { openBigPicture } from './big-picture';
import { closeUploadModal } from './img-upload';
import { setUserFormSubmit } from './form-validation';
import { showError } from './message';

const DATA_ERROR_SHOW_TIME = 5000;

fetch('https://32.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
  })
  .then((thumbnails) => {
    renderPictures(thumbnails, openBigPicture);
  })
  .catch(() => {
    showError('data-error', DATA_ERROR_SHOW_TIME);
  });

setUserFormSubmit(closeUploadModal);

