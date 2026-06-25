import { getPhotos } from './api.js';
import { renderPictures } from './thumbnails.js';
import { openBigPicture } from './big-picture.js';
import { showFilters, initFilters } from './filters.js';

const photos = await getPhotos();

renderPictures(photos, openBigPicture);

showFilters();
initFilters(photos);
