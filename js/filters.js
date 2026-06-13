import { openBigPicture } from './big-picture';
import { renderPictures, clearPictures } from './thumbnails';
import { getRandomArrayElement, debounce } from './util';

const filtersSection = document.querySelector('.img-filters');
const filtersForm = filtersSection.querySelector('.img-filters__form');

const filterDefaultButton = document.querySelector('#filter-default');
const filterRandomButton = document.querySelector('#filter-random');
const filterDiscussedButton = document.querySelector('#filter-discussed');

const TIMEOUT_DELAY = 500;

const showFilters = function(){
  filtersSection.classList.remove('img-filters--inactive');
};

const setActiveButton = (button) => {
  const activeButton = filtersForm.querySelector('.img-filters__button--active');

  activeButton.classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');
};

const getRandomPhotos = (photos) => {
  const randomPhotos = new Set();

  while (randomPhotos.size < Math.min(10, photos.length)) {
    randomPhotos.add(getRandomArrayElement(photos));
  }

  return [...randomPhotos];
};

const debouncedRender = debounce((photos) => {
  clearPictures();
  renderPictures(photos, openBigPicture);
}, TIMEOUT_DELAY);

const initFilters = (photos) => {
  filterDefaultButton.addEventListener('click', () => {
    setActiveButton(filterDefaultButton);
    debouncedRender(photos);
  });

  filterRandomButton.addEventListener('click', () => {
    setActiveButton(filterRandomButton);
    debouncedRender(getRandomPhotos(photos));
  });

  filterDiscussedButton.addEventListener('click', () => {
    const discussedPhotos = photos
      .slice()
      .sort((photoA, photoB) => photoB.comments.length - photoA.comments.length);

    setActiveButton(filterDiscussedButton);
    debouncedRender(discussedPhotos);
  });
};

export { showFilters, initFilters };
