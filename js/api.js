import { renderPictures } from './thumbnails';
import { openBigPicture } from './big-picture';
import { closeUploadModal } from './img-upload';
import { setUserFormSubmit } from './form-validation';

fetch('https://32.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((thumbnails) => {
    renderPictures(thumbnails, openBigPicture);
  });

setUserFormSubmit(closeUploadModal);

