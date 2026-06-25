import { closeUploadModal } from './img-upload.js';
import { setUserFormSubmit } from './form-validation.js';
import { showError } from './message';

const DATA_ERROR_SHOW_TIME = 5000;


const getPhotos = async() => {
  try{
    const response = await fetch('https://32.javascript.htmlacademy.pro/kekstagram/data');

    if(!response.ok){
      throw new Error(`HTTP error: ${response.status}`);
    }
    return await response.json();
  } catch {
    showError('data error', DATA_ERROR_SHOW_TIME);
  }
};

setUserFormSubmit(closeUploadModal);

export { getPhotos };

