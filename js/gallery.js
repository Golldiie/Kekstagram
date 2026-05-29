import { generatePhotos } from './data.js';
import { renderPictures } from './thumbnails.js';
import { openBigPicture } from './big-picture.js';

const photos = generatePhotos();
renderPictures(photos, openBigPicture);

