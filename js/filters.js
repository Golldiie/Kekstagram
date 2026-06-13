import { openBigPicture } from './big-picture';
import { renderPictures, clearPictures } from './thumbnails';
import { getRandomArrayElement } from './util';

const filtersSection = document.querySelector('.img-filters');

const filterDefaultButton = document.querySelector('#filter-default');
const filterRandomButton = document.querySelector('#filter-random');
const filterDiscussedButton = document.querySelector('#filter-discussed');


const showFilters = function(){
  filtersSection.classList.remove('img-filters--inactive');
};


const initFilters = function(photos){
  filterDefaultButton.addEventListener('click', () => {
    clearPictures();
    renderPictures(photos, openBigPicture);
  });

  filterRandomButton.addEventListener('click', () => {
    const random = new Set();

    while (random.size < 10) {
      random.add(getRandomArrayElement(photos));
    }

    clearPictures();
    renderPictures([...random], openBigPicture);
  });

  filterDiscussedButton.addEventListener('click', () => {
    const discussed = photos
      .slice()
      .sort((photoA, photoB) => photoB.comments.length - photoA.comments.length);

    clearPictures();
    renderPictures(discussed, openBigPicture);
  });
};

export { showFilters, initFilters };
