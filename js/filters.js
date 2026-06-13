import { openBigPicture } from './big-picture';
import { renderPictures, clearPictures } from './thumbnails';
import { getRandomArrayElement, debounceRender } from './util';

const filtersSection = document.querySelector('.img-filters');

const filterDefaultButton = document.querySelector('#filter-default');
const filterRandomButton = document.querySelector('#filter-random');
const filterDiscussedButton = document.querySelector('#filter-discussed');

const TIMOUT_DELAY = 500;

const showFilters = function(){
  filtersSection.classList.remove('img-filters--inactive');
};


const initFilters = function(photos){
  filterDefaultButton.addEventListener('click', () => {
    clearPictures();
    debounceRender(renderPictures(photos, openBigPicture), TIMOUT_DELAY);
  });

  filterRandomButton.addEventListener('click', () => {
    const random = new Set();

    while (random.size < 10) {
      random.add(getRandomArrayElement(photos));
    }

    clearPictures();
    debounceRender(renderPictures([...random], openBigPicture), TIMOUT_DELAY);
  });

  filterDiscussedButton.addEventListener('click', () => {
    const discussed = photos
      .slice()
      .sort((photoA, photoB) => photoB.comments.length - photoA.comments.length);

    clearPictures();
    debounceRender(renderPictures(discussed, openBigPicture), TIMOUT_DELAY);
  });
};

export { showFilters, initFilters };
