import { getPhotos } from './api';
import { renderPictures } from './thumbnails';
import { openBigPicture } from './big-picture';
import { showFilters } from './filters';

const photos = await getPhotos();

renderPictures(photos, openBigPicture);

showFilters();
